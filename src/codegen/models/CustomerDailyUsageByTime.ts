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
 * @interface CustomerDailyUsageByTime
 */
export interface CustomerDailyUsageByTime {
    /**
     * Labels for this usage. Only present if label_group_by_keys is provided.
     * @type {{ [key: string]: string; }}
     * @memberof CustomerDailyUsageByTime
     */
    labels?: { [key: string]: string; };
    /**
     * Start of the time window in UTC.
     * @type {Date}
     * @memberof CustomerDailyUsageByTime
     */
    time?: Date;
    /**
     * Total usage during this window.
     * @type {number}
     * @memberof CustomerDailyUsageByTime
     */
    usage?: number;
}

export function CustomerDailyUsageByTimeFromJSON(json: any): CustomerDailyUsageByTime {
    return CustomerDailyUsageByTimeFromJSONTyped(json, false);
}

export function CustomerDailyUsageByTimeFromJSONTyped(json: any, ignoreDiscriminator: boolean): CustomerDailyUsageByTime {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'labels': !exists(json, 'labels') ? undefined : json['labels'],
        'time': !exists(json, 'time') ? undefined : (new Date(json['time'])),
        'usage': !exists(json, 'usage') ? undefined : json['usage'],
    };
}

export function CustomerDailyUsageByTimeToJSON(value?: CustomerDailyUsageByTime | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'labels': value.labels,
        'time': value.time === undefined ? undefined : (value.time.toISOString()),
        'usage': value.usage,
    };
}

