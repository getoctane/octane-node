/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type CustomerMeasurementMapping = {
    /**
     * The label key used to map measurements to customers.
     */
    label: string;
    /**
     * A regex used to match the value of the associated label key.
     */
    value_regex?: string | null;
}
