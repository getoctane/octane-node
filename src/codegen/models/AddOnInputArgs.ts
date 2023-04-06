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
    FeatureInputArgs,
    FeatureInputArgsFromJSON,
    FeatureInputArgsFromJSONTyped,
    FeatureInputArgsToJSON,
} from './FeatureInputArgs';

/**
 * 
 * @export
 * @interface AddOnInputArgs
 */
export interface AddOnInputArgs {
    /**
     * 
     * @type {number}
     * @memberof AddOnInputArgs
     */
    limit?: number;
    /**
     * Whether this add on can only be used & charged once.
     * @type {boolean}
     * @memberof AddOnInputArgs
     */
    singleUse?: boolean;
    /**
     * 
     * @type {number}
     * @memberof AddOnInputArgs
     */
    price?: number;
    /**
     * 
     * @type {boolean}
     * @memberof AddOnInputArgs
     */
    quantityEnabled?: boolean;
    /**
     * This field indicates whether or not we should cut an invoice immediately upon attaching this add on to a price plan.
     * @type {boolean}
     * @memberof AddOnInputArgs
     */
    immediatelyCharge?: boolean;
    /**
     * 
     * @type {FeatureInputArgs}
     * @memberof AddOnInputArgs
     */
    feature: FeatureInputArgs;
}

export function AddOnInputArgsFromJSON(json: any): AddOnInputArgs {
    return AddOnInputArgsFromJSONTyped(json, false);
}

export function AddOnInputArgsFromJSONTyped(json: any, ignoreDiscriminator: boolean): AddOnInputArgs {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'limit': !exists(json, 'limit') ? undefined : json['limit'],
        'singleUse': !exists(json, 'single_use') ? undefined : json['single_use'],
        'price': !exists(json, 'price') ? undefined : json['price'],
        'quantityEnabled': !exists(json, 'quantity_enabled') ? undefined : json['quantity_enabled'],
        'immediatelyCharge': !exists(json, 'immediately_charge') ? undefined : json['immediately_charge'],
        'feature': FeatureInputArgsFromJSON(json['feature']),
    };
}

export function AddOnInputArgsToJSON(value?: AddOnInputArgs | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'limit': value.limit,
        'single_use': value.singleUse,
        'price': value.price,
        'quantity_enabled': value.quantityEnabled,
        'immediately_charge': value.immediatelyCharge,
        'feature': FeatureInputArgsToJSON(value.feature),
    };
}

