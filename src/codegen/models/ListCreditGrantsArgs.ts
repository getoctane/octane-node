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
 * @interface ListCreditGrantsArgs
 */
export interface ListCreditGrantsArgs {
    /**
     * The sort column offset to start at when paging forwards
     * @type {string}
     * @memberof ListCreditGrantsArgs
     */
    forwardSortOffset?: string;
    /**
     * The number of items to fetch. Defaults to 10.
     * @type {number}
     * @memberof ListCreditGrantsArgs
     */
    limit?: number;
    /**
     * 
     * @type {string}
     * @memberof ListCreditGrantsArgs
     */
    sortColumn?: string;
    /**
     * Customer to filter the results to
     * @type {string}
     * @memberof ListCreditGrantsArgs
     */
    customerName?: string;
    /**
     * 
     * @type {string}
     * @memberof ListCreditGrantsArgs
     */
    sortDirection?: string;
    /**
     * The unique offset to start at when paging forwards
     * @type {string}
     * @memberof ListCreditGrantsArgs
     */
    forwardSecondarySortOffset?: string;
}

export function ListCreditGrantsArgsFromJSON(json: any): ListCreditGrantsArgs {
    return ListCreditGrantsArgsFromJSONTyped(json, false);
}

export function ListCreditGrantsArgsFromJSONTyped(json: any, ignoreDiscriminator: boolean): ListCreditGrantsArgs {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'forwardSortOffset': !exists(json, 'forward_sort_offset') ? undefined : json['forward_sort_offset'],
        'limit': !exists(json, 'limit') ? undefined : json['limit'],
        'sortColumn': !exists(json, 'sort_column') ? undefined : json['sort_column'],
        'customerName': !exists(json, 'customer_name') ? undefined : json['customer_name'],
        'sortDirection': !exists(json, 'sort_direction') ? undefined : json['sort_direction'],
        'forwardSecondarySortOffset': !exists(json, 'forward_secondary_sort_offset') ? undefined : json['forward_secondary_sort_offset'],
    };
}

export function ListCreditGrantsArgsToJSON(value?: ListCreditGrantsArgs | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'forward_sort_offset': value.forwardSortOffset,
        'limit': value.limit,
        'sort_column': value.sortColumn,
        'customer_name': value.customerName,
        'sort_direction': value.sortDirection,
        'forward_secondary_sort_offset': value.forwardSecondarySortOffset,
    };
}

