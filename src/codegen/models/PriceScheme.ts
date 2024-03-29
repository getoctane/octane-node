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
    PriceTier,
    PriceTierFromJSON,
    PriceTierFromJSONTyped,
    PriceTierToJSON,
} from './PriceTier';

/**
 * 
 * @export
 * @interface PriceScheme
 */
export interface PriceScheme {
    /**
     * 
     * @type {string}
     * @memberof PriceScheme
     */
    displayName?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PriceScheme
     */
    name?: string | null;
    /**
     * 
     * @type {any}
     * @memberof PriceScheme
     */
    readonly schemeType?: any | null;
    /**
     * Size of the unit batch to use for the prices. Can only be set if scheme_type='FLAT' or 'TIERED'. E.g. To charge $10 per 100 API Requests, set batch_size to 100.
     * @type {number}
     * @memberof PriceScheme
     */
    batchSize?: number | null;
    /**
     * Array of price tiers, each of which consists of `price` and `cap` key:value pairs
     * @type {Array<PriceTier>}
     * @memberof PriceScheme
     */
    prices?: Array<PriceTier>;
    /**
     * Array of (key, value) meter labels to price on & the price tiers that should be used against those labels
     * @type {Array<object>}
     * @memberof PriceScheme
     */
    priceList?: Array<object>;
    /**
     * 
     * @type {string}
     * @memberof PriceScheme
     */
    timeUnitName?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PriceScheme
     */
    unitName?: string | null;
    /**
     * The % increase/decrease in price after the minimum charge is reached.
     * @type {number}
     * @memberof PriceScheme
     */
    postMinimumChargePercentageChange?: number | null;
    /**
     * The frequency at which the meter should be tiered, in months. For example, if set to 12, the usage over the full year will be included when computing the tier. Only available for TIERED and STAIRSTEP scheme_types with a SUM or TIME_WEIGHTED_SUM meter.
     * @type {number}
     * @memberof PriceScheme
     */
    frequency?: number;
}

export function PriceSchemeFromJSON(json: any): PriceScheme {
    return PriceSchemeFromJSONTyped(json, false);
}

export function PriceSchemeFromJSONTyped(json: any, ignoreDiscriminator: boolean): PriceScheme {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'displayName': !exists(json, 'display_name') ? undefined : json['display_name'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'schemeType': !exists(json, 'scheme_type') ? undefined : json['scheme_type'],
        'batchSize': !exists(json, 'batch_size') ? undefined : json['batch_size'],
        'prices': !exists(json, 'prices') ? undefined : ((json['prices'] as Array<any>).map(PriceTierFromJSON)),
        'priceList': !exists(json, 'price_list') ? undefined : json['price_list'],
        'timeUnitName': !exists(json, 'time_unit_name') ? undefined : json['time_unit_name'],
        'unitName': !exists(json, 'unit_name') ? undefined : json['unit_name'],
        'postMinimumChargePercentageChange': !exists(json, 'post_minimum_charge_percentage_change') ? undefined : json['post_minimum_charge_percentage_change'],
        'frequency': !exists(json, 'frequency') ? undefined : json['frequency'],
    };
}

export function PriceSchemeToJSON(value?: PriceScheme | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'display_name': value.displayName,
        'name': value.name,
        'batch_size': value.batchSize,
        'prices': value.prices === undefined ? undefined : ((value.prices as Array<any>).map(PriceTierToJSON)),
        'price_list': value.priceList,
        'time_unit_name': value.timeUnitName,
        'unit_name': value.unitName,
        'post_minimum_charge_percentage_change': value.postMinimumChargePercentageChange,
        'frequency': value.frequency,
    };
}

