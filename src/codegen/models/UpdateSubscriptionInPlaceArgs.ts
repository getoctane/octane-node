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
    DiscountInputArgs,
    DiscountInputArgsFromJSON,
    DiscountInputArgsFromJSONTyped,
    DiscountInputArgsToJSON,
} from './DiscountInputArgs';
import {
    SubscriptionAddOnInput,
    SubscriptionAddOnInputFromJSON,
    SubscriptionAddOnInputFromJSONTyped,
    SubscriptionAddOnInputToJSON,
} from './SubscriptionAddOnInput';

/**
 * 
 * @export
 * @interface UpdateSubscriptionInPlaceArgs
 */
export interface UpdateSubscriptionInPlaceArgs {
    /**
     * DEPRECATED - use discounts field
     * @type {DiscountInputArgs}
     * @memberof UpdateSubscriptionInPlaceArgs
     */
    discountOverride?: DiscountInputArgs | null;
    /**
     * 
     * @type {Array<DiscountInputArgs>}
     * @memberof UpdateSubscriptionInPlaceArgs
     */
    discounts?: Array<DiscountInputArgs>;
    /**
     * 
     * @type {string}
     * @memberof UpdateSubscriptionInPlaceArgs
     */
    couponOverrideName?: string;
    /**
     * 
     * @type {Array<SubscriptionAddOnInput>}
     * @memberof UpdateSubscriptionInPlaceArgs
     */
    addOns?: Array<SubscriptionAddOnInput> | null;
}

export function UpdateSubscriptionInPlaceArgsFromJSON(json: any): UpdateSubscriptionInPlaceArgs {
    return UpdateSubscriptionInPlaceArgsFromJSONTyped(json, false);
}

export function UpdateSubscriptionInPlaceArgsFromJSONTyped(json: any, ignoreDiscriminator: boolean): UpdateSubscriptionInPlaceArgs {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'discountOverride': !exists(json, 'discount_override') ? undefined : DiscountInputArgsFromJSON(json['discount_override']),
        'discounts': !exists(json, 'discounts') ? undefined : ((json['discounts'] as Array<any>).map(DiscountInputArgsFromJSON)),
        'couponOverrideName': !exists(json, 'coupon_override_name') ? undefined : json['coupon_override_name'],
        'addOns': !exists(json, 'add_ons') ? undefined : (json['add_ons'] === null ? null : (json['add_ons'] as Array<any>).map(SubscriptionAddOnInputFromJSON)),
    };
}

export function UpdateSubscriptionInPlaceArgsToJSON(value?: UpdateSubscriptionInPlaceArgs | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'discount_override': DiscountInputArgsToJSON(value.discountOverride),
        'discounts': value.discounts === undefined ? undefined : ((value.discounts as Array<any>).map(DiscountInputArgsToJSON)),
        'coupon_override_name': value.couponOverrideName,
        'add_ons': value.addOns === undefined ? undefined : (value.addOns === null ? null : (value.addOns as Array<any>).map(SubscriptionAddOnInputToJSON)),
    };
}

