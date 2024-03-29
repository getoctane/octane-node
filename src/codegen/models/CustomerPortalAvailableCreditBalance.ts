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
 * @interface CustomerPortalAvailableCreditBalance
 */
export interface CustomerPortalAvailableCreditBalance {
    /**
     * Available credit balance.
     * @type {number}
     * @memberof CustomerPortalAvailableCreditBalance
     */
    availableBalance?: number;
    /**
     * The start_time used for calculating this available balance.
     * @type {Date}
     * @memberof CustomerPortalAvailableCreditBalance
     */
    startTime?: Date;
    /**
     * The end_time used for calculating this available balance.
     * @type {Date}
     * @memberof CustomerPortalAvailableCreditBalance
     */
    endTime?: Date;
}

export function CustomerPortalAvailableCreditBalanceFromJSON(json: any): CustomerPortalAvailableCreditBalance {
    return CustomerPortalAvailableCreditBalanceFromJSONTyped(json, false);
}

export function CustomerPortalAvailableCreditBalanceFromJSONTyped(json: any, ignoreDiscriminator: boolean): CustomerPortalAvailableCreditBalance {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'availableBalance': !exists(json, 'available_balance') ? undefined : json['available_balance'],
        'startTime': !exists(json, 'start_time') ? undefined : (new Date(json['start_time'])),
        'endTime': !exists(json, 'end_time') ? undefined : (new Date(json['end_time'])),
    };
}

export function CustomerPortalAvailableCreditBalanceToJSON(value?: CustomerPortalAvailableCreditBalance | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'available_balance': value.availableBalance,
        'start_time': value.startTime === undefined ? undefined : (value.startTime.toISOString()),
        'end_time': value.endTime === undefined ? undefined : (value.endTime.toISOString()),
    };
}

