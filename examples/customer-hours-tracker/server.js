#!/usr/bin/env node

import express from 'express'
import Octane from 'octane-node'

// Instantiate the Octane API client
const octane = new Octane(process.env.OCTANE_API_KEY)

// Application settings and defaults
const port          = process.env.APP_PORT               || 3000
const bind          = process.env.APP_BIND               || '127.0.0.1'
const meterName     = process.env.OCTANE_METER_NAME      || 'hours'
const pricePlanName = process.env.OCTANE_PRICE_PLAN_NAME || 'standard'
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
            error.json()
                .then(data => {
                    console.error(data)
                    res.status(error.status)
                    res.send(data)
                })
        })
})

app.post('/api/customers', (req, res) => {
    const name = req.body['name']
    console.log(`[octane] Attempting to create new customer "${name}"`)
    const customer = {
        name: name,
        measurementMappings: [
            {
                label: 'customer_name',
                valueRegex: name,
            },
        ],
    }
    octane.customers.create(customer)
        .then(_ => {
            console.log(`[octane] Customer "${name}" successfully created`)
            console.log(`[octane] Attempting to subscribe customer "${name}" `+
                        `to price plan "${pricePlanName}"`)
            const subscription = {
                pricePlanName: pricePlanName,
            }
            octane.customers.createSubscription(name, subscription)
                .then(_ => {
                    console.log(`[octane] Successfully subscribed customer "${name}" `+
                                `to price plan "${pricePlanName}"`)
                    res.status(201)
                    res.send({
                        code: 201,
                        message: 'success',
                    })
                })
                .catch(error => {
                    console.error(`[octane] Error subscribing customer "${name}" `+
                                  `to price plan "${pricePlanName}"`)
                    error.json()
                        .then(data => {
                            console.error(data)
                            res.status(error.status)
                            res.send(data)
                        })
                })
        })
        .catch(error => {
            console.error(`[octane] Error creating customer "${name}"`)
            error.json()
                .then(data => {
                    console.error(data)
                    res.status(error.status)
                    res.send(data)
                })
        })
})

app.delete('/api/customers/:name', (req, res) => {
    const name = req.params['name']
    console.log(`[octane] Attempting to unsubscribe customer "${name}" `+
                `from price plan "${pricePlanName}"`)
    octane.customers.deleteSubscription(name, {})
        .then(_ => {
            console.log(`[octane] Customer "${name}" successfully unsubscribed`+
                        `from price plan "${pricePlanName}"`)
            console.log(`[octane] Attempting to delete customer "${name}"`)
            octane.customers.delete(name)
                .then(_ => {
                    console.log(`[octane] Customer "${name}" successfully deleted`)
                    res.status(200)
                    res.send({
                        code: 200,
                        message: 'success',
                    })
                })
                .catch(error => {
                    console.error(`[octane] Error deleting customer "${name}"`)
                    error.json()
                        .then(data => {
                            console.error(data)
                            res.status(error.status)
                            res.send(data)
                        })
                })
        })
        .catch(error => {
            console.error(`[octane] Error unsubscribing customer "${name}"` +
                          `from price plan "${pricePlanName}"`)
            error.json()
                .then(data => {
                    console.error(data)
                    res.status(error.status)
                    res.send(data)
                })
        })
})

app.post('/api/hours', (req, res) => {
    const name = req.body['name']
    const hours = req.body['hours']
    console.log(`[octane] Attempting to create measurement for customer "${name}"`)
    const measurement = {
        meterName: meterName,
        value: parseInt(hours),
        labels: {
            'customer_name': name,
        },
    }
    octane.measurements.create(measurement)
        .then(_ => {
            console.log(`[octane] Measurement for customer "${name}" successfully created`)
            res.status(201)
            res.send({
                code: 201,
                message: 'success',
            })
        })
        .catch(error => {
            console.error(`[octane] Error creating measurement for customer "${name}"`)
            error.json()
                .then(data => {
                    console.error(data)
                    res.status(error.status)
                    res.send(data)
                })
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
                    unitName: 'hour',
                    isIncremental: true,
                    expectedLabels: ['customer_name'],
                }
                octane.meters.create(meter)
                    .then(_ => {
                        console.log(`[octane] Meter "${meterName}" successfully created`)
                        resolve()
                    })
                    .catch(error => {
                        error.json()
                            .then(data => {
                                console.error(data)
                                reject(new Error('Unable to create meter'))
                            })
                    })
            })
    })
}

const checkOctaneResourcePricePlan = () => {
    return new Promise((resolve, reject) => {
        console.log(`[octane] Checking if price plan "${pricePlanName}" exists`)
        octane.pricePlans.retrieve(pricePlanName)
            .then(_ => {
                console.log(`[octane] Price plan "${pricePlanName}" already exists`)
                resolve()
            })
            .catch(error => {
                if (error.status === 401) {
                    reject(new Error('Unauthorized, please check your OCTANE_API_KEY.'))
                }
                console.log(`[octane] Price plan "${pricePlanName}" does not exist, creating`)
                const rate = parseInt(pricePlanRate) * 100 // convert dollars to cents
                const pricePlan = {
                    name: pricePlanName,
                    period: 'month',
                    meteredComponents: [
                        {
                            meterName: meterName,
                            priceScheme: {
                                prices: [
                                    {
                                        price: rate,
                                    },
                                ],
                                schemeType: 'FLAT',
                                unitName: 'hour',
                            },
                        },
                    ],
                }
                octane.pricePlans.create(pricePlan)
                    .then(_ => {
                        console.log(`[octane] Price plan "${pricePlanName}" successfully created`)
                        resolve()
                    })
                    .catch(error => {
                        error.json()
                            .then(data => {
                                console.error(data)
                                reject(new Error('Unable to create price plan'))
                            })
                    })
            })
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
