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
 * @interface LineItems
 */
export interface LineItems {
    /**
     * 
     * @type {string}
     * @memberof LineItems
     */
    price?: string;
    /**
     * 
     * @type {{ [key: string]: string; }}
     * @memberof LineItems
     */
    metadata?: { [key: string]: string; };
    /**
     * 
     * @type {number}
     * @memberof LineItems
     */
    quantity?: number;
    /**
     * 
     * @type {string}
     * @memberof LineItems
     */
    quantityUnit?: string;
    /**
     * 
     * @type {Date}
     * @memberof LineItems
     */
    startTime?: Date;
    /**
     * 
     * @type {string}
     * @memberof LineItems
     */
    id?: string;
    /**
     * 
     * @type {string}
     * @memberof LineItems
     */
    description?: string;
    /**
     * 
     * @type {string}
     * @memberof LineItems
     */
    name?: string;
    /**
     * 
     * @type {number}
     * @memberof LineItems
     */
    priceInt?: number;
    /**
     * 
     * @type {Date}
     * @memberof LineItems
     */
    endTime?: Date;
}

export function LineItemsFromJSON(json: any): LineItems {
    return LineItemsFromJSONTyped(json, false);
}

export function LineItemsFromJSONTyped(json: any, ignoreDiscriminator: boolean): LineItems {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'price': !exists(json, 'price') ? undefined : json['price'],
        'metadata': !exists(json, 'metadata') ? undefined : json['metadata'],
        'quantity': !exists(json, 'quantity') ? undefined : json['quantity'],
        'quantityUnit': !exists(json, 'quantity_unit') ? undefined : json['quantity_unit'],
        'startTime': !exists(json, 'start_time') ? undefined : (new Date(json['start_time'])),
        'id': !exists(json, 'id') ? undefined : json['id'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'priceInt': !exists(json, 'price_int') ? undefined : json['price_int'],
        'endTime': !exists(json, 'end_time') ? undefined : (new Date(json['end_time'])),
    };
}

export function LineItemsToJSON(value?: LineItems | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'price': value.price,
        'metadata': value.metadata,
        'quantity': value.quantity,
        'quantity_unit': value.quantityUnit,
        'start_time': value.startTime === undefined ? undefined : (value.startTime.toISOString()),
        'id': value.id,
        'description': value.description,
        'name': value.name,
        'price_int': value.priceInt,
        'end_time': value.endTime === undefined ? undefined : (value.endTime.toISOString()),
    };
}

