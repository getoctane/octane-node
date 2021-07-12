import * as octaneApi from './types';
import * as octaneConfig from './configuration';

const octaneDefaultHost = 'api.cloud.getoctane.io';

export interface Configuration {
  host?: string;
  port?: number;
  protocol?: string;
}

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

class Customers {
  private api: octaneApi.CustomersApi;

  constructor(config: octaneConfig.Configuration) {
    this.api = new octaneApi.CustomersApi(config);
  }

  public create(body: octaneApi.CreateCustomerArgs, options?: any) {
    return this.api.customersPost(body, options);
  }

  public retrieve(customerName: string, options?: any) {
    return this.api.customersCustomerNameGet(customerName, options);
  }

  public update(
    customerName: string,
    body: octaneApi.UpdateCustomerArgs,
    options?: any,
  ) {
    // NOTE: order or arguments switched here
    return this.api.customersCustomerNamePut(body, customerName, options);
  }

  public list(options?: any) {
    return this.api.customersGet(options);
  }

  public del(customerName: string, options?: any) {
    // TODO: void the response as it is inconsistent with others
    return this.api.customersCustomerNameDelete(customerName, options);
  }
}

export default class Octane {
  customers: Customers;

  constructor(key: string, overrides?: Configuration) {
    const host = overrides?.host || octaneDefaultHost;
    const port = overrides?.port || 443;
    const protocol = overrides?.protocol || 'https';
    const config: octaneConfig.Configuration = {
      apiKey: key,
      basePath: `${protocol}://${host}:${port}`,
    };
    this.customers = new Customers(config);
  }
}

// TODO: without these, is support there for people using "require" ?
// const octane = function(key: string, overrides?: Configuration):Octane {
//    return new Octane(key, overrides)
// }

// module.exports = octane
// module.exports.default = octane
