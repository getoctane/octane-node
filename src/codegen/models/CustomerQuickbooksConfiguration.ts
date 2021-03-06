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
 * @interface CustomerQuickbooksConfiguration
 */
export interface CustomerQuickbooksConfiguration {
    /**
     * Determines whether to enable the quickbooks integration on a customer level.
     * @type {boolean}
     * @memberof CustomerQuickbooksConfiguration
     */
    enabled: boolean;
    /**
     * The ID of this customer within Quickbooks.
     * @type {string}
     * @memberof CustomerQuickbooksConfiguration
     */
    externalId: string;
}

export function CustomerQuickbooksConfigurationFromJSON(json: any): CustomerQuickbooksConfiguration {
    return CustomerQuickbooksConfigurationFromJSONTyped(json, false);
}

export function CustomerQuickbooksConfigurationFromJSONTyped(json: any, ignoreDiscriminator: boolean): CustomerQuickbooksConfiguration {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'enabled': json['enabled'],
        'externalId': json['external_id'],
    };
}

export function CustomerQuickbooksConfigurationToJSON(value?: CustomerQuickbooksConfiguration | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'enabled': value.enabled,
        'external_id': value.externalId,
    };
}

