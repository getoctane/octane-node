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
 * @interface CustomerMeasurementMapping
 */
export interface CustomerMeasurementMapping {
    /**
     * The label key used to map measurements to customers.
     * @type {string}
     * @memberof CustomerMeasurementMapping
     */
    label: string;
    /**
     * A regex used to match the value of the associated label key.
     * @type {string}
     * @memberof CustomerMeasurementMapping
     */
    valueRegex?: string | null;
}

export function CustomerMeasurementMappingFromJSON(json: any): CustomerMeasurementMapping {
    return CustomerMeasurementMappingFromJSONTyped(json, false);
}

export function CustomerMeasurementMappingFromJSONTyped(json: any, ignoreDiscriminator: boolean): CustomerMeasurementMapping {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'label': json['label'],
        'valueRegex': !exists(json, 'value_regex') ? undefined : json['value_regex'],
    };
}

export function CustomerMeasurementMappingToJSON(value?: CustomerMeasurementMapping | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'label': value.label,
        'value_regex': value.valueRegex,
    };
}

