#!/usr/bin/env node

import Octane from 'octane-node';

const octane = new Octane(process.env.OCTANE_API_KEY, {
    host: process.env.OCTANE_API_HOST,
    port: parseInt(process.env.OCTANE_API_PORT || ''),
    protocol: process.env.OCTANE_API_PROTOCOL,
});

if (process.argv.length < 3) {
    console.log('Usage: ./create-customer.js [customer_name]');
    process.exit(1);
}
const n = process.argv[2];

(async () => {
    const customer = await octane.customers.create({
        name: n,
        displayName: n,
        contactInfo: {
            'addressLine1': '21 Jump Street',
            'city': 'San Flandisco',
            'state': 'California',
            'zipcode': '12345',
            'email': 'support@example.com',
            'phone': '123-555-5555',
        },
        measurementMappings: [
            {
                'label': 'customer_id',
                'valueRegex': n,
            },
        ],
    });

    console.log(customer);
})();
