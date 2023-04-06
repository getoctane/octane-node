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
 * @interface CustomerMetadata
 */
export interface CustomerMetadata {
    /**
     * Value of property for customer
     * @type {string}
     * @memberof CustomerMetadata
     */
    value?: string;
    /**
     * Property name
     * @type {string}
     * @memberof CustomerMetadata
     */
    property?: string;
}

export function CustomerMetadataFromJSON(json: any): CustomerMetadata {
    return CustomerMetadataFromJSONTyped(json, false);
}

export function CustomerMetadataFromJSONTyped(json: any, ignoreDiscriminator: boolean): CustomerMetadata {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'value': !exists(json, 'value') ? undefined : json['value'],
        'property': !exists(json, 'property') ? undefined : json['property'],
    };
}

export function CustomerMetadataToJSON(value?: CustomerMetadata | null): any {
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
