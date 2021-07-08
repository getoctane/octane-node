#!/usr/bin/env node

const octane = require("../lib/require-octane-local.js");

if (process.argv.length < 3) {
    console.log("Usage: ./retrieve-customer.js [customer_name]");
    process.exit(1);
}
const n = process.argv[2];

octane.customers.retrieve(n)
    .then(customer => console.log(customer))
    .catch(error => console.error(error));
