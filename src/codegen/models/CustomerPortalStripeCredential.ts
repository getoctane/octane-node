/* tslint:disable */
/* eslint-disable */
/**
 * Octane API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0.1
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
 * @interface CustomerPortalStripeCredential
 */
export interface CustomerPortalStripeCredential {
    /**
     * 
     * @type {string}
     * @memberof CustomerPortalStripeCredential
     */
    accountId?: string;
    /**
     * 
     * @type {string}
     * @memberof CustomerPortalStripeCredential
     */
    clientSecret?: string;
    /**
     * 
     * @type {string}
     * @memberof CustomerPortalStripeCredential
     */
    publishableKey?: string;
}

export function CustomerPortalStripeCredentialFromJSON(json: any): CustomerPortalStripeCredential {
    return CustomerPortalStripeCredentialFromJSONTyped(json, false);
}

export function CustomerPortalStripeCredentialFromJSONTyped(json: any, ignoreDiscriminator: boolean): CustomerPortalStripeCredential {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'accountId': !exists(json, 'account_id') ? undefined : json['account_id'],
        'clientSecret': !exists(json, 'client_secret') ? undefined : json['client_secret'],
        'publishableKey': !exists(json, 'publishable_key') ? undefined : json['publishable_key'],
    };
}

export function CustomerPortalStripeCredentialToJSON(value?: CustomerPortalStripeCredential | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'account_id': value.accountId,
        'client_secret': value.clientSecret,
        'publishable_key': value.publishableKey,
    };
}

