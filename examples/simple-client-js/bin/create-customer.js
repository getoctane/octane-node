#!/usr/bin/env node

const octane = require('../lib/require-octane-local.js');

if (process.argv.length < 3) {
    console.log("Usage: ./create-customer.js [customer_name]");
    process.exit(1);
}
const n = process.argv[2];

octane.Customer.create({
    name: n,
    display_name: n,
    contact_info: {
        "address_line_1": "21 Jump Street",
        "city": "San Flandisco",
        "state": "California",
        "zipcode": "12345",
        "email": "support@example.com",
        "phone": "123-555-5555",
    },
    measurement_mappings: [
        {
            "label": "customer_id",
            "value_regex": n,
        },
    ],
})
    .then(customer => console.log(customer))
    .catch(error => console.error(error));
