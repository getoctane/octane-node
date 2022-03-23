## 1.0.0

This release is mostly housekeeping to enable us to better release future API changes in a non-breaking way. Most changes are minor — if you're using TypeScript and you were using `octane.*` methods, the changes should be minimal.

### Updates

- The underlying OpenAPI library has been updated, which largely means improved type safety and automatic CamelCase support.
- You no longer need to run Docker to generate code if you're developing locally.
- We support TypeScript 3.6 and later.

### Breaking Changes

- We no longer support TypeScript less than 3.6.
- We no longer bundle `isometric-fetch` (since this library is server-side only). You will need to polyfill fetch manually (we recommend [`node-fetch`](https://www.npmjs.com/package/node-fetch)). There are more details in the "Getting started" section of the readme.
- `delete` methods now resolve to `Promise<void>` instead of `Promise<Request>`.
- The optional `options` parameter in API methods has been renamed to `overrides` and has been explicitly typed to be a [`RequestInit`](https://microsoft.github.io/PowerBI-JavaScript/interfaces/_node_modules_typedoc_node_modules_typescript_lib_lib_dom_d_.requestinit.html). It acts the same otherwise, so as long as you were providing `RequestInit` properties, this will behave the same. If you weren't, it's likely that your properties weren't being used.
- Requests to Octane's API are sent in `snake_case` now. Arguments are still provided and returned in `camelCase`, and our API still accepts both formats, but if you run any snapshot tests, those may need to be updated.
- We no longer provide the option to configure `camelCase` — it is always on. Similarly, the `clientConfig` parameter to the API has been removed.
