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
 * @interface CustomerPortalCreditPurchase
 */
export interface CustomerPortalCreditPurchase {
    /**
     * Number of credits to purchase.
     * @type {number}
     * @memberof CustomerPortalCreditPurchase
     */
    amount: number;
}

export function CustomerPortalCreditPurchaseFromJSON(json: any): CustomerPortalCreditPurchase {
    return CustomerPortalCreditPurchaseFromJSONTyped(json, false);
}

export function CustomerPortalCreditPurchaseFromJSONTyped(json: any, ignoreDiscriminator: boolean): CustomerPortalCreditPurchase {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'amount': json['amount'],
    };
}

export function CustomerPortalCreditPurchaseToJSON(value?: CustomerPortalCreditPurchase | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'amount': value.amount,
    };
}
