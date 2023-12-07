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
 * @interface ValidateAddressResp
 */
export interface ValidateAddressResp {
    /**
     * Set if 'success' is True. The resolution quality of the geospatial coordinates.
     * @type {string}
     * @memberof ValidateAddressResp
     */
    resolutionQuality?: string;
    /**
     * True if validation was successful, False address is invalid.
     * @type {boolean}
     * @memberof ValidateAddressResp
     */
    success?: boolean;
    /**
     * Set if 'success' is True. Geospatial latitude measurement, in Decimal Degrees (string).
     * @type {string}
     * @memberof ValidateAddressResp
     */
    latitude?: string;
    /**
     * Set if 'success' is False. Contains the details of why the address is invalid.
     * @type {string}
     * @memberof ValidateAddressResp
     */
    invalidAddressError?: string;
    /**
     * Set if 'sucess' is True. Geospatial latitude measurement, in Decimal Degrees (string).
     * @type {string}
     * @memberof ValidateAddressResp
     */
    longitude?: string;
}

export function ValidateAddressRespFromJSON(json: any): ValidateAddressResp {
    return ValidateAddressRespFromJSONTyped(json, false);
}

export function ValidateAddressRespFromJSONTyped(json: any, ignoreDiscriminator: boolean): ValidateAddressResp {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'resolutionQuality': !exists(json, 'resolution_quality') ? undefined : json['resolution_quality'],
        'success': !exists(json, 'success') ? undefined : json['success'],
        'latitude': !exists(json, 'latitude') ? undefined : json['latitude'],
        'invalidAddressError': !exists(json, 'invalid_address_error') ? undefined : json['invalid_address_error'],
        'longitude': !exists(json, 'longitude') ? undefined : json['longitude'],
    };
}

export function ValidateAddressRespToJSON(value?: ValidateAddressResp | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'resolution_quality': value.resolutionQuality,
        'success': value.success,
        'latitude': value.latitude,
        'invalid_address_error': value.invalidAddressError,
        'longitude': value.longitude,
    };
}

