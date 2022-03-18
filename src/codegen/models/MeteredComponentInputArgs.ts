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
    PriceSchemeInputArgs,
    PriceSchemeInputArgsFromJSON,
    PriceSchemeInputArgsFromJSONTyped,
    PriceSchemeInputArgsToJSON,
} from './PriceSchemeInputArgs';

/**
 * 
 * @export
 * @interface MeteredComponentInputArgs
 */
export interface MeteredComponentInputArgs {
    /**
     * 
     * @type {number}
     * @memberof MeteredComponentInputArgs
     */
    id?: number;
    /**
     * 
     * @type {number}
     * @memberof MeteredComponentInputArgs
     */
    limit?: number;
    /**
     * 
     * @type {string}
     * @memberof MeteredComponentInputArgs
     */
    meterName?: string;
    /**
     * 
     * @type {PriceSchemeInputArgs}
     * @memberof MeteredComponentInputArgs
     */
    priceScheme?: PriceSchemeInputArgs;
}

export function MeteredComponentInputArgsFromJSON(json: any): MeteredComponentInputArgs {
    return MeteredComponentInputArgsFromJSONTyped(json, false);
}

export function MeteredComponentInputArgsFromJSONTyped(json: any, ignoreDiscriminator: boolean): MeteredComponentInputArgs {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'limit': !exists(json, 'limit') ? undefined : json['limit'],
        'meterName': !exists(json, 'meter_name') ? undefined : json['meter_name'],
        'priceScheme': !exists(json, 'price_scheme') ? undefined : PriceSchemeInputArgsFromJSON(json['price_scheme']),
    };
}

export function MeteredComponentInputArgsToJSON(value?: MeteredComponentInputArgs | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'limit': value.limit,
        'meter_name': value.meterName,
        'price_scheme': PriceSchemeInputArgsToJSON(value.priceScheme),
    };
}

