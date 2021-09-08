/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type MeterInputArgs = {
    vendor_id?: number;
    name?: string;
    meter_type?: string;
    description?: string;
    unit_name?: string;
    primary_labels?: Array<string>;
    is_incremental?: boolean;
    expected_labels?: Array<string>;
    display_name?: string;
}
