# 1.0.0

This release is mostly housekeeping to enable us to better release future API changes in a non-breaking way. Most changes are minor, but we've included a detailed migration guide for the larger changes below. Updates and a full list of breaking changes are included at the bottom.

## Migration Guide

This guide will walk you through updating your code to be compatible with the biggest breaking changes introduced in v1.0.0.

### `camelCase` is always on

First off, `octane-node` no longer supports returning data formatted in `snake_case`. As such, we no longer need a configuration to enable or disable camelCase, which removed the need for the `clientConfig` config parameter.

If you previously enabled `camelCase`, you can delete that configuration altogether:

```diff
const octane = new Octane(
    process.env.OCTANE_API_KEY,
-    {
-        clientConfig: { camelCase: true }
-    }
)
```

If you previously used `snake_case` responses from our API, the easiest and most type-safe option is to wrap API responses in a library like [`snakecase-keys`](https://www.npmjs.com/package/snakecase-keys).

```ts
const camel_case_customers = await octane.customers.list();
const customers = camelCaseCustomers.map(snakecaseKeys);
```

### `octane.customers.retrieveUsage()` argument updates

The arguments to any method exposed through `octane.customers`, `octane.measurements`, `octane.meters`, and `octane.pricePlans` were largely left unchanged. There is one exception to this rule: **`octane.customers.retrieveUsage()`** now accepts one object, rather than a list of positional arguments, in order to be consistent with the rest of the SDK. This change also allows additional parameters to be added in the future without introducing breaking changes.

```diff
octane.customers.retrieveUsage(
-    customerName,
-    meterName,
-    startTime,
-    endTime,
+    {
+        customerName,
+        meterName,
+        startTime,
+        endTime
+    },
    overrides
)
```

### `options` argument is now `overrides` and has a type.

We previously allowed for a final, optional argument called `options` to be passed to any of our methods. `options` accepted properties that would be placed directly on the Request object before it went out, such as custom headers. This parameter has been renamed to `overrides` to make it a little clearer, and it has been given an explicit `RequestInit` type.

If you were using this parameter and TypeScript doesn't show any type errors, you should be good to go. If it does, there is a good chance that your parameter wasn't making it onto the request previously.

```ts
octane.meters.list({
  headers: { 'X-My-Header': 'No problem' },
  somethingMadeUp: "This probably doesn't work.",
  //  ^^^^^^^^^^^^^^^
  //  TS-ERROR: Argument of type '{ somethingMadeUp: string }' is not assignable
  //    to parameter of type 'RequestInit'.
});
```

### The generated code is very different

`octane-node` wraps an OpenAPI-generated client in a convenience layer to make it easier to use. If you directly imported anything from the `codegen/` folder, that has likely changed substantially. If you use TypeScript, those changes should be relatively easy to identify and track down. Regardless of whether or not you use TypeScript, it is worth double-checking that you are still calling the generated methods as intended.

### Other small changes

There are a bunch of minor changes that are worth reading through, but which aren't likely to impact most of our users. All of the changes are listed below under "Breaking Changes".

## Features

- There should be substantially better types, both for method arguments and for API return types.
- We now support middleware both for intercepting requests before they go out, and responses after they've returned. See the "Configuring the SDK" section in our README for more details.

## Updates

- The underlying OpenAPI library has been updated, which largely means vastly improved type safety and better, first-class camelCase support.
- We now use the bundled types in TypeScript 3.6 and later.
- You no longer need to run Docker to generate code if you're developing locally.

## Breaking Changes

- We no longer support TypeScript below v3.6.
- We no longer bundle `isometric-fetch`. `isometric-fetch` allows for the same Fetch API to be used in both the browser and the server, but since this library is intended to be used on the server, including `isometric-fetch` didn't makek sense. You will need to polyfill fetch manually (we recommend [`node-fetch`](https://www.npmjs.com/package/node-fetch)). There are more details in the "Getting started" section of the readme.
- `delete` methods now resolve to `Promise<void>` instead of `Promise<Request>`.
- The optional `options` parameter in API methods has been renamed to `overrides` and has been explicitly typed to be a [`RequestInit`](https://microsoft.github.io/PowerBI-JavaScript/interfaces/_node_modules_typedoc_node_modules_typescript_lib_lib_dom_d_.requestinit.html). It acts the same otherwise, so as long as you were providing `RequestInit` properties, this will behave the same. If you weren't, it's likely that your properties weren't being used.
- Requests to Octane's API are sent in `snake_case` now. Arguments are still provided and returned in `camelCase`, and our API still accepts both formats, but if you run any kind of snapshot tests, your snapshots may need to be updated.
- We no longer provide the option to configure `camelCase` responses — it is always on. Similarly, the `clientConfig` parameter to the API has been removed. If you'd like responses to be in `snake_case`, we recommend using a library like [`snakecase-keys`](https://www.npmjs.com/package/snakecase-keys).
