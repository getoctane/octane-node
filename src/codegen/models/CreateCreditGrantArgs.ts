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
 * @interface CreateCreditGrantArgs
 */
export interface CreateCreditGrantArgs {
    /**
     * The date at which the grant is effective
     * @type {Date}
     * @memberof CreateCreditGrantArgs
     */
    effectiveAt?: Date;
    /**
     * Total price paid for the credits in cents. Defaults to $1 (100 cents) per credit if not specified
     * @type {number}
     * @memberof CreateCreditGrantArgs
     */
    price?: number;
    /**
     * The date at which this grant expires
     * @type {Date}
     * @memberof CreateCreditGrantArgs
     */
    expiresAt?: Date;
    /**
     * Number of credits to grant
     * @type {number}
     * @memberof CreateCreditGrantArgs
     */
    amount: number;
    /**
     * Optional description. This is only viewable internally
     * @type {string}
     * @memberof CreateCreditGrantArgs
     */
    description?: string;
    /**
     * Name of the customer receving the grant
     * @type {string}
     * @memberof CreateCreditGrantArgs
     */
    customerName: string;
}

export function CreateCreditGrantArgsFromJSON(json: any): CreateCreditGrantArgs {
    return CreateCreditGrantArgsFromJSONTyped(json, false);
}

export function CreateCreditGrantArgsFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateCreditGrantArgs {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'effectiveAt': !exists(json, 'effective_at') ? undefined : (new Date(json['effective_at'])),
        'price': !exists(json, 'price') ? undefined : json['price'],
        'expiresAt': !exists(json, 'expires_at') ? undefined : (new Date(json['expires_at'])),
        'amount': json['amount'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'customerName': json['customer_name'],
    };
}

export function CreateCreditGrantArgsToJSON(value?: CreateCreditGrantArgs | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'effective_at': value.effectiveAt === undefined ? undefined : (value.effectiveAt.toISOString()),
        'price': value.price,
        'expires_at': value.expiresAt === undefined ? undefined : (value.expiresAt.toISOString()),
        'amount': value.amount,
        'description': value.description,
        'customer_name': value.customerName,
    };
}
