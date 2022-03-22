import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import {
  Measurement,
  MeasurementsApi,
  Configuration as APIConfiguration,
} from '../codegen';
import { BaseResource } from './base';

dayjs.extend(utc);

interface MeasurementInput extends Omit<Measurement, 'time'> {
  time?: Date | string;
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
    timestamp = time instanceof Date ? time : dayjs(time).utc(true).toDate();
  }
  return {
    time: timestamp,
    ...rest,
  };
}

class Measurements extends BaseResource {
  private api: MeasurementsApi;

  constructor(apiConfig: APIConfiguration) {
    super(apiConfig);
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
    overrides?: RequestInit,
  ): Promise<Measurement | Measurement[]> {
    if (Array.isArray(body)) {
      const measurement = body.map(normalizeMeasurementInput);
      return this.api.measurementsMultiPost({ measurement }, overrides);
    }

    const measurement = normalizeMeasurementInput(body);
    return this.api.measurementsPost({ measurement }, overrides);
  }
}

export { Measurements };
