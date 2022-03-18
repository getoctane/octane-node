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
    LineItems,
    LineItemsFromJSON,
    LineItemsFromJSONTyped,
    LineItemsToJSON,
} from './LineItems';

/**
 * 
 * @export
 * @interface RevenueBreakdown
 */
export interface RevenueBreakdown {
    /**
     * 
     * @type {Array<LineItems>}
     * @memberof RevenueBreakdown
     */
    lineItems?: Array<LineItems>;
    /**
     * 
     * @type {number}
     * @memberof RevenueBreakdown
     */
    totalRevenue?: number;
}

export function RevenueBreakdownFromJSON(json: any): RevenueBreakdown {
    return RevenueBreakdownFromJSONTyped(json, false);
}

export function RevenueBreakdownFromJSONTyped(json: any, ignoreDiscriminator: boolean): RevenueBreakdown {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'lineItems': !exists(json, 'line_items') ? undefined : ((json['line_items'] as Array<any>).map(LineItemsFromJSON)),
        'totalRevenue': !exists(json, 'total_revenue') ? undefined : json['total_revenue'],
    };
}

export function RevenueBreakdownToJSON(value?: RevenueBreakdown | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'line_items': value.lineItems === undefined ? undefined : ((value.lineItems as Array<any>).map(LineItemsToJSON)),
        'total_revenue': value.totalRevenue,
    };
}
