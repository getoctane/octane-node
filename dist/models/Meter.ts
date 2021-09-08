/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type Meter = {
    /**
     * Unique name identifier
     */
    readonly name: string;
    /**
     * Name used for display in UI
     */
    display_name?: string;
    description?: string | null;
    /**
     * Whether measurement values are to be considered incremental (versus a running total)
     */
    is_incremental: boolean;
    readonly meter_type?: any;
    /**
     * The expected unit for the measurement values associated with this meter.
     */
    unit_name?: any;
    expected_labels?: Array<any>;
    primary_labels?: Array<any>;
}
