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
 * @interface CardInfo
 */
export interface CardInfo {
    /**
     * Country of the card
     * @type {string}
     * @memberof CardInfo
     */
    country?: string;
    /**
     * Brand of card. E.g. Amex, Visa, etc.
     * @type {string}
     * @memberof CardInfo
     */
    brand?: string;
    /**
     * Last 4 digits of the card.
     * @type {string}
     * @memberof CardInfo
     */
    last4?: string;
    /**
     * 
     * @type {string}
     * @memberof CardInfo
     */
    externalId?: string;
    /**
     * Month the card expires
     * @type {number}
     * @memberof CardInfo
     */
    expMonth?: number;
    /**
     * Year the card expires
     * @type {number}
     * @memberof CardInfo
     */
    expYear?: number;
}

export function CardInfoFromJSON(json: any): CardInfo {
    return CardInfoFromJSONTyped(json, false);
}

export function CardInfoFromJSONTyped(json: any, ignoreDiscriminator: boolean): CardInfo {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'country': !exists(json, 'country') ? undefined : json['country'],
        'brand': !exists(json, 'brand') ? undefined : json['brand'],
        'last4': !exists(json, 'last4') ? undefined : json['last4'],
        'externalId': !exists(json, 'external_id') ? undefined : json['external_id'],
        'expMonth': !exists(json, 'exp_month') ? undefined : json['exp_month'],
        'expYear': !exists(json, 'exp_year') ? undefined : json['exp_year'],
    };
}

export function CardInfoToJSON(value?: CardInfo | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'country': value.country,
        'brand': value.brand,
        'last4': value.last4,
        'external_id': value.externalId,
        'exp_month': value.expMonth,
        'exp_year': value.expYear,
    };
}

