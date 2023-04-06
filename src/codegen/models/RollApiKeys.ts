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
 * @interface RollApiKeys
 */
export interface RollApiKeys {
    /**
     * 
     * @type {boolean}
     * @memberof RollApiKeys
     */
    success?: boolean;
    /**
     * The newly generated API Key.
     * @type {string}
     * @memberof RollApiKeys
     */
    apiKey?: string;
}

export function RollApiKeysFromJSON(json: any): RollApiKeys {
    return RollApiKeysFromJSONTyped(json, false);
}

export function RollApiKeysFromJSONTyped(json: any, ignoreDiscriminator: boolean): RollApiKeys {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'success': !exists(json, 'success') ? undefined : json['success'],
        'apiKey': !exists(json, 'api_key') ? undefined : json['api_key'],
    };
}

export function RollApiKeysToJSON(value?: RollApiKeys | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'success': value.success,
        'api_key': value.apiKey,
    };
}
