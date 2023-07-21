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
 * @interface UpdateSelfServeSettingsArgs
 */
export interface UpdateSelfServeSettingsArgs {
    /**
     * Time length of the default expiration for credits bought in the customer portal.
     * @type {number}
     * @memberof UpdateSelfServeSettingsArgs
     */
    creditsExpirationLength?: number;
    /**
     * True if the vendor has enabled customization for their customer portal.
     * @type {boolean}
     * @memberof UpdateSelfServeSettingsArgs
     */
    enabled?: boolean;
    /**
     * True if the customer can purchase credits via self serve. Defaults to False.
     * @type {boolean}
     * @memberof UpdateSelfServeSettingsArgs
     */
    purchaseCredits?: boolean;
    /**
     * Time length unit for the default expiration for credits bought in the customer portal.
     * @type {string}
     * @memberof UpdateSelfServeSettingsArgs
     */
    creditsExpirationUnit?: string;
    /**
     * Price per credit, in cents, that the customer is charged for buying credits through the customer portal
     * @type {number}
     * @memberof UpdateSelfServeSettingsArgs
     */
    pricePerCreditCents?: number;
    /**
     * True if the customer can switch their current price plan via self serve. Defaults to False.
     * @type {boolean}
     * @memberof UpdateSelfServeSettingsArgs
     */
    switchPricePlans?: boolean;
    /**
     * True if the vendor has enabled customization for their customer portal.
     * @type {boolean}
     * @memberof UpdateSelfServeSettingsArgs
     */
    customization?: boolean;
}

export function UpdateSelfServeSettingsArgsFromJSON(json: any): UpdateSelfServeSettingsArgs {
    return UpdateSelfServeSettingsArgsFromJSONTyped(json, false);
}

export function UpdateSelfServeSettingsArgsFromJSONTyped(json: any, ignoreDiscriminator: boolean): UpdateSelfServeSettingsArgs {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'creditsExpirationLength': !exists(json, 'credits_expiration_length') ? undefined : json['credits_expiration_length'],
        'enabled': !exists(json, 'enabled') ? undefined : json['enabled'],
        'purchaseCredits': !exists(json, 'purchase_credits') ? undefined : json['purchase_credits'],
        'creditsExpirationUnit': !exists(json, 'credits_expiration_unit') ? undefined : json['credits_expiration_unit'],
        'pricePerCreditCents': !exists(json, 'price_per_credit_cents') ? undefined : json['price_per_credit_cents'],
        'switchPricePlans': !exists(json, 'switch_price_plans') ? undefined : json['switch_price_plans'],
        'customization': !exists(json, 'customization') ? undefined : json['customization'],
    };
}

export function UpdateSelfServeSettingsArgsToJSON(value?: UpdateSelfServeSettingsArgs | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'credits_expiration_length': value.creditsExpirationLength,
        'enabled': value.enabled,
        'purchase_credits': value.purchaseCredits,
        'credits_expiration_unit': value.creditsExpirationUnit,
        'price_per_credit_cents': value.pricePerCreditCents,
        'switch_price_plans': value.switchPricePlans,
        'customization': value.customization,
    };
}

