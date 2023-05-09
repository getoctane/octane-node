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
    DailyUsage,
    DailyUsageFromJSON,
    DailyUsageFromJSONTyped,
    DailyUsageToJSON,
} from './DailyUsage';

/**
 * 
 * @export
 * @interface CycleUsage
 */
export interface CycleUsage {
    /**
     * The end of the billing cycle in UTC.
     * @type {Date}
     * @memberof CycleUsage
     */
    cycleEnd?: Date;
    /**
     * 
     * @type {Array<DailyUsage>}
     * @memberof CycleUsage
     */
    usageByTime?: Array<DailyUsage>;
    /**
     * Total usage in the cycle.
     * @type {number}
     * @memberof CycleUsage
     */
    totalUsage?: number;
    /**
     * The start of the billing cycle in UTC.
     * @type {Date}
     * @memberof CycleUsage
     */
    cycleStart?: Date;
}

export function CycleUsageFromJSON(json: any): CycleUsage {
    return CycleUsageFromJSONTyped(json, false);
}

export function CycleUsageFromJSONTyped(json: any, ignoreDiscriminator: boolean): CycleUsage {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'cycleEnd': !exists(json, 'cycle_end') ? undefined : (new Date(json['cycle_end'])),
        'usageByTime': !exists(json, 'usage_by_time') ? undefined : ((json['usage_by_time'] as Array<any>).map(DailyUsageFromJSON)),
        'totalUsage': !exists(json, 'total_usage') ? undefined : json['total_usage'],
        'cycleStart': !exists(json, 'cycle_start') ? undefined : (new Date(json['cycle_start'])),
    };
}

export function CycleUsageToJSON(value?: CycleUsage | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'cycle_end': value.cycleEnd === undefined ? undefined : (value.cycleEnd.toISOString()),
        'usage_by_time': value.usageByTime === undefined ? undefined : ((value.usageByTime as Array<any>).map(DailyUsageToJSON)),
        'total_usage': value.totalUsage,
        'cycle_start': value.cycleStart === undefined ? undefined : (value.cycleStart.toISOString()),
    };
}

