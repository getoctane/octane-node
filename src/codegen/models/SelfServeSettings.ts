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
 * @interface SelfServeSettings
 */
export interface SelfServeSettings {
    /**
     * True if the customer can purchase credits via self serve. Defaults to False.
     * @type {boolean}
     * @memberof SelfServeSettings
     */
    purchaseCredits: boolean;
    /**
     * Time length of the default expiration for credits bought in the customer portal.
     * @type {number}
     * @memberof SelfServeSettings
     */
    creditsExpirationLength?: number | null;
    /**
     * Time length unit for the default expiration for credits bought in the customer portal.
     * @type {string}
     * @memberof SelfServeSettings
     */
    creditsExpirationUnit?: string | null;
    /**
     * Price per credit, in cents, that the customer is charged for buying credits through the customer portal
     * @type {number}
     * @memberof SelfServeSettings
     */
    pricePerCreditCents?: number | null;
    /**
     * True if the customer can switch their current price plan via self serve. Defaults to False.
     * @type {boolean}
     * @memberof SelfServeSettings
     */
    switchPricePlans: boolean;
    /**
     * True if the vendor has enabled customization for their customer portal.
     * @type {boolean}
     * @memberof SelfServeSettings
     */
    customization?: boolean;
}

export function SelfServeSettingsFromJSON(json: any): SelfServeSettings {
    return SelfServeSettingsFromJSONTyped(json, false);
}

export function SelfServeSettingsFromJSONTyped(json: any, ignoreDiscriminator: boolean): SelfServeSettings {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'purchaseCredits': json['purchase_credits'],
        'creditsExpirationLength': !exists(json, 'credits_expiration_length') ? undefined : json['credits_expiration_length'],
        'creditsExpirationUnit': !exists(json, 'credits_expiration_unit') ? undefined : json['credits_expiration_unit'],
        'pricePerCreditCents': !exists(json, 'price_per_credit_cents') ? undefined : json['price_per_credit_cents'],
        'switchPricePlans': json['switch_price_plans'],
        'customization': !exists(json, 'customization') ? undefined : json['customization'],
    };
}

export function SelfServeSettingsToJSON(value?: SelfServeSettings | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'purchase_credits': value.purchaseCredits,
        'credits_expiration_length': value.creditsExpirationLength,
        'credits_expiration_unit': value.creditsExpirationUnit,
        'price_per_credit_cents': value.pricePerCreditCents,
        'switch_price_plans': value.switchPricePlans,
        'customization': value.customization,
    };
}
