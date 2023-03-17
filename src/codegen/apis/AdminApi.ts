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


import * as runtime from '../runtime';
import {
    RollApiKeyArgs,
    RollApiKeyArgsFromJSON,
    RollApiKeyArgsToJSON,
    RollApiKeys,
    RollApiKeysFromJSON,
    RollApiKeysToJSON,
} from '../models';

export interface AdminApiKeyRollPostRequest {
    rollApiKeyArgs: RollApiKeyArgs;
}

/**
 * 
 */
export class AdminApi extends runtime.BaseAPI {

    /**
     * Expires the specified API key and creates a new one.
     * Roll the API Key for a vendor
     */
    async adminApiKeyRollPostRaw(requestParameters: AdminApiKeyRollPostRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<RollApiKeys>> {
        if (requestParameters.rollApiKeyArgs === null || requestParameters.rollApiKeyArgs === undefined) {
            throw new runtime.RequiredError('rollApiKeyArgs','Required parameter requestParameters.rollApiKeyArgs was null or undefined when calling adminApiKeyRollPost.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("BearerApiKeyAuth", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/admin/api_key/roll`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: RollApiKeyArgsToJSON(requestParameters.rollApiKeyArgs),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => RollApiKeysFromJSON(jsonValue));
    }

    /**
     * Expires the specified API key and creates a new one.
     * Roll the API Key for a vendor
     */
    async adminApiKeyRollPost(requestParameters: AdminApiKeyRollPostRequest, initOverrides?: RequestInit): Promise<RollApiKeys> {
        const response = await this.adminApiKeyRollPostRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
