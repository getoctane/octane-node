import { Measurement } from './codegen/api';
export interface MeasurementInput extends Omit<Measurement, 'time'> {
  time?: Date | string;
}

// TODO: API expects "meter_name", while the type is meterName.
// This helper augments the body with "meter_name" based
// on the meterName field.
export const fixMeasurementFields = ({
  meterName,
  ...rest
}: Measurement): Measurement =>
  (meterName
    ? {
        meter_name: meterName,
        ...rest,
      }
    : {
        ...rest,
      }) as Measurement;

/**
 * We want to be flexible about the input types we accept, but we also want to
 * hit our API with a consistent response. This function takes this SDK's
 * accepted inputs for measurements and normalizes them into the Measurement
 * type.
 *
 * @param measurementInput - A measurementInput object
 * @returns
 */
export function normalizeMeasurementInput({
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
