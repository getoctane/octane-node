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
    CreditGrant,
    CreditGrantFromJSON,
    CreditGrantFromJSONTyped,
    CreditGrantToJSON,
} from './CreditGrant';

/**
 * 
 * @export
 * @interface ListCreditGrants
 */
export interface ListCreditGrants {
    /**
     * 
     * @type {Array<CreditGrant>}
     * @memberof ListCreditGrants
     */
    creditGrants?: Array<CreditGrant>;
    /**
     * 
     * @type {string}
     * @memberof ListCreditGrants
     */
    sortColumn?: string;
    /**
     * The number of items to fetch. Defaults to 10.
     * @type {number}
     * @memberof ListCreditGrants
     */
    limit?: number;
    /**
     * The unique offset to start at when paging forwards
     * @type {string}
     * @memberof ListCreditGrants
     */
    forwardSecondarySortOffset?: string;
    /**
     * 
     * @type {string}
     * @memberof ListCreditGrants
     */
    sortDirection?: string;
    /**
     * The sort column offset to start at when paging forwards
     * @type {string}
     * @memberof ListCreditGrants
     */
    forwardSortOffset?: string;
}

export function ListCreditGrantsFromJSON(json: any): ListCreditGrants {
    return ListCreditGrantsFromJSONTyped(json, false);
}

export function ListCreditGrantsFromJSONTyped(json: any, ignoreDiscriminator: boolean): ListCreditGrants {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'creditGrants': !exists(json, 'credit_grants') ? undefined : ((json['credit_grants'] as Array<any>).map(CreditGrantFromJSON)),
        'sortColumn': !exists(json, 'sort_column') ? undefined : json['sort_column'],
        'limit': !exists(json, 'limit') ? undefined : json['limit'],
        'forwardSecondarySortOffset': !exists(json, 'forward_secondary_sort_offset') ? undefined : json['forward_secondary_sort_offset'],
        'sortDirection': !exists(json, 'sort_direction') ? undefined : json['sort_direction'],
        'forwardSortOffset': !exists(json, 'forward_sort_offset') ? undefined : json['forward_sort_offset'],
    };
}

export function ListCreditGrantsToJSON(value?: ListCreditGrants | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'credit_grants': value.creditGrants === undefined ? undefined : ((value.creditGrants as Array<any>).map(CreditGrantToJSON)),
        'sort_column': value.sortColumn,
        'limit': value.limit,
        'forward_secondary_sort_offset': value.forwardSecondarySortOffset,
        'sort_direction': value.sortDirection,
        'forward_sort_offset': value.forwardSortOffset,
    };
}

