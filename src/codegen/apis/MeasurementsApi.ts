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
    Measurement,
    MeasurementFromJSON,
    MeasurementToJSON,
} from '../models';

export interface MeasurementsMultiPostRequest {
    measurement: Array<Measurement>;
}

export interface MeasurementsPostRequest {
    measurement: Measurement;
}

/**
 * 
 */
export class MeasurementsApi extends runtime.BaseAPI {

    /**
     * Send Batched Measurements
     */
    async measurementsMultiPostRaw(requestParameters: MeasurementsMultiPostRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<Array<Measurement>>> {
        if (requestParameters.measurement === null || requestParameters.measurement === undefined) {
            throw new runtime.RequiredError('measurement','Required parameter requestParameters.measurement was null or undefined when calling measurementsMultiPost.');
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
            path: `/measurements/multi`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.measurement.map(MeasurementToJSON),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(MeasurementFromJSON));
    }

    /**
     * Send Batched Measurements
     */
    async measurementsMultiPost(requestParameters: MeasurementsMultiPostRequest, initOverrides?: RequestInit): Promise<Array<Measurement>> {
        const response = await this.measurementsMultiPostRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Send Measurement
     */
    async measurementsPostRaw(requestParameters: MeasurementsPostRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<Measurement>> {
        if (requestParameters.measurement === null || requestParameters.measurement === undefined) {
            throw new runtime.RequiredError('measurement','Required parameter requestParameters.measurement was null or undefined when calling measurementsPost.');
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
            path: `/measurements/`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: MeasurementToJSON(requestParameters.measurement),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => MeasurementFromJSON(jsonValue));
    }

    /**
     * Send Measurement
     */
    async measurementsPost(requestParameters: MeasurementsPostRequest, initOverrides?: RequestInit): Promise<Measurement> {
        const response = await this.measurementsPostRaw(requestParameters, initOverrides);
        return await response.value();
    }

}