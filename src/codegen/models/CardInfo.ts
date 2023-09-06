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
     * Last 4 digits of the card.
     * @type {string}
     * @memberof CardInfo
     */
    last4?: string;
    /**
     * Brand of card. E.g. Amex, Visa, etc.
     * @type {string}
     * @memberof CardInfo
     */
    brand?: string;
    /**
     * 
     * @type {string}
     * @memberof CardInfo
     */
    externalId?: string;
    /**
     * Year the card expires
     * @type {number}
     * @memberof CardInfo
     */
    expYear?: number;
    /**
     * Country of the card
     * @type {string}
     * @memberof CardInfo
     */
    country?: string;
    /**
     * Month the card expires
     * @type {number}
     * @memberof CardInfo
     */
    expMonth?: number;
}

export function CardInfoFromJSON(json: any): CardInfo {
    return CardInfoFromJSONTyped(json, false);
}

export function CardInfoFromJSONTyped(json: any, ignoreDiscriminator: boolean): CardInfo {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'last4': !exists(json, 'last4') ? undefined : json['last4'],
        'brand': !exists(json, 'brand') ? undefined : json['brand'],
        'externalId': !exists(json, 'external_id') ? undefined : json['external_id'],
        'expYear': !exists(json, 'exp_year') ? undefined : json['exp_year'],
        'country': !exists(json, 'country') ? undefined : json['country'],
        'expMonth': !exists(json, 'exp_month') ? undefined : json['exp_month'],
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
        
        'last4': value.last4,
        'brand': value.brand,
        'external_id': value.externalId,
        'exp_year': value.expYear,
        'country': value.country,
        'exp_month': value.expMonth,
    };
}

