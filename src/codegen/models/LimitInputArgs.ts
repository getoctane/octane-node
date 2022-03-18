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
    FeatureInputArgs,
    FeatureInputArgsFromJSON,
    FeatureInputArgsFromJSONTyped,
    FeatureInputArgsToJSON,
} from './FeatureInputArgs';

/**
 * 
 * @export
 * @interface LimitInputArgs
 */
export interface LimitInputArgs {
    /**
     * 
     * @type {FeatureInputArgs}
     * @memberof LimitInputArgs
     */
    feature?: FeatureInputArgs;
    /**
     * 
     * @type {number}
     * @memberof LimitInputArgs
     */
    limit?: number;
}

export function LimitInputArgsFromJSON(json: any): LimitInputArgs {
    return LimitInputArgsFromJSONTyped(json, false);
}

export function LimitInputArgsFromJSONTyped(json: any, ignoreDiscriminator: boolean): LimitInputArgs {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'feature': !exists(json, 'feature') ? undefined : FeatureInputArgsFromJSON(json['feature']),
        'limit': !exists(json, 'limit') ? undefined : json['limit'],
    };
}

export function LimitInputArgsToJSON(value?: LimitInputArgs | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'feature': FeatureInputArgsToJSON(value.feature),
        'limit': value.limit,
    };
}
