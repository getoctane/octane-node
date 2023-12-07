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
import {
    CustomerMetadataInput,
    CustomerMetadataInputFromJSON,
    CustomerMetadataInputFromJSONTyped,
    CustomerMetadataInputToJSON,
} from './CustomerMetadataInput';

/**
 * 
 * @export
 * @interface CreateCustomerArgs
 */
export interface CreateCustomerArgs {
    /**
     * 
     * @type {Array<string>}
     * @memberof CreateCustomerArgs
     */
    tags?: Array<string> | null;
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
    /**
     * 
     * @type {Array<CustomerMetadataInput>}
     * @memberof CreateCustomerArgs
     */
    customerMetadata?: Array<CustomerMetadataInput>;
    /**
     * 
     * @type {boolean}
     * @memberof CreateCustomerArgs
     */
    autogenerateAccountingCustomer?: boolean;
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
     * @type {string}
     * @memberof CreateCustomerArgs
     */
    name?: string;
    /**
     * 
     * @type {Date}
     * @memberof CreateCustomerArgs
     */
    createdAt?: Date;
    /**
     * 
     * @type {ContactInfoInputArgs}
     * @memberof CreateCustomerArgs
     */
    contactInfo?: ContactInfoInputArgs;
    /**
     * 
     * @type {number}
     * @memberof CreateCustomerArgs
     */
    vendorId?: number;
    /**
     * 
     * @type {string}
     * @memberof CreateCustomerArgs
     */
    displayName?: string;
}

export function CreateCustomerArgsFromJSON(json: any): CreateCustomerArgs {
    return CreateCustomerArgsFromJSONTyped(json, false);
}

export function CreateCustomerArgsFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateCustomerArgs {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'tags': !exists(json, 'tags') ? undefined : json['tags'],
        'autogeneratePaymentGatewayCustomer': !exists(json, 'autogenerate_payment_gateway_customer') ? undefined : json['autogenerate_payment_gateway_customer'],
        'measurementMappings': !exists(json, 'measurement_mappings') ? undefined : ((json['measurement_mappings'] as Array<any>).map(CustomerMeasurementMappingInputArgsFromJSON)),
        'customerMetadata': !exists(json, 'customer_metadata') ? undefined : ((json['customer_metadata'] as Array<any>).map(CustomerMetadataInputFromJSON)),
        'autogenerateAccountingCustomer': !exists(json, 'autogenerate_accounting_customer') ? undefined : json['autogenerate_accounting_customer'],
        'pricePlanName': !exists(json, 'price_plan_name') ? undefined : json['price_plan_name'],
        'pricePlanTag': !exists(json, 'price_plan_tag') ? undefined : json['price_plan_tag'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'createdAt': !exists(json, 'created_at') ? undefined : (new Date(json['created_at'])),
        'contactInfo': !exists(json, 'contact_info') ? undefined : ContactInfoInputArgsFromJSON(json['contact_info']),
        'vendorId': !exists(json, 'vendor_id') ? undefined : json['vendor_id'],
        'displayName': !exists(json, 'display_name') ? undefined : json['display_name'],
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
        
        'tags': value.tags,
        'autogenerate_payment_gateway_customer': value.autogeneratePaymentGatewayCustomer,
        'measurement_mappings': value.measurementMappings === undefined ? undefined : ((value.measurementMappings as Array<any>).map(CustomerMeasurementMappingInputArgsToJSON)),
        'customer_metadata': value.customerMetadata === undefined ? undefined : ((value.customerMetadata as Array<any>).map(CustomerMetadataInputToJSON)),
        'autogenerate_accounting_customer': value.autogenerateAccountingCustomer,
        'price_plan_name': value.pricePlanName,
        'price_plan_tag': value.pricePlanTag,
        'name': value.name,
        'created_at': value.createdAt === undefined ? undefined : (value.createdAt.toISOString()),
        'contact_info': ContactInfoInputArgsToJSON(value.contactInfo),
        'vendor_id': value.vendorId,
        'display_name': value.displayName,
    };
}

