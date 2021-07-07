#!/usr/bin/env ts-node

import {Customer} from "../../../src/lib/api"
const octane = require('../lib/require-octane-local')

if (process.argv.length < 3) {
    console.log("Usage: ./retrieve-customer.ts [customer_name]")
    process.exit(1)
}
const n = process.argv[2]

octane.Customer.retrieve(n)
    .then((customer: Customer) => console.log(customer))
    .catch((error: Error) => console.error(error))
