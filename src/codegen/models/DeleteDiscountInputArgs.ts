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
 * @interface DeleteDiscountInputArgs
 */
export interface DeleteDiscountInputArgs {
    /**
     * Number of billing cycles that the discount should expire in. Defaults to 0 (start of current billing cycle). If the inputted discount is scheduled, it is the number of billing cycles relative to the scheduled start. You can only shorten a discount, it is not possible to extend it.
     * @type {number}
     * @memberof DeleteDiscountInputArgs
     */
    billingCycleDuration?: number;
    /**
     * External UUID representing the discount to be deleted.
     * @type {string}
     * @memberof DeleteDiscountInputArgs
     */
    discountUuid: string;
}

export function DeleteDiscountInputArgsFromJSON(json: any): DeleteDiscountInputArgs {
    return DeleteDiscountInputArgsFromJSONTyped(json, false);
}

export function DeleteDiscountInputArgsFromJSONTyped(json: any, ignoreDiscriminator: boolean): DeleteDiscountInputArgs {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'billingCycleDuration': !exists(json, 'billing_cycle_duration') ? undefined : json['billing_cycle_duration'],
        'discountUuid': json['discount_uuid'],
    };
}

export function DeleteDiscountInputArgsToJSON(value?: DeleteDiscountInputArgs | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'billing_cycle_duration': value.billingCycleDuration,
        'discount_uuid': value.discountUuid,
    };
}

