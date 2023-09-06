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
 * @interface CustomerPortalMeterLabelFilter
 */
export interface CustomerPortalMeterLabelFilter {
    /**
     * Primary labels with keys and values
     * @type {Array<CustomerPortalLabelFilter>}
     * @memberof CustomerPortalMeterLabelFilter
     */
    labelFilters?: Array<CustomerPortalLabelFilter>;
    /**
     * [DEPRECATED] Please use label_group_by_keys instead.
     * @type {string}
     * @memberof CustomerPortalMeterLabelFilter
     */
    labelGroupBy?: string;
    /**
     * A list of primary label keys to group results by.
     * @type {Array<string>}
     * @memberof CustomerPortalMeterLabelFilter
     */
    labelGroupByKeys?: Array<string>;
    /**
     * Name of the meter.
     * @type {string}
     * @memberof CustomerPortalMeterLabelFilter
     */
    meterName: string;
    /**
     * The aggregate function to use for the meter.
     * @type {string}
     * @memberof CustomerPortalMeterLabelFilter
     */
    aggregate?: CustomerPortalMeterLabelFilterAggregateEnum;
    /**
     * Customer name. Required only if using vendor API Key for authentication.
     * @type {string}
     * @memberof CustomerPortalMeterLabelFilter
     */
    customerName?: string;
}

/**
* @export
* @enum {string}
*/
export enum CustomerPortalMeterLabelFilterAggregateEnum {
    Sum = 'sum',
    TimeWeighted = 'time_weighted',
    Latest = 'latest',
    Max = 'max'
}

export function CustomerPortalMeterLabelFilterFromJSON(json: any): CustomerPortalMeterLabelFilter {
    return CustomerPortalMeterLabelFilterFromJSONTyped(json, false);
}

export function CustomerPortalMeterLabelFilterFromJSONTyped(json: any, ignoreDiscriminator: boolean): CustomerPortalMeterLabelFilter {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'labelFilters': !exists(json, 'label_filters') ? undefined : ((json['label_filters'] as Array<any>).map(CustomerPortalLabelFilterFromJSON)),
        'labelGroupBy': !exists(json, 'label_group_by') ? undefined : json['label_group_by'],
        'labelGroupByKeys': !exists(json, 'label_group_by_keys') ? undefined : json['label_group_by_keys'],
        'meterName': json['meter_name'],
        'aggregate': !exists(json, 'aggregate') ? undefined : json['aggregate'],
        'customerName': !exists(json, 'customer_name') ? undefined : json['customer_name'],
    };
}

export function CustomerPortalMeterLabelFilterToJSON(value?: CustomerPortalMeterLabelFilter | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'label_filters': value.labelFilters === undefined ? undefined : ((value.labelFilters as Array<any>).map(CustomerPortalLabelFilterToJSON)),
        'label_group_by': value.labelGroupBy,
        'label_group_by_keys': value.labelGroupByKeys,
        'meter_name': value.meterName,
        'aggregate': value.aggregate,
        'customer_name': value.customerName,
    };
}

