#!/usr/bin/env ts-node

import Octane from "octane-node";
const octane = new Octane(process.env.OCTANE_API_KEY || "", {
    host: process.env.OCTANE_API_HOST,
    port: parseInt(process.env.OCTANE_API_PORT || ""),
    protocol: process.env.OCTANE_API_PROTOCOL,
});
import {Customer} from "octane-node/build/main/lib/api"

octane.customers.list()
    .then((customers: Array<Customer>) => console.log(customers))
    .catch((error: Error) => console.error(error))
