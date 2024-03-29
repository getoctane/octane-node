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
import {
    SubscriptionAddOnInput,
    SubscriptionAddOnInputFromJSON,
    SubscriptionAddOnInputFromJSONTyped,
    SubscriptionAddOnInputToJSON,
} from './SubscriptionAddOnInput';

/**
 * 
 * @export
 * @interface CustomerPortalActiveSubscriptionInputArgs
 */
export interface CustomerPortalActiveSubscriptionInputArgs {
    /**
     * Price plan uuid to subscribe to.
     * @type {string}
     * @memberof CustomerPortalActiveSubscriptionInputArgs
     */
    pricePlanUuid?: string;
    /**
     * Customer name. Required only if using vendor API Key for authentication.
     * @type {string}
     * @memberof CustomerPortalActiveSubscriptionInputArgs
     */
    customerName?: string;
    /**
     * Add ons to include in subscription.
     * @type {Array<SubscriptionAddOnInput>}
     * @memberof CustomerPortalActiveSubscriptionInputArgs
     */
    addOns?: Array<SubscriptionAddOnInput> | null;
}

export function CustomerPortalActiveSubscriptionInputArgsFromJSON(json: any): CustomerPortalActiveSubscriptionInputArgs {
    return CustomerPortalActiveSubscriptionInputArgsFromJSONTyped(json, false);
}

export function CustomerPortalActiveSubscriptionInputArgsFromJSONTyped(json: any, ignoreDiscriminator: boolean): CustomerPortalActiveSubscriptionInputArgs {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'pricePlanUuid': !exists(json, 'price_plan_uuid') ? undefined : json['price_plan_uuid'],
        'customerName': !exists(json, 'customer_name') ? undefined : json['customer_name'],
        'addOns': !exists(json, 'add_ons') ? undefined : (json['add_ons'] === null ? null : (json['add_ons'] as Array<any>).map(SubscriptionAddOnInputFromJSON)),
    };
}

export function CustomerPortalActiveSubscriptionInputArgsToJSON(value?: CustomerPortalActiveSubscriptionInputArgs | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'price_plan_uuid': value.pricePlanUuid,
        'customer_name': value.customerName,
        'add_ons': value.addOns === undefined ? undefined : (value.addOns === null ? null : (value.addOns as Array<any>).map(SubscriptionAddOnInputToJSON)),
    };
}

