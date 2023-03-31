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
    MeteredComponentLabelLimitInputArgs,
    MeteredComponentLabelLimitInputArgsFromJSON,
    MeteredComponentLabelLimitInputArgsFromJSONTyped,
    MeteredComponentLabelLimitInputArgsToJSON,
} from './MeteredComponentLabelLimitInputArgs';

/**
 * 
 * @export
 * @interface UpdateMeteredComponentLimitsInput
 */
export interface UpdateMeteredComponentLimitsInput {
    /**
     * 
     * @type {Array<MeteredComponentLabelLimitInputArgs>}
     * @memberof UpdateMeteredComponentLimitsInput
     */
    labelLimits?: Array<MeteredComponentLabelLimitInputArgs>;
    /**
     * Numeric limit to set on customer usage for the meter.
     * @type {number}
     * @memberof UpdateMeteredComponentLimitsInput
     */
    limit?: number | null;
}

export function UpdateMeteredComponentLimitsInputFromJSON(json: any): UpdateMeteredComponentLimitsInput {
    return UpdateMeteredComponentLimitsInputFromJSONTyped(json, false);
}

export function UpdateMeteredComponentLimitsInputFromJSONTyped(json: any, ignoreDiscriminator: boolean): UpdateMeteredComponentLimitsInput {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'labelLimits': !exists(json, 'label_limits') ? undefined : ((json['label_limits'] as Array<any>).map(MeteredComponentLabelLimitInputArgsFromJSON)),
        'limit': !exists(json, 'limit') ? undefined : json['limit'],
    };
}

export function UpdateMeteredComponentLimitsInputToJSON(value?: UpdateMeteredComponentLimitsInput | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'label_limits': value.labelLimits === undefined ? undefined : ((value.labelLimits as Array<any>).map(MeteredComponentLabelLimitInputArgsToJSON)),
        'limit': value.limit,
    };
}

