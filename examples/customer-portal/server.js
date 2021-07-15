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
            res.send('internal server error')
        })
})

const meterName = process.env.OCTANE_METER || 'customer-portal-demo'
console.log(`[octane] Checking if meter "${meterName} exists`)


const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log(`[server] Listening at http://localhost:${port}/`)
})

