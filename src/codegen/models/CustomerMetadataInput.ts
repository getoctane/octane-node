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
 * @interface CustomerMetadataInput
 */
export interface CustomerMetadataInput {
    /**
     * 
     * @type {string}
     * @memberof CustomerMetadataInput
     */
    value?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CustomerMetadataInput
     */
    property?: string;
}

export function CustomerMetadataInputFromJSON(json: any): CustomerMetadataInput {
    return CustomerMetadataInputFromJSONTyped(json, false);
}

export function CustomerMetadataInputFromJSONTyped(json: any, ignoreDiscriminator: boolean): CustomerMetadataInput {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'value': !exists(json, 'value') ? undefined : json['value'],
        'property': !exists(json, 'property') ? undefined : json['property'],
    };
}

export function CustomerMetadataInputToJSON(value?: CustomerMetadataInput | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'value': value.value,
        'property': value.property,
    };
}

