#!/usr/bin/env node

const octane = require('octane-node')(process.env.OCTANE_API_KEY, {
    host: process.env.OCTANE_API_HOST,
    port: parseInt(process.env.OCTANE_API_PORT || ''),
    protocol: process.env.OCTANE_API_PROTOCOL,
});

if (process.argv.length < 3) {
    console.log('Usage: ./retrieve-customer.js [customer_name]');
    process.exit(1);
}
const n = process.argv[2];

octane.customers.retrieve(n)
    .then(customer => console.log(customer))
    .catch(error => console.error(error));
