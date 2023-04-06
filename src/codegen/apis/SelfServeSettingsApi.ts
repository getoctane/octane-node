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
    SelfServeCustomization,
    SelfServeCustomizationFromJSON,
    SelfServeCustomizationToJSON,
    SelfServeSettings,
    SelfServeSettingsFromJSON,
    SelfServeSettingsToJSON,
    UpdateSelfServeSettingsArgs,
    UpdateSelfServeSettingsArgsFromJSON,
    UpdateSelfServeSettingsArgsToJSON,
} from '../models';

export interface SelfServeSettingsCustomizationPostRequest {
    selfServeCustomization: SelfServeCustomization;
}

export interface SelfServeSettingsCustomizationPutRequest {
    selfServeCustomization: SelfServeCustomization;
}

export interface SelfServeSettingsPostRequest {
    updateSelfServeSettingsArgs: UpdateSelfServeSettingsArgs;
}

export interface SelfServeSettingsPutRequest {
    updateSelfServeSettingsArgs: UpdateSelfServeSettingsArgs;
}

/**
 * 
 */
export class SelfServeSettingsApi extends runtime.BaseAPI {

    /**
     * Get the customization settings for the vendor\'s customer portal.
     * Get Vendor Customization for Self Serve
     */
    async selfServeSettingsCustomizationGetRaw(initOverrides?: RequestInit): Promise<runtime.ApiResponse<SelfServeCustomization>> {
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
            path: `/self_serve_settings/customization`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => SelfServeCustomizationFromJSON(jsonValue));
    }

    /**
     * Get the customization settings for the vendor\'s customer portal.
     * Get Vendor Customization for Self Serve
     */
    async selfServeSettingsCustomizationGet(initOverrides?: RequestInit): Promise<SelfServeCustomization> {
        const response = await this.selfServeSettingsCustomizationGetRaw(initOverrides);
        return await response.value();
    }

    /**
     * Create the customization settings for the vendor\'s customer portal.
     * Create Vendor Customization for Self Serve
     */
    async selfServeSettingsCustomizationPostRaw(requestParameters: SelfServeSettingsCustomizationPostRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<SelfServeCustomization>> {
        if (requestParameters.selfServeCustomization === null || requestParameters.selfServeCustomization === undefined) {
            throw new runtime.RequiredError('selfServeCustomization','Required parameter requestParameters.selfServeCustomization was null or undefined when calling selfServeSettingsCustomizationPost.');
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
            path: `/self_serve_settings/customization`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: SelfServeCustomizationToJSON(requestParameters.selfServeCustomization),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => SelfServeCustomizationFromJSON(jsonValue));
    }

    /**
     * Create the customization settings for the vendor\'s customer portal.
     * Create Vendor Customization for Self Serve
     */
    async selfServeSettingsCustomizationPost(requestParameters: SelfServeSettingsCustomizationPostRequest, initOverrides?: RequestInit): Promise<SelfServeCustomization> {
        const response = await this.selfServeSettingsCustomizationPostRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Update the customization settings for the vendor\'s customer portal.
     * Update Vendor Customization for Self Serve
     */
    async selfServeSettingsCustomizationPutRaw(requestParameters: SelfServeSettingsCustomizationPutRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<SelfServeCustomization>> {
        if (requestParameters.selfServeCustomization === null || requestParameters.selfServeCustomization === undefined) {
            throw new runtime.RequiredError('selfServeCustomization','Required parameter requestParameters.selfServeCustomization was null or undefined when calling selfServeSettingsCustomizationPut.');
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
            path: `/self_serve_settings/customization`,
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: SelfServeCustomizationToJSON(requestParameters.selfServeCustomization),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => SelfServeCustomizationFromJSON(jsonValue));
    }

    /**
     * Update the customization settings for the vendor\'s customer portal.
     * Update Vendor Customization for Self Serve
     */
    async selfServeSettingsCustomizationPut(requestParameters: SelfServeSettingsCustomizationPutRequest, initOverrides?: RequestInit): Promise<SelfServeCustomization> {
        const response = await this.selfServeSettingsCustomizationPutRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get self serve settings for a vendor.
     * Get Vendor Self Serve Settings
     */
    async selfServeSettingsGetRaw(initOverrides?: RequestInit): Promise<runtime.ApiResponse<SelfServeSettings>> {
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
            path: `/self_serve_settings/`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => SelfServeSettingsFromJSON(jsonValue));
    }

    /**
     * Get self serve settings for a vendor.
     * Get Vendor Self Serve Settings
     */
    async selfServeSettingsGet(initOverrides?: RequestInit): Promise<SelfServeSettings> {
        const response = await this.selfServeSettingsGetRaw(initOverrides);
        return await response.value();
    }

    /**
     * Create the self serve settings for a vendor. If partial fields are given, we will fallback on default values.
     * Create Vendor Self Serve Settings
     */
    async selfServeSettingsPostRaw(requestParameters: SelfServeSettingsPostRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<SelfServeSettings>> {
        if (requestParameters.updateSelfServeSettingsArgs === null || requestParameters.updateSelfServeSettingsArgs === undefined) {
            throw new runtime.RequiredError('updateSelfServeSettingsArgs','Required parameter requestParameters.updateSelfServeSettingsArgs was null or undefined when calling selfServeSettingsPost.');
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
            path: `/self_serve_settings/`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: UpdateSelfServeSettingsArgsToJSON(requestParameters.updateSelfServeSettingsArgs),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => SelfServeSettingsFromJSON(jsonValue));
    }

    /**
     * Create the self serve settings for a vendor. If partial fields are given, we will fallback on default values.
     * Create Vendor Self Serve Settings
     */
    async selfServeSettingsPost(requestParameters: SelfServeSettingsPostRequest, initOverrides?: RequestInit): Promise<SelfServeSettings> {
        const response = await this.selfServeSettingsPostRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Update the self serve settings for a vendor. If partial fields are given, we will only update the provided fields.
     * Update Vendor Self Serve Settings.
     */
    async selfServeSettingsPutRaw(requestParameters: SelfServeSettingsPutRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<SelfServeSettings>> {
        if (requestParameters.updateSelfServeSettingsArgs === null || requestParameters.updateSelfServeSettingsArgs === undefined) {
            throw new runtime.RequiredError('updateSelfServeSettingsArgs','Required parameter requestParameters.updateSelfServeSettingsArgs was null or undefined when calling selfServeSettingsPut.');
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
            path: `/self_serve_settings/`,
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: UpdateSelfServeSettingsArgsToJSON(requestParameters.updateSelfServeSettingsArgs),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => SelfServeSettingsFromJSON(jsonValue));
    }

    /**
     * Update the self serve settings for a vendor. If partial fields are given, we will only update the provided fields.
     * Update Vendor Self Serve Settings.
     */
    async selfServeSettingsPut(requestParameters: SelfServeSettingsPutRequest, initOverrides?: RequestInit): Promise<SelfServeSettings> {
        const response = await this.selfServeSettingsPutRaw(requestParameters, initOverrides);
        return await response.value();
    }

}