import { Configuration } from './types';

import { Customers } from './resources/customers';
import { Measurements } from './resources/measurements';
import { Meters } from './resources/meters';
import { PricePlans } from './resources/priceplans';

import { Configuration as APIConfiguration } from './codegen';

const octaneDefaultHost = 'api.cloud.getoctane.io';

class Octane {
  private apiConfig: APIConfiguration;

  customers: Customers;

  measurements: Measurements;

  meters: Meters;

  pricePlans: PricePlans;

  constructor(key: string, overrides?: Configuration) {
    const {
      host = octaneDefaultHost,
      port = 443,
      protocol = 'https',
      ...rest
    } = overrides ?? {};

    const apiConfig: APIConfiguration = new APIConfiguration({
      accessToken: key,
      basePath: `${protocol}://${host}:${port}`,
      ...rest,
    });
    this.apiConfig = apiConfig;

    this.customers = new Customers(apiConfig);
    this.measurements = new Measurements(apiConfig);
    this.meters = new Meters(apiConfig);
    this.pricePlans = new PricePlans(apiConfig);
  }

  /**
   * Get the API configuration object. Useful for calling the
   * generated API files directly.
   */
  getApiConfig(): APIConfiguration {
    return this.apiConfig;
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
