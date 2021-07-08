#!/usr/bin/env ts-node

import {Customer} from "../../../src/lib/api"
const octane = require("../lib/require-octane-local")

octane.customers.list()
    .then((customers: Array<Customer>) => console.log(customers))
    .catch((error: Error) => console.error(error))
