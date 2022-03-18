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
/**
 * 
 * @export
 * @interface CustomerTag
 */
export interface CustomerTag {
    /**
     * Supplementary tag that is associated with a customer
     * @type {string}
     * @memberof CustomerTag
     */
    tag: string;
}

export function CustomerTagFromJSON(json: any): CustomerTag {
    return CustomerTagFromJSONTyped(json, false);
}

export function CustomerTagFromJSONTyped(json: any, ignoreDiscriminator: boolean): CustomerTag {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'tag': json['tag'],
    };
}

export function CustomerTagToJSON(value?: CustomerTag | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'tag': value.tag,
    };
}

