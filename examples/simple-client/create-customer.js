#!/usr/bin/env node

import * as octane from "../../build/main/lib/api.js"

if (process.argv.length < 3) {
    console.log("Usage: ./create-customer.js [customer_name]")
    process.exit(1)
}
const name = process.argv[2]

const config = {
    basePath: process.env.OCTANE_API_ENDPOINT || "https://api.cloud.getoctane.io",
    apiKey: process.env.OCTANE_API_TOKEN || "plzsetme",
}

const customersApi = new octane.CustomersApi(config)

const body = {
    name: name,
    display_name: name,
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
            "value_regex": name
        },
    ],
}

const response = await customersApi.customersPost(body)
console.log(response)
