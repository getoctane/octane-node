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
    CustomerPortalSettings,
    CustomerPortalSettingsFromJSON,
    CustomerPortalSettingsToJSON,
    UpdateCustomerPortalSettingsInputArgs,
    UpdateCustomerPortalSettingsInputArgsFromJSON,
    UpdateCustomerPortalSettingsInputArgsToJSON,
} from '../models';

export interface CustomerPortalSettingsPostRequest {
    updateCustomerPortalSettingsInputArgs: UpdateCustomerPortalSettingsInputArgs;
}

/**
 * 
 */
export class CustomerPortalSettingsApi extends runtime.BaseAPI {

    /**
     * Fetch the Customer Portal settings for your account.
     * Get Customer Portal Settings
     */
    async customerPortalSettingsGetRaw(initOverrides?: RequestInit): Promise<runtime.ApiResponse<CustomerPortalSettings>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("BearerApiKeyAuth", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/customer_portal_settings/`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CustomerPortalSettingsFromJSON(jsonValue));
    }

    /**
     * Fetch the Customer Portal settings for your account.
     * Get Customer Portal Settings
     */
    async customerPortalSettingsGet(initOverrides?: RequestInit): Promise<CustomerPortalSettings> {
        const response = await this.customerPortalSettingsGetRaw(initOverrides);
        return await response.value();
    }

    /**
     * Update Customer Portal settings for your account.
     * Update Customer Portal Settings
     */
    async customerPortalSettingsPostRaw(requestParameters: CustomerPortalSettingsPostRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<CustomerPortalSettings>> {
        if (requestParameters.updateCustomerPortalSettingsInputArgs === null || requestParameters.updateCustomerPortalSettingsInputArgs === undefined) {
            throw new runtime.RequiredError('updateCustomerPortalSettingsInputArgs','Required parameter requestParameters.updateCustomerPortalSettingsInputArgs was null or undefined when calling customerPortalSettingsPost.');
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
            path: `/customer_portal_settings/`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: UpdateCustomerPortalSettingsInputArgsToJSON(requestParameters.updateCustomerPortalSettingsInputArgs),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CustomerPortalSettingsFromJSON(jsonValue));
    }

    /**
     * Update Customer Portal settings for your account.
     * Update Customer Portal Settings
     */
    async customerPortalSettingsPost(requestParameters: CustomerPortalSettingsPostRequest, initOverrides?: RequestInit): Promise<CustomerPortalSettings> {
        const response = await this.customerPortalSettingsPostRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
