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
     * Price for the grant, in lowest denomination (i.e cents).
     * @type {number}
     * @memberof UpdateCreditTopOffPlanInputArgs
     */
    price?: number;
    /**
     * Whether to charge the customer immediately when the top off is triggered.
     * @type {boolean}
     * @memberof UpdateCreditTopOffPlanInputArgs
     */
    chargeImmediately?: boolean;
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
     * The threshold in amount of credits at which the balance will be topped off.
     * @type {number}
     * @memberof UpdateCreditTopOffPlanInputArgs
     */
    triggerAmount?: number;
    /**
     * Time length of the default expiration for credits granted in a top off.
     * @type {number}
     * @memberof UpdateCreditTopOffPlanInputArgs
     */
    expirationLength?: number;
    /**
     * Time length unit for the default expiration for credits granted in a top off.
     * @type {string}
     * @memberof UpdateCreditTopOffPlanInputArgs
     */
    expirationUnit?: string;
}

export function UpdateCreditTopOffPlanInputArgsFromJSON(json: any): UpdateCreditTopOffPlanInputArgs {
    return UpdateCreditTopOffPlanInputArgsFromJSONTyped(json, false);
}

export function UpdateCreditTopOffPlanInputArgsFromJSONTyped(json: any, ignoreDiscriminator: boolean): UpdateCreditTopOffPlanInputArgs {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'price': !exists(json, 'price') ? undefined : json['price'],
        'chargeImmediately': !exists(json, 'charge_immediately') ? undefined : json['charge_immediately'],
        'grantAmount': !exists(json, 'grant_amount') ? undefined : json['grant_amount'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'triggerAmount': !exists(json, 'trigger_amount') ? undefined : json['trigger_amount'],
        'expirationLength': !exists(json, 'expiration_length') ? undefined : json['expiration_length'],
        'expirationUnit': !exists(json, 'expiration_unit') ? undefined : json['expiration_unit'],
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
        
        'price': value.price,
        'charge_immediately': value.chargeImmediately,
        'grant_amount': value.grantAmount,
        'description': value.description,
        'trigger_amount': value.triggerAmount,
        'expiration_length': value.expirationLength,
        'expiration_unit': value.expirationUnit,
    };
}

