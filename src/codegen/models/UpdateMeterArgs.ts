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
/**
 * 
 * @export
 * @interface UpdateMeterArgs
 */
export interface UpdateMeterArgs {
    /**
     * 
     * @type {string}
     * @memberof UpdateMeterArgs
     */
    description?: string;
    /**
     * 
     * @type {string}
     * @memberof UpdateMeterArgs
     */
    displayName?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof UpdateMeterArgs
     */
    expectedLabels?: Array<string>;
    /**
     * 
     * @type {Array<string>}
     * @memberof UpdateMeterArgs
     */
    primaryLabels?: Array<string>;
}

export function UpdateMeterArgsFromJSON(json: any): UpdateMeterArgs {
    return UpdateMeterArgsFromJSONTyped(json, false);
}

export function UpdateMeterArgsFromJSONTyped(json: any, ignoreDiscriminator: boolean): UpdateMeterArgs {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'description': !exists(json, 'description') ? undefined : json['description'],
        'displayName': !exists(json, 'display_name') ? undefined : json['display_name'],
        'expectedLabels': !exists(json, 'expected_labels') ? undefined : json['expected_labels'],
        'primaryLabels': !exists(json, 'primary_labels') ? undefined : json['primary_labels'],
    };
}

export function UpdateMeterArgsToJSON(value?: UpdateMeterArgs | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'description': value.description,
        'display_name': value.displayName,
        'expected_labels': value.expectedLabels,
        'primary_labels': value.primaryLabels,
    };
}

