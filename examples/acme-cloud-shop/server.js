#!/usr/bin/env node

import express from 'express'
import cookieSession from 'cookie-session'
import generate from 'project-name-generator'
import Octane from 'octane-node'

// Instantiate the Octane API client
const octane = new Octane(process.env.OCTANE_API_KEY)

// Application settings and defaults
const port               = process.env.APP_PORT                    || 3000
const bind               = process.env.APP_BIND                    || '127.0.0.1'
const pricePlanName      = process.env.OCTANE_PRICE_PLAN_NAME      || 'acmecloud'
const meterNameStorage   = process.env.OCTANE_METER_NAME_STORAGE   || 'storage'
const meterNameBandwidth = process.env.OCTANE_METER_NAME_BANDWIDTH || 'bandwidth'
const meterNameMachines  = process.env.OCTANE_METER_NAME_MACHINES  || 'machines'
const meterRateStorage   = process.env.OCTANE_METER_RATE_STORAGE   || 2
const meterRateBandwidth = process.env.OCTANE_METER_RATE_BANDWIDTH || 5
const meterRateMachines  = process.env.OCTANE_METER_RATE_MACHINES  || 10

// The frontend sends us generic resource names,
// which we convert to meter names
const resourceMeterMap = {
    'storage': meterNameStorage,
    'bandwidth': meterNameBandwidth,
    'machines': meterNameMachines,
}

const app = express()
app.use(express.static('public'))
app.use(express.json())
app.use(cookieSession({
    name: 'acme-cloud-shop',
    keys: ['username'],
    maxAge: 24 * 60 * 60 * 1000 // 24 hours
}))

app.get('/api/whoami', (req, res) => {
    if (req.session.username) {
        return res.send({
            code: 200,
            name: req.session.username
        })
    }

    // If no cookie, then generate a name and create the customer in Octane
    const name = generate().dashed
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
                    req.session.username = name // set the cookie
                    res.status(201)
                    res.send({
                        code: 201,
                        name: name,
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

app.post('/api/resources', (req, res) => {
    if (!req.session.username) {
        return res.send({
            code: 403,
            message: 'No session, please refresh'
        })
    }

    const resource = req.body['resource']
    if (!resource in Object.keys(resourceMeterMap)) {
        return res.send({
            code: 400,
            message: 'Invalid resource provided'
        })
    }
    const meterName = resourceMeterMap[resource]

    const value = req.body['value']
    console.log('[octane] Attempting to create measurement ' +
        `for customer "${req.session.username}" ` +
        `for meter ${meterName}`)

    const measurement = {
        meterName: meterName,
        value: parseInt(value),
        labels: {
            'customer_name': req.session.username,
        },
    }

    octane.measurements.create(measurement)
        .then(_ => {
            console.log(`[octane] Measurement for customer "${req.session.username}" ` +
                        `for meter "${meterName}" successfully created`)
            res.status(201)
            res.send({
                code: 201,
                message: 'success',
            })
        })
        .catch(error => {
            console.error('[octane] Error creating measurement ' +
                          `for customer "${req.session.username}" ` +
                          `for meter "${meterName}"`)
            error.json()
                .then(data => {
                    console.error(data)
                    res.status(error.status)
                    res.send(data)
                })
        })
})

const checkOctaneResourceMeter = (meter) => {
    return new Promise((resolve, reject) => {
        console.log(`[octane] Checking if meter "${meter.name}" exists`)
        octane.meters.retrieve(meter.name)
            .then(_ => {
                console.log(`[octane] Meter "${meter.name}" already exists`)
                resolve()
            })
            .catch(error => {
                if (error.status === 401) {
                    reject(new Error('Unauthorized, please check your OCTANE_API_KEY.'))
                }
                console.log(`[octane] Meter "${meter.name}" does not exist, creating`)
                octane.meters.create(meter)
                    .then(_ => {
                        console.log(`[octane] Meter "${meter.name}" successfully created`)
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

const checkOctaneResourceMeterStorage = () => {
    return checkOctaneResourceMeter({
        name: meterNameStorage,
        displayName: 'Storage in gigabytes',
        meterType: 'COUNTER',
        unitName: 'gigabyte',
        isIncremental: true,
        expectedLabels: ['customer_name'],
    })
}

const checkOctaneResourceMeterBandwidth = () => {
    return checkOctaneResourceMeter({
        name: meterNameBandwidth,
        displayName: 'Bandwidth in gigabytes',
        meterType: 'COUNTER',
        unitName: 'gigabyte',
        isIncremental: true,
        expectedLabels: ['customer_name'],
    })
}

const checkOctaneResourceMeterMachines = () => {
    return checkOctaneResourceMeter({
        name: meterNameMachines,
        displayName: 'Number of machines',
        meterType: 'COUNTER',
        isIncremental: true,
        expectedLabels: ['customer_name'],
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
                const pricePlan = {
                    name: pricePlanName,
                    period: 'month',
                    meteredComponents: [
                        {
                            meterName: meterNameStorage,
                            priceScheme: {
                                prices: [
                                    {
                                        price: parseInt(meterRateStorage) * 100,
                                    },
                                ],
                                schemeType: 'FLAT',
                                unitName: 'gigabyte',
                            },
                        },
                        {
                            meterName: meterNameBandwidth,
                            priceScheme: {
                                prices: [
                                    {
                                        price: parseInt(meterRateBandwidth) * 100,
                                    },
                                ],
                                schemeType: 'FLAT',
                                unitName: 'gigabyte',
                            },
                        },
                        {
                            meterName: meterNameMachines,
                            priceScheme: {
                                prices: [
                                    {
                                        price: parseInt(meterRateMachines) * 100,
                                    },
                                ],
                                schemeType: 'FLAT',
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
        checkOctaneResourceMeterStorage()
            .then(checkOctaneResourceMeterBandwidth)
            .then(checkOctaneResourceMeterMachines)
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
