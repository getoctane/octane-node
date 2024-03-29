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
 * @interface Company
 */
export interface Company {
    /**
     * A unique code that references this company within your account.
     * @type {string}
     * @memberof Company
     */
    companyCode?: string;
    /**
     * The unique ID number of this company.
     * @type {string}
     * @memberof Company
     */
    id?: string;
    /**
     * This flag is true if this company is the default company for this account.
     * @type {boolean}
     * @memberof Company
     */
    isDefault?: boolean;
    /**
     * This flag indicates whether tax activity can occur for this company.
     * @type {boolean}
     * @memberof Company
     */
    isActive?: boolean;
    /**
     * The name of this company, as shown to customers.
     * @type {string}
     * @memberof Company
     */
    companyName?: string;
}

export function CompanyFromJSON(json: any): Company {
    return CompanyFromJSONTyped(json, false);
}

export function CompanyFromJSONTyped(json: any, ignoreDiscriminator: boolean): Company {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'companyCode': !exists(json, 'company_code') ? undefined : json['company_code'],
        'id': !exists(json, 'id') ? undefined : json['id'],
        'isDefault': !exists(json, 'is_default') ? undefined : json['is_default'],
        'isActive': !exists(json, 'is_active') ? undefined : json['is_active'],
        'companyName': !exists(json, 'company_name') ? undefined : json['company_name'],
    };
}

export function CompanyToJSON(value?: Company | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'company_code': value.companyCode,
        'id': value.id,
        'is_default': value.isDefault,
        'is_active': value.isActive,
        'company_name': value.companyName,
    };
}

