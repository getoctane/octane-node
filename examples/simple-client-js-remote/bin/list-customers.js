#!/usr/bin/env node

const octane = require("octane-node")(process.env.OCTANE_API_KEY, {
    host: process.env.OCTANE_API_HOST,
    port: process.env.OCTANE_API_PORT,
    protocol: process.env.OCTANE_API_PROTOCOL,
});

octane.customers.list()
    .then(customers => console.log(customers))
    .catch(error => console.error(error));
