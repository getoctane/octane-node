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
    LineItems,
    LineItemsFromJSON,
    LineItemsFromJSONTyped,
    LineItemsToJSON,
} from './LineItems';

/**
 * 
 * @export
 * @interface Invoice
 */
export interface Invoice {
    /**
     * The number of retries done to send the invoice
     * @type {number}
     * @memberof Invoice
     */
    invoiceRetryAttempt?: number;
    /**
     * [DEPRECATED] Start time of the cycle in which the invoice was generated
     * @type {Date}
     * @memberof Invoice
     */
    startTime?: Date;
    /**
     * Any discount credits applied to the invoice
     * @type {number}
     * @memberof Invoice
     */
    discountCredit?: number;
    /**
     * Tax amount applied to subtotal
     * @type {number}
     * @memberof Invoice
     */
    taxAmount?: number;
    /**
     * 
     * @type {Date}
     * @memberof Invoice
     */
    latestPaymentAttemptAt?: Date;
    /**
     * 
     * @type {Date}
     * @memberof Invoice
     */
    dueDate?: Date;
    /**
     * The number of retries done to process the payment
     * @type {number}
     * @memberof Invoice
     */
    paymentRetryAttempt?: number;
    /**
     * [DEPRECATED] End time of the cycle in which the invoice was generated
     * @type {Date}
     * @memberof Invoice
     */
    endTime?: Date;
    /**
     * External unique 'uuid' identifier for this Invoice.
     * @type {string}
     * @memberof Invoice
     */
    id?: string;
    /**
     * Total amount due
     * @type {number}
     * @memberof Invoice
     */
    amountDue?: number;
    /**
     * False if not paid yet
     * @type {boolean}
     * @memberof Invoice
     */
    isPaid?: boolean;
    /**
     * Non-empty string if there was an error while processing payment
     * @type {string}
     * @memberof Invoice
     */
    paymentError?: string;
    /**
     * If there is an error processing this invoice, this field contains the error message.
     * @type {string}
     * @memberof Invoice
     */
    statusError?: string;
    /**
     * Non-empty string if there was an error while sending out invoice
     * @type {string}
     * @memberof Invoice
     */
    invoicingError?: string;
    /**
     * 
     * @type {Array<LineItems>}
     * @memberof Invoice
     */
    lineItems?: Array<LineItems>;
    /**
     * The potentially permanent state this invoice can live in (e.g., ISSUED if the invoice has been issued to the customer)
     * @type {string}
     * @memberof Invoice
     */
    status?: string;
    /**
     * 
     * @type {Date}
     * @memberof Invoice
     */
    latestInvoiceAttemptAt?: Date;
    /**
     * Earliest start time of line items covered by the invoice
     * @type {Date}
     * @memberof Invoice
     */
    minItemStartTime?: Date;
    /**
     * Latest end time of line items covered by the invoice
     * @type {Date}
     * @memberof Invoice
     */
    maxItemEndTime?: Date;
    /**
     * False if invoice has not been sent to the customer
     * @type {boolean}
     * @memberof Invoice
     */
    isInvoiced?: boolean;
    /**
     * Amount due before any credits are applied
     * @type {number}
     * @memberof Invoice
     */
    subTotal?: number;
    /**
     * The date the invoice will be issued to the end customer or forwarded to the payment processor.
     * @type {Date}
     * @memberof Invoice
     */
    issueDate?: Date;
    /**
     * False if not approved
     * @type {boolean}
     * @memberof Invoice
     */
    isApproved?: boolean;
    /**
     * Name of the customer this invoice is for.
     * @type {string}
     * @memberof Invoice
     */
    customerName?: string;
    /**
     * 
     * @type {string}
     * @memberof Invoice
     */
    pdfUrl?: string;
}

export function InvoiceFromJSON(json: any): Invoice {
    return InvoiceFromJSONTyped(json, false);
}

