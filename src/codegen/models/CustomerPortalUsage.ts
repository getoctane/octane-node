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
    CycleUsage,
    CycleUsageFromJSON,
    CycleUsageFromJSONTyped,
    CycleUsageToJSON,
} from './CycleUsage';

/**
 * 
 * @export
 * @interface CustomerPortalUsage
 */
export interface CustomerPortalUsage {
    /**
     * Type of the meter. E.g. COUNTER or GAUGE.
     * @type {string}
     * @memberof CustomerPortalUsage
     */
    meterType?: string;
    /**
     * Daily usage across the previous billing cycle.
     * @type {CycleUsage}
     * @memberof CustomerPortalUsage
     */
    previousCycleUsage?: CycleUsage | null;
    /**
     * Name of the unit the meter uses.
     * @type {string}
     * @memberof CustomerPortalUsage
     */
    unitName?: string;
    /**
     * Display name of the meter.
     * @type {string}
     * @memberof CustomerPortalUsage
     */
    meterDisplayName?: string;
    /**
     * Daily usage across the current billing cycle.
     * @type {CycleUsage}
     * @memberof CustomerPortalUsage
     */
    currentCycleUsage?: CycleUsage | null;
    /**
     * Name of the meter.
     * @type {string}
     * @memberof CustomerPortalUsage
     */
    meterName?: string;
}

export function CustomerPortalUsageFromJSON(json: any): CustomerPortalUsage {
    return CustomerPortalUsageFromJSONTyped(json, false);
}

export function CustomerPortalUsageFromJSONTyped(json: any, ignoreDiscriminator: boolean): CustomerPortalUsage {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'meterType': !exists(json, 'meter_type') ? undefined : json['meter_type'],
        'previousCycleUsage': !exists(json, 'previous_cycle_usage') ? undefined : CycleUsageFromJSON(json['previous_cycle_usage']),
        'unitName': !exists(json, 'unit_name') ? undefined : json['unit_name'],
        'meterDisplayName': !exists(json, 'meter_display_name') ? undefined : json['meter_display_name'],
        'currentCycleUsage': !exists(json, 'current_cycle_usage') ? undefined : CycleUsageFromJSON(json['current_cycle_usage']),
        'meterName': !exists(json, 'meter_name') ? undefined : json['meter_name'],
    };
}

export function CustomerPortalUsageToJSON(value?: CustomerPortalUsage | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'meter_type': value.meterType,
        'previous_cycle_usage': CycleUsageToJSON(value.previousCycleUsage),
        'unit_name': value.unitName,
        'meter_display_name': value.meterDisplayName,
        'current_cycle_usage': CycleUsageToJSON(value.currentCycleUsage),
        'meter_name': value.meterName,
    };
}

