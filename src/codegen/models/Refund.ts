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
 * @interface Refund
 */
export interface Refund {
    /**
     * 
     * @type {boolean}
     * @memberof Refund
     */
    success?: boolean;
}

export function RefundFromJSON(json: any): Refund {
    return RefundFromJSONTyped(json, false);
}

export function RefundFromJSONTyped(json: any, ignoreDiscriminator: boolean): Refund {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'success': !exists(json, 'success') ? undefined : json['success'],
    };
}

export function RefundToJSON(value?: Refund | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'success': value.success,
    };
}
