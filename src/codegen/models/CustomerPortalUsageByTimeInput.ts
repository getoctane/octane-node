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
 * @interface CustomerPortalUsageByTimeInput
 */
export interface CustomerPortalUsageByTimeInput {
    /**
     * Customer name. Required only if using vendor API Key for authentication.
     * @type {string}
     * @memberof CustomerPortalUsageByTimeInput
     */
    customerName?: string;
    /**
     * Start date to fetch usage from.
     * @type {Date}
     * @memberof CustomerPortalUsageByTimeInput
     */
    startTime: Date;
    /**
     * The time bucket to group usage by, one of 'hour' and 'day'. Defaults to 'day'.
     * @type {string}
     * @memberof CustomerPortalUsageByTimeInput
     */
    timeBucket?: CustomerPortalUsageByTimeInputTimeBucketEnum;
    /**
     * A list of primary label keys to group results by.
     * @type {Array<string>}
     * @memberof CustomerPortalUsageByTimeInput
     */
    labelGroupByKeys?: Array<string>;
    /**
     * The aggregate function to use for the meter.
     * @type {string}
     * @memberof CustomerPortalUsageByTimeInput
     */
    aggregate?: CustomerPortalUsageByTimeInputAggregateEnum;
    /**
     * Primary labels with keys and values
     * @type {Array<CustomerPortalLabelFilter>}
     * @memberof CustomerPortalUsageByTimeInput
     */
    labelFilters?: Array<CustomerPortalLabelFilter>;
    /**
     * Name of the meter.
     * @type {string}
     * @memberof CustomerPortalUsageByTimeInput
     */
    meterName: string;
}

/**
* @export
* @enum {string}
*/
export enum CustomerPortalUsageByTimeInputTimeBucketEnum {
    Hour = 'hour',
    Day = 'day'
}/**
* @export
* @enum {string}
*/
export enum CustomerPortalUsageByTimeInputAggregateEnum {
    Sum = 'SUM',
    TimeWeightedSum = 'TIME_WEIGHTED_SUM',
    Latest = 'LATEST',
    Max = 'MAX'
}

export function CustomerPortalUsageByTimeInputFromJSON(json: any): CustomerPortalUsageByTimeInput {
    return CustomerPortalUsageByTimeInputFromJSONTyped(json, false);
}

export function CustomerPortalUsageByTimeInputFromJSONTyped(json: any, ignoreDiscriminator: boolean): CustomerPortalUsageByTimeInput {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'customerName': !exists(json, 'customer_name') ? undefined : json['customer_name'],
        'startTime': (new Date(json['start_time'])),
        'timeBucket': !exists(json, 'time_bucket') ? undefined : json['time_bucket'],
        'labelGroupByKeys': !exists(json, 'label_group_by_keys') ? undefined : json['label_group_by_keys'],
        'aggregate': !exists(json, 'aggregate') ? undefined : json['aggregate'],
        'labelFilters': !exists(json, 'label_filters') ? undefined : ((json['label_filters'] as Array<any>).map(CustomerPortalLabelFilterFromJSON)),
        'meterName': json['meter_name'],
    };
}

export function CustomerPortalUsageByTimeInputToJSON(value?: CustomerPortalUsageByTimeInput | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'customer_name': value.customerName,
        'start_time': (value.startTime.toISOString()),
        'time_bucket': value.timeBucket,
        'label_group_by_keys': value.labelGroupByKeys,
        'aggregate': value.aggregate,
        'label_filters': value.labelFilters === undefined ? undefined : ((value.labelFilters as Array<any>).map(CustomerPortalLabelFilterToJSON)),
        'meter_name': value.meterName,
    };
}

