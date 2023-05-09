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
    autogenerateAccountingCustomer?: boolean;
    /**
     * 
     * @type {number}
     * @memberof CreateCustomerArgs
     */
    vendorId?: number;
    /**
     * 
     * @type {boolean}
     * @memberof CreateCustomerArgs
     */
    autogeneratePaymentGatewayCustomer?: boolean;
    /**
     * 
     * @type {string}
     * @memberof CreateCustomerArgs
     */
    displayName?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof CreateCustomerArgs
     */
    tags?: Array<string> | null;
    /**
     * 
     * @type {string}
     * @memberof CreateCustomerArgs
     */
    pricePlanTag?: string;
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
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof CreateCustomerArgs
     */
    pricePlanName?: string;
    /**
     * 
     * @type {Array<CustomerMeasurementMappingInputArgs>}
     * @memberof CreateCustomerArgs
     */
    measurementMappings?: Array<CustomerMeasurementMappingInputArgs>;
}

export function CreateCustomerArgsFromJSON(json: any): CreateCustomerArgs {
    return CreateCustomerArgsFromJSONTyped(json, false);
}

export function CreateCustomerArgsFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateCustomerArgs {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'autogenerateAccountingCustomer': !exists(json, 'autogenerate_accounting_customer') ? undefined : json['autogenerate_accounting_customer'],
        'vendorId': !exists(json, 'vendor_id') ? undefined : json['vendor_id'],
        'autogeneratePaymentGatewayCustomer': !exists(json, 'autogenerate_payment_gateway_customer') ? undefined : json['autogenerate_payment_gateway_customer'],
        'displayName': !exists(json, 'display_name') ? undefined : json['display_name'],
        'tags': !exists(json, 'tags') ? undefined : json['tags'],
        'pricePlanTag': !exists(json, 'price_plan_tag') ? undefined : json['price_plan_tag'],
        'contactInfo': !exists(json, 'contact_info') ? undefined : ContactInfoInputArgsFromJSON(json['contact_info']),
        'createdAt': !exists(json, 'created_at') ? undefined : (new Date(json['created_at'])),
        'name': !exists(json, 'name') ? undefined : json['name'],
        'pricePlanName': !exists(json, 'price_plan_name') ? undefined : json['price_plan_name'],
        'measurementMappings': !exists(json, 'measurement_mappings') ? undefined : ((json['measurement_mappings'] as Array<any>).map(CustomerMeasurementMappingInputArgsFromJSON)),
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
        
        'autogenerate_accounting_customer': value.autogenerateAccountingCustomer,
        'vendor_id': value.vendorId,
        'autogenerate_payment_gateway_customer': value.autogeneratePaymentGatewayCustomer,
        'display_name': value.displayName,
        'tags': value.tags,
        'price_plan_tag': value.pricePlanTag,
        'contact_info': ContactInfoInputArgsToJSON(value.contactInfo),
        'created_at': value.createdAt === undefined ? undefined : (value.createdAt.toISOString()),
        'name': value.name,
        'price_plan_name': value.pricePlanName,
        'measurement_mappings': value.measurementMappings === undefined ? undefined : ((value.measurementMappings as Array<any>).map(CustomerMeasurementMappingInputArgsToJSON)),
    };
}

