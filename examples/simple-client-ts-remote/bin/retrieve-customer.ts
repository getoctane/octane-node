#!/usr/bin/env ts-node

const octane = require("octane-node")(process.env.OCTANE_API_KEY, {
    host: process.env.OCTANE_API_HOST,
    port: process.env.OCTANE_API_PORT,
    protocol: process.env.OCTANE_API_PROTOCOL,
});
import {Customer} from "octane-node/build/main/lib/api"

if (process.argv.length < 3) {
    console.log("Usage: ./retrieve-customer.ts [customer_name]")
    process.exit(1)
}
const n = process.argv[2]

octane.customers.retrieve(n)
    .then((customer: Customer) => console.log(customer))
    .catch((error: Error) => console.error(error))
