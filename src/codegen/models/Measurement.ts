/* tslint:disable */
/* eslint-disable */
/**
 * Octane API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0.1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface Measurement
 */
export interface Measurement {
    /**
     * The name of the customer to associate the measurement with.
     * @type {string}
     * @memberof Measurement
     */
    customerName?: string;
    /**
     * A set of key:value label pairs to supplement a measurement. Each meter defines its own set of primary and/or expected labels.
     * @type {{ [key: string]: string; }}
     * @memberof Measurement
     */
    labels?: { [key: string]: string; };
    /**
     * The unique name of the meter associated with this measurement
     * @type {string}
     * @memberof Measurement
     */
    meterName: string;
    /**
     * Applies to incremental meters and resets the total current value to this new value.
     * @type {boolean}
     * @memberof Measurement
     */
    resetTotal?: boolean;
    /**
     * All times are parsed as `ISO-8601` formatted, UTC-based timestamps
     * @type {Date}
     * @memberof Measurement
     */
    time?: Date;
    /**
     * The raw value of the measurement
     * @type {number}
     * @memberof Measurement
     */
    value: number;
}

export function MeasurementFromJSON(json: any): Measurement {
    return MeasurementFromJSONTyped(json, false);
}

export function MeasurementFromJSONTyped(json: any, ignoreDiscriminator: boolean): Measurement {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'customerName': !exists(json, 'customer_name') ? undefined : json['customer_name'],
        'labels': !exists(json, 'labels') ? undefined : json['labels'],
        'meterName': json['meter_name'],
        'resetTotal': !exists(json, 'reset_total') ? undefined : json['reset_total'],
        'time': !exists(json, 'time') ? undefined : (new Date(json['time'])),
        'value': json['value'],
    };
}

export function MeasurementToJSON(value?: Measurement | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'customer_name': value.customerName,
        'labels': value.labels,
        'meter_name': value.meterName,
        'reset_total': value.resetTotal,
        'time': value.time === undefined ? undefined : (value.time.toISOString()),
        'value': value.value,
    };
}
