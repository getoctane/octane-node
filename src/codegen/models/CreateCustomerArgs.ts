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
 * @interface CreateCustomerArgs
 */
export interface CreateCustomerArgs {
    /**
     * 
     * @type {boolean}
     * @memberof CreateCustomerArgs
     */
    autogeneratePaymentGatewayCustomer?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof CreateCustomerArgs
     */
    autogenerateQuickbooksCustomer?: boolean;
    /**
     * 
     * @type {ContactInfoInputArgs}
     * @memberof CreateCustomerArgs
     */
    contactInfo?: ContactInfoInputArgs;
    /**
     * 
     * @type {Date}
     * @memberof CreateCustomerArgs
     */
    createdAt?: Date;
    /**
     * 
     * @type {string}
     * @memberof CreateCustomerArgs
     */
    displayName?: string;
    /**
     * 
     * @type {Array<CustomerMeasurementMappingInputArgs>}
     * @memberof CreateCustomerArgs
     */
    measurementMappings?: Array<CustomerMeasurementMappingInputArgs>;
    /**
     * 
     * @type {string}
     * @memberof CreateCustomerArgs
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof CreateCustomerArgs
     */
    pricePlanName?: string;
    /**
     * 
     * @type {string}
     * @memberof CreateCustomerArgs
     */
    pricePlanTag?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof CreateCustomerArgs
     */
    tags?: Array<string> | null;
}

export function CreateCustomerArgsFromJSON(json: any): CreateCustomerArgs {
    return CreateCustomerArgsFromJSONTyped(json, false);
}

export function CreateCustomerArgsFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateCustomerArgs {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'autogeneratePaymentGatewayCustomer': !exists(json, 'autogenerate_payment_gateway_customer') ? undefined : json['autogenerate_payment_gateway_customer'],
        'autogenerateQuickbooksCustomer': !exists(json, 'autogenerate_quickbooks_customer') ? undefined : json['autogenerate_quickbooks_customer'],
        'contactInfo': !exists(json, 'contact_info') ? undefined : ContactInfoInputArgsFromJSON(json['contact_info']),
        'createdAt': !exists(json, 'created_at') ? undefined : (new Date(json['created_at'])),
        'displayName': !exists(json, 'display_name') ? undefined : json['display_name'],
        'measurementMappings': !exists(json, 'measurement_mappings') ? undefined : ((json['measurement_mappings'] as Array<any>).map(CustomerMeasurementMappingInputArgsFromJSON)),
        'name': !exists(json, 'name') ? undefined : json['name'],
        'pricePlanName': !exists(json, 'price_plan_name') ? undefined : json['price_plan_name'],
        'pricePlanTag': !exists(json, 'price_plan_tag') ? undefined : json['price_plan_tag'],
        'tags': !exists(json, 'tags') ? undefined : json['tags'],
    };
}

export function CreateCustomerArgsToJSON(value?: CreateCustomerArgs | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'autogenerate_payment_gateway_customer': value.autogeneratePaymentGatewayCustomer,
        'autogenerate_quickbooks_customer': value.autogenerateQuickbooksCustomer,
        'contact_info': ContactInfoInputArgsToJSON(value.contactInfo),
        'created_at': value.createdAt === undefined ? undefined : (value.createdAt.toISOString()),
        'display_name': value.displayName,
        'measurement_mappings': value.measurementMappings === undefined ? undefined : ((value.measurementMappings as Array<any>).map(CustomerMeasurementMappingInputArgsToJSON)),
        'name': value.name,
        'price_plan_name': value.pricePlanName,
        'price_plan_tag': value.pricePlanTag,
        'tags': value.tags,
    };
}
