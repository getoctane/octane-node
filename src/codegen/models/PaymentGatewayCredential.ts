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
 * @interface PaymentGatewayCredential
 */
export interface PaymentGatewayCredential {
    /**
     * Payment gateway account id associated with customer
     * @type {string}
     * @memberof PaymentGatewayCredential
     */
    accountId: string;
    /**
     * Unique name identifier of a customer
     * @type {string}
     * @memberof PaymentGatewayCredential
     */
    authToken?: string | null;
    /**
     * 
     * @type {any}
     * @memberof PaymentGatewayCredential
     */
    readonly paymentGateway?: any | null;
}

export function PaymentGatewayCredentialFromJSON(json: any): PaymentGatewayCredential {
    return PaymentGatewayCredentialFromJSONTyped(json, false);
}

export function PaymentGatewayCredentialFromJSONTyped(json: any, ignoreDiscriminator: boolean): PaymentGatewayCredential {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'accountId': json['account_id'],
        'authToken': !exists(json, 'auth_token') ? undefined : json['auth_token'],
        'paymentGateway': !exists(json, 'payment_gateway') ? undefined : json['payment_gateway'],
    };
}

export function PaymentGatewayCredentialToJSON(value?: PaymentGatewayCredential | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'account_id': value.accountId,
        'auth_token': value.authToken,
    };
}

