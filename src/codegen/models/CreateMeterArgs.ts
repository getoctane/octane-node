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
import {
    MeterLabelFilterOrExpressionArgs,
    MeterLabelFilterOrExpressionArgsFromJSON,
    MeterLabelFilterOrExpressionArgsFromJSONTyped,
    MeterLabelFilterOrExpressionArgsToJSON,
} from './MeterLabelFilterOrExpressionArgs';

/**
 * 
 * @export
 * @interface CreateMeterArgs
 */
export interface CreateMeterArgs {
    /**
     * The unit that the measurement values are reported in.
     * @type {string}
     * @memberof CreateMeterArgs
     */
    unitName?: string;
    /**
     * COMING SOON: We are replacing is_incremental with reporting_method field. Whether measurement values are reporting the incremental change or the total. One of `DELTA`, `TOTAL`.
     * @type {string}
     * @memberof CreateMeterArgs
     */
    reportingMethod?: CreateMeterArgsReportingMethodEnum;
    /**
     * COMING SOON: We are replacing meter_type with data_type and aggregation fields to allow more flexible metering. The type of data represented by the meter. One of `CONTINUOUS`, `DISCRETE`.
     * @type {string}
     * @memberof CreateMeterArgs
     */
    dataType?: CreateMeterArgsDataTypeEnum;
    /**
     * Whether measurement values are to be considered to be the incremental change or the total.
     * @type {boolean}
     * @memberof CreateMeterArgs
     */
    isIncremental?: boolean;
    /**
     * List of primary label keys
     * @type {Array<string>}
     * @memberof CreateMeterArgs
     */
    primaryLabels?: Array<string>;
    /**
     * DEPRECATED: List of expected label keys
     * @type {Array<string>}
     * @memberof CreateMeterArgs
     */
    expectedLabels?: Array<string>;
    /**
     * The filter or expression of filters to apply to the event labels. If provided, the meter will only be applied to events with labels that match the filter.
     * @type {MeterLabelFilterOrExpressionArgs}
     * @memberof CreateMeterArgs
     */
    eventLabelFilter?: MeterLabelFilterOrExpressionArgs | null;
    /**
     * COMING SOON: We are replacing meter_type with data_type and aggregation fields to allow more flexible metering. The aggregation type to apply to measurements. One of `MAX`, `SUM`, `LATEST`, `TIME_WEIGHTED_SUM`.
     * @type {string}
     * @memberof CreateMeterArgs
     */
    aggregation?: CreateMeterArgsAggregationEnum;
    /**
     * Name of the events to associate with this meter. Defaults to meter name.
     * @type {string}
     * @memberof CreateMeterArgs
     */
    eventName?: string;
    /**
     * Description of the meter
     * @type {string}
     * @memberof CreateMeterArgs
     */
    description?: string;
    /**
     * Unique name identifier
     * @type {string}
     * @memberof CreateMeterArgs
     */
    name?: string;
    /**
     * Type of meter. One of `COUNTER`, `GAUGE`
     * @type {string}
     * @memberof CreateMeterArgs
     */
    meterType?: CreateMeterArgsMeterTypeEnum;
    /**
     * Human-friendly name used for display in UI
     * @type {string}
     * @memberof CreateMeterArgs
     */
    displayName?: string;
}

/**
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
export enum CreateMeterArgsDataTypeEnum {
    Continuous = 'CONTINUOUS',
    Discrete = 'DISCRETE'
}/**
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
        
        'unitName': !exists(json, 'unit_name') ? undefined : json['unit_name'],
        'reportingMethod': !exists(json, 'reporting_method') ? undefined : json['reporting_method'],
        'dataType': !exists(json, 'data_type') ? undefined : json['data_type'],
        'isIncremental': !exists(json, 'is_incremental') ? undefined : json['is_incremental'],
        'primaryLabels': !exists(json, 'primary_labels') ? undefined : json['primary_labels'],
        'expectedLabels': !exists(json, 'expected_labels') ? undefined : json['expected_labels'],
        'eventLabelFilter': !exists(json, 'event_label_filter') ? undefined : MeterLabelFilterOrExpressionArgsFromJSON(json['event_label_filter']),
        'aggregation': !exists(json, 'aggregation') ? undefined : json['aggregation'],
        'eventName': !exists(json, 'event_name') ? undefined : json['event_name'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'meterType': !exists(json, 'meter_type') ? undefined : json['meter_type'],
        'displayName': !exists(json, 'display_name') ? undefined : json['display_name'],
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
        
        'unit_name': value.unitName,
        'reporting_method': value.reportingMethod,
        'data_type': value.dataType,
        'is_incremental': value.isIncremental,
        'primary_labels': value.primaryLabels,
        'expected_labels': value.expectedLabels,
        'event_label_filter': MeterLabelFilterOrExpressionArgsToJSON(value.eventLabelFilter),
        'aggregation': value.aggregation,
        'event_name': value.eventName,
        'description': value.description,
        'name': value.name,
        'meter_type': value.meterType,
        'display_name': value.displayName,
    };
}

