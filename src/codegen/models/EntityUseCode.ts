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
 * @interface EntityUseCode
 */
export interface EntityUseCode {
    /**
     * The Avalara-recognized entity use code for this definition.
     * @type {string}
     * @memberof EntityUseCode
     */
    code?: string;
    /**
     * A list of countries where this use code is valid.
     * @type {Array<string>}
     * @memberof EntityUseCode
     */
    validCountries?: Array<string>;
    /**
     * Text describing the meaning of this use code.
     * @type {string}
     * @memberof EntityUseCode
     */
    description?: string;
    /**
     * The name of this entity use code.
     * @type {string}
     * @memberof EntityUseCode
     */
    name?: string;
}

export function EntityUseCodeFromJSON(json: any): EntityUseCode {
    return EntityUseCodeFromJSONTyped(json, false);
}

export function EntityUseCodeFromJSONTyped(json: any, ignoreDiscriminator: boolean): EntityUseCode {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'code': !exists(json, 'code') ? undefined : json['code'],
        'validCountries': !exists(json, 'valid_countries') ? undefined : json['valid_countries'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'name': !exists(json, 'name') ? undefined : json['name'],
    };
}

export function EntityUseCodeToJSON(value?: EntityUseCode | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'code': value.code,
        'valid_countries': value.validCountries,
        'description': value.description,
        'name': value.name,
    };
}

