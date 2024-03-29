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
 * @interface Meter
 */
export interface Meter {
    /**
     * Unique name identifier
     * @type {string}
     * @memberof Meter
     */
    readonly name: string;
    /**
     * Name used for display in UI
     * @type {string}
     * @memberof Meter
     */
    displayName?: string;
    /**
     * 
     * @type {string}
     * @memberof Meter
     */
    description?: string | null;
    /**
     * Name of the event associated with this meter
     * @type {string}
     * @memberof Meter
     */
    eventName: string;
    /**
     * One of `COUNTER`, `GAUGE`.
     * @type {string}
     * @memberof Meter
     */
    meterType: string;
    /**
     * One of `CONTINUOUS`, `DISCRETE`.
     * @type {string}
     * @memberof Meter
     */
    dataType: string;
    /**
     * The aggregation applied to the measurement values. One of `MAX`, `SUM`, `LATEST`, `TIME_WEIGHTED_SUM`.
     * @type {string}
     * @memberof Meter
     */
    aggregation: string;
    /**
     * The reporting unit for the meter
     * @type {string}
     * @memberof Meter
     */
    unitName?: string | null;
    /**
     * Whether measurement values are to be considered incremental (versus a running total)
     * @type {boolean}
     * @memberof Meter
     */
    isIncremental: boolean;
    /**
     * Whether measurement values are to be considered to be the incremental change or the running total. One of `DELTA`, `TOTAL`.
     * @type {string}
     * @memberof Meter
     */
    reportingMethod: string;
    /**
     * 
     * @type {Array<any>}
     * @memberof Meter
     */
    expectedLabels?: Array<any>;
    /**
     * 
     * @type {Array<any>}
     * @memberof Meter
     */
    primaryLabels?: Array<any>;
    /**
     * The filter or expression of filters to apply to the event labels.
     * @type {any}
     * @memberof Meter
     */
    eventLabelFilter?: any | null;
}

export function MeterFromJSON(json: any): Meter {
    return MeterFromJSONTyped(json, false);
}

export function MeterFromJSONTyped(json: any, ignoreDiscriminator: boolean): Meter {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': json['name'],
        'displayName': !exists(json, 'display_name') ? undefined : json['display_name'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'eventName': json['event_name'],
        'meterType': json['meter_type'],
        'dataType': json['data_type'],
        'aggregation': json['aggregation'],
        'unitName': !exists(json, 'unit_name') ? undefined : json['unit_name'],
        'isIncremental': json['is_incremental'],
        'reportingMethod': json['reporting_method'],
        'expectedLabels': !exists(json, 'expected_labels') ? undefined : json['expected_labels'],
        'primaryLabels': !exists(json, 'primary_labels') ? undefined : json['primary_labels'],
        'eventLabelFilter': !exists(json, 'event_label_filter') ? undefined : json['event_label_filter'],
    };
}

export function MeterToJSON(value?: Meter | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'display_name': value.displayName,
        'description': value.description,
        'event_name': value.eventName,
        'meter_type': value.meterType,
        'data_type': value.dataType,
        'aggregation': value.aggregation,
        'unit_name': value.unitName,
        'is_incremental': value.isIncremental,
        'reporting_method': value.reportingMethod,
        'expected_labels': value.expectedLabels,
        'primary_labels': value.primaryLabels,
        'event_label_filter': value.eventLabelFilter,
    };
}

