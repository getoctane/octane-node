import { Configuration } from './types';

import { Customers } from './resources/customers';

import { Configuration as APIConfiguration } from './codegen/configuration';

const octaneDefaultHost = 'api.cloud.getoctane.io';

/* TODO

Models:

- Vendors (do not implement)

- Meters
- Measurements
- Customers
- Priceplans
- PaymentGatewayCredential
- Billings
- Coupons

 */

class Octane {
  customers: Customers;

  constructor(key: string, overrides?: Configuration) {
    const host = overrides?.host || octaneDefaultHost;
    const port = overrides?.port || 443;
    const protocol = overrides?.protocol || 'https';
    const apiConfig: APIConfiguration = {
      apiKey: key,
      basePath: `${protocol}://${host}:${port}`,
    };
    this.customers = new Customers(apiConfig);
  }
}

export default Octane

const octane = function(key: string, overrides?: Configuration):Octane {
   return new Octane(key, overrides)
}

module.exports = octane
module.exports.default = octane
