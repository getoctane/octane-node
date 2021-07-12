#!/usr/bin/env node

import Octane from "octane-node";
const octane = new Octane.default(process.env.OCTANE_API_KEY, {
    host: process.env.OCTANE_API_HOST,
    port: parseInt(process.env.OCTANE_API_PORT || ""),
    protocol: process.env.OCTANE_API_PROTOCOL,
});

octane.customers.list()
    .then(customers => console.log(customers))
    .catch(error => console.error(error));
