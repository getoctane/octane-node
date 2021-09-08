/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type Measurement = {
    /**
     * Applies to incremental meters and resets the total current value to this new value.
     */
    reset_total?: boolean;
    /**
     * The raw value of the measurement
     */
    value: number;
    /**
     * All times are parsed as `ISO-8601` formatted, UTC-based timestamps
     */
    time?: string;
    /**
     * The unique name of the meter associated with this measurement
     */
    meter_name: string;
    /**
     * A set of key:value label pairs to supplement a measurement. Each meter defines its own set of primary and/or expected labels.
     */
    labels: Record<string, string>;
}
