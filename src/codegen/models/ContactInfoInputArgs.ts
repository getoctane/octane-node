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
 * @interface ContactInfoInputArgs
 */
export interface ContactInfoInputArgs {
    /**
     * 
     * @type {string}
     * @memberof ContactInfoInputArgs
     */
    vatId?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ContactInfoInputArgs
     */
    logoUrl?: string | null;
    /**
     * List of secondary contact emails (all email communication will also be sent to these emails).
     * @type {Array<string>}
     * @memberof ContactInfoInputArgs
     */
    secondaryEmails?: Array<string> | null;
    /**
     * 
     * @type {string}
     * @memberof ContactInfoInputArgs
     */
    phone?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ContactInfoInputArgs
     */
    country?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ContactInfoInputArgs
     */
    addressLine1?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ContactInfoInputArgs
     */
    legalName?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ContactInfoInputArgs
     */
    zipcode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ContactInfoInputArgs
     */
    state?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ContactInfoInputArgs
     */
    url?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ContactInfoInputArgs
     */
    addressLine2?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ContactInfoInputArgs
     */
    email?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ContactInfoInputArgs
     */
    city?: string | null;
}

export function ContactInfoInputArgsFromJSON(json: any): ContactInfoInputArgs {
    return ContactInfoInputArgsFromJSONTyped(json, false);
}

export function ContactInfoInputArgsFromJSONTyped(json: any, ignoreDiscriminator: boolean): ContactInfoInputArgs {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'vatId': !exists(json, 'vat_id') ? undefined : json['vat_id'],
        'logoUrl': !exists(json, 'logo_url') ? undefined : json['logo_url'],
        'secondaryEmails': !exists(json, 'secondary_emails') ? undefined : json['secondary_emails'],
        'phone': !exists(json, 'phone') ? undefined : json['phone'],
        'country': !exists(json, 'country') ? undefined : json['country'],
        'addressLine1': !exists(json, 'address_line_1') ? undefined : json['address_line_1'],
        'legalName': !exists(json, 'legal_name') ? undefined : json['legal_name'],
        'zipcode': !exists(json, 'zipcode') ? undefined : json['zipcode'],
        'state': !exists(json, 'state') ? undefined : json['state'],
        'url': !exists(json, 'url') ? undefined : json['url'],
        'addressLine2': !exists(json, 'address_line_2') ? undefined : json['address_line_2'],
        'email': !exists(json, 'email') ? undefined : json['email'],
        'city': !exists(json, 'city') ? undefined : json['city'],
    };
}

export function ContactInfoInputArgsToJSON(value?: ContactInfoInputArgs | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'vat_id': value.vatId,
        'logo_url': value.logoUrl,
        'secondary_emails': value.secondaryEmails,
        'phone': value.phone,
        'country': value.country,
        'address_line_1': value.addressLine1,
        'legal_name': value.legalName,
        'zipcode': value.zipcode,
        'state': value.state,
        'url': value.url,
        'address_line_2': value.addressLine2,
        'email': value.email,
        'city': value.city,
    };
}

