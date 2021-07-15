#!/usr/bin/env node

import express from 'express'
import Octane from 'octane-node'

// Instantiate the Octane API client
const octane = Octane(process.env.OCTANE_API_KEY)

// Application settings and defaults
const port          = process.env.APP_PORT               || 3000
const bind          = process.env.APP_BIND               || '127.0.0.1'
const meterName     = process.env.OCTANE_METER_NAME      || 'customerhours'
const pricePlanName = process.env.OCTANE_PRICE_PLAN_NAME || 'customerhoursbasic'
const pricePlanRate = process.env.OCTANE_PRICE_PLAN_RATE || 30

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
            console.error(`[octane] Error listing customers in account`)
            console.error(error)
            res.status(500)
            res.send('Internal server error')
        })
})

app.post('/api/customers', (req, res) => {
    const name = req.body['name']
    console.log(`[octane] Attempting to create new customer "${name}"`)
    const customer = {
        name: name,
    }
    octane.customers.create(customer)
        .then(_ => {
            console.log(`[octane] Customer "${name}" successfully created`)
            res.status(201)
            res.send()
        })
        .catch(error => {
            console.error(`[octane] Error creating customer "${name}"`)
            console.error(error)
            res.status(500)
            res.send('Internal server error')
        })
})

app.delete('/api/customers/:name', (req, res) => {
    const name = req.params['name']
    console.log(`[octane] Attempting to delete customer "${name}"`)
    octane.customers.delete(name)
        .then(_ => {
            console.log(`[octane] Customer "${name}" successfully deleted`)
            res.status(200)
            res.send()
        })
        .catch(error => {
            console.error(`[octane] Error deleting customer "${name}"`)
            console.error(error)
            res.status(500)
            res.send('Internal server error')
        })
})

app.post('/api/hours', (req, res) => {
    const name = req.body['name']
    const hours = req.body['hours']
    console.log(`[octane] Attempting to create measurement for customer "${name}"`)
    const measurement = {
        meterName: meterName,
        value: hours,
        labels: {
            'customer_name': name,
        },
    }
    octane.measurements.create(measurement)
        .then(_ => {
            console.log(`[octane] Measurement for customer "${name}" successfully created`)
            res.status(201)
            res.send()
        })
        .catch(error => {
            console.error(`[octane] Error creating measurement for customer "${name}"`)
            console.error(error)
            res.status(500)
            res.send('Internal server error')
        })
})

const checkOctaneResourceMeter = () => {
    return new Promise((resolve, reject) => {
        console.log(`[octane] Checking if meter "${meterName}" exists`)
        octane.meters.retrieve(meterName)
            .then(_ => {
                console.log(`[octane] Meter "${meterName}" already exists`)
                resolve()
            })
            .catch(error => {
                if (error.status === 401) {
                    reject(new Error('Unauthorized, please check your OCTANE_API_KEY.'))
                }
                console.log(`[octane] Meter "${meterName}" does not exist, creating`)
                const meter = {
                    name: meterName,
                    displayName: 'Number of hours worked',
                    meterType: 'COUNTER',
                    isIncremental: true,
                    expectedLabels: ['customer_name'],
                }
                octane.meters.create(meter)
                    .then(_ => {
                        console.log(`[octane] Meter "${meterName}" successfully created`)
                        resolve()
                    })
                    .catch(reject)
            })
    })
}

const checkOctaneResourcePricePlan = () => {
    return new Promise((resolve, reject) => {
        // TODO: check for price plan
        console.log(`[octane] Checking if price plan "${pricePlanName}" exists`)
        console.log(`[octane] Price plan "${pricePlanName}" already exists`)
        resolve()
    })
}

const checkOctaneResources = () => {
    return new Promise((resolve, reject) => {
        console.log('[octane] Ensuring all required resources exist')
        checkOctaneResourceMeter()
            .then(checkOctaneResourcePricePlan)
            .then(resolve)
            .catch(reject)
    })
}

const checkOctaneApiKey = () => {
    return new Promise((resolve, reject) => {
        console.log('[octane] Checking if OCTANE_API_KEY is present in environment')
        if (!process.env.OCTANE_API_KEY) {
            reject(new Error('Must set OCTANE_API_KEY.'))
        } else {
            console.log('[octane] OCTANE_API_KEY is present in environment')
            resolve()
        }
    })
}

const check = () => {
    return new Promise((resolve, reject) => {
        checkOctaneApiKey()
            .then(checkOctaneResources)
            .then(resolve)
            .catch(reject)
    })
}

const start = () => {
    app.listen(port, bind, () => {
        console.log(`[server] Listening at http://${bind}:${port}/`)
    })
}

const crash = (error) => {
    console.error(error)
    process.exit(1)
}

// Ensure proper environment then start the server
check().then(start).catch(crash)
