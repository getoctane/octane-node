#!/usr/bin/env ts-node

import {Customer} from "../../../src/lib/api"
import Octane from "../../../src/lib/index";
const octane = new Octane(process.env.OCTANE_API_KEY || "", {
    host: process.env.OCTANE_API_HOST,
    port: parseInt(process.env.OCTANE_API_PORT || ""),
    protocol: process.env.OCTANE_API_PROTOCOL,
});

octane.customers.list()
    .then((customers: Array<Customer>) => console.log(customers))
    .catch((error: Error) => console.error(error))
