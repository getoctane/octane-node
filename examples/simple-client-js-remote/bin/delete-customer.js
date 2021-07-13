#!/usr/bin/env node

import Octane from 'octane-node';
const octane = new Octane(process.env.OCTANE_API_KEY, {
    host: process.env.OCTANE_API_HOST,
    port: parseInt(process.env.OCTANE_API_PORT || ''),
    protocol: process.env.OCTANE_API_PROTOCOL,
});

if (process.argv.length < 3) {
    console.log('Usage: ./delete-customer.js [customer_name]');
    process.exit(1);
}
const n = process.argv[2];

octane.customers.del(n)
    .then(() => console.log('Delete success'))
    .catch(error => console.error(error));
