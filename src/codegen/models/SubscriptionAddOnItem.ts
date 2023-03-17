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
 * @interface SubscriptionAddOnItem
 */
export interface SubscriptionAddOnItem {
    /**
     * 
     * @type {string}
     * @memberof SubscriptionAddOnItem
     */
    featureName?: string;
    /**
     * 
     * @type {Date}
     * @memberof SubscriptionAddOnItem
     */
    effectiveAt?: Date;
    /**
     * Quantity represents how many of this add on you want to attach to the subscription. Can be positive forincreasing the number of this add on or negative for decreasing.
     * @type {number}
     * @memberof SubscriptionAddOnItem
     */
    quantity?: number;
    /**
     * Boolean that indicates whether to update the subscription add on at the end of the billing cycle. If 'true' and either of `effective_at` or `at_cycle_start` are set, will return an error.
     * @type {boolean}
     * @memberof SubscriptionAddOnItem
     */
    atCycleEnd?: boolean;
    /**
     * Boolean that indicates whether to update the subscription add on at the start of the billing cycle. If 'true' and either of `effective_at` or `at_cycle_end` are set, will return an error.
     * @type {boolean}
     * @memberof SubscriptionAddOnItem
     */
    atCycleStart?: boolean;
}

export function SubscriptionAddOnItemFromJSON(json: any): SubscriptionAddOnItem {
    return SubscriptionAddOnItemFromJSONTyped(json, false);
}

export function SubscriptionAddOnItemFromJSONTyped(json: any, ignoreDiscriminator: boolean): SubscriptionAddOnItem {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'featureName': !exists(json, 'feature_name') ? undefined : json['feature_name'],
        'effectiveAt': !exists(json, 'effective_at') ? undefined : (new Date(json['effective_at'])),
        'quantity': !exists(json, 'quantity') ? undefined : json['quantity'],
        'atCycleEnd': !exists(json, 'at_cycle_end') ? undefined : json['at_cycle_end'],
        'atCycleStart': !exists(json, 'at_cycle_start') ? undefined : json['at_cycle_start'],
    };
}

export function SubscriptionAddOnItemToJSON(value?: SubscriptionAddOnItem | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'feature_name': value.featureName,
        'effective_at': value.effectiveAt === undefined ? undefined : (value.effectiveAt.toISOString()),
        'quantity': value.quantity,
        'at_cycle_end': value.atCycleEnd,
        'at_cycle_start': value.atCycleStart,
    };
}

