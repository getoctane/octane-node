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
 * @interface VendorAvalaraSettings
 */
export interface VendorAvalaraSettings {
    /**
     * True if enabling logging for Avalara calls, false otherwise.
     * @type {boolean}
     * @memberof VendorAvalaraSettings
     */
    enableLogging?: boolean;
    /**
     * Enable/Disable the Avalara integration.
     * @type {boolean}
     * @memberof VendorAvalaraSettings
     */
    enableIntegration?: boolean;
    /**
     * Username of the Avalara account.
     * @type {string}
     * @memberof VendorAvalaraSettings
     */
    username?: string;
    /**
     * Password of the Avalara account.
     * @type {string}
     * @memberof VendorAvalaraSettings
     */
    password?: string;
    /**
     * The Avalara company code string to associate the Octane vendor with.
     * @type {string}
     * @memberof VendorAvalaraSettings
     */
    companyCode?: string;
    /**
     * True if the documents generated in Avalara should be committed, false otherwise.
     * @type {boolean}
     * @memberof VendorAvalaraSettings
     */
    commitDocuments?: boolean;
    /**
     * The item description to use to represent all the lines on the Octane invoice.
     * @type {string}
     * @memberof VendorAvalaraSettings
     */
    itemDescription?: string;
    /**
     * he tax code to associate with the item that is representing the Octane invoice.
     * @type {string}
     * @memberof VendorAvalaraSettings
     */
    taxCode?: string;
    /**
     * True if connecting to Avalara sandbox account, false otherwise.
     * @type {boolean}
     * @memberof VendorAvalaraSettings
     */
    sandboxMode?: boolean;
    /**
     * The Avalara item code to use to represent all the line items on the Octane invoice.
     * @type {string}
     * @memberof VendorAvalaraSettings
     */
    itemCode?: string;
}

export function VendorAvalaraSettingsFromJSON(json: any): VendorAvalaraSettings {
    return VendorAvalaraSettingsFromJSONTyped(json, false);
}

export function VendorAvalaraSettingsFromJSONTyped(json: any, ignoreDiscriminator: boolean): VendorAvalaraSettings {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'enableLogging': !exists(json, 'enable_logging') ? undefined : json['enable_logging'],
        'enableIntegration': !exists(json, 'enable_integration') ? undefined : json['enable_integration'],
        'username': !exists(json, 'username') ? undefined : json['username'],
        'password': !exists(json, 'password') ? undefined : json['password'],
        'companyCode': !exists(json, 'company_code') ? undefined : json['company_code'],
        'commitDocuments': !exists(json, 'commit_documents') ? undefined : json['commit_documents'],
        'itemDescription': !exists(json, 'item_description') ? undefined : json['item_description'],
        'taxCode': !exists(json, 'tax_code') ? undefined : json['tax_code'],
        'sandboxMode': !exists(json, 'sandbox_mode') ? undefined : json['sandbox_mode'],
        'itemCode': !exists(json, 'item_code') ? undefined : json['item_code'],
    };
}

export function VendorAvalaraSettingsToJSON(value?: VendorAvalaraSettings | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'enable_logging': value.enableLogging,
        'enable_integration': value.enableIntegration,
        'username': value.username,
        'password': value.password,
        'company_code': value.companyCode,
        'commit_documents': value.commitDocuments,
        'item_description': value.itemDescription,
        'tax_code': value.taxCode,
        'sandbox_mode': value.sandboxMode,
        'item_code': value.itemCode,
    };
}

