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
 * @interface CustomerSpendByTimeInputArgs
 */
export interface CustomerSpendByTimeInputArgs {
    /**
     * The time bucket for which the spend is computed. One of `hour` or `day`.
     * @type {string}
     * @memberof CustomerSpendByTimeInputArgs
     */
    timeBucket?: CustomerSpendByTimeInputArgsTimeBucketEnum;
    /**
     * The start time of the billing cycle for which the spend is computed
     * @type {Date}
     * @memberof CustomerSpendByTimeInputArgs
     */
    startTime: Date;
}

/**
* @export
* @enum {string}
*/
export enum CustomerSpendByTimeInputArgsTimeBucketEnum {
    Hour = 'hour',
    Day = 'day'
}

export function CustomerSpendByTimeInputArgsFromJSON(json: any): CustomerSpendByTimeInputArgs {
    return CustomerSpendByTimeInputArgsFromJSONTyped(json, false);
}

export function CustomerSpendByTimeInputArgsFromJSONTyped(json: any, ignoreDiscriminator: boolean): CustomerSpendByTimeInputArgs {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'timeBucket': !exists(json, 'time_bucket') ? undefined : json['time_bucket'],
        'startTime': (new Date(json['start_time'])),
    };
}

export function CustomerSpendByTimeInputArgsToJSON(value?: CustomerSpendByTimeInputArgs | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'time_bucket': value.timeBucket,
        'start_time': (value.startTime.toISOString()),
    };
}

