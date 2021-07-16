import { Measurement, MeasurementsApi } from '../codegen/api';
import { Configuration as APIConfiguration } from '../codegen/configuration';
import { fixMeasurementFields } from '../utils';

class Measurements {
  private api: MeasurementsApi;

  constructor(apiConfig: APIConfiguration) {
    this.api = new MeasurementsApi(apiConfig);
  }

  /**
   * Send Measurement (one or multiple).
   */
  public create(body: Measurement | Array<Measurement>, options?: any) {
    if (body instanceof Array) {
      body.map((b) => fixMeasurementFields(b));
      return this.api.measurementsMultiPost(body, options);
    }
    fixMeasurementFields(body);
    return this.api.measurementsPost(body, options);
  }
}

export { Measurements };
