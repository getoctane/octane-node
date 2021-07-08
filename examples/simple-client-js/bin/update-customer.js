#!/usr/bin/env node

const octane = require("../lib/require-octane-local.js");

if (process.argv.length < 3) {
    console.log("Usage: ./update-customer.js [customer_name]");
    process.exit(1);
}
const n = process.argv[2];

octane.customers.update(n,{
    contact_info: { // updating contact info only
        "address_line_1": "22 Jump Street",
        "city": "San Flandisco",
        "state": "California",
        "zipcode": "12345",
        "email": "support@example.com",
        "phone": "123-555-5555",
    },
})
    .then(customer => console.log(customer))
    .catch(error => console.error(error));
