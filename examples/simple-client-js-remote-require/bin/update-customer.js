#!/usr/bin/env node

const octane = require('octane-node')(process.env.OCTANE_API_KEY, {
    host: process.env.OCTANE_API_HOST,
    port: parseInt(process.env.OCTANE_API_PORT || ''),
    protocol: process.env.OCTANE_API_PROTOCOL,
});

if (process.argv.length < 3) {
    console.log('Usage: ./update-customer.js [customer_name]');
    process.exit(1);
}
const n = process.argv[2];

octane.customers.update(n,{
    contactInfo: { // updating contact info only
        'addressLine1': '22 Jump Street',
        'city': 'San Flandisco',
        'state': 'California',
        'zipcode': '12345',
        'email': 'support@example.com',
        'phone': '123-555-5555',
    },
})
    .then(customer => console.log(customer))
    .catch(error => console.error(error));
