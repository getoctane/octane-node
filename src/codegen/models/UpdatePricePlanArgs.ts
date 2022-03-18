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
    AddOnInputArgs,
    AddOnInputArgsFromJSON,
    AddOnInputArgsFromJSONTyped,
    AddOnInputArgsToJSON,
} from './AddOnInputArgs';
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
    MeteredComponentInputArgs,
    MeteredComponentInputArgsFromJSON,
    MeteredComponentInputArgsFromJSONTyped,
    MeteredComponentInputArgsToJSON,
} from './MeteredComponentInputArgs';
import {
    TrialInputArgs,
    TrialInputArgsFromJSON,
    TrialInputArgsFromJSONTyped,
    TrialInputArgsToJSON,
} from './TrialInputArgs';

/**
 * 
 * @export
 * @interface UpdatePricePlanArgs
 */
export interface UpdatePricePlanArgs {
    /**
     * 
     * @type {Array<AddOnInputArgs>}
     * @memberof UpdatePricePlanArgs
     */
    addOns?: Array<AddOnInputArgs>;
    /**
     * 
     * @type {number}
     * @memberof UpdatePricePlanArgs
     */
    basePrice?: number;
    /**
     * 
     * @type {string}
     * @memberof UpdatePricePlanArgs
     */
    couponName?: string | null;
    /**
     * 
     * @type {string}
     * @memberof UpdatePricePlanArgs
     */
    description?: string;
    /**
     * 
     * @type {DiscountInputArgs}
     * @memberof UpdatePricePlanArgs
     */
    discount?: DiscountInputArgs | null;
    /**
     * 
     * @type {string}
     * @memberof UpdatePricePlanArgs
     */
    displayName?: string;
    /**
     * 
     * @type {Array<FeatureInputArgs>}
     * @memberof UpdatePricePlanArgs
     */
    features?: Array<FeatureInputArgs>;
    /**
     * 
     * @type {Array<LimitInputArgs>}
     * @memberof UpdatePricePlanArgs
     */
    limits?: Array<LimitInputArgs>;
    /**
     * 
     * @type {Array<MeteredComponentInputArgs>}
     * @memberof UpdatePricePlanArgs
     */
    meteredComponents?: Array<MeteredComponentInputArgs>;
    /**
     * 
     * @type {string}
     * @memberof UpdatePricePlanArgs
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof UpdatePricePlanArgs
     */
    period?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof UpdatePricePlanArgs
     */
    tags?: Array<string>;
    /**
     * 
     * @type {TrialInputArgs}
     * @memberof UpdatePricePlanArgs
     */
    trial?: TrialInputArgs;
}

export function UpdatePricePlanArgsFromJSON(json: any): UpdatePricePlanArgs {
    return UpdatePricePlanArgsFromJSONTyped(json, false);
}

export function UpdatePricePlanArgsFromJSONTyped(json: any, ignoreDiscriminator: boolean): UpdatePricePlanArgs {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'addOns': !exists(json, 'add_ons') ? undefined : ((json['add_ons'] as Array<any>).map(AddOnInputArgsFromJSON)),
        'basePrice': !exists(json, 'base_price') ? undefined : json['base_price'],
        'couponName': !exists(json, 'coupon_name') ? undefined : json['coupon_name'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'discount': !exists(json, 'discount') ? undefined : DiscountInputArgsFromJSON(json['discount']),
        'displayName': !exists(json, 'display_name') ? undefined : json['display_name'],
        'features': !exists(json, 'features') ? undefined : ((json['features'] as Array<any>).map(FeatureInputArgsFromJSON)),
        'limits': !exists(json, 'limits') ? undefined : ((json['limits'] as Array<any>).map(LimitInputArgsFromJSON)),
        'meteredComponents': !exists(json, 'metered_components') ? undefined : ((json['metered_components'] as Array<any>).map(MeteredComponentInputArgsFromJSON)),
        'name': !exists(json, 'name') ? undefined : json['name'],
        'period': !exists(json, 'period') ? undefined : json['period'],
        'tags': !exists(json, 'tags') ? undefined : json['tags'],
        'trial': !exists(json, 'trial') ? undefined : TrialInputArgsFromJSON(json['trial']),
    };
}

export function UpdatePricePlanArgsToJSON(value?: UpdatePricePlanArgs | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'add_ons': value.addOns === undefined ? undefined : ((value.addOns as Array<any>).map(AddOnInputArgsToJSON)),
        'base_price': value.basePrice,
        'coupon_name': value.couponName,
        'description': value.description,
        'discount': DiscountInputArgsToJSON(value.discount),
        'display_name': value.displayName,
        'features': value.features === undefined ? undefined : ((value.features as Array<any>).map(FeatureInputArgsToJSON)),
        'limits': value.limits === undefined ? undefined : ((value.limits as Array<any>).map(LimitInputArgsToJSON)),
        'metered_components': value.meteredComponents === undefined ? undefined : ((value.meteredComponents as Array<any>).map(MeteredComponentInputArgsToJSON)),
        'name': value.name,
        'period': value.period,
        'tags': value.tags,
        'trial': TrialInputArgsToJSON(value.trial),
    };
}

