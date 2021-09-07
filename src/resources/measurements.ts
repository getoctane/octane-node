import { Measurement, MeasurementsApi } from '../codegen/api';
import { Configuration as APIConfiguration } from '../codegen/configuration';
import { fixMeasurementFields, normalizeMeasurementInput } from '../utils';
import type { MeasurementInput } from '../utils';

class Measurements {
  private api: MeasurementsApi;

  constructor(apiConfig: APIConfiguration) {
    this.api = new MeasurementsApi(apiConfig);
  }

  /**
   * Send Measurement (one or multiple).
   */
  public create(body: Measurement): Promise<Measurement>;
  public create(body: Measurement[]): Promise<Measurement[]>;
  public create(body: MeasurementInput): Promise<Measurement>;
  public create(body: MeasurementInput[]): Promise<Measurement[]>;
  public create(
    body: MeasurementInput | MeasurementInput[],
    options?: any,
  ): Promise<Measurement> | Promise<Measurement[]> {
    if (body instanceof Array) {
      const normalizedBody = body
        .map(normalizeMeasurementInput)
        .map(fixMeasurementFields);
      return this.api.measurementsMultiPost(normalizedBody, options);
    }
    const normalizedBody = fixMeasurementFields(
      normalizeMeasurementInput(body),
    );
    return this.api.measurementsPost(normalizedBody, options);
  }
}

export { Measurements };
