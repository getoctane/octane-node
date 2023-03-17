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
 * @interface CreateWebhookArgs
 */
export interface CreateWebhookArgs {
    /**
     * 
     * @type {boolean}
     * @memberof CreateWebhookArgs
     */
    enableSignature?: boolean;
    /**
     * 
     * @type {string}
     * @memberof CreateWebhookArgs
     */
    url?: string;
}

export function CreateWebhookArgsFromJSON(json: any): CreateWebhookArgs {
    return CreateWebhookArgsFromJSONTyped(json, false);
}

export function CreateWebhookArgsFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateWebhookArgs {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'enableSignature': !exists(json, 'enable_signature') ? undefined : json['enable_signature'],
        'url': !exists(json, 'url') ? undefined : json['url'],
    };
}

export function CreateWebhookArgsToJSON(value?: CreateWebhookArgs | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'enable_signature': value.enableSignature,
        'url': value.url,
    };
}

