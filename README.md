# Octane Node.js Library

[![Version](https://img.shields.io/npm/v/octane-node.svg)](https://www.npmjs.org/package/octane-node)
[![GitHub Actions status](https://github.com/getoctane/octane-node/workflows/build/badge.svg)](https://github.com/getoctane/octane-node/actions?query=workflow%3Abuild+)

[![Octane](./octane.png)](https://www.getoctane.io/)

The **[Octane](https://www.getoctane.io/)** Node.js library provides programmatic access
to the Octane API for server-side JavaScript apps.

---

- [Octane Node.js Library](#octane-nodejs-library)
  - [Getting started](#getting-started)
    - [CommonJS support](#commonjs-support)
  - [Configuring the SDK](#configuring-the-sdk)
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
  - [TypeScript support](#typescript-support)
    - [Types example](#types-example)
  - [Development](#development)
  - [Contributing](#contributing)

## Getting started

First, install `octane-node` and add it to your `package.json` dependencies:

```bash
npm install octane-node --save
```

We use the `fetch` API to handle making all of our requests. If your environment doesn't have `fetch` available, you'll need to polyfill it using something like [`node-fetch`](https://www.npmjs.com/package/node-fetch):

```bash
npm install node-fetch --save
```

Next, obtain an API key from within the [Octane portal](http://cloud.getoctane.io/), and set it in your environment:

```shell
export OCTANE_API_KEY="<insert_octane_api_key_here>"
```

Then, from within your application, import the module (and optionally the `fetch` polyfill):

```js
import fetch from 'node-fetch';
import Octane from 'octane-node';
const octane = new Octane(process.env.OCTANE_API_KEY, {
  // If your fetch polyfill isn't on the global scope,
  // provide it to the SDK explicitly.
  fetchApi: fetch,
});
```

### CommonJS support

The `octane-node` library is compatible with CommonJS-style imports, but unfortunately, `node-fetch` is not by default. If you need to use CommonJS and do not have `fetch` available on the global scope, `octane-node` allows passing in any `fetch` library directly. For example, you can provide a copy of [`node-fetch` v2](https://github.com/node-fetch/node-fetch/tree/2.x#readme), which supports CommonJS-style imports:

```js
const fetch = require('node-fetch');

const octane = require('octane-node')(process.env.OCTANE_API_KEY, {
  fetchApi: fetch,
});
```

For more details on compatibility between `node-fetch` and CommonJS, [check out this section in their docs](https://github.com/node-fetch/node-fetch#commonjs).

## Configuring the SDK

The SDK accepts an optional configuration object. You can use it to point the
SDK at a different host or to enable experimental features.

```js
import Octane from 'octane-node';

// This is the full config object and its default values.
const config = {
  // 'host', 'port', and 'protocol' modify the connection to the API, although
  // it isn't likely that you'll need to set these.
  host: 'api.cloud.getoctane.io',
  port: 443,
  protocol: 'https',
  // You can override the global `fetch` or directly provide access to a
  // fetch API using `fetchApi`. The global fetch is used by default.
  fetchApi: fetch,
  // Our SDK supports middleware for intercepting requests before they go
  // out and responses before they come back.
  middlewares: [
    {
      pre: ({ fetch, url, init }) => {
        logRequest(url, init);
        return Promise.resolve({ url, init });
      },
      post: ({ fetch, url, init, response }) => {
        logResponse(response.clone());
        return Promise.resolve(response);
      },
    },
  ],
};
const octane = new Octane(process.env.OCTANE_API_KEY, config);
```

## Example apps

The following demo applications found in the [examples/](./examples/) directory display
how to use the Octane Node.js library in real-world settings:

- [antler-db-cloud-shop](examples/antler-db-cloud-shop/) - Enable your customers to self-service various cloud resources
- [customer-hours-tracker](./examples/customer-hours-tracker/) - Track hours spent working on freelance projects

## Making API calls

The `Octane` class provides programmatic access to the Octane API.

Note: Throughout several of the examples, we will reference a predefined
sample function, `crash`, which can be used to handle API errors:

```js
const crash = (errorResponse) => {
  return errorResponse.json().then((data) => {
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
const name = 'r2d2';
const displayName = 'Artoo-Detoo';

const customer = {
  name,
  displayName,
};

octane.customers.create(customer).catch(crash);
```

#### Example: Subscribe a customer to a price plan

```js
const customerName = 'r2d2';

const subscription = {
  pricePlanName: 'droidplan',
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
};

octane.meters.create(meter).catch(crash);
```

### Price Plans API

The `pricePlans` namespace on an `Octane` class instance provides the ability to
make calls to the Octane Price Plans API.

#### Example: Creating a new price plan

```js
const pricePlanName = 'droidplan';
const pricePlanRate = 10000; // $100.00
const meterName = 'droidrepairs';

const pricePlan = {
  name: pricePlanName,
  period: 'month',
  meteredComponents: [
    {
      meterName: meterName,
      priceScheme: {
        prices: [
          {
            price: pricePlanRate,
          },
        ],
        schemeType: 'FLAT',
      },
    },
  ],
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
  meterName,
  customerName,
  value: 1,
};

octane.measurements.create(measurement).catch(crash);
```

## TypeScript support

The library itself is written first in [TypeScript](https://www.typescriptlang.org/),
and thus, TypeScript is fully supported (v3.6 and later).

The `octane-node/types` submodule contains all of the type defintions used for
various method arguments and return values when making API requests, etc.

### Types example

Here is a full example of using types while creating a customer:

```typescript
import fetch from 'node-fetch';
import Octane from 'octane-node';
import { CreateCustomerArgs } from 'octane-node/types';

const octane = new Octane(process.env.OCTANE_API_KEY!);

const customerName = 'r2d2';

const customer: CreateCustomerArgs = {
  name: customerName,
  measurementMappings: [
    {
      label: 'customer_name',
      valueRegex: customerName,
    },
  ],
};

octane.customers.create(customer).catch((errorResponse: Response) => {
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
Octane OpenAPI spec, run the following:

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
