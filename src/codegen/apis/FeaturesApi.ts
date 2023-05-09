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
    Feature,
    FeatureFromJSON,
    FeatureToJSON,
} from '../models';

/**
 * 
 */
export class FeaturesApi extends runtime.BaseAPI {

    /**
     * Gets all existing features for a specific vendor.
     * Get Features
     */
    async featuresGetRaw(initOverrides?: RequestInit): Promise<runtime.ApiResponse<Array<Feature>>> {
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
            path: `/features/`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(FeatureFromJSON));
    }

    /**
     * Gets all existing features for a specific vendor.
     * Get Features
     */
    async featuresGet(initOverrides?: RequestInit): Promise<Array<Feature>> {
        const response = await this.featuresGetRaw(initOverrides);
        return await response.value();
    }

}
