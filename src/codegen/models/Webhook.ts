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
 * @interface Webhook
 */
export interface Webhook {
    /**
     * The url to send the webhooks to.
     * @type {string}
     * @memberof Webhook
     */
    url: string;
    /**
     * Unique string identifier representing this webhook configuration.
     * @type {string}
     * @memberof Webhook
     */
    uuid?: string;
    /**
     * Determines whether Octane will sign the outgoing webhook
     * @type {boolean}
     * @memberof Webhook
     */
    enableSignature: boolean;
}

export function WebhookFromJSON(json: any): Webhook {
    return WebhookFromJSONTyped(json, false);
}

export function WebhookFromJSONTyped(json: any, ignoreDiscriminator: boolean): Webhook {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'url': json['url'],
        'uuid': !exists(json, 'uuid') ? undefined : json['uuid'],
        'enableSignature': json['enable_signature'],
    };
}

export function WebhookToJSON(value?: Webhook | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'url': value.url,
        'uuid': value.uuid,
        'enable_signature': value.enableSignature,
    };
}