export function InvoiceFromJSONTyped(json: any, ignoreDiscriminator: boolean): Invoice {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'invoiceRetryAttempt': !exists(json, 'invoice_retry_attempt') ? undefined : json['invoice_retry_attempt'],
        'startTime': !exists(json, 'start_time') ? undefined : (new Date(json['start_time'])),
        'discountCredit': !exists(json, 'discount_credit') ? undefined : json['discount_credit'],
        'taxAmount': !exists(json, 'tax_amount') ? undefined : json['tax_amount'],
        'latestPaymentAttemptAt': !exists(json, 'latest_payment_attempt_at') ? undefined : (new Date(json['latest_payment_attempt_at'])),
        'dueDate': !exists(json, 'due_date') ? undefined : (new Date(json['due_date'])),
        'paymentRetryAttempt': !exists(json, 'payment_retry_attempt') ? undefined : json['payment_retry_attempt'],
        'endTime': !exists(json, 'end_time') ? undefined : (new Date(json['end_time'])),
        'id': !exists(json, 'id') ? undefined : json['id'],
        'amountDue': !exists(json, 'amount_due') ? undefined : json['amount_due'],
        'isPaid': !exists(json, 'is_paid') ? undefined : json['is_paid'],
        'paymentError': !exists(json, 'payment_error') ? undefined : json['payment_error'],
        'statusError': !exists(json, 'status_error') ? undefined : json['status_error'],
        'invoicingError': !exists(json, 'invoicing_error') ? undefined : json['invoicing_error'],
        'lineItems': !exists(json, 'line_items') ? undefined : ((json['line_items'] as Array<any>).map(LineItemsFromJSON)),
        'status': !exists(json, 'status') ? undefined : json['status'],
        'latestInvoiceAttemptAt': !exists(json, 'latest_invoice_attempt_at') ? undefined : (new Date(json['latest_invoice_attempt_at'])),
        'minItemStartTime': !exists(json, 'min_item_start_time') ? undefined : (new Date(json['min_item_start_time'])),
        'maxItemEndTime': !exists(json, 'max_item_end_time') ? undefined : (new Date(json['max_item_end_time'])),
        'isInvoiced': !exists(json, 'is_invoiced') ? undefined : json['is_invoiced'],
        'subTotal': !exists(json, 'sub_total') ? undefined : json['sub_total'],
        'issueDate': !exists(json, 'issue_date') ? undefined : (new Date(json['issue_date'])),
        'isApproved': !exists(json, 'is_approved') ? undefined : json['is_approved'],
        'customerName': !exists(json, 'customer_name') ? undefined : json['customer_name'],
        'pdfUrl': !exists(json, 'pdf_url') ? undefined : json['pdf_url'],
    };
}

export function InvoiceToJSON(value?: Invoice | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'invoice_retry_attempt': value.invoiceRetryAttempt,
        'start_time': value.startTime === undefined ? undefined : (value.startTime.toISOString()),
        'discount_credit': value.discountCredit,
        'tax_amount': value.taxAmount,
        'latest_payment_attempt_at': value.latestPaymentAttemptAt === undefined ? undefined : (value.latestPaymentAttemptAt.toISOString()),
        'due_date': value.dueDate === undefined ? undefined : (value.dueDate.toISOString()),
        'payment_retry_attempt': value.paymentRetryAttempt,
        'end_time': value.endTime === undefined ? undefined : (value.endTime.toISOString()),
        'id': value.id,
        'amount_due': value.amountDue,
        'is_paid': value.isPaid,
        'payment_error': value.paymentError,
        'status_error': value.statusError,
        'invoicing_error': value.invoicingError,
        'line_items': value.lineItems === undefined ? undefined : ((value.lineItems as Array<any>).map(LineItemsToJSON)),
        'status': value.status,
        'latest_invoice_attempt_at': value.latestInvoiceAttemptAt === undefined ? undefined : (value.latestInvoiceAttemptAt.toISOString()),
        'min_item_start_time': value.minItemStartTime === undefined ? undefined : (value.minItemStartTime.toISOString()),
        'max_item_end_time': value.maxItemEndTime === undefined ? undefined : (value.maxItemEndTime.toISOString()),
        'is_invoiced': value.isInvoiced,
        'sub_total': value.subTotal,
        'issue_date': value.issueDate === undefined ? undefined : (value.issueDate.toISOString()),
        'is_approved': value.isApproved,
        'customer_name': value.customerName,
        'pdf_url': value.pdfUrl,
    };
}

