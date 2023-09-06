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
 * @interface DeleteSubscriptionArgs
 */
export interface DeleteSubscriptionArgs {
    /**
     * 
     * @type {Date}
     * @memberof DeleteSubscriptionArgs
     */
    expireAt?: Date;
    /**
     * 
     * @type {number}
     * @memberof DeleteSubscriptionArgs
     */
    vendorId?: number;
    /**
     * 
     * @type {number}
     * @memberof DeleteSubscriptionArgs
     */
    customerId?: number;
    /**
     * Boolean that indicates whether to expire the subscription at the end of thebilling cycle. If 'true' and `expire_at` is set, will return an error.
     * @type {boolean}
     * @memberof DeleteSubscriptionArgs
     */
    atCycleEnd?: boolean;
}

export function DeleteSubscriptionArgsFromJSON(json: any): DeleteSubscriptionArgs {
    return DeleteSubscriptionArgsFromJSONTyped(json, false);
}

export function DeleteSubscriptionArgsFromJSONTyped(json: any, ignoreDiscriminator: boolean): DeleteSubscriptionArgs {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'expireAt': !exists(json, 'expire_at') ? undefined : (new Date(json['expire_at'])),
        'vendorId': !exists(json, 'vendor_id') ? undefined : json['vendor_id'],
        'customerId': !exists(json, 'customer_id') ? undefined : json['customer_id'],
        'atCycleEnd': !exists(json, 'at_cycle_end') ? undefined : json['at_cycle_end'],
    };
}

export function DeleteSubscriptionArgsToJSON(value?: DeleteSubscriptionArgs | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'expire_at': value.expireAt === undefined ? undefined : (value.expireAt.toISOString()),
        'vendor_id': value.vendorId,
        'customer_id': value.customerId,
        'at_cycle_end': value.atCycleEnd,
    };
}

