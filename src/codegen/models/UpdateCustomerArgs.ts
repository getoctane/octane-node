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
import {
    ContactInfoInputArgs,
    ContactInfoInputArgsFromJSON,
    ContactInfoInputArgsFromJSONTyped,
    ContactInfoInputArgsToJSON,
} from './ContactInfoInputArgs';
import {
    CustomerMeasurementMappingInputArgs,
    CustomerMeasurementMappingInputArgsFromJSON,
    CustomerMeasurementMappingInputArgsFromJSONTyped,
    CustomerMeasurementMappingInputArgsToJSON,
} from './CustomerMeasurementMappingInputArgs';

/**
 * 
 * @export
 * @interface UpdateCustomerArgs
 */
export interface UpdateCustomerArgs {
    /**
     * 
     * @type {ContactInfoInputArgs}
     * @memberof UpdateCustomerArgs
     */
    contactInfo?: ContactInfoInputArgs;
    /**
     * 
     * @type {Date}
     * @memberof UpdateCustomerArgs
     */
    createdAt?: Date;
    /**
     * 
     * @type {string}
     * @memberof UpdateCustomerArgs
     */
    displayName?: string;
    /**
     * 
     * @type {Array<CustomerMeasurementMappingInputArgs>}
     * @memberof UpdateCustomerArgs
     */
    measurementMappings?: Array<CustomerMeasurementMappingInputArgs>;
    /**
     * 
     * @type {string}
     * @memberof UpdateCustomerArgs
     */
    name?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof UpdateCustomerArgs
     */
    tags?: Array<string> | null;
}

export function UpdateCustomerArgsFromJSON(json: any): UpdateCustomerArgs {
    return UpdateCustomerArgsFromJSONTyped(json, false);
}

export function UpdateCustomerArgsFromJSONTyped(json: any, ignoreDiscriminator: boolean): UpdateCustomerArgs {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'contactInfo': !exists(json, 'contact_info') ? undefined : ContactInfoInputArgsFromJSON(json['contact_info']),
        'createdAt': !exists(json, 'created_at') ? undefined : (new Date(json['created_at'])),
        'displayName': !exists(json, 'display_name') ? undefined : json['display_name'],
        'measurementMappings': !exists(json, 'measurement_mappings') ? undefined : ((json['measurement_mappings'] as Array<any>).map(CustomerMeasurementMappingInputArgsFromJSON)),
        'name': !exists(json, 'name') ? undefined : json['name'],
        'tags': !exists(json, 'tags') ? undefined : json['tags'],
    };
}

export function UpdateCustomerArgsToJSON(value?: UpdateCustomerArgs | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'contact_info': ContactInfoInputArgsToJSON(value.contactInfo),
        'created_at': value.createdAt === undefined ? undefined : (value.createdAt.toISOString()),
        'display_name': value.displayName,
        'measurement_mappings': value.measurementMappings === undefined ? undefined : ((value.measurementMappings as Array<any>).map(CustomerMeasurementMappingInputArgsToJSON)),
        'name': value.name,
        'tags': value.tags,
    };
}
