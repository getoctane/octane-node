#!/usr/bin/env node

const octane = require("../lib/require-octane-local.js");

octane.customers.list()
    .then(customers => console.log(customers))
    .catch(error => console.error(error));
