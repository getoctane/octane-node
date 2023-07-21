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
 * @interface CreateMeterArgs
 */
export interface CreateMeterArgs {
    /**
     * Name of the events to associate with this meter. Defaults to meter name.
     * @type {string}
     * @memberof CreateMeterArgs
     */
    eventName?: string;
    /**
     * The unit that the measurement values are reported in.
     * @type {string}
     * @memberof CreateMeterArgs
     */
    unitName?: string;
    /**
     * Human-friendly name used for display in UI
     * @type {string}
     * @memberof CreateMeterArgs
     */
    displayName?: string;
    /**
     * List of primary label keys
     * @type {Array<string>}
     * @memberof CreateMeterArgs
     */
    primaryLabels?: Array<string>;
    /**
     * COMING SOON: We are replacing meter_type with data_type and aggregation fields to allow more flexible metering. The aggregation type to apply to measurements. One of `TIME_WEIGHTED_SUM`, `MAX`, `SUM`.
     * @type {string}
     * @memberof CreateMeterArgs
     */
    aggregation?: CreateMeterArgsAggregationEnum;
    /**
     * DEPRECATED: List of expected label keys
     * @type {Array<string>}
     * @memberof CreateMeterArgs
     */
    expectedLabels?: Array<string>;
    /**
     * Description of the meter
     * @type {string}
     * @memberof CreateMeterArgs
     */
    description?: string;
    /**
     * COMING SOON: We are replacing meter_type with data_type and aggregation fields to allow more flexible metering. The type of data represented by the meter. One of `CONTINUOUS`, `DISCRETE`.
     * @type {string}
     * @memberof CreateMeterArgs
     */
    dataType?: CreateMeterArgsDataTypeEnum;
    /**
     * COMING SOON: We are replacing is_incremental with reporting_method field. Whether measurement values are reporting the incremental change or the total. One of `DELTA`, `TOTAL`.
     * @type {string}
     * @memberof CreateMeterArgs
     */
    reportingMethod?: CreateMeterArgsReportingMethodEnum;
    /**
     * Type of meter. One of `COUNTER`, `GAUGE`
     * @type {string}
     * @memberof CreateMeterArgs
     */
    meterType?: CreateMeterArgsMeterTypeEnum;
    /**
     * Whether measurement values are to be considered to be the incremental change or the total.
     * @type {boolean}
     * @memberof CreateMeterArgs
     */
    isIncremental?: boolean;
    /**
     * Unique name identifier
     * @type {string}
     * @memberof CreateMeterArgs
     */
    name?: string;
}

/**
* @export
* @enum {string}
*/
export enum CreateMeterArgsAggregationEnum {
    Sum = 'SUM',
    Max = 'MAX',
    Min = 'MIN',
    Avg = 'AVG',
    Count = 'COUNT',
    TimeWeightedSum = 'TIME_WEIGHTED_SUM',
    Latest = 'LATEST'
}/**
* @export
* @enum {string}
*/
export enum CreateMeterArgsDataTypeEnum {
    Continuous = 'CONTINUOUS',
    Discrete = 'DISCRETE'
}/**
* @export
* @enum {string}
*/
export enum CreateMeterArgsReportingMethodEnum {
    Delta = 'DELTA',
    Total = 'TOTAL'
}/**
* @export
* @enum {string}
*/
export enum CreateMeterArgsMeterTypeEnum {
    Counter = 'COUNTER',
    Gauge = 'GAUGE'
}

export function CreateMeterArgsFromJSON(json: any): CreateMeterArgs {
    return CreateMeterArgsFromJSONTyped(json, false);
}

export function CreateMeterArgsFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateMeterArgs {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'eventName': !exists(json, 'event_name') ? undefined : json['event_name'],
        'unitName': !exists(json, 'unit_name') ? undefined : json['unit_name'],
        'displayName': !exists(json, 'display_name') ? undefined : json['display_name'],
        'primaryLabels': !exists(json, 'primary_labels') ? undefined : json['primary_labels'],
        'aggregation': !exists(json, 'aggregation') ? undefined : json['aggregation'],
        'expectedLabels': !exists(json, 'expected_labels') ? undefined : json['expected_labels'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'dataType': !exists(json, 'data_type') ? undefined : json['data_type'],
        'reportingMethod': !exists(json, 'reporting_method') ? undefined : json['reporting_method'],
        'meterType': !exists(json, 'meter_type') ? undefined : json['meter_type'],
        'isIncremental': !exists(json, 'is_incremental') ? undefined : json['is_incremental'],
        'name': !exists(json, 'name') ? undefined : json['name'],
    };
}

export function CreateMeterArgsToJSON(value?: CreateMeterArgs | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'event_name': value.eventName,
        'unit_name': value.unitName,
        'display_name': value.displayName,
        'primary_labels': value.primaryLabels,
        'aggregation': value.aggregation,
        'expected_labels': value.expectedLabels,
        'description': value.description,
        'data_type': value.dataType,
        'reporting_method': value.reportingMethod,
        'meter_type': value.meterType,
        'is_incremental': value.isIncremental,
        'name': value.name,
    };
}

