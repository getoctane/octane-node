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
 * @interface UpdateCreditTopOffPlanInputArgs
 */
export interface UpdateCreditTopOffPlanInputArgs {
    /**
     * The threshold in amount of credits at which the balance will be topped off.
     * @type {number}
     * @memberof UpdateCreditTopOffPlanInputArgs
     */
    triggerAmount?: number;
    /**
     * Time length unit for the default expiration for credits granted in a top off.
     * @type {string}
     * @memberof UpdateCreditTopOffPlanInputArgs
     */
    expirationUnit?: string;
    /**
     * Price for the grant, in lowest denomination (i.e cents).
     * @type {number}
     * @memberof UpdateCreditTopOffPlanInputArgs
     */
    price?: number;
    /**
     * Amount of credits that are granted in a single top off.
     * @type {number}
     * @memberof UpdateCreditTopOffPlanInputArgs
     */
    grantAmount?: number;
    /**
     * A description that will be used on the invoice line items.
     * @type {string}
     * @memberof UpdateCreditTopOffPlanInputArgs
     */
    description?: string | null;
    /**
     * Whether to charge the customer immediately when the top off is triggered.
     * @type {boolean}
     * @memberof UpdateCreditTopOffPlanInputArgs
     */
    chargeImmediately?: boolean;
    /**
     * Time length of the default expiration for credits granted in a top off.
     * @type {number}
     * @memberof UpdateCreditTopOffPlanInputArgs
     */
    expirationLength?: number;
    /**
     * Whether to add the grants immediately to the credit ledger or wait until either the corresponding invoice is paid or the grant is manually added to the ledger. When charge_immediately is true, this field has no impact since the credits will be granted only after successful payment. Defaults to true.
     * @type {boolean}
     * @memberof UpdateCreditTopOffPlanInputArgs
     */
    grantImmediately?: boolean;
}

export function UpdateCreditTopOffPlanInputArgsFromJSON(json: any): UpdateCreditTopOffPlanInputArgs {
    return UpdateCreditTopOffPlanInputArgsFromJSONTyped(json, false);
}

export function UpdateCreditTopOffPlanInputArgsFromJSONTyped(json: any, ignoreDiscriminator: boolean): UpdateCreditTopOffPlanInputArgs {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'triggerAmount': !exists(json, 'trigger_amount') ? undefined : json['trigger_amount'],
        'expirationUnit': !exists(json, 'expiration_unit') ? undefined : json['expiration_unit'],
        'price': !exists(json, 'price') ? undefined : json['price'],
        'grantAmount': !exists(json, 'grant_amount') ? undefined : json['grant_amount'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'chargeImmediately': !exists(json, 'charge_immediately') ? undefined : json['charge_immediately'],
        'expirationLength': !exists(json, 'expiration_length') ? undefined : json['expiration_length'],
        'grantImmediately': !exists(json, 'grant_immediately') ? undefined : json['grant_immediately'],
    };
}

export function UpdateCreditTopOffPlanInputArgsToJSON(value?: UpdateCreditTopOffPlanInputArgs | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'trigger_amount': value.triggerAmount,
        'expiration_unit': value.expirationUnit,
        'price': value.price,
        'grant_amount': value.grantAmount,
        'description': value.description,
        'charge_immediately': value.chargeImmediately,
        'expiration_length': value.expirationLength,
        'grant_immediately': value.grantImmediately,
    };
}

