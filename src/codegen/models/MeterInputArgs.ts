/* tslint:disable */
/* eslint-disable */
/**
 * Octane API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0.0
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
 * @interface MeterInputArgs
 */
export interface MeterInputArgs {
    /**
     * 
     * @type {boolean}
     * @memberof MeterInputArgs
     */
    isIncremental?: boolean;
    /**
     * 
     * @type {string}
     * @memberof MeterInputArgs
     */
    meterType?: MeterInputArgsMeterTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof MeterInputArgs
     */
    displayName?: string;
    /**
     * 
     * @type {string}
     * @memberof MeterInputArgs
     */
    name?: string;
    /**
     * 
     * @type {number}
     * @memberof MeterInputArgs
     */
    vendorId?: number;
    /**
     * 
     * @type {Array<string>}
     * @memberof MeterInputArgs
     */
    expectedLabels?: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof MeterInputArgs
     */
    description?: string;
    /**
     * 
     * @type {string}
     * @memberof MeterInputArgs
     */
    unitName?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof MeterInputArgs
     */
    primaryLabels?: Array<string>;
}

/**
* @export
* @enum {string}
*/
export enum MeterInputArgsMeterTypeEnum {
    Counter = 'COUNTER',
    Gauge = 'GAUGE'
}

export function MeterInputArgsFromJSON(json: any): MeterInputArgs {
    return MeterInputArgsFromJSONTyped(json, false);
}

export function MeterInputArgsFromJSONTyped(json: any, ignoreDiscriminator: boolean): MeterInputArgs {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'isIncremental': !exists(json, 'is_incremental') ? undefined : json['is_incremental'],
        'meterType': !exists(json, 'meter_type') ? undefined : json['meter_type'],
        'displayName': !exists(json, 'display_name') ? undefined : json['display_name'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'vendorId': !exists(json, 'vendor_id') ? undefined : json['vendor_id'],
        'expectedLabels': !exists(json, 'expected_labels') ? undefined : json['expected_labels'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'unitName': !exists(json, 'unit_name') ? undefined : json['unit_name'],
        'primaryLabels': !exists(json, 'primary_labels') ? undefined : json['primary_labels'],
    };
}

export function MeterInputArgsToJSON(value?: MeterInputArgs | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'is_incremental': value.isIncremental,
        'meter_type': value.meterType,
        'display_name': value.displayName,
        'name': value.name,
        'vendor_id': value.vendorId,
        'expected_labels': value.expectedLabels,
        'description': value.description,
        'unit_name': value.unitName,
        'primary_labels': value.primaryLabels,
    };
}

