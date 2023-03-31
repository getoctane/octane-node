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
 * @interface TrialInputArgs
 */
export interface TrialInputArgs {
    /**
     * 
     * @type {string}
     * @memberof TrialInputArgs
     */
    timeUnitName?: string;
    /**
     * 
     * @type {number}
     * @memberof TrialInputArgs
     */
    timeLength?: number;
    /**
     * 
     * @type {number}
     * @memberof TrialInputArgs
     */
    credit?: number;
}

export function TrialInputArgsFromJSON(json: any): TrialInputArgs {
    return TrialInputArgsFromJSONTyped(json, false);
}

export function TrialInputArgsFromJSONTyped(json: any, ignoreDiscriminator: boolean): TrialInputArgs {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'timeUnitName': !exists(json, 'time_unit_name') ? undefined : json['time_unit_name'],
        'timeLength': !exists(json, 'time_length') ? undefined : json['time_length'],
        'credit': !exists(json, 'credit') ? undefined : json['credit'],
    };
}

export function TrialInputArgsToJSON(value?: TrialInputArgs | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'time_unit_name': value.timeUnitName,
        'time_length': value.timeLength,
        'credit': value.credit,
    };
}

