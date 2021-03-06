/* tslint:disable */
/* eslint-disable */
/**
 * Octane API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0.1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import {
    Meter,
    MeterFromJSON,
    MeterToJSON,
    MeterInputArgs,
    MeterInputArgsFromJSON,
    MeterInputArgsToJSON,
    UpdateMeterArgs,
    UpdateMeterArgsFromJSON,
    UpdateMeterArgsToJSON,
} from '../models';

export interface MetersMeterNameArchivePostRequest {
    meterName: string;
}

export interface MetersMeterNameDeleteRequest {
    meterName: string;
}

export interface MetersMeterNameGetRequest {
    meterName: string;
}

export interface MetersMeterNamePutRequest {
    meterName: string;
    updateMeterArgs: UpdateMeterArgs;
}

export interface MetersPostRequest {
    meterInputArgs: MeterInputArgs;
}

/**
 * 
 */
export class MetersApi extends runtime.BaseAPI {

    /**
     * Retrieve all meters for a given vendor.
     * Get Meters
     */
    async metersGetRaw(initOverrides?: RequestInit): Promise<runtime.ApiResponse<Array<Meter>>> {
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
            path: `/meters/`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(MeterFromJSON));
    }

    /**
     * Retrieve all meters for a given vendor.
     * Get Meters
     */
    async metersGet(initOverrides?: RequestInit): Promise<Array<Meter>> {
        const response = await this.metersGetRaw(initOverrides);
        return await response.value();
    }

    /**
     * Archive Meter
     */
    async metersMeterNameArchivePostRaw(requestParameters: MetersMeterNameArchivePostRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.meterName === null || requestParameters.meterName === undefined) {
            throw new runtime.RequiredError('meterName','Required parameter requestParameters.meterName was null or undefined when calling metersMeterNameArchivePost.');
        }

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
            path: `/meters/{meter_name}/archive`.replace(`{${"meter_name"}}`, encodeURIComponent(String(requestParameters.meterName))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Archive Meter
     */
    async metersMeterNameArchivePost(requestParameters: MetersMeterNameArchivePostRequest, initOverrides?: RequestInit): Promise<void> {
        await this.metersMeterNameArchivePostRaw(requestParameters, initOverrides);
    }

    /**
     * Delete a meter by its unique name. Meters can only be deleted if not in-use by a price plan.
     * Delete Meter
     */
    async metersMeterNameDeleteRaw(requestParameters: MetersMeterNameDeleteRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.meterName === null || requestParameters.meterName === undefined) {
            throw new runtime.RequiredError('meterName','Required parameter requestParameters.meterName was null or undefined when calling metersMeterNameDelete.');
        }

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
            path: `/meters/{meter_name}`.replace(`{${"meter_name"}}`, encodeURIComponent(String(requestParameters.meterName))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Delete a meter by its unique name. Meters can only be deleted if not in-use by a price plan.
     * Delete Meter
     */
    async metersMeterNameDelete(requestParameters: MetersMeterNameDeleteRequest, initOverrides?: RequestInit): Promise<void> {
        await this.metersMeterNameDeleteRaw(requestParameters, initOverrides);
    }

    /**
     * Fetch a meter by its unique name
     * Get Meter
     */
    async metersMeterNameGetRaw(requestParameters: MetersMeterNameGetRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<Meter>> {
        if (requestParameters.meterName === null || requestParameters.meterName === undefined) {
            throw new runtime.RequiredError('meterName','Required parameter requestParameters.meterName was null or undefined when calling metersMeterNameGet.');
        }

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
            path: `/meters/{meter_name}`.replace(`{${"meter_name"}}`, encodeURIComponent(String(requestParameters.meterName))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => MeterFromJSON(jsonValue));
    }

    /**
     * Fetch a meter by its unique name
     * Get Meter
     */
    async metersMeterNameGet(requestParameters: MetersMeterNameGetRequest, initOverrides?: RequestInit): Promise<Meter> {
        const response = await this.metersMeterNameGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Update a meter by its unique name
     * Update Meter
     */
    async metersMeterNamePutRaw(requestParameters: MetersMeterNamePutRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<Meter>> {
        if (requestParameters.meterName === null || requestParameters.meterName === undefined) {
            throw new runtime.RequiredError('meterName','Required parameter requestParameters.meterName was null or undefined when calling metersMeterNamePut.');
        }

        if (requestParameters.updateMeterArgs === null || requestParameters.updateMeterArgs === undefined) {
            throw new runtime.RequiredError('updateMeterArgs','Required parameter requestParameters.updateMeterArgs was null or undefined when calling metersMeterNamePut.');
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
            path: `/meters/{meter_name}`.replace(`{${"meter_name"}}`, encodeURIComponent(String(requestParameters.meterName))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: UpdateMeterArgsToJSON(requestParameters.updateMeterArgs),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => MeterFromJSON(jsonValue));
    }

    /**
     * Update a meter by its unique name
     * Update Meter
     */
    async metersMeterNamePut(requestParameters: MetersMeterNamePutRequest, initOverrides?: RequestInit): Promise<Meter> {
        const response = await this.metersMeterNamePutRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Create a new Meter.
     * Create Meter
     */
    async metersPostRaw(requestParameters: MetersPostRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<Meter>> {
        if (requestParameters.meterInputArgs === null || requestParameters.meterInputArgs === undefined) {
            throw new runtime.RequiredError('meterInputArgs','Required parameter requestParameters.meterInputArgs was null or undefined when calling metersPost.');
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
            path: `/meters/`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: MeterInputArgsToJSON(requestParameters.meterInputArgs),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => MeterFromJSON(jsonValue));
    }

    /**
     * Create a new Meter.
     * Create Meter
     */
    async metersPost(requestParameters: MetersPostRequest, initOverrides?: RequestInit): Promise<Meter> {
        const response = await this.metersPostRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
