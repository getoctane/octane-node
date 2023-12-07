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
    FeatureInputArgs,
    FeatureInputArgsFromJSON,
    FeatureInputArgsFromJSONTyped,
    FeatureInputArgsToJSON,
} from './FeatureInputArgs';
import {
    PriceInputArgs,
    PriceInputArgsFromJSON,
    PriceInputArgsFromJSONTyped,
    PriceInputArgsToJSON,
} from './PriceInputArgs';

/**
 * 
 * @export
 * @interface AddOnInputArgs
 */
export interface AddOnInputArgs {
    /**
     * DEPRECATED. Use price_scheme_type and prices instead.
     * @type {number}
     * @memberof AddOnInputArgs
     */
    price?: number;
    /**
     * This field indicates whether or not we should cut an invoice immediately upon attaching this add on to a price plan.
     * @type {boolean}
     * @memberof AddOnInputArgs
     */
    immediatelyCharge?: boolean;
    /**
     * 
     * @type {FeatureInputArgs}
     * @memberof AddOnInputArgs
     */
    feature: FeatureInputArgs;
    /**
     * 
     * @type {number}
     * @memberof AddOnInputArgs
     */
    limit?: number;
    /**
     * 
     * @type {boolean}
     * @memberof AddOnInputArgs
     */
    quantityEnabled?: boolean;
    /**
     * The frequency at which to charge this add on. Currently the only values supported are price_frequency or 1.
     * @type {number}
     * @memberof AddOnInputArgs
     */
    chargeFrequency?: number;
    /**
     * The frequency at which to price this add on.
     * @type {number}
     * @memberof AddOnInputArgs
     */
    priceFrequency?: number;
    /**
     * Array of price tiers, each of which consists of `price` and `cap` key:value pairs
     * @type {Array<PriceInputArgs>}
     * @memberof AddOnInputArgs
     */
    prices?: Array<PriceInputArgs>;
    /**
     * One of 'FLAT', 'TIERED'
     * @type {string}
     * @memberof AddOnInputArgs
     */
    priceSchemeType?: AddOnInputArgsPriceSchemeTypeEnum;
    /**
     * Whether this add on can only be used & charged once.
     * @type {boolean}
     * @memberof AddOnInputArgs
     */
    singleUse?: boolean;
}

/**
* @export
* @enum {string}
*/
export enum AddOnInputArgsPriceSchemeTypeEnum {
    Flat = 'FLAT',
    Tiered = 'TIERED'
}

export function AddOnInputArgsFromJSON(json: any): AddOnInputArgs {
    return AddOnInputArgsFromJSONTyped(json, false);
}

export function AddOnInputArgsFromJSONTyped(json: any, ignoreDiscriminator: boolean): AddOnInputArgs {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'price': !exists(json, 'price') ? undefined : json['price'],
        'immediatelyCharge': !exists(json, 'immediately_charge') ? undefined : json['immediately_charge'],
        'feature': FeatureInputArgsFromJSON(json['feature']),
        'limit': !exists(json, 'limit') ? undefined : json['limit'],
        'quantityEnabled': !exists(json, 'quantity_enabled') ? undefined : json['quantity_enabled'],
        'chargeFrequency': !exists(json, 'charge_frequency') ? undefined : json['charge_frequency'],
        'priceFrequency': !exists(json, 'price_frequency') ? undefined : json['price_frequency'],
        'prices': !exists(json, 'prices') ? undefined : ((json['prices'] as Array<any>).map(PriceInputArgsFromJSON)),
        'priceSchemeType': !exists(json, 'price_scheme_type') ? undefined : json['price_scheme_type'],
        'singleUse': !exists(json, 'single_use') ? undefined : json['single_use'],
    };
}

export function AddOnInputArgsToJSON(value?: AddOnInputArgs | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'price': value.price,
        'immediately_charge': value.immediatelyCharge,
        'feature': FeatureInputArgsToJSON(value.feature),
        'limit': value.limit,
        'quantity_enabled': value.quantityEnabled,
        'charge_frequency': value.chargeFrequency,
        'price_frequency': value.priceFrequency,
        'prices': value.prices === undefined ? undefined : ((value.prices as Array<any>).map(PriceInputArgsToJSON)),
        'price_scheme_type': value.priceSchemeType,
        'single_use': value.singleUse,
    };
}

