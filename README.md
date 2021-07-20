# Octane Node.js Library

[![Version](https://img.shields.io/npm/v/octane-node.svg)](https://www.npmjs.org/package/octane-node)
[![GitHub Actions status](https://github.com/getoctane/octane-node/workflows/build/badge.svg)](https://github.com/getoctane/octane-node/actions?query=workflow%3Abuild+)

[![Octane](./octane.png)](https://www.getoctane.io/)

The **[Octane](https://www.getoctane.io/)** Node.js library provides programmatic access
to the Octane API for server-side JavaScript apps.

---

- [Getting started](#getting-started)
- [Example apps](#example-apps)
- [Making API calls](#making-api-calls)
    - [Customers API](#customers-api)
        - [Example: Creating a new customer](#example-creating-a-new-customer)
        - [Example: Subscribe a customer to a price plan](#example-subscribe-a-customer-to-a-price-plan)
    - [Meters API](#meters-api)
        - [Example: Creating a new meter](#example-creating-a-new-meter)
    - [Price Plans API](#price-plans-api)
        - [Example: Creating a new price plan](#example-creating-a-new-price-plan)
    - [Measurements API](#measurements-api)
        - [Example: Sending a measurement](#example-sending-a-measurement)
- [TypeScript suppport](#typescript-support)
    - [Types example](#types-example)
- [Development](#development)
- [Contributing](#contributing)

## Getting started

First, install the package (`octane-node`) and add it to your `package.json` dependencies:

```bash
npm install octane-node --save
```

Next, obtain an API key from within the [Octane portal](http://cloud.getoctane.io/), and set it in your environment:

```shell
export OCTANE_API_KEY="<insert_octane_api_key_here>"
```

Then, from within your application, import the module using either the `require` (CommonJS) syntax:

```js
const octane = require('octane-node')(process.env.OCTANE_API_KEY);
```

or using the newer `import` (ES6) syntax:

```js
import Octane from 'octane-node';
const octane = Octane(process.env.OCTANE_API_KEY);
```

## Example apps

The following demo applications found in the [examples/](./examples/) directory display
how to use the Octane Node.js library in real-world settings:

- [customer-hours-tracker](./examples/customer-hours-tracker/) - Track hours spent working on freelance projects

## Making API calls

The `Octane` class provides programmatic access to the Octane API.

Note: Throughout several of the examples, we will reference a predefined
sample function, `crash`, which can be used to handle API errors:

```js
const crash = (errorResponse) => {
    return errorResponse.json().then(data => {
        console.error(`Code:    ${data['code']}`);
        console.error(`Status:  ${data['status']}`);
        console.error(`Message: ${data['message']}`);
    });
};
```

### Customers API

The `customers` namespace on an `Octane` class instance provides the ability to
make calls to the Octane Customers API.

#### Example: Creating a new customer

```js
const customerName = 'r2d2';

const customer = {
    name: customerName,
    measurementMappings: [{
        label: 'customer_name',
        valueRegex: customerName
    }]
};

octane.customers.create(customer).catch(crash);
```

#### Example: Subscribe a customer to a price plan

```js
const customerName = 'r2d2';

const subscription = {
    pricePlanName: 'droidplan'
};

octane.customers.createSubscription(customerName, subscription).catch(crash);
```

### Meters API

The `meters` namespace on an `Octane` class instance provides the ability to
make calls to the Octane Meters API.

#### Example: Creating a new meter

```js
const meterName = 'droidrepairs';

const meter = {
    name: meterName,
    meterType: 'COUNTER',
    isIncremental: true,
    expectedLabels: ['customer_name']
};

octane.meters.create(meter).catch(crash);
```

### Price Plans API

The `pricePlans` namespace on an `Octane` class instance provides the ability to
make calls to the Octane Price Plans API.

#### Example: Creating a new price plan

```js
const pricePlanName = 'droidplan'
const pricePlanRate = 10000; // $100.00
const meterName = 'droidrepairs';

const pricePlan = {
    name: pricePlanName,
    period: 'month',
    meteredComponents: [{
        meterName: meterName,
        priceScheme: {
            prices: [{
                price: pricePlanRate
            }],
            schemeType: 'FLAT'
        }
    }]
};

octane.pricePlans.create(pricePlan).catch(crash);
```

### Measurements API

The `measurements` namespace on an `Octane` class instance provides the ability to
make calls to the Octane Measurements API.

#### Example: Sending a measurement

```js
const meterName = 'droidrepairs';
const customerName = 'r2d2';

const measurement = {
    meterName: meterName,
    value: 1,
    labels: {
        'customer_name': customerName
    }
};

octane.measurements.create(measurement).catch(crash);
```

## TypeScript support

The library itself is written first in [TypeScript](https://www.typescriptlang.org/),
and thus, TypeScript is fully supported.

The `octane-node/types` submodule contains all of the type defintions used for
various method arguments and return values when making API requests, etc.

### Types example

Here is a full example of using types while creating a customer:

```typescript
import Octane from 'octane-node';
import {CreateCustomerArgs} from 'octane-node/types';

const octane = new Octane(process.env.OCTANE_API_KEY!);

const customerName = 'r2d2';

const customer: CreateCustomerArgs = {
    name: customerName,
    measurementMappings: [{
        label: 'customer_name',
        valueRegex: customerName
    }]
};

octane.customers.create(customer)
    .catch((errorResponse: Response) => {
        console.error(errorResponse.status);
        process.exit(1);
    });
```

## Development

In the root of this repo, download required dependencies from npm:

```shell
npm install
```

To regenerate files in `src/codegen/` from latest
Octane OpenAPI spec, run the following (requires Docker):

```shell
npm run-script codegen
```

These files should then be checked into git:

```shell
git add src/codegen/
```

To compile TypeScript to JavaScript,
creating the `build/` directory, run the following:

```shell
npm run-script build
```

## Contributing

Contributions are welcome!

Prior to submitting a 
[pull request](https://github.com/getoctane/octane-node/pulls), please
check the list of [open issues](https://github.com/getoctane/octane-node/issues).
If there is not an existing issue related to your changes, please open a
new issue to first discuss your thoughts with the project maintainers.
