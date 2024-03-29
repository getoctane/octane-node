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
 * @interface RevenueRecognitionInput
 */
export interface RevenueRecognitionInput {
    /**
     * List of customer names for which to compute booked/recognized revenue.
     * @type {Array<string>}
     * @memberof RevenueRecognitionInput
     */
    customerNames?: Array<string>;
}

export function RevenueRecognitionInputFromJSON(json: any): RevenueRecognitionInput {
    return RevenueRecognitionInputFromJSONTyped(json, false);
}

export function RevenueRecognitionInputFromJSONTyped(json: any, ignoreDiscriminator: boolean): RevenueRecognitionInput {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'customerNames': !exists(json, 'customer_names') ? undefined : json['customer_names'],
    };
}

export function RevenueRecognitionInputToJSON(value?: RevenueRecognitionInput | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'customer_names': value.customerNames,
    };
}

