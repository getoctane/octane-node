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
 * @interface AccruedRevenueLineItem
 */
export interface AccruedRevenueLineItem {
    /**
     * 
     *         The identifier of the item being returned. 
     *         For metered component will be meter name, 
     *         for add_ons will be feature name, 
     *         for base price will be price plan name,
     *         for minimum charge will be price plan name,
     *         for metered component minimum charge will be meter name
     *         
     * @type {string}
     * @memberof AccruedRevenueLineItem
     */
    itemIdentifier?: string;
    /**
     * Accrued revenue for this line item in cents
     * @type {number}
     * @memberof AccruedRevenueLineItem
     */
    revenue?: number;
    /**
     * Type of item. One of: METERED_COMPONENT, BASE_PRICE, DISCOUNT, ADD_ON, MINIMUM_CHARGE, METERED_COMPONENT_MINIMUM_CHARGE
     * @type {string}
     * @memberof AccruedRevenueLineItem
     */
    itemType?: string;
    /**
     * Unit name for the usage. Only applicable for metered components.
     * @type {string}
     * @memberof AccruedRevenueLineItem
     */
    usageUnitName?: string;
    /**
     * Any extra metadata associated with the item. 
     *         Will include the labels for metered components and metered component minimum charges when applicable
     * @type {{ [key: string]: string; }}
     * @memberof AccruedRevenueLineItem
     */
    metadata?: { [key: string]: string; };
    /**
     * Usage for this line item. Only applicable for metered components.
     * @type {number}
     * @memberof AccruedRevenueLineItem
     */
    usage?: number;
}

export function AccruedRevenueLineItemFromJSON(json: any): AccruedRevenueLineItem {
    return AccruedRevenueLineItemFromJSONTyped(json, false);
}

export function AccruedRevenueLineItemFromJSONTyped(json: any, ignoreDiscriminator: boolean): AccruedRevenueLineItem {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'itemIdentifier': !exists(json, 'item_identifier') ? undefined : json['item_identifier'],
        'revenue': !exists(json, 'revenue') ? undefined : json['revenue'],
        'itemType': !exists(json, 'item_type') ? undefined : json['item_type'],
        'usageUnitName': !exists(json, 'usage_unit_name') ? undefined : json['usage_unit_name'],
        'metadata': !exists(json, 'metadata') ? undefined : json['metadata'],
        'usage': !exists(json, 'usage') ? undefined : json['usage'],
    };
}

export function AccruedRevenueLineItemToJSON(value?: AccruedRevenueLineItem | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'item_identifier': value.itemIdentifier,
        'revenue': value.revenue,
        'item_type': value.itemType,
        'usage_unit_name': value.usageUnitName,
        'metadata': value.metadata,
        'usage': value.usage,
    };
}

