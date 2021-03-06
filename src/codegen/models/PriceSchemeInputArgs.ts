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
    PriceInputArgs,
    PriceInputArgsFromJSON,
    PriceInputArgsFromJSONTyped,
    PriceInputArgsToJSON,
} from './PriceInputArgs';

/**
 * 
 * @export
 * @interface PriceSchemeInputArgs
 */
export interface PriceSchemeInputArgs {
    /**
     * 
     * @type {Array<PriceInputArgs>}
     * @memberof PriceSchemeInputArgs
     */
    prices?: Array<PriceInputArgs>;
    /**
     * 
     * @type {string}
     * @memberof PriceSchemeInputArgs
     */
    schemeType?: string;
    /**
     * 
     * @type {string}
     * @memberof PriceSchemeInputArgs
     */
    timeUnitName?: string;
    /**
     * 
     * @type {string}
     * @memberof PriceSchemeInputArgs
     */
    unitName?: string;
}

export function PriceSchemeInputArgsFromJSON(json: any): PriceSchemeInputArgs {
    return PriceSchemeInputArgsFromJSONTyped(json, false);
}

export function PriceSchemeInputArgsFromJSONTyped(json: any, ignoreDiscriminator: boolean): PriceSchemeInputArgs {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'prices': !exists(json, 'prices') ? undefined : ((json['prices'] as Array<any>).map(PriceInputArgsFromJSON)),
        'schemeType': !exists(json, 'scheme_type') ? undefined : json['scheme_type'],
        'timeUnitName': !exists(json, 'time_unit_name') ? undefined : json['time_unit_name'],
        'unitName': !exists(json, 'unit_name') ? undefined : json['unit_name'],
    };
}

export function PriceSchemeInputArgsToJSON(value?: PriceSchemeInputArgs | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'prices': value.prices === undefined ? undefined : ((value.prices as Array<any>).map(PriceInputArgsToJSON)),
        'scheme_type': value.schemeType,
        'time_unit_name': value.timeUnitName,
        'unit_name': value.unitName,
    };
}

