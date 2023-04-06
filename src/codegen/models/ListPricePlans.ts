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
    PricePlan,
    PricePlanFromJSON,
    PricePlanFromJSONTyped,
    PricePlanToJSON,
} from './PricePlan';

/**
 * 
 * @export
 * @interface ListPricePlans
 */
export interface ListPricePlans {
    /**
     * The number of items to fetch. Defaults to 10.
     * @type {number}
     * @memberof ListPricePlans
     */
    limit?: number;
    /**
     * 
     * @type {string}
     * @memberof ListPricePlans
     */
    sortDirection?: string;
    /**
     * The sort column offset to start at when paging forwards
     * @type {string}
     * @memberof ListPricePlans
     */
    forwardSortOffset?: string;
    /**
     * The unique offset to start at when paging forwards
     * @type {string}
     * @memberof ListPricePlans
     */
    forwardSecondarySortOffset?: string;
    /**
     * 
     * @type {string}
     * @memberof ListPricePlans
     */
    sortColumn?: string;
    /**
     * 
     * @type {Array<PricePlan>}
     * @memberof ListPricePlans
     */
    pricePlans?: Array<PricePlan>;
}

export function ListPricePlansFromJSON(json: any): ListPricePlans {
    return ListPricePlansFromJSONTyped(json, false);
}

export function ListPricePlansFromJSONTyped(json: any, ignoreDiscriminator: boolean): ListPricePlans {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'limit': !exists(json, 'limit') ? undefined : json['limit'],
        'sortDirection': !exists(json, 'sort_direction') ? undefined : json['sort_direction'],
        'forwardSortOffset': !exists(json, 'forward_sort_offset') ? undefined : json['forward_sort_offset'],
        'forwardSecondarySortOffset': !exists(json, 'forward_secondary_sort_offset') ? undefined : json['forward_secondary_sort_offset'],
        'sortColumn': !exists(json, 'sort_column') ? undefined : json['sort_column'],
        'pricePlans': !exists(json, 'price_plans') ? undefined : ((json['price_plans'] as Array<any>).map(PricePlanFromJSON)),
    };
}

export function ListPricePlansToJSON(value?: ListPricePlans | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'limit': value.limit,
        'sort_direction': value.sortDirection,
        'forward_sort_offset': value.forwardSortOffset,
        'forward_secondary_sort_offset': value.forwardSecondarySortOffset,
        'sort_column': value.sortColumn,
        'price_plans': value.pricePlans === undefined ? undefined : ((value.pricePlans as Array<any>).map(PricePlanToJSON)),
    };
}
