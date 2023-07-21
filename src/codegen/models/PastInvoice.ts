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
 * @interface PastInvoice
 */
export interface PastInvoice {
    /**
     * 
     * @type {Date}
     * @memberof PastInvoice
     */
    issueDate?: Date;
    /**
     * 
     * @type {string}
     * @memberof PastInvoice
     */
    customerName?: string;
    /**
     * 
     * @type {string}
     * @memberof PastInvoice
     */
    statusDescription?: string;
    /**
     * 
     * @type {string}
     * @memberof PastInvoice
     */
    exportUrl?: string;
    /**
     * 
     * @type {Date}
     * @memberof PastInvoice
     */
    dueDate?: Date;
    /**
     * 
     * @type {string}
     * @memberof PastInvoice
     */
    status?: string;
    /**
     * External unique 'uuid' identifier for this Invoice.
     * @type {string}
     * @memberof PastInvoice
     */
    id?: string;
    /**
     * 
     * @type {number}
     * @memberof PastInvoice
     */
    amountDue?: number;
}

export function PastInvoiceFromJSON(json: any): PastInvoice {
    return PastInvoiceFromJSONTyped(json, false);
}

export function PastInvoiceFromJSONTyped(json: any, ignoreDiscriminator: boolean): PastInvoice {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'issueDate': !exists(json, 'issue_date') ? undefined : (new Date(json['issue_date'])),
        'customerName': !exists(json, 'customer_name') ? undefined : json['customer_name'],
        'statusDescription': !exists(json, 'status_description') ? undefined : json['status_description'],
        'exportUrl': !exists(json, 'export_url') ? undefined : json['export_url'],
        'dueDate': !exists(json, 'due_date') ? undefined : (new Date(json['due_date'])),
        'status': !exists(json, 'status') ? undefined : json['status'],
        'id': !exists(json, 'id') ? undefined : json['id'],
        'amountDue': !exists(json, 'amount_due') ? undefined : json['amount_due'],
    };
}

export function PastInvoiceToJSON(value?: PastInvoice | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'issue_date': value.issueDate === undefined ? undefined : (value.issueDate.toISOString()),
        'customer_name': value.customerName,
        'status_description': value.statusDescription,
        'export_url': value.exportUrl,
        'due_date': value.dueDate === undefined ? undefined : (value.dueDate.toISOString()),
        'status': value.status,
        'id': value.id,
        'amount_due': value.amountDue,
    };
}

