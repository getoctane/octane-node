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
 * @interface CustomerPaymentMethodStatus
 */
export interface CustomerPaymentMethodStatus {
    /**
     * 
     * @type {string}
     * @memberof CustomerPaymentMethodStatus
     */
    status?: string;
}

export function CustomerPaymentMethodStatusFromJSON(json: any): CustomerPaymentMethodStatus {
    return CustomerPaymentMethodStatusFromJSONTyped(json, false);
}

export function CustomerPaymentMethodStatusFromJSONTyped(json: any, ignoreDiscriminator: boolean): CustomerPaymentMethodStatus {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'status': !exists(json, 'status') ? undefined : json['status'],
    };
}

export function CustomerPaymentMethodStatusToJSON(value?: CustomerPaymentMethodStatus | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'status': value.status,
    };
}

