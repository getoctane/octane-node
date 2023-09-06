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
 * @interface CustomerPortalLabelFilter
 */
export interface CustomerPortalLabelFilter {
    /**
     * Primary label value associated with the key
     * @type {string}
     * @memberof CustomerPortalLabelFilter
     */
    value: string;
    /**
     * 
     * @type {string}
     * @memberof CustomerPortalLabelFilter
     */
    key: string;
}

export function CustomerPortalLabelFilterFromJSON(json: any): CustomerPortalLabelFilter {
    return CustomerPortalLabelFilterFromJSONTyped(json, false);
}

export function CustomerPortalLabelFilterFromJSONTyped(json: any, ignoreDiscriminator: boolean): CustomerPortalLabelFilter {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'value': json['value'],
        'key': json['key'],
    };
}

export function CustomerPortalLabelFilterToJSON(value?: CustomerPortalLabelFilter | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'value': value.value,
        'key': value.key,
    };
}

