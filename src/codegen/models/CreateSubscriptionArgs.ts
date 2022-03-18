/* tslint:disable */
/* eslint-disable */
/**
 * Octane API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0.1
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
    FeatureInputArgs,
    FeatureInputArgsFromJSON,
    FeatureInputArgsFromJSONTyped,
    FeatureInputArgsToJSON,
} from './FeatureInputArgs';
import {
    LimitInputArgs,
    LimitInputArgsFromJSON,
    LimitInputArgsFromJSONTyped,
    LimitInputArgsToJSON,
} from './LimitInputArgs';
import {
    SubscriptionAddOnInput,
    SubscriptionAddOnInputFromJSON,
    SubscriptionAddOnInputFromJSONTyped,
    SubscriptionAddOnInputToJSON,
} from './SubscriptionAddOnInput';
import {
    TrialInputArgs,
    TrialInputArgsFromJSON,
    TrialInputArgsFromJSONTyped,
    TrialInputArgsToJSON,
} from './TrialInputArgs';

/**
 * 
 * @export
 * @interface CreateSubscriptionArgs
 */
export interface CreateSubscriptionArgs {
    /**
     * 
     * @type {Array<SubscriptionAddOnInput>}
     * @memberof CreateSubscriptionArgs
     */
    addOns?: Array<SubscriptionAddOnInput>;
    /**
     * 
     * @type {boolean}
     * @memberof CreateSubscriptionArgs
     */
    alignToCalendar?: boolean;
    /**
     * 
     * @type {number}
     * @memberof CreateSubscriptionArgs
     */
    couponOverrideId?: number;
    /**
     * 
     * @type {string}
     * @memberof CreateSubscriptionArgs
     */
    couponOverrideName?: string;
    /**
     * 
     * @type {DiscountInputArgs}
     * @memberof CreateSubscriptionArgs
     */
    discountOverride?: DiscountInputArgs;
    /**
     * 
     * @type {Date}
     * @memberof CreateSubscriptionArgs
     */
    effectiveAt?: Date;
    /**
     * 
     * @type {Array<FeatureInputArgs>}
     * @memberof CreateSubscriptionArgs
     */
    featuresOverride?: Array<FeatureInputArgs>;
    /**
     * 
     * @type {Array<LimitInputArgs>}
     * @memberof CreateSubscriptionArgs
     */
    limitsOverride?: Array<LimitInputArgs>;
    /**
     * 
     * @type {number}
     * @memberof CreateSubscriptionArgs
     */
    pricePlanId?: number;
    /**
     * 
     * @type {string}
     * @memberof CreateSubscriptionArgs
     */
    pricePlanName?: string;
    /**
     * 
     * @type {string}
     * @memberof CreateSubscriptionArgs
     */
    pricePlanTag?: string;
    /**
     * 
     * @type {TrialInputArgs}
     * @memberof CreateSubscriptionArgs
     */
    trialOverride?: TrialInputArgs;
}

export function CreateSubscriptionArgsFromJSON(json: any): CreateSubscriptionArgs {
    return CreateSubscriptionArgsFromJSONTyped(json, false);
}

export function CreateSubscriptionArgsFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateSubscriptionArgs {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'addOns': !exists(json, 'add_ons') ? undefined : ((json['add_ons'] as Array<any>).map(SubscriptionAddOnInputFromJSON)),
        'alignToCalendar': !exists(json, 'align_to_calendar') ? undefined : json['align_to_calendar'],
        'couponOverrideId': !exists(json, 'coupon_override_id') ? undefined : json['coupon_override_id'],
        'couponOverrideName': !exists(json, 'coupon_override_name') ? undefined : json['coupon_override_name'],
        'discountOverride': !exists(json, 'discount_override') ? undefined : DiscountInputArgsFromJSON(json['discount_override']),
        'effectiveAt': !exists(json, 'effective_at') ? undefined : (new Date(json['effective_at'])),
        'featuresOverride': !exists(json, 'features_override') ? undefined : ((json['features_override'] as Array<any>).map(FeatureInputArgsFromJSON)),
        'limitsOverride': !exists(json, 'limits_override') ? undefined : ((json['limits_override'] as Array<any>).map(LimitInputArgsFromJSON)),
        'pricePlanId': !exists(json, 'price_plan_id') ? undefined : json['price_plan_id'],
        'pricePlanName': !exists(json, 'price_plan_name') ? undefined : json['price_plan_name'],
        'pricePlanTag': !exists(json, 'price_plan_tag') ? undefined : json['price_plan_tag'],
        'trialOverride': !exists(json, 'trial_override') ? undefined : TrialInputArgsFromJSON(json['trial_override']),
    };
}

export function CreateSubscriptionArgsToJSON(value?: CreateSubscriptionArgs | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'add_ons': value.addOns === undefined ? undefined : ((value.addOns as Array<any>).map(SubscriptionAddOnInputToJSON)),
        'align_to_calendar': value.alignToCalendar,
        'coupon_override_id': value.couponOverrideId,
        'coupon_override_name': value.couponOverrideName,
        'discount_override': DiscountInputArgsToJSON(value.discountOverride),
        'effective_at': value.effectiveAt === undefined ? undefined : (value.effectiveAt.toISOString()),
        'features_override': value.featuresOverride === undefined ? undefined : ((value.featuresOverride as Array<any>).map(FeatureInputArgsToJSON)),
        'limits_override': value.limitsOverride === undefined ? undefined : ((value.limitsOverride as Array<any>).map(LimitInputArgsToJSON)),
        'price_plan_id': value.pricePlanId,
        'price_plan_name': value.pricePlanName,
        'price_plan_tag': value.pricePlanTag,
        'trial_override': TrialInputArgsToJSON(value.trialOverride),
    };
}
