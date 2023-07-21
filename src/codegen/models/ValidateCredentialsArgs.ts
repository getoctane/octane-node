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
 * @interface ValidateCredentialsArgs
 */
export interface ValidateCredentialsArgs {
    /**
     * Username of the Avalara account
     * @type {string}
     * @memberof ValidateCredentialsArgs
     */
    username: string;
    /**
     * True if using a Avalara sandbox account, False otherwise
     * @type {boolean}
     * @memberof ValidateCredentialsArgs
     */
    sandboxMode: boolean;
    /**
     * Password of the Avalara account
     * @type {string}
     * @memberof ValidateCredentialsArgs
     */
    password: string;
}

export function ValidateCredentialsArgsFromJSON(json: any): ValidateCredentialsArgs {
    return ValidateCredentialsArgsFromJSONTyped(json, false);
}

export function ValidateCredentialsArgsFromJSONTyped(json: any, ignoreDiscriminator: boolean): ValidateCredentialsArgs {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'username': json['username'],
        'sandboxMode': json['sandbox_mode'],
        'password': json['password'],
    };
}

export function ValidateCredentialsArgsToJSON(value?: ValidateCredentialsArgs | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'username': value.username,
        'sandbox_mode': value.sandboxMode,
        'password': value.password,
    };
}

