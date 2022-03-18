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
 * @interface PricePlanTag
 */
export interface PricePlanTag {
    /**
     * Supplementary tag label that is associated with a specific version of a price plan
     * @type {string}
     * @memberof PricePlanTag
     */
    tag: string;
}

export function PricePlanTagFromJSON(json: any): PricePlanTag {
    return PricePlanTagFromJSONTyped(json, false);
}

export function PricePlanTagFromJSONTyped(json: any, ignoreDiscriminator: boolean): PricePlanTag {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'tag': json['tag'],
    };
}

export function PricePlanTagToJSON(value?: PricePlanTag | null): any {
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

