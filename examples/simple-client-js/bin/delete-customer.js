#!/usr/bin/env node

const octane = require("../lib/require-octane-local.js");

if (process.argv.length < 3) {
    console.log("Usage: ./delete-customer.js [customer_name]");
    process.exit(1);
}
const n = process.argv[2];

octane.customers.del(n)
    .then(() => console.log("Delete success"))
    .catch(error => console.error(error));
