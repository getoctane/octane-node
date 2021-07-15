#!/usr/bin/env node

import express from 'express'
import Octane from 'octane-node'

if (!process.env.OCTANE_API_KEY) {
    console.error('Must set OCTANE_API_KEY.')
    process.exit(1)
}
const octane = Octane(process.env.OCTANE_API_KEY)

const app = express()
app.use(express.static('public'))
app.use(express.json())

app.get('/api/customers', (req, res) => {
    console.log('[octane] Listing customers in account')
    octane.customers.list()
        .then(customers => {
            console.log(`[octane] Total customers: ${customers.length}`)
            res.send(customers)
        })
        .catch(error => {
            console.error(error)
            res.status(500)
            res.send('Internal server error')
        })
})

app.post('/api/customers', (req, res) => {
    const name = req.body.name
    console.log(`[octane] Attempting to create new customer "${name}"`)
    octane.customers.create({name})
        .then(_ => {
            console.log(`[octane] Customer "${name}" successfully created`)
            res.status(201)
            res.send()
        })
        .catch(error => {
            console.error(error)
            res.status(500)
            res.send('Internal server error')
        })
})

const startServer = () => {
    const port = process.env.APP_PORT || 3000
    const bind = process.env.APP_BIND || '127.0.0.1'
    app.listen(port, bind, () => {
        console.log(`[server] Listening at http://${bind}:${port}/`)
    })
}

const meterName = process.env.OCTANE_METER || 'customer-hours'
console.log(`[octane] Checking if meter "${meterName} exists`)

octane.meters.retrieve(meterName)
    .then(_ => {
        console.log(`[octane] Meter "${meterName}" already exists`)
        startServer()
    })
    .catch(error => {
        if (error.status === 401) {
            console.error('Unauthorized, please check your OCTANE_API_KEY.')
            process.exit(1)
        }
        console.log(`[octane] Meter "${meterName}" does not exist, creating`)
        const meter = {
            name: meterName,
            displayName: 'Number of hours worked',
            meterType: 'COUNTER',
            isIncremental: true,
            expectedLabels: ['customer_name'],
        };
        octane.meters.create(meter)
            .then(_ => {
                console.log(`[octane] Meter "${meterName}" successfully created`)
                startServer()
            })
            .catch(error => {
                console.error(error)
                process.exit(1)
            })
    })
