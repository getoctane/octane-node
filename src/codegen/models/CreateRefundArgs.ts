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
 * @interface CreateRefundArgs
 */
export interface CreateRefundArgs {
    /**
     * Invoice that the refund should be against
     * @type {number}
     * @memberof CreateRefundArgs
     */
    invoiceId?: number;
    /**
     * Invoice that the refund should be against
     * @type {string}
     * @memberof CreateRefundArgs
     */
    invoiceUuid?: string;
    /**
     * Amount to be refunded
     * @type {number}
     * @memberof CreateRefundArgs
     */
    amount?: number;
}

export function CreateRefundArgsFromJSON(json: any): CreateRefundArgs {
    return CreateRefundArgsFromJSONTyped(json, false);
}

export function CreateRefundArgsFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateRefundArgs {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'invoiceId': !exists(json, 'invoice_id') ? undefined : json['invoice_id'],
        'invoiceUuid': !exists(json, 'invoice_uuid') ? undefined : json['invoice_uuid'],
        'amount': !exists(json, 'amount') ? undefined : json['amount'],
    };
}

export function CreateRefundArgsToJSON(value?: CreateRefundArgs | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'invoice_id': value.invoiceId,
        'invoice_uuid': value.invoiceUuid,
        'amount': value.amount,
    };
}

