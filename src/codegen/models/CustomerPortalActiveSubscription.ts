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
    BillingCycleDate,
    BillingCycleDateFromJSON,
    BillingCycleDateFromJSONTyped,
    BillingCycleDateToJSON,
} from './BillingCycleDate';
import {
    Subscription,
    SubscriptionFromJSON,
    SubscriptionFromJSONTyped,
    SubscriptionToJSON,
} from './Subscription';

/**
 * 
 * @export
 * @interface CustomerPortalActiveSubscription
 */
export interface CustomerPortalActiveSubscription {
    /**
     * The total fixed price with all discounts applied.
     * @type {number}
     * @memberof CustomerPortalActiveSubscription
     */
    discountedFixedPrice?: number;
    /**
     * Customer's current active subscription. Includes the price plan and overrides they are subscribed to.
     * @type {Subscription}
     * @memberof CustomerPortalActiveSubscription
     */
    subscription?: Subscription | null;
    /**
     * The date that the customer will be invoiced for their current billing cycle.
     * @type {Date}
     * @memberof CustomerPortalActiveSubscription
     */
    invoicingDate?: Date;
    /**
     * The total fixed price the customer will be charged for this billing cycle. Includes the base price and any add ons.
     * @type {number}
     * @memberof CustomerPortalActiveSubscription
     */
    totalFixedPrice?: number;
    /**
     * Customer's current active biling cycle.
     * @type {BillingCycleDate}
     * @memberof CustomerPortalActiveSubscription
     */
    billingCycle: BillingCycleDate | null;
}

export function CustomerPortalActiveSubscriptionFromJSON(json: any): CustomerPortalActiveSubscription {
    return CustomerPortalActiveSubscriptionFromJSONTyped(json, false);
}

export function CustomerPortalActiveSubscriptionFromJSONTyped(json: any, ignoreDiscriminator: boolean): CustomerPortalActiveSubscription {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'discountedFixedPrice': !exists(json, 'discounted_fixed_price') ? undefined : json['discounted_fixed_price'],
        'subscription': !exists(json, 'subscription') ? undefined : SubscriptionFromJSON(json['subscription']),
        'invoicingDate': !exists(json, 'invoicing_date') ? undefined : (new Date(json['invoicing_date'])),
        'totalFixedPrice': !exists(json, 'total_fixed_price') ? undefined : json['total_fixed_price'],
        'billingCycle': BillingCycleDateFromJSON(json['billing_cycle']),
    };
}

export function CustomerPortalActiveSubscriptionToJSON(value?: CustomerPortalActiveSubscription | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'discounted_fixed_price': value.discountedFixedPrice,
        'subscription': SubscriptionToJSON(value.subscription),
        'invoicing_date': value.invoicingDate === undefined ? undefined : (value.invoicingDate.toISOString()),
        'total_fixed_price': value.totalFixedPrice,
        'billing_cycle': BillingCycleDateToJSON(value.billingCycle),
    };
}

