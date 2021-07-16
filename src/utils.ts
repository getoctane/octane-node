import { Measurement } from './codegen/api';

// API expects "meter_name", while the type is meterName.
// This helper augments the body with "meter_name" based on meterName
const fixMeasurementFields = (m: Measurement) => {
  // @ts-ignore
  m.meter_name = m.meterName;
};

export { fixMeasurementFields };
