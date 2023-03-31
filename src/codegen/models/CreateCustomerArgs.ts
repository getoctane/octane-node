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
     * @type {string}
     * @memberof CreateCustomerArgs
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof CreateCustomerArgs
     */
    displayName?: string;
    /**
     * 
     * @type {string}
     * @memberof CreateCustomerArgs
     */
    pricePlanName?: string;
    /**
     * 
     * @type {boolean}
     * @memberof CreateCustomerArgs
     */
    autogenerateAccountingCustomer?: boolean;
    /**
     * 
     * @type {Array<string>}
     * @memberof CreateCustomerArgs
     */
    tags?: Array<string> | null;
    /**
     * 
     * @type {number}
     * @memberof CreateCustomerArgs
     */
    vendorId?: number;
    /**
     * 
     * @type {Date}
     * @memberof CreateCustomerArgs
     */
    createdAt?: Date;
    /**
     * 
     * @type {boolean}
     * @memberof CreateCustomerArgs
     */
    autogeneratePaymentGatewayCustomer?: boolean;
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
        
        'pricePlanTag': !exists(json, 'price_plan_tag') ? undefined : json['price_plan_tag'],
        'contactInfo': !exists(json, 'contact_info') ? undefined : ContactInfoInputArgsFromJSON(json['contact_info']),
        'name': !exists(json, 'name') ? undefined : json['name'],
        'displayName': !exists(json, 'display_name') ? undefined : json['display_name'],
        'pricePlanName': !exists(json, 'price_plan_name') ? undefined : json['price_plan_name'],
        'autogenerateAccountingCustomer': !exists(json, 'autogenerate_accounting_customer') ? undefined : json['autogenerate_accounting_customer'],
        'tags': !exists(json, 'tags') ? undefined : json['tags'],
        'vendorId': !exists(json, 'vendor_id') ? undefined : json['vendor_id'],
        'createdAt': !exists(json, 'created_at') ? undefined : (new Date(json['created_at'])),
        'autogeneratePaymentGatewayCustomer': !exists(json, 'autogenerate_payment_gateway_customer') ? undefined : json['autogenerate_payment_gateway_customer'],
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
        
        'price_plan_tag': value.pricePlanTag,
        'contact_info': ContactInfoInputArgsToJSON(value.contactInfo),
        'name': value.name,
        'display_name': value.displayName,
        'price_plan_name': value.pricePlanName,
        'autogenerate_accounting_customer': value.autogenerateAccountingCustomer,
        'tags': value.tags,
        'vendor_id': value.vendorId,
        'created_at': value.createdAt === undefined ? undefined : (value.createdAt.toISOString()),
        'autogenerate_payment_gateway_customer': value.autogeneratePaymentGatewayCustomer,
        'measurement_mappings': value.measurementMappings === undefined ? undefined : ((value.measurementMappings as Array<any>).map(CustomerMeasurementMappingInputArgsToJSON)),
    };
}

