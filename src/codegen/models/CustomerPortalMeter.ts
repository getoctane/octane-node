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
    CustomerPortalMeterLabels,
    CustomerPortalMeterLabelsFromJSON,
    CustomerPortalMeterLabelsFromJSONTyped,
    CustomerPortalMeterLabelsToJSON,
} from './CustomerPortalMeterLabels';

/**
 * 
 * @export
 * @interface CustomerPortalMeter
 */
export interface CustomerPortalMeter {
    /**
     * Type of the meter. E.g. COUNTER or GAUGE.
     * @type {string}
     * @memberof CustomerPortalMeter
     */
    meterType?: string;
    /**
     * Display name of the meter.
     * @type {string}
     * @memberof CustomerPortalMeter
     */
    meterDisplayName?: string;
    /**
     * Primary labels with keys and values
     * @type {Array<CustomerPortalMeterLabels>}
     * @memberof CustomerPortalMeter
     */
    labels?: Array<CustomerPortalMeterLabels>;
    /**
     * Name of the meter.
     * @type {string}
     * @memberof CustomerPortalMeter
     */
    meterName?: string;
    /**
     * Name of the unit the meter uses.
     * @type {string}
     * @memberof CustomerPortalMeter
     */
    unitName?: string;
}

export function CustomerPortalMeterFromJSON(json: any): CustomerPortalMeter {
    return CustomerPortalMeterFromJSONTyped(json, false);
}

export function CustomerPortalMeterFromJSONTyped(json: any, ignoreDiscriminator: boolean): CustomerPortalMeter {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'meterType': !exists(json, 'meter_type') ? undefined : json['meter_type'],
        'meterDisplayName': !exists(json, 'meter_display_name') ? undefined : json['meter_display_name'],
        'labels': !exists(json, 'labels') ? undefined : ((json['labels'] as Array<any>).map(CustomerPortalMeterLabelsFromJSON)),
        'meterName': !exists(json, 'meter_name') ? undefined : json['meter_name'],
        'unitName': !exists(json, 'unit_name') ? undefined : json['unit_name'],
    };
}

export function CustomerPortalMeterToJSON(value?: CustomerPortalMeter | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'meter_type': value.meterType,
        'meter_display_name': value.meterDisplayName,
        'labels': value.labels === undefined ? undefined : ((value.labels as Array<any>).map(CustomerPortalMeterLabelsToJSON)),
        'meter_name': value.meterName,
        'unit_name': value.unitName,
    };
}

