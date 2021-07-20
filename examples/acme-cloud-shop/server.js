#!/usr/bin/env node

import express from 'express'
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

const app = express()
app.use(express.static('public'))
app.use(express.json())

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
