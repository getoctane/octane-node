import { Measurement } from './codegen/api';

// TODO: API expects "meter_name", while the type is meterName.
// This helper augments the body with "meter_name" based
// on the meterName field.
const fixMeasurementFields = (m: Measurement) => {
  if (m.meterName) {
    // @ts-ignore
    m.meter_name = m.meterName;
    // @ts-ignore
    delete m.meterName;
  }
};

export { fixMeasurementFields };
