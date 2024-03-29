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
 * @interface CustomerLabelLimit
 */
export interface CustomerLabelLimit {
    /**
     * 
     * @type {number}
     * @memberof CustomerLabelLimit
     */
    limit?: number;
    /**
     * 
     * @type {{ [key: string]: string; }}
     * @memberof CustomerLabelLimit
     */
    labels?: { [key: string]: string; };
}

export function CustomerLabelLimitFromJSON(json: any): CustomerLabelLimit {
    return CustomerLabelLimitFromJSONTyped(json, false);
}

export function CustomerLabelLimitFromJSONTyped(json: any, ignoreDiscriminator: boolean): CustomerLabelLimit {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'limit': !exists(json, 'limit') ? undefined : json['limit'],
        'labels': !exists(json, 'labels') ? undefined : json['labels'],
    };
}

export function CustomerLabelLimitToJSON(value?: CustomerLabelLimit | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'limit': value.limit,
        'labels': value.labels,
    };
}

