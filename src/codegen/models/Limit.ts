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
    Feature,
    FeatureFromJSON,
    FeatureFromJSONTyped,
    FeatureToJSON,
} from './Feature';

/**
 * 
 * @export
 * @interface Limit
 */
export interface Limit {
    /**
     * 
     * @type {Feature}
     * @memberof Limit
     */
    feature?: Feature;
    /**
     * Limit on feature
     * @type {number}
     * @memberof Limit
     */
    limit: number;
}

export function LimitFromJSON(json: any): Limit {
    return LimitFromJSONTyped(json, false);
}

export function LimitFromJSONTyped(json: any, ignoreDiscriminator: boolean): Limit {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'feature': !exists(json, 'feature') ? undefined : FeatureFromJSON(json['feature']),
        'limit': json['limit'],
    };
}

export function LimitToJSON(value?: Limit | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'feature': FeatureToJSON(value.feature),
        'limit': value.limit,
    };
}

