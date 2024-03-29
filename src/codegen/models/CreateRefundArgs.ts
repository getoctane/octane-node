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
     * Amount to be refunded
     * @type {number}
     * @memberof CreateRefundArgs
     */
    amount?: number;
    /**
     * Invoice that the refund should be against
     * @type {string}
     * @memberof CreateRefundArgs
     */
    invoiceUuid?: string;
    /**
     * Invoice that the refund should be against
     * @type {number}
     * @memberof CreateRefundArgs
     */
    invoiceId?: number;
}

export function CreateRefundArgsFromJSON(json: any): CreateRefundArgs {
    return CreateRefundArgsFromJSONTyped(json, false);
}

export function CreateRefundArgsFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateRefundArgs {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'amount': !exists(json, 'amount') ? undefined : json['amount'],
        'invoiceUuid': !exists(json, 'invoice_uuid') ? undefined : json['invoice_uuid'],
        'invoiceId': !exists(json, 'invoice_id') ? undefined : json['invoice_id'],
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
        
        'amount': value.amount,
        'invoice_uuid': value.invoiceUuid,
        'invoice_id': value.invoiceId,
    };
}

