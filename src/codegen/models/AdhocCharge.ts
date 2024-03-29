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
 * @interface AdhocCharge
 */
export interface AdhocCharge {
    /**
     * Indicates if the adhoc charge has been charged on an invoice
     * @type {string}
     * @memberof AdhocCharge
     */
    charged?: string;
    /**
     * The user provided charge time of the adhoc charge
     * @type {Date}
     * @memberof AdhocCharge
     */
    chargeTime?: Date;
    /**
     * The user provided item display name of the adhoc charge
     * @type {string}
     * @memberof AdhocCharge
     */
    itemDisplayName?: string;
    /**
     * The uuid of the adhoc charge
     * @type {string}
     * @memberof AdhocCharge
     */
    uuid?: string;
    /**
     * The user provided quantity of the adhoc charge
     * @type {number}
     * @memberof AdhocCharge
     */
    quantity?: number;
    /**
     * The user provided total price of the adhoc charge
     * @type {number}
     * @memberof AdhocCharge
     */
    totalPrice?: number;
    /**
     * The user provided item description of the adhoc charge
     * @type {string}
     * @memberof AdhocCharge
     */
    itemDescription?: string;
    /**
     * The user provided item name of the adhoc charge
     * @type {string}
     * @memberof AdhocCharge
     */
    itemName?: string;
}

export function AdhocChargeFromJSON(json: any): AdhocCharge {
    return AdhocChargeFromJSONTyped(json, false);
}

export function AdhocChargeFromJSONTyped(json: any, ignoreDiscriminator: boolean): AdhocCharge {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'charged': !exists(json, 'charged') ? undefined : json['charged'],
        'chargeTime': !exists(json, 'charge_time') ? undefined : (new Date(json['charge_time'])),
        'itemDisplayName': !exists(json, 'item_display_name') ? undefined : json['item_display_name'],
        'uuid': !exists(json, 'uuid') ? undefined : json['uuid'],
        'quantity': !exists(json, 'quantity') ? undefined : json['quantity'],
        'totalPrice': !exists(json, 'total_price') ? undefined : json['total_price'],
        'itemDescription': !exists(json, 'item_description') ? undefined : json['item_description'],
        'itemName': !exists(json, 'item_name') ? undefined : json['item_name'],
    };
}

export function AdhocChargeToJSON(value?: AdhocCharge | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'charged': value.charged,
        'charge_time': value.chargeTime === undefined ? undefined : (value.chargeTime.toISOString()),
        'item_display_name': value.itemDisplayName,
        'uuid': value.uuid,
        'quantity': value.quantity,
        'total_price': value.totalPrice,
        'item_description': value.itemDescription,
        'item_name': value.itemName,
    };
}

