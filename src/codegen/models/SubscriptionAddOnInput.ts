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
 * @interface SubscriptionAddOnInput
 */
export interface SubscriptionAddOnInput {
    /**
     * Override for the add-on price on this subscription.
     * @type {number}
     * @memberof SubscriptionAddOnInput
     */
    price?: number;
    /**
     * 
     * @type {number}
     * @memberof SubscriptionAddOnInput
     */
    quantity?: number;
    /**
     * 
     * @type {string}
     * @memberof SubscriptionAddOnInput
     */
    name: string;
}

export function SubscriptionAddOnInputFromJSON(json: any): SubscriptionAddOnInput {
    return SubscriptionAddOnInputFromJSONTyped(json, false);
}

export function SubscriptionAddOnInputFromJSONTyped(json: any, ignoreDiscriminator: boolean): SubscriptionAddOnInput {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'price': !exists(json, 'price') ? undefined : json['price'],
        'quantity': !exists(json, 'quantity') ? undefined : json['quantity'],
        'name': json['name'],
    };
}

export function SubscriptionAddOnInputToJSON(value?: SubscriptionAddOnInput | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'price': value.price,
        'quantity': value.quantity,
        'name': value.name,
    };
}

