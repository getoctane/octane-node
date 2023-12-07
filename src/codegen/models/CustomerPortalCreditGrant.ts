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
 * @interface CustomerPortalCreditGrant
 */
export interface CustomerPortalCreditGrant {
    /**
     * Number of credits granted
     * @type {number}
     * @memberof CustomerPortalCreditGrant
     */
    amount: number;
    /**
     * Total price for the credits, in cents
     * @type {number}
     * @memberof CustomerPortalCreditGrant
     */
    price: number;
    /**
     * A unique identifier for this grant
     * @type {string}
     * @memberof CustomerPortalCreditGrant
     */
    uuid: string;
    /**
     * Amount already invoiced for the price of the grant, in cents
     * @type {number}
     * @memberof CustomerPortalCreditGrant
     */
    amountPaid: number;
    /**
     * Optional description. This is only viewable internally
     * @type {string}
     * @memberof CustomerPortalCreditGrant
     */
    description?: string;
    /**
     * The source of the grant.
     * @type {string}
     * @memberof CustomerPortalCreditGrant
     */
    source: string;
    /**
     * The date at which this grant is effective
     * @type {Date}
     * @memberof CustomerPortalCreditGrant
     */
    effectiveAt: Date;
    /**
     * The date at which this grant expires
     * @type {Date}
     * @memberof CustomerPortalCreditGrant
     */
    expiresAt?: Date;
    /**
     * Number of unused credits still remaining in grant
     * @type {number}
     * @memberof CustomerPortalCreditGrant
     */
    amountRemaining: number;
}

export function CustomerPortalCreditGrantFromJSON(json: any): CustomerPortalCreditGrant {
    return CustomerPortalCreditGrantFromJSONTyped(json, false);
}

export function CustomerPortalCreditGrantFromJSONTyped(json: any, ignoreDiscriminator: boolean): CustomerPortalCreditGrant {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'amount': json['amount'],
        'price': json['price'],
        'uuid': json['uuid'],
        'amountPaid': json['amount_paid'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'source': json['source'],
        'effectiveAt': (new Date(json['effective_at'])),
        'expiresAt': !exists(json, 'expires_at') ? undefined : (new Date(json['expires_at'])),
        'amountRemaining': json['amount_remaining'],
    };
}

export function CustomerPortalCreditGrantToJSON(value?: CustomerPortalCreditGrant | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'amount': value.amount,
        'price': value.price,
        'uuid': value.uuid,
        'amount_paid': value.amountPaid,
        'description': value.description,
        'source': value.source,
        'effective_at': (value.effectiveAt.toISOString()),
        'expires_at': value.expiresAt === undefined ? undefined : (value.expiresAt.toISOString()),
        'amount_remaining': value.amountRemaining,
    };
}

