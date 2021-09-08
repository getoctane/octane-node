import { Measurement, MeasurementsApi } from '../codegen/api';
import { Configuration as APIConfiguration } from '../codegen/configuration';

interface MeasurementInput extends Omit<Measurement, 'time'> {
  time?: Date | string;
}

/**
 * This helper augments the body with "meter_name" based on the meterName field.
 *
 * TODO: API expects "meter_name", while the generated type uses meterName.
 * This function should be deleted once the API
 */
function fixMeasurementFields({
  meterName,
  ...rest
}: Measurement): Measurement {
  return (
    meterName
      ? {
          meter_name: meterName,
          ...rest,
        }
      : {
          ...rest,
        }
  ) as Measurement;
}

/**
 * We want to be flexible about the input types we accept, but we also want to
 * hit our API with a consistent response. This function takes this SDK's
 * accepted inputs for measurements and normalizes them into the Measurement
 * type.
 */
function normalizeMeasurementInput({
  time,
  ...rest
}: MeasurementInput | Measurement): Measurement {
  let timestamp: Date | undefined;
  if (time) {
    timestamp = time instanceof Date ? time : new Date(time);
  }
  return {
    time: timestamp,
    ...rest,
  };
}

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
