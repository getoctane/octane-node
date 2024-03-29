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
    CustomerPortalLabelFilter,
    CustomerPortalLabelFilterFromJSON,
    CustomerPortalLabelFilterFromJSONTyped,
    CustomerPortalLabelFilterToJSON,
} from './CustomerPortalLabelFilter';

/**
 * 
 * @export
 * @interface CustomerUsageByTimeInput
 */
export interface CustomerUsageByTimeInput {
    /**
     * Primary labels with keys and values
     * @type {Array<CustomerPortalLabelFilter>}
     * @memberof CustomerUsageByTimeInput
     */
    labelFilters?: Array<CustomerPortalLabelFilter>;
    /**
     * The time bucket to group usage by, one of 'hour' and 'day'. Defaults to 'day'.
     * @type {string}
     * @memberof CustomerUsageByTimeInput
     */
    timeBucket?: CustomerUsageByTimeInputTimeBucketEnum;
    /**
     * The aggregate function to use for the meter.
     * @type {string}
     * @memberof CustomerUsageByTimeInput
     */
    aggregate?: CustomerUsageByTimeInputAggregateEnum;
    /**
     * Start date to fetch usage from.
     * @type {Date}
     * @memberof CustomerUsageByTimeInput
     */
    startTime: Date;
    /**
     * Name of the meter.
     * @type {string}
     * @memberof CustomerUsageByTimeInput
     */
    meterName: string;
    /**
     * A list of primary label keys to group results by.
     * @type {Array<string>}
     * @memberof CustomerUsageByTimeInput
     */
    labelGroupByKeys?: Array<string>;
}

/**
* @export
* @enum {string}
*/
export enum CustomerUsageByTimeInputTimeBucketEnum {
    Hour = 'hour',
    Day = 'day'
}/**
* @export
* @enum {string}
*/
export enum CustomerUsageByTimeInputAggregateEnum {
    Sum = 'SUM',
    TimeWeightedSum = 'TIME_WEIGHTED_SUM',
    Latest = 'LATEST',
    Max = 'MAX'
}

export function CustomerUsageByTimeInputFromJSON(json: any): CustomerUsageByTimeInput {
    return CustomerUsageByTimeInputFromJSONTyped(json, false);
}

export function CustomerUsageByTimeInputFromJSONTyped(json: any, ignoreDiscriminator: boolean): CustomerUsageByTimeInput {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'labelFilters': !exists(json, 'label_filters') ? undefined : ((json['label_filters'] as Array<any>).map(CustomerPortalLabelFilterFromJSON)),
        'timeBucket': !exists(json, 'time_bucket') ? undefined : json['time_bucket'],
        'aggregate': !exists(json, 'aggregate') ? undefined : json['aggregate'],
        'startTime': (new Date(json['start_time'])),
        'meterName': json['meter_name'],
        'labelGroupByKeys': !exists(json, 'label_group_by_keys') ? undefined : json['label_group_by_keys'],
    };
}

export function CustomerUsageByTimeInputToJSON(value?: CustomerUsageByTimeInput | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'label_filters': value.labelFilters === undefined ? undefined : ((value.labelFilters as Array<any>).map(CustomerPortalLabelFilterToJSON)),
        'time_bucket': value.timeBucket,
        'aggregate': value.aggregate,
        'start_time': (value.startTime.toISOString()),
        'meter_name': value.meterName,
        'label_group_by_keys': value.labelGroupByKeys,
    };
}

