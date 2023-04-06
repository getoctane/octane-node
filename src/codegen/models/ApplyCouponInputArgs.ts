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
 * @interface ApplyCouponInputArgs
 */
export interface ApplyCouponInputArgs {
    /**
     * 
     * @type {number}
     * @memberof ApplyCouponInputArgs
     */
    customerId?: number;
    /**
     * 
     * @type {string}
     * @memberof ApplyCouponInputArgs
     */
    name?: string;
    /**
     * 
     * @type {number}
     * @memberof ApplyCouponInputArgs
     */
    vendorId?: number;
    /**
     * 
     * @type {string}
     * @memberof ApplyCouponInputArgs
     */
    code?: string;
    /**
     * 
     * @type {string}
     * @memberof ApplyCouponInputArgs
     */
    customerName?: string;
}

export function ApplyCouponInputArgsFromJSON(json: any): ApplyCouponInputArgs {
    return ApplyCouponInputArgsFromJSONTyped(json, false);
}

export function ApplyCouponInputArgsFromJSONTyped(json: any, ignoreDiscriminator: boolean): ApplyCouponInputArgs {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'customerId': !exists(json, 'customer_id') ? undefined : json['customer_id'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'vendorId': !exists(json, 'vendor_id') ? undefined : json['vendor_id'],
        'code': !exists(json, 'code') ? undefined : json['code'],
        'customerName': !exists(json, 'customer_name') ? undefined : json['customer_name'],
    };
}

export function ApplyCouponInputArgsToJSON(value?: ApplyCouponInputArgs | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'customer_id': value.customerId,
        'name': value.name,
        'vendor_id': value.vendorId,
        'code': value.code,
        'customer_name': value.customerName,
    };
}

