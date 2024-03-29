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
 * @interface MeteredComponentLabelLimit
 */
export interface MeteredComponentLabelLimit {
    /**
     * Dictionary of labels (key: value) to which the limit applies. A value of 'any' will apply the limit to any single value of the field.
     * @type {any}
     * @memberof MeteredComponentLabelLimit
     */
    labels: any | null;
    /**
     * Numeric limit set on the labels.
     * @type {number}
     * @memberof MeteredComponentLabelLimit
     */
    limit: number;
}

export function MeteredComponentLabelLimitFromJSON(json: any): MeteredComponentLabelLimit {
    return MeteredComponentLabelLimitFromJSONTyped(json, false);
}

export function MeteredComponentLabelLimitFromJSONTyped(json: any, ignoreDiscriminator: boolean): MeteredComponentLabelLimit {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'labels': json['labels'],
        'limit': json['limit'],
    };
}

export function MeteredComponentLabelLimitToJSON(value?: MeteredComponentLabelLimit | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'labels': value.labels,
        'limit': value.limit,
    };
}

