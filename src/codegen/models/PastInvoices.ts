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
    PastInvoice,
    PastInvoiceFromJSON,
    PastInvoiceFromJSONTyped,
    PastInvoiceToJSON,
} from './PastInvoice';

/**
 * 
 * @export
 * @interface PastInvoices
 */
export interface PastInvoices {
    /**
     * 
     * @type {Array<PastInvoice>}
     * @memberof PastInvoices
     */
    invoices?: Array<PastInvoice>;
    /**
     * The number of items to fetch. Defaults to 10.
     * @type {number}
     * @memberof PastInvoices
     */
    limit?: number;
    /**
     * 
     * @type {string}
     * @memberof PastInvoices
     */
    sortDirection?: string;
    /**
     * 
     * @type {string}
     * @memberof PastInvoices
     */
    sortColumn?: string;
    /**
     * The unique offset to start at when paging forwards
     * @type {string}
     * @memberof PastInvoices
     */
    forwardSecondarySortOffset?: string;
    /**
     * The sort column offset to start at when paging forwards
     * @type {string}
     * @memberof PastInvoices
     */
    forwardSortOffset?: string;
}

export function PastInvoicesFromJSON(json: any): PastInvoices {
    return PastInvoicesFromJSONTyped(json, false);
}

export function PastInvoicesFromJSONTyped(json: any, ignoreDiscriminator: boolean): PastInvoices {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'invoices': !exists(json, 'invoices') ? undefined : ((json['invoices'] as Array<any>).map(PastInvoiceFromJSON)),
        'limit': !exists(json, 'limit') ? undefined : json['limit'],
        'sortDirection': !exists(json, 'sort_direction') ? undefined : json['sort_direction'],
        'sortColumn': !exists(json, 'sort_column') ? undefined : json['sort_column'],
        'forwardSecondarySortOffset': !exists(json, 'forward_secondary_sort_offset') ? undefined : json['forward_secondary_sort_offset'],
        'forwardSortOffset': !exists(json, 'forward_sort_offset') ? undefined : json['forward_sort_offset'],
    };
}

export function PastInvoicesToJSON(value?: PastInvoices | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'invoices': value.invoices === undefined ? undefined : ((value.invoices as Array<any>).map(PastInvoiceToJSON)),
        'limit': value.limit,
        'sort_direction': value.sortDirection,
        'sort_column': value.sortColumn,
        'forward_secondary_sort_offset': value.forwardSecondarySortOffset,
        'forward_sort_offset': value.forwardSortOffset,
    };
}

