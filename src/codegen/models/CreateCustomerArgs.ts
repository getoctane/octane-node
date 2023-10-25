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
     * @type {Date}
     * @memberof CreateCustomerArgs
     */
    createdAt?: Date;
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
     * @type {boolean}
     * @memberof CreateCustomerArgs
     */
    autogeneratePaymentGatewayCustomer?: boolean;
    /**
     * 
     * @type {string}
     * @memberof CreateCustomerArgs
     */
    name?: string;
    /**
     * 
     * @type {number}
     * @memberof CreateCustomerArgs
     */
    vendorId?: number;
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
     * @type {ContactInfoInputArgs}
     * @memberof CreateCustomerArgs
     */
    contactInfo?: ContactInfoInputArgs;
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
        'createdAt': !exists(json, 'created_at') ? undefined : (new Date(json['created_at'])),
        'pricePlanName': !exists(json, 'price_plan_name') ? undefined : json['price_plan_name'],
        'pricePlanTag': !exists(json, 'price_plan_tag') ? undefined : json['price_plan_tag'],
        'autogeneratePaymentGatewayCustomer': !exists(json, 'autogenerate_payment_gateway_customer') ? undefined : json['autogenerate_payment_gateway_customer'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'vendorId': !exists(json, 'vendor_id') ? undefined : json['vendor_id'],
        'measurementMappings': !exists(json, 'measurement_mappings') ? undefined : ((json['measurement_mappings'] as Array<any>).map(CustomerMeasurementMappingInputArgsFromJSON)),
        'customerMetadata': !exists(json, 'customer_metadata') ? undefined : ((json['customer_metadata'] as Array<any>).map(CustomerMetadataInputFromJSON)),
        'contactInfo': !exists(json, 'contact_info') ? undefined : ContactInfoInputArgsFromJSON(json['contact_info']),
        'autogenerateAccountingCustomer': !exists(json, 'autogenerate_accounting_customer') ? undefined : json['autogenerate_accounting_customer'],
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
        'created_at': value.createdAt === undefined ? undefined : (value.createdAt.toISOString()),
        'price_plan_name': value.pricePlanName,
        'price_plan_tag': value.pricePlanTag,
        'autogenerate_payment_gateway_customer': value.autogeneratePaymentGatewayCustomer,
        'name': value.name,
        'vendor_id': value.vendorId,
        'measurement_mappings': value.measurementMappings === undefined ? undefined : ((value.measurementMappings as Array<any>).map(CustomerMeasurementMappingInputArgsToJSON)),
        'customer_metadata': value.customerMetadata === undefined ? undefined : ((value.customerMetadata as Array<any>).map(CustomerMetadataInputToJSON)),
        'contact_info': ContactInfoInputArgsToJSON(value.contactInfo),
        'autogenerate_accounting_customer': value.autogenerateAccountingCustomer,
        'display_name': value.displayName,
    };
}

