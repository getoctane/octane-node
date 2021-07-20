# Example: Acme Cloud Shop

This is a simple Node.js webapp that makes use
of `octane-node`.

![acme-cloud-shop](./screenshot.png)

## Background

TODO

## How it works

TODO

## How to run

Install the necessary dependencies:

```
npm install
```

Export your Octane API key:

```
 export OCTANE_API_KEY="<api_key_here>"
```

Run the server (source: [server.js](./server.js)):

```
npm start
```

The app will be available
at [http://localhost:3000/](http://localhost:3000/)

## Customization

The following environment variables can be overridden
to modify server settings, TODO, etc:

```
export APP_PORT=3000
export APP_BIND=127.0.0.1
export OCTANE_PRICE_PLAN_NAME=acmecloud
export OCTANE_METER_NAME_STORAGE=storage
export OCTANE_METER_NAME_BANDWIDTH=bandwidth
export OCTANE_METER_NAME_MACHINES=machines
export OCTANE_METER_RATE_STORAGE=2
export OCTANE_METER_RATE_BANDWIDTH=5
export OCTANE_METER_RATE_MACHINES=10
```
