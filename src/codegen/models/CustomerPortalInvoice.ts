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
import {
    CustomerPortalInvoiceStatus,
    CustomerPortalInvoiceStatusFromJSON,
    CustomerPortalInvoiceStatusFromJSONTyped,
    CustomerPortalInvoiceStatusToJSON,
} from './CustomerPortalInvoiceStatus';
import {
    LineItems,
    LineItemsFromJSON,
    LineItemsFromJSONTyped,
    LineItemsToJSON,
} from './LineItems';

/**
 * 
 * @export
 * @interface CustomerPortalInvoice
 */
export interface CustomerPortalInvoice {
    /**
     * The date the invoice will be issued to the end customer or forwarded to the payment processor.
     * @type {Date}
     * @memberof CustomerPortalInvoice
     */
    issueDate?: Date;
    /**
     * Amount due before any credits are applied
     * @type {number}
     * @memberof CustomerPortalInvoice
     */
    subTotal?: number;
    /**
     * Tax amount applied to subtotal
     * @type {number}
     * @memberof CustomerPortalInvoice
     */
    taxAmount?: number;
    /**
     * Latest end time of line items covered by the invoice
     * @type {Date}
     * @memberof CustomerPortalInvoice
     */
    maxItemEndTime?: Date;
    /**
     * External invoice number
     * @type {string}
     * @memberof CustomerPortalInvoice
     */
    externalInvoiceNumber?: string;
    /**
     * Total amount due
     * @type {number}
     * @memberof CustomerPortalInvoice
     */
    amountDue?: number;
    /**
     * [DEPRECATED] Start time of the cycle in which the invoice was generated
     * @type {Date}
     * @memberof CustomerPortalInvoice
     */
    startTime?: Date;
    /**
     * 
     * @type {Date}
     * @memberof CustomerPortalInvoice
     */
    dueDate?: Date;
    /**
     * 
     * @type {string}
     * @memberof CustomerPortalInvoice
     */
    id?: string;
    /**
     * Earliest start time of line items covered by the invoice
     * @type {Date}
     * @memberof CustomerPortalInvoice
     */
    minItemStartTime?: Date;
    /**
     * Url pointing to the pdf of this invoice.
     * @type {string}
     * @memberof CustomerPortalInvoice
     */
    pdfUrl?: string;
    /**
     * [DEPRECATED] End time of the cycle in which the invoice was generated
     * @type {Date}
     * @memberof CustomerPortalInvoice
     */
    endTime?: Date;
    /**
     * Information related to the current status of this invoice.
     * @type {CustomerPortalInvoiceStatus}
     * @memberof CustomerPortalInvoice
     */
    status?: CustomerPortalInvoiceStatus | null;
    /**
     * False if not paid yet
     * @type {boolean}
     * @memberof CustomerPortalInvoice
     */
    isPaid?: boolean;
    /**
     * Any discount credits applied to the invoice
     * @type {number}
     * @memberof CustomerPortalInvoice
     */
    discountCredit?: number;
    /**
     * 
     * @type {Array<LineItems>}
     * @memberof CustomerPortalInvoice
     */
    lineItems?: Array<LineItems>;
}

export function CustomerPortalInvoiceFromJSON(json: any): CustomerPortalInvoice {
    return CustomerPortalInvoiceFromJSONTyped(json, false);
}

export function CustomerPortalInvoiceFromJSONTyped(json: any, ignoreDiscriminator: boolean): CustomerPortalInvoice {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'issueDate': !exists(json, 'issue_date') ? undefined : (new Date(json['issue_date'])),
        'subTotal': !exists(json, 'sub_total') ? undefined : json['sub_total'],
        'taxAmount': !exists(json, 'tax_amount') ? undefined : json['tax_amount'],
        'maxItemEndTime': !exists(json, 'max_item_end_time') ? undefined : (new Date(json['max_item_end_time'])),
        'externalInvoiceNumber': !exists(json, 'external_invoice_number') ? undefined : json['external_invoice_number'],
        'amountDue': !exists(json, 'amount_due') ? undefined : json['amount_due'],
        'startTime': !exists(json, 'start_time') ? undefined : (new Date(json['start_time'])),
        'dueDate': !exists(json, 'due_date') ? undefined : (new Date(json['due_date'])),
        'id': !exists(json, 'id') ? undefined : json['id'],
        'minItemStartTime': !exists(json, 'min_item_start_time') ? undefined : (new Date(json['min_item_start_time'])),
        'pdfUrl': !exists(json, 'pdf_url') ? undefined : json['pdf_url'],
        'endTime': !exists(json, 'end_time') ? undefined : (new Date(json['end_time'])),
        'status': !exists(json, 'status') ? undefined : CustomerPortalInvoiceStatusFromJSON(json['status']),
        'isPaid': !exists(json, 'is_paid') ? undefined : json['is_paid'],
        'discountCredit': !exists(json, 'discount_credit') ? undefined : json['discount_credit'],
        'lineItems': !exists(json, 'line_items') ? undefined : ((json['line_items'] as Array<any>).map(LineItemsFromJSON)),
    };
}

export function CustomerPortalInvoiceToJSON(value?: CustomerPortalInvoice | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'issue_date': value.issueDate === undefined ? undefined : (value.issueDate.toISOString()),
        'sub_total': value.subTotal,
        'tax_amount': value.taxAmount,
        'max_item_end_time': value.maxItemEndTime === undefined ? undefined : (value.maxItemEndTime.toISOString()),
        'external_invoice_number': value.externalInvoiceNumber,
        'amount_due': value.amountDue,
        'start_time': value.startTime === undefined ? undefined : (value.startTime.toISOString()),
        'due_date': value.dueDate === undefined ? undefined : (value.dueDate.toISOString()),
        'id': value.id,
        'min_item_start_time': value.minItemStartTime === undefined ? undefined : (value.minItemStartTime.toISOString()),
        'pdf_url': value.pdfUrl,
        'end_time': value.endTime === undefined ? undefined : (value.endTime.toISOString()),
        'status': CustomerPortalInvoiceStatusToJSON(value.status),
        'is_paid': value.isPaid,
        'discount_credit': value.discountCredit,
        'line_items': value.lineItems === undefined ? undefined : ((value.lineItems as Array<any>).map(LineItemsToJSON)),
    };
}

