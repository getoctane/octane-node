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
     * The id offset to start at when paging backwards
     * @type {number}
     * @memberof PastInvoices
     */
    backwardSecondarySortOffset?: number;
    /**
     * The sort column offset to start at when paging backwards
     * @type {string}
     * @memberof PastInvoices
     */
    backwardSortOffset?: string;
    /**
     * The id offset to start at when paging forwards
     * @type {number}
     * @memberof PastInvoices
     */
    forwardSecondarySortOffset?: number;
    /**
     * The sort column offset to start at when paging forwards
     * @type {string}
     * @memberof PastInvoices
     */
    forwardSortOffset?: string;
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
    sortColumn?: string;
    /**
     * 
     * @type {string}
     * @memberof PastInvoices
     */
    sortDirection?: string;
}

export function PastInvoicesFromJSON(json: any): PastInvoices {
    return PastInvoicesFromJSONTyped(json, false);
}

export function PastInvoicesFromJSONTyped(json: any, ignoreDiscriminator: boolean): PastInvoices {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'backwardSecondarySortOffset': !exists(json, 'backward_secondary_sort_offset') ? undefined : json['backward_secondary_sort_offset'],
        'backwardSortOffset': !exists(json, 'backward_sort_offset') ? undefined : json['backward_sort_offset'],
        'forwardSecondarySortOffset': !exists(json, 'forward_secondary_sort_offset') ? undefined : json['forward_secondary_sort_offset'],
        'forwardSortOffset': !exists(json, 'forward_sort_offset') ? undefined : json['forward_sort_offset'],
        'invoices': !exists(json, 'invoices') ? undefined : ((json['invoices'] as Array<any>).map(PastInvoiceFromJSON)),
        'limit': !exists(json, 'limit') ? undefined : json['limit'],
        'sortColumn': !exists(json, 'sort_column') ? undefined : json['sort_column'],
        'sortDirection': !exists(json, 'sort_direction') ? undefined : json['sort_direction'],
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
        
        'backward_secondary_sort_offset': value.backwardSecondarySortOffset,
        'backward_sort_offset': value.backwardSortOffset,
        'forward_secondary_sort_offset': value.forwardSecondarySortOffset,
        'forward_sort_offset': value.forwardSortOffset,
        'invoices': value.invoices === undefined ? undefined : ((value.invoices as Array<any>).map(PastInvoiceToJSON)),
        'limit': value.limit,
        'sort_column': value.sortColumn,
        'sort_direction': value.sortDirection,
    };
}

