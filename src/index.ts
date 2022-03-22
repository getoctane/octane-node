import { Configuration } from './types';

import { Customers } from './resources/customers';
import { Measurements } from './resources/measurements';
import { Meters } from './resources/meters';
import { PricePlans } from './resources/priceplans';

import { Configuration as APIConfiguration } from './codegen';

const octaneDefaultHost = 'api.cloud.getoctane.io';

class Octane {
  customers: Customers;

  measurements: Measurements;

  meters: Meters;

  pricePlans: PricePlans;

  constructor(key: string, overrides?: Configuration) {
    const host = overrides?.host || octaneDefaultHost;
    const port = overrides?.port || 443;
    const protocol = overrides?.protocol || 'https';
    const clientConfig = overrides?.clientConfig ?? {};
    const apiConfig: APIConfiguration = new APIConfiguration({
      accessToken: key,
      basePath: `${protocol}://${host}:${port}`,
    });
    this.customers = new Customers(apiConfig, clientConfig);
    this.measurements = new Measurements(apiConfig, clientConfig);
    this.meters = new Meters(apiConfig, clientConfig);
    this.pricePlans = new PricePlans(apiConfig, clientConfig);
  }
}

export default Octane;

const octane = function OctaneFactory(
  key: string,
  overrides?: Configuration,
): Octane {
  return new Octane(key, overrides);
};

module.exports = octane;
module.exports.default = octane;
