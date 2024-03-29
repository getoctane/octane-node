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
 * @interface PriceTier
 */
export interface PriceTier {
    /**
     * Cap of the tier, meaning that any subsequent usage will be bucketed into the following tier. If cap is undefined, it is effectively treated as Infinity.
     * @type {number}
     * @memberof PriceTier
     */
    cap?: number;
    /**
     * The line item description to use if usage falls in this tier.
     * @type {string}
     * @memberof PriceTier
     */
    description?: string;
    /**
     * The price (in lowest currency denomination by which to charge, given that the usage is within the cap range.
     * @type {number}
     * @memberof PriceTier
     */
    price: number;
}

export function PriceTierFromJSON(json: any): PriceTier {
    return PriceTierFromJSONTyped(json, false);
}

export function PriceTierFromJSONTyped(json: any, ignoreDiscriminator: boolean): PriceTier {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'cap': !exists(json, 'cap') ? undefined : json['cap'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'price': json['price'],
    };
}

export function PriceTierToJSON(value?: PriceTier | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'cap': value.cap,
        'description': value.description,
        'price': value.price,
    };
}

