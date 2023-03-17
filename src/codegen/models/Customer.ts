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
    ContactInfo,
    ContactInfoFromJSON,
    ContactInfoFromJSONTyped,
    ContactInfoToJSON,
} from './ContactInfo';
import {
    CustomerTag,
    CustomerTagFromJSON,
    CustomerTagFromJSONTyped,
    CustomerTagToJSON,
} from './CustomerTag';

/**
 * 
 * @export
 * @interface Customer
 */
export interface Customer {
    /**
     * Unique name identifier of a customer
     * @type {string}
     * @memberof Customer
     */
    readonly name: string;
    /**
     * 
     * @type {string}
     * @memberof Customer
     */
    displayName?: string;
    /**
     * 
     * @type {ContactInfo}
     * @memberof Customer
     */
    contactInfo?: ContactInfo | null;
    /**
     * 
     * @type {Date}
     * @memberof Customer
     */
    createdAt?: Date;
    /**
     * 
     * @type {Array<any>}
     * @memberof Customer
     */
    measurementMappings?: Array<any>;
    /**
     * 
     * @type {Array<CustomerTag>}
     * @memberof Customer
     */
    tags?: Array<CustomerTag>;
}

export function CustomerFromJSON(json: any): Customer {
    return CustomerFromJSONTyped(json, false);
}

export function CustomerFromJSONTyped(json: any, ignoreDiscriminator: boolean): Customer {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': json['name'],
        'displayName': !exists(json, 'display_name') ? undefined : json['display_name'],
        'contactInfo': !exists(json, 'contact_info') ? undefined : ContactInfoFromJSON(json['contact_info']),
        'createdAt': !exists(json, 'created_at') ? undefined : (new Date(json['created_at'])),
        'measurementMappings': !exists(json, 'measurement_mappings') ? undefined : json['measurement_mappings'],
        'tags': !exists(json, 'tags') ? undefined : ((json['tags'] as Array<any>).map(CustomerTagFromJSON)),
    };
}

export function CustomerToJSON(value?: Customer | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'display_name': value.displayName,
        'contact_info': ContactInfoToJSON(value.contactInfo),
        'created_at': value.createdAt === undefined ? undefined : (value.createdAt.toISOString()),
        'measurement_mappings': value.measurementMappings,
        'tags': value.tags === undefined ? undefined : ((value.tags as Array<any>).map(CustomerTagToJSON)),
    };
}

