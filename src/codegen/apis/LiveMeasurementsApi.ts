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

/**
 * 
 */
export class LiveMeasurementsApi extends runtime.BaseAPI {

    /**
     * Get a list of most recent measurements (maximum of 5000) for a vendor. Optionally filter by customer name.
     * Get Live Measurements
     */
    async liveMeasurementsGetRaw(initOverrides?: RequestInit): Promise<runtime.ApiResponse<void>> {
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
            path: `/live_measurements/`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Get a list of most recent measurements (maximum of 5000) for a vendor. Optionally filter by customer name.
     * Get Live Measurements
     */
    async liveMeasurementsGet(initOverrides?: RequestInit): Promise<void> {
        await this.liveMeasurementsGetRaw(initOverrides);
    }

}
