import { Measurement, MeasurementsApi } from '../codegen/api';
import { Configuration as APIConfiguration } from '../codegen/configuration';

class Measurements {
  private api: MeasurementsApi;

  constructor(apiConfig: APIConfiguration) {
    this.api = new MeasurementsApi(apiConfig);
  }

  public create(body: Measurement, options?: any) {
    return this.api.measurementsPost(body, options);
  }
}

export { Measurements };
