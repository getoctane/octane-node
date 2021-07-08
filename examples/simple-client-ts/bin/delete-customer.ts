#!/usr/bin/env ts-node

const octane = require("../lib/require-octane-local")

if (process.argv.length < 3) {
    console.log("Usage: ./retrieve-customer.ts [customer_name]")
    process.exit(1)
}
const n = process.argv[2]

octane.customers.del(n)
    .then(() => console.log("Delete success"))
    .catch((error: Error) => console.error(error))
