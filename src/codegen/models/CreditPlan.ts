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
 * @interface CreditPlan
 */
export interface CreditPlan {
    /**
     * Unique identifier of this credit plan.
     * @type {string}
     * @memberof CreditPlan
     */
    uuid?: string;
    /**
     * Amount of credits that are granted in a single grant.
     * @type {number}
     * @memberof CreditPlan
     */
    amount: number;
    /**
     * Price for the grant, in lowest denomination (i.e cents).
     * @type {number}
     * @memberof CreditPlan
     */
    price: number;
    /**
     * A description that will be used on the invoice line items.
     * @type {string}
     * @memberof CreditPlan
     */
    description?: string | null;
    /**
     * Duration length before each credit grant expires. Null for no expiration.
     * @type {number}
     * @memberof CreditPlan
     */
    grantExpirationLength?: number | null;
    /**
     * Duration unit before each credit grant expires. Null for no expiration.
     * @type {string}
     * @memberof CreditPlan
     */
    grantExpirationUnit?: string | null;
    /**
     * Interval, in billing cycles, between each credit grant. Null for single grant plans.
     * @type {number}
     * @memberof CreditPlan
     */
    intervalBetweenGrants?: number | null;
    /**
     * Billing cycles between payments. Null for grants paid in a single payment. If this plan has recurring grants (i.e `interval_between_grants` is not null), then this field must be a factor of `interval_between_grants`.
     * @type {number}
     * @memberof CreditPlan
     */
    intervalBetweenPayments?: number | null;
    /**
     * How many payments each credit grant will have. 1 for single payment grants. If this plan has has recurring grants (i.e `interval_between_grants` is not null), then this field must be a factor of `interval_between_grants`.
     * @type {number}
     * @memberof CreditPlan
     */
    paymentsPerGrant: number;
}

export function CreditPlanFromJSON(json: any): CreditPlan {
    return CreditPlanFromJSONTyped(json, false);
}

export function CreditPlanFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreditPlan {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'uuid': !exists(json, 'uuid') ? undefined : json['uuid'],
        'amount': json['amount'],
        'price': json['price'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'grantExpirationLength': !exists(json, 'grant_expiration_length') ? undefined : json['grant_expiration_length'],
        'grantExpirationUnit': !exists(json, 'grant_expiration_unit') ? undefined : json['grant_expiration_unit'],
        'intervalBetweenGrants': !exists(json, 'interval_between_grants') ? undefined : json['interval_between_grants'],
        'intervalBetweenPayments': !exists(json, 'interval_between_payments') ? undefined : json['interval_between_payments'],
        'paymentsPerGrant': json['payments_per_grant'],
    };
}

export function CreditPlanToJSON(value?: CreditPlan | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'uuid': value.uuid,
        'amount': value.amount,
        'price': value.price,
        'description': value.description,
        'grant_expiration_length': value.grantExpirationLength,
        'grant_expiration_unit': value.grantExpirationUnit,
        'interval_between_grants': value.intervalBetweenGrants,
        'interval_between_payments': value.intervalBetweenPayments,
        'payments_per_grant': value.paymentsPerGrant,
    };
}

