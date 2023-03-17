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
 * @interface DiscountInputArgs
 */
export interface DiscountInputArgs {
    /**
     * For METERED_COMPONENT scoped discounts: Dictionary of labels (key: value) that the discount covers. The entire set of labels must be provided.
     * @type {{ [key: string]: string; }}
     * @memberof DiscountInputArgs
     */
    labels?: { [key: string]: string; };
    /**
     * 
     * @type {string}
     * @memberof DiscountInputArgs
     */
    discountType?: DiscountInputArgsDiscountTypeEnum;
    /**
     * The scope that this discount covers. One of 'INVOICE_TOTAL', 'ADD_ON', 'METERED_COMPONENT'.
     * @type {string}
     * @memberof DiscountInputArgs
     */
    scope?: DiscountInputArgsScopeEnum;
    /**
     * 
     * @type {number}
     * @memberof DiscountInputArgs
     */
    amount?: number;
    /**
     * For ADD_ON scoped discounts: the name of the add on that the discount covers.
     * @type {string}
     * @memberof DiscountInputArgs
     */
    addOnName?: string;
    /**
     * For METERED_COMPONENT scoped discounts: the UUID of the metered component that the discount covers.
     * @type {string}
     * @memberof DiscountInputArgs
     */
    meteredComponentUuid?: string;
    /**
     * Length, in billing cycles, that this discount will be active.
     * @type {number}
     * @memberof DiscountInputArgs
     */
    billingCycleDuration?: number;
}

/**
* @export
* @enum {string}
*/
export enum DiscountInputArgsDiscountTypeEnum {
    Flat = 'FLAT',
    Percent = 'PERCENT'
}/**
* @export
* @enum {string}
*/
export enum DiscountInputArgsScopeEnum {
    InvoiceTotal = 'INVOICE_TOTAL',
    AddOn = 'ADD_ON',
    MeteredComponent = 'METERED_COMPONENT'
}

export function DiscountInputArgsFromJSON(json: any): DiscountInputArgs {
    return DiscountInputArgsFromJSONTyped(json, false);
}

export function DiscountInputArgsFromJSONTyped(json: any, ignoreDiscriminator: boolean): DiscountInputArgs {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'labels': !exists(json, 'labels') ? undefined : json['labels'],
        'discountType': !exists(json, 'discount_type') ? undefined : json['discount_type'],
        'scope': !exists(json, 'scope') ? undefined : json['scope'],
        'amount': !exists(json, 'amount') ? undefined : json['amount'],
        'addOnName': !exists(json, 'add_on_name') ? undefined : json['add_on_name'],
        'meteredComponentUuid': !exists(json, 'metered_component_uuid') ? undefined : json['metered_component_uuid'],
        'billingCycleDuration': !exists(json, 'billing_cycle_duration') ? undefined : json['billing_cycle_duration'],
    };
}

export function DiscountInputArgsToJSON(value?: DiscountInputArgs | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'labels': value.labels,
        'discount_type': value.discountType,
        'scope': value.scope,
        'amount': value.amount,
        'add_on_name': value.addOnName,
        'metered_component_uuid': value.meteredComponentUuid,
        'billing_cycle_duration': value.billingCycleDuration,
    };
}

