import { Measurement } from './codegen/api';

// TODO: API expects "meter_name", while the type is meterName.
// This helper augments the body with "meter_name" based
// on the meterName field.
// TODO: same story for "reset_total"
const fixMeasurementFields = (m: Measurement) => {
  if (m.meterName) {
    // @ts-ignore
    m.meter_name = m.meterName;
    // @ts-ignore
    delete m.meterName;
  }

  if (m.resetTotal) {
    // @ts-ignore
    m.reset_total = m.resetTotal;
    // @ts-ignore
    delete m.resetTotal;
  }
};

export { fixMeasurementFields };
