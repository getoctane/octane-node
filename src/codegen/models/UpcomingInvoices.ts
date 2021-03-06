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
    UpcomingInvoice,
    UpcomingInvoiceFromJSON,
    UpcomingInvoiceFromJSONTyped,
    UpcomingInvoiceToJSON,
} from './UpcomingInvoice';

/**
 * 
 * @export
 * @interface UpcomingInvoices
 */
export interface UpcomingInvoices {
    /**
     * The id offset to start at when paging backwards
     * @type {number}
     * @memberof UpcomingInvoices
     */
    backwardSecondarySortOffset?: number;
    /**
     * The sort column offset to start at when paging backwards
     * @type {string}
     * @memberof UpcomingInvoices
     */
    backwardSortOffset?: string;
    /**
     * The id offset to start at when paging forwards
     * @type {number}
     * @memberof UpcomingInvoices
     */
    forwardSecondarySortOffset?: number;
    /**
     * The sort column offset to start at when paging forwards
     * @type {string}
     * @memberof UpcomingInvoices
     */
    forwardSortOffset?: string;
    /**
     * 
     * @type {Array<UpcomingInvoice>}
     * @memberof UpcomingInvoices
     */
    invoices?: Array<UpcomingInvoice>;
    /**
     * The number of items to fetch. Defaults to 10.
     * @type {number}
     * @memberof UpcomingInvoices
     */
    limit?: number;
    /**
     * 
     * @type {string}
     * @memberof UpcomingInvoices
     */
    sortColumn?: string;
    /**
     * 
     * @type {string}
     * @memberof UpcomingInvoices
     */
    sortDirection?: string;
}

export function UpcomingInvoicesFromJSON(json: any): UpcomingInvoices {
    return UpcomingInvoicesFromJSONTyped(json, false);
}

export function UpcomingInvoicesFromJSONTyped(json: any, ignoreDiscriminator: boolean): UpcomingInvoices {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'backwardSecondarySortOffset': !exists(json, 'backward_secondary_sort_offset') ? undefined : json['backward_secondary_sort_offset'],
        'backwardSortOffset': !exists(json, 'backward_sort_offset') ? undefined : json['backward_sort_offset'],
        'forwardSecondarySortOffset': !exists(json, 'forward_secondary_sort_offset') ? undefined : json['forward_secondary_sort_offset'],
        'forwardSortOffset': !exists(json, 'forward_sort_offset') ? undefined : json['forward_sort_offset'],
        'invoices': !exists(json, 'invoices') ? undefined : ((json['invoices'] as Array<any>).map(UpcomingInvoiceFromJSON)),
        'limit': !exists(json, 'limit') ? undefined : json['limit'],
        'sortColumn': !exists(json, 'sort_column') ? undefined : json['sort_column'],
        'sortDirection': !exists(json, 'sort_direction') ? undefined : json['sort_direction'],
    };
}

export function UpcomingInvoicesToJSON(value?: UpcomingInvoices | null): any {
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
        'invoices': value.invoices === undefined ? undefined : ((value.invoices as Array<any>).map(UpcomingInvoiceToJSON)),
        'limit': value.limit,
        'sort_column': value.sortColumn,
        'sort_direction': value.sortDirection,
    };
}

