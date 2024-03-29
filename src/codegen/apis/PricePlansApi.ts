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
    AddAddOnsToPricePlanInput,
    AddAddOnsToPricePlanInputFromJSON,
    AddAddOnsToPricePlanInputToJSON,
    AddFeaturesToPricePlanInput,
    AddFeaturesToPricePlanInputFromJSON,
    AddFeaturesToPricePlanInputToJSON,
    AddMeteredComponentsToPricePlanInput,
    AddMeteredComponentsToPricePlanInputFromJSON,
    AddMeteredComponentsToPricePlanInputToJSON,
    CreatePricePlanArgs,
    CreatePricePlanArgsFromJSON,
    CreatePricePlanArgsToJSON,
    ListPricePlans,
    ListPricePlansFromJSON,
    ListPricePlansToJSON,
    MeteredComponent,
    MeteredComponentFromJSON,
    MeteredComponentToJSON,
    PricePlan,
    PricePlanFromJSON,
    PricePlanToJSON,
    RemoveFeaturesFromPricePlanInput,
    RemoveFeaturesFromPricePlanInputFromJSON,
    RemoveFeaturesFromPricePlanInputToJSON,
    SelfServePricePlansInputArgs,
    SelfServePricePlansInputArgsFromJSON,
    SelfServePricePlansInputArgsToJSON,
    UpdateMeteredComponentLimitsInput,
    UpdateMeteredComponentLimitsInputFromJSON,
    UpdateMeteredComponentLimitsInputToJSON,
    UpdatePricePlanArgs,
    UpdatePricePlanArgsFromJSON,
    UpdatePricePlanArgsToJSON,
    UpdatePricePlanInPlaceArgs,
    UpdatePricePlanInPlaceArgsFromJSON,
    UpdatePricePlanInPlaceArgsToJSON,
} from '../models';

export interface PricePlansMeteredComponentsUuidUpdateLimitsPostRequest {
    uuid: string;
    updateMeteredComponentLimitsInput: UpdateMeteredComponentLimitsInput;
}

export interface PricePlansPaginateGetRequest {
    names?: Array<string>;
    tags?: Array<string>;
    forwardSortOffset?: string;
    sortColumn?: string;
    limit?: number;
    forwardSecondarySortOffset?: string;
    sortDirection?: string;
}

export interface PricePlansPostRequest {
    createPricePlanArgs: CreatePricePlanArgs;
}

export interface PricePlansPricePlanNameArchivePostRequest {
    pricePlanName: string;
}

export interface PricePlansPricePlanNameDeleteRequest {
    pricePlanName: string;
}

export interface PricePlansPricePlanNameGetRequest {
    pricePlanName: string;
}

export interface PricePlansPricePlanNamePutRequest {
    pricePlanName: string;
    updatePricePlanArgs: UpdatePricePlanArgs;
}

export interface PricePlansPricePlanNameTagGetRequest {
    pricePlanName: string;
    tag: string;
}

export interface PricePlansSelfServePostRequest {
    selfServePricePlansInputArgs: SelfServePricePlansInputArgs;
}

export interface PricePlansUpdateInPlacePricePlanNamePostRequest {
    pricePlanName: string;
    updatePricePlanInPlaceArgs: UpdatePricePlanInPlaceArgs;
}

export interface PricePlansUpdateInPlacePricePlanNameTagPostRequest {
    pricePlanName: string;
    tag: string;
    updatePricePlanInPlaceArgs: UpdatePricePlanInPlaceArgs;
}

export interface PricePlansUuidAddAddOnsPostRequest {
    uuid: string;
    addAddOnsToPricePlanInput: AddAddOnsToPricePlanInput;
}

export interface PricePlansUuidAddFeaturesPostRequest {
    uuid: string;
    addFeaturesToPricePlanInput: AddFeaturesToPricePlanInput;
}

export interface PricePlansUuidAddMeteredComponentsPostRequest {
    uuid: string;
    addMeteredComponentsToPricePlanInput: AddMeteredComponentsToPricePlanInput;
}

export interface PricePlansUuidRemoveFeaturesPostRequest {
    uuid: string;
    removeFeaturesFromPricePlanInput: RemoveFeaturesFromPricePlanInput;
}

/**
 * 
 */
export class PricePlansApi extends runtime.BaseAPI {

    /**
     * Get all price plans associated with a vendor.
     * Get All Price Plans
     */
    async pricePlansGetRaw(initOverrides?: RequestInit): Promise<runtime.ApiResponse<Array<PricePlan>>> {
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
            path: `/price_plans/`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(PricePlanFromJSON));
    }

    /**
     * Get all price plans associated with a vendor.
     * Get All Price Plans
     */
    async pricePlansGet(initOverrides?: RequestInit): Promise<Array<PricePlan>> {
        const response = await this.pricePlansGetRaw(initOverrides);
        return await response.value();
    }

    /**
     * Update metered component usage limits in place
     * Update Metered Component Limits
     */
    async pricePlansMeteredComponentsUuidUpdateLimitsPostRaw(requestParameters: PricePlansMeteredComponentsUuidUpdateLimitsPostRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<MeteredComponent>> {
        if (requestParameters.uuid === null || requestParameters.uuid === undefined) {
            throw new runtime.RequiredError('uuid','Required parameter requestParameters.uuid was null or undefined when calling pricePlansMeteredComponentsUuidUpdateLimitsPost.');
        }

        if (requestParameters.updateMeteredComponentLimitsInput === null || requestParameters.updateMeteredComponentLimitsInput === undefined) {
            throw new runtime.RequiredError('updateMeteredComponentLimitsInput','Required parameter requestParameters.updateMeteredComponentLimitsInput was null or undefined when calling pricePlansMeteredComponentsUuidUpdateLimitsPost.');
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
            path: `/price_plans/metered_components/{uuid}/update_limits`.replace(`{${"uuid"}}`, encodeURIComponent(String(requestParameters.uuid))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: UpdateMeteredComponentLimitsInputToJSON(requestParameters.updateMeteredComponentLimitsInput),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => MeteredComponentFromJSON(jsonValue));
    }

    /**
     * Update metered component usage limits in place
     * Update Metered Component Limits
     */
    async pricePlansMeteredComponentsUuidUpdateLimitsPost(requestParameters: PricePlansMeteredComponentsUuidUpdateLimitsPostRequest, initOverrides?: RequestInit): Promise<MeteredComponent> {
        const response = await this.pricePlansMeteredComponentsUuidUpdateLimitsPostRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * List all price plans with pagination.
     * Get Paginated Price Plans
     */
    async pricePlansPaginateGetRaw(requestParameters: PricePlansPaginateGetRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<ListPricePlans>> {
        const queryParameters: any = {};

        if (requestParameters.names) {
            queryParameters['names'] = requestParameters.names;
        }

        if (requestParameters.tags) {
            queryParameters['tags'] = requestParameters.tags;
        }

        if (requestParameters.forwardSortOffset !== undefined) {
            queryParameters['forward_sort_offset'] = requestParameters.forwardSortOffset;
        }

        if (requestParameters.sortColumn !== undefined) {
            queryParameters['sort_column'] = requestParameters.sortColumn;
        }

        if (requestParameters.limit !== undefined) {
            queryParameters['limit'] = requestParameters.limit;
        }

        if (requestParameters.forwardSecondarySortOffset !== undefined) {
            queryParameters['forward_secondary_sort_offset'] = requestParameters.forwardSecondarySortOffset;
        }

        if (requestParameters.sortDirection !== undefined) {
            queryParameters['sort_direction'] = requestParameters.sortDirection;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("BearerApiKeyAuth", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/price_plans/paginate`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ListPricePlansFromJSON(jsonValue));
    }

    /**
     * List all price plans with pagination.
     * Get Paginated Price Plans
     */
    async pricePlansPaginateGet(requestParameters: PricePlansPaginateGetRequest = {}, initOverrides?: RequestInit): Promise<ListPricePlans> {
        const response = await this.pricePlansPaginateGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Create a price plan for a vendor.
     * Create Price Plan
     */
    async pricePlansPostRaw(requestParameters: PricePlansPostRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<PricePlan>> {
        if (requestParameters.createPricePlanArgs === null || requestParameters.createPricePlanArgs === undefined) {
            throw new runtime.RequiredError('createPricePlanArgs','Required parameter requestParameters.createPricePlanArgs was null or undefined when calling pricePlansPost.');
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
            path: `/price_plans/`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: CreatePricePlanArgsToJSON(requestParameters.createPricePlanArgs),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => PricePlanFromJSON(jsonValue));
    }

    /**
     * Create a price plan for a vendor.
     * Create Price Plan
     */
    async pricePlansPost(requestParameters: PricePlansPostRequest, initOverrides?: RequestInit): Promise<PricePlan> {
        const response = await this.pricePlansPostRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Archive a price plan that has no active/scheduled subscription.
     * Archive Price Plan
     */
    async pricePlansPricePlanNameArchivePostRaw(requestParameters: PricePlansPricePlanNameArchivePostRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.pricePlanName === null || requestParameters.pricePlanName === undefined) {
            throw new runtime.RequiredError('pricePlanName','Required parameter requestParameters.pricePlanName was null or undefined when calling pricePlansPricePlanNameArchivePost.');
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
            path: `/price_plans/{price_plan_name}/archive`.replace(`{${"price_plan_name"}}`, encodeURIComponent(String(requestParameters.pricePlanName))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Archive a price plan that has no active/scheduled subscription.
     * Archive Price Plan
     */
    async pricePlansPricePlanNameArchivePost(requestParameters: PricePlansPricePlanNameArchivePostRequest, initOverrides?: RequestInit): Promise<void> {
        await this.pricePlansPricePlanNameArchivePostRaw(requestParameters, initOverrides);
    }

    /**
     * Delete an existing Price Plan. Price Plans which map to active Subscriptions must be replaced or removed before deletion can occur.
     * Delete Price Plan
     */
    async pricePlansPricePlanNameDeleteRaw(requestParameters: PricePlansPricePlanNameDeleteRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.pricePlanName === null || requestParameters.pricePlanName === undefined) {
            throw new runtime.RequiredError('pricePlanName','Required parameter requestParameters.pricePlanName was null or undefined when calling pricePlansPricePlanNameDelete.');
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
            path: `/price_plans/{price_plan_name}`.replace(`{${"price_plan_name"}}`, encodeURIComponent(String(requestParameters.pricePlanName))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Delete an existing Price Plan. Price Plans which map to active Subscriptions must be replaced or removed before deletion can occur.
     * Delete Price Plan
     */
    async pricePlansPricePlanNameDelete(requestParameters: PricePlansPricePlanNameDeleteRequest, initOverrides?: RequestInit): Promise<void> {
        await this.pricePlansPricePlanNameDeleteRaw(requestParameters, initOverrides);
    }

    /**
     * Fetch an existing price plan.
     * Get a Price Plan
     */
    async pricePlansPricePlanNameGetRaw(requestParameters: PricePlansPricePlanNameGetRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<PricePlan>> {
        if (requestParameters.pricePlanName === null || requestParameters.pricePlanName === undefined) {
            throw new runtime.RequiredError('pricePlanName','Required parameter requestParameters.pricePlanName was null or undefined when calling pricePlansPricePlanNameGet.');
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
            path: `/price_plans/{price_plan_name}`.replace(`{${"price_plan_name"}}`, encodeURIComponent(String(requestParameters.pricePlanName))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => PricePlanFromJSON(jsonValue));
    }

    /**
     * Fetch an existing price plan.
     * Get a Price Plan
     */
    async pricePlansPricePlanNameGet(requestParameters: PricePlansPricePlanNameGetRequest, initOverrides?: RequestInit): Promise<PricePlan> {
        const response = await this.pricePlansPricePlanNameGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Update an existing price plan.
     * Update a Price Plan
     */
    async pricePlansPricePlanNamePutRaw(requestParameters: PricePlansPricePlanNamePutRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<PricePlan>> {
        if (requestParameters.pricePlanName === null || requestParameters.pricePlanName === undefined) {
            throw new runtime.RequiredError('pricePlanName','Required parameter requestParameters.pricePlanName was null or undefined when calling pricePlansPricePlanNamePut.');
        }

        if (requestParameters.updatePricePlanArgs === null || requestParameters.updatePricePlanArgs === undefined) {
            throw new runtime.RequiredError('updatePricePlanArgs','Required parameter requestParameters.updatePricePlanArgs was null or undefined when calling pricePlansPricePlanNamePut.');
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
            path: `/price_plans/{price_plan_name}`.replace(`{${"price_plan_name"}}`, encodeURIComponent(String(requestParameters.pricePlanName))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: UpdatePricePlanArgsToJSON(requestParameters.updatePricePlanArgs),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => PricePlanFromJSON(jsonValue));
    }

    /**
     * Update an existing price plan.
     * Update a Price Plan
     */
    async pricePlansPricePlanNamePut(requestParameters: PricePlansPricePlanNamePutRequest, initOverrides?: RequestInit): Promise<PricePlan> {
        const response = await this.pricePlansPricePlanNamePutRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get an existing price plan.
     * Get a Price Plan
     */
    async pricePlansPricePlanNameTagGetRaw(requestParameters: PricePlansPricePlanNameTagGetRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<PricePlan>> {
        if (requestParameters.pricePlanName === null || requestParameters.pricePlanName === undefined) {
            throw new runtime.RequiredError('pricePlanName','Required parameter requestParameters.pricePlanName was null or undefined when calling pricePlansPricePlanNameTagGet.');
        }

        if (requestParameters.tag === null || requestParameters.tag === undefined) {
            throw new runtime.RequiredError('tag','Required parameter requestParameters.tag was null or undefined when calling pricePlansPricePlanNameTagGet.');
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
            path: `/price_plans/{price_plan_name}/{tag}`.replace(`{${"price_plan_name"}}`, encodeURIComponent(String(requestParameters.pricePlanName))).replace(`{${"tag"}}`, encodeURIComponent(String(requestParameters.tag))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => PricePlanFromJSON(jsonValue));
    }

    /**
     * Get an existing price plan.
     * Get a Price Plan
     */
    async pricePlansPricePlanNameTagGet(requestParameters: PricePlansPricePlanNameTagGetRequest, initOverrides?: RequestInit): Promise<PricePlan> {
        const response = await this.pricePlansPricePlanNameTagGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get all price plans marked for self serve for this vendor.
     * Get All Self Serve Price Plans
     */
    async pricePlansSelfServeGetRaw(initOverrides?: RequestInit): Promise<runtime.ApiResponse<Array<PricePlan>>> {
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
            path: `/price_plans/self_serve`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(PricePlanFromJSON));
    }

    /**
     * Get all price plans marked for self serve for this vendor.
     * Get All Self Serve Price Plans
     */
    async pricePlansSelfServeGet(initOverrides?: RequestInit): Promise<Array<PricePlan>> {
        const response = await this.pricePlansSelfServeGetRaw(initOverrides);
        return await response.value();
    }

    /**
     * Set the exhaustive list of price plans that the customer can see and select via self serve.
     * Set Self Serve Price Plans
     */
    async pricePlansSelfServePostRaw(requestParameters: PricePlansSelfServePostRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.selfServePricePlansInputArgs === null || requestParameters.selfServePricePlansInputArgs === undefined) {
            throw new runtime.RequiredError('selfServePricePlansInputArgs','Required parameter requestParameters.selfServePricePlansInputArgs was null or undefined when calling pricePlansSelfServePost.');
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
            path: `/price_plans/self_serve`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: SelfServePricePlansInputArgsToJSON(requestParameters.selfServePricePlansInputArgs),
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Set the exhaustive list of price plans that the customer can see and select via self serve.
     * Set Self Serve Price Plans
     */
    async pricePlansSelfServePost(requestParameters: PricePlansSelfServePostRequest, initOverrides?: RequestInit): Promise<void> {
        await this.pricePlansSelfServePostRaw(requestParameters, initOverrides);
    }

    /**
     * Edit a price plan without creating a new version.
     * Update Price Plan In Place
     */
    async pricePlansUpdateInPlacePricePlanNamePostRaw(requestParameters: PricePlansUpdateInPlacePricePlanNamePostRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<PricePlan>> {
        if (requestParameters.pricePlanName === null || requestParameters.pricePlanName === undefined) {
            throw new runtime.RequiredError('pricePlanName','Required parameter requestParameters.pricePlanName was null or undefined when calling pricePlansUpdateInPlacePricePlanNamePost.');
        }

        if (requestParameters.updatePricePlanInPlaceArgs === null || requestParameters.updatePricePlanInPlaceArgs === undefined) {
            throw new runtime.RequiredError('updatePricePlanInPlaceArgs','Required parameter requestParameters.updatePricePlanInPlaceArgs was null or undefined when calling pricePlansUpdateInPlacePricePlanNamePost.');
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
            path: `/price_plans/update_in_place/{price_plan_name}`.replace(`{${"price_plan_name"}}`, encodeURIComponent(String(requestParameters.pricePlanName))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: UpdatePricePlanInPlaceArgsToJSON(requestParameters.updatePricePlanInPlaceArgs),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => PricePlanFromJSON(jsonValue));
    }

    /**
     * Edit a price plan without creating a new version.
     * Update Price Plan In Place
     */
    async pricePlansUpdateInPlacePricePlanNamePost(requestParameters: PricePlansUpdateInPlacePricePlanNamePostRequest, initOverrides?: RequestInit): Promise<PricePlan> {
        const response = await this.pricePlansUpdateInPlacePricePlanNamePostRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Edit a price plan without creating a new version.
     * Update Price Plan In Place
     */
    async pricePlansUpdateInPlacePricePlanNameTagPostRaw(requestParameters: PricePlansUpdateInPlacePricePlanNameTagPostRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<PricePlan>> {
        if (requestParameters.pricePlanName === null || requestParameters.pricePlanName === undefined) {
            throw new runtime.RequiredError('pricePlanName','Required parameter requestParameters.pricePlanName was null or undefined when calling pricePlansUpdateInPlacePricePlanNameTagPost.');
        }

        if (requestParameters.tag === null || requestParameters.tag === undefined) {
            throw new runtime.RequiredError('tag','Required parameter requestParameters.tag was null or undefined when calling pricePlansUpdateInPlacePricePlanNameTagPost.');
        }

        if (requestParameters.updatePricePlanInPlaceArgs === null || requestParameters.updatePricePlanInPlaceArgs === undefined) {
            throw new runtime.RequiredError('updatePricePlanInPlaceArgs','Required parameter requestParameters.updatePricePlanInPlaceArgs was null or undefined when calling pricePlansUpdateInPlacePricePlanNameTagPost.');
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
            path: `/price_plans/update_in_place/{price_plan_name}/{tag}`.replace(`{${"price_plan_name"}}`, encodeURIComponent(String(requestParameters.pricePlanName))).replace(`{${"tag"}}`, encodeURIComponent(String(requestParameters.tag))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: UpdatePricePlanInPlaceArgsToJSON(requestParameters.updatePricePlanInPlaceArgs),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => PricePlanFromJSON(jsonValue));
    }

    /**
     * Edit a price plan without creating a new version.
     * Update Price Plan In Place
     */
    async pricePlansUpdateInPlacePricePlanNameTagPost(requestParameters: PricePlansUpdateInPlacePricePlanNameTagPostRequest, initOverrides?: RequestInit): Promise<PricePlan> {
        const response = await this.pricePlansUpdateInPlacePricePlanNameTagPostRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Add add ons to price plan in place
     * Add AddOns
     */
    async pricePlansUuidAddAddOnsPostRaw(requestParameters: PricePlansUuidAddAddOnsPostRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<PricePlan>> {
        if (requestParameters.uuid === null || requestParameters.uuid === undefined) {
            throw new runtime.RequiredError('uuid','Required parameter requestParameters.uuid was null or undefined when calling pricePlansUuidAddAddOnsPost.');
        }

        if (requestParameters.addAddOnsToPricePlanInput === null || requestParameters.addAddOnsToPricePlanInput === undefined) {
            throw new runtime.RequiredError('addAddOnsToPricePlanInput','Required parameter requestParameters.addAddOnsToPricePlanInput was null or undefined when calling pricePlansUuidAddAddOnsPost.');
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
            path: `/price_plans/{uuid}/add_add_ons`.replace(`{${"uuid"}}`, encodeURIComponent(String(requestParameters.uuid))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: AddAddOnsToPricePlanInputToJSON(requestParameters.addAddOnsToPricePlanInput),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => PricePlanFromJSON(jsonValue));
    }

    /**
     * Add add ons to price plan in place
     * Add AddOns
     */
    async pricePlansUuidAddAddOnsPost(requestParameters: PricePlansUuidAddAddOnsPostRequest, initOverrides?: RequestInit): Promise<PricePlan> {
        const response = await this.pricePlansUuidAddAddOnsPostRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Add features and(or) limits to a price plan in place
     * Add features and limits
     */
    async pricePlansUuidAddFeaturesPostRaw(requestParameters: PricePlansUuidAddFeaturesPostRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<PricePlan>> {
        if (requestParameters.uuid === null || requestParameters.uuid === undefined) {
            throw new runtime.RequiredError('uuid','Required parameter requestParameters.uuid was null or undefined when calling pricePlansUuidAddFeaturesPost.');
        }

        if (requestParameters.addFeaturesToPricePlanInput === null || requestParameters.addFeaturesToPricePlanInput === undefined) {
            throw new runtime.RequiredError('addFeaturesToPricePlanInput','Required parameter requestParameters.addFeaturesToPricePlanInput was null or undefined when calling pricePlansUuidAddFeaturesPost.');
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
            path: `/price_plans/{uuid}/add_features`.replace(`{${"uuid"}}`, encodeURIComponent(String(requestParameters.uuid))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: AddFeaturesToPricePlanInputToJSON(requestParameters.addFeaturesToPricePlanInput),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => PricePlanFromJSON(jsonValue));
    }

    /**
     * Add features and(or) limits to a price plan in place
     * Add features and limits
     */
    async pricePlansUuidAddFeaturesPost(requestParameters: PricePlansUuidAddFeaturesPostRequest, initOverrides?: RequestInit): Promise<PricePlan> {
        const response = await this.pricePlansUuidAddFeaturesPostRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Add metered components to price plan in place
     * Add Metered Components
     */
    async pricePlansUuidAddMeteredComponentsPostRaw(requestParameters: PricePlansUuidAddMeteredComponentsPostRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<PricePlan>> {
        if (requestParameters.uuid === null || requestParameters.uuid === undefined) {
            throw new runtime.RequiredError('uuid','Required parameter requestParameters.uuid was null or undefined when calling pricePlansUuidAddMeteredComponentsPost.');
        }

        if (requestParameters.addMeteredComponentsToPricePlanInput === null || requestParameters.addMeteredComponentsToPricePlanInput === undefined) {
            throw new runtime.RequiredError('addMeteredComponentsToPricePlanInput','Required parameter requestParameters.addMeteredComponentsToPricePlanInput was null or undefined when calling pricePlansUuidAddMeteredComponentsPost.');
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
            path: `/price_plans/{uuid}/add_metered_components`.replace(`{${"uuid"}}`, encodeURIComponent(String(requestParameters.uuid))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: AddMeteredComponentsToPricePlanInputToJSON(requestParameters.addMeteredComponentsToPricePlanInput),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => PricePlanFromJSON(jsonValue));
    }

    /**
     * Add metered components to price plan in place
     * Add Metered Components
     */
    async pricePlansUuidAddMeteredComponentsPost(requestParameters: PricePlansUuidAddMeteredComponentsPostRequest, initOverrides?: RequestInit): Promise<PricePlan> {
        const response = await this.pricePlansUuidAddMeteredComponentsPostRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Remove features and(or) limits from a price plan in place
     * Remove features and limits
     */
    async pricePlansUuidRemoveFeaturesPostRaw(requestParameters: PricePlansUuidRemoveFeaturesPostRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<PricePlan>> {
        if (requestParameters.uuid === null || requestParameters.uuid === undefined) {
            throw new runtime.RequiredError('uuid','Required parameter requestParameters.uuid was null or undefined when calling pricePlansUuidRemoveFeaturesPost.');
        }

        if (requestParameters.removeFeaturesFromPricePlanInput === null || requestParameters.removeFeaturesFromPricePlanInput === undefined) {
            throw new runtime.RequiredError('removeFeaturesFromPricePlanInput','Required parameter requestParameters.removeFeaturesFromPricePlanInput was null or undefined when calling pricePlansUuidRemoveFeaturesPost.');
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
            path: `/price_plans/{uuid}/remove_features`.replace(`{${"uuid"}}`, encodeURIComponent(String(requestParameters.uuid))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: RemoveFeaturesFromPricePlanInputToJSON(requestParameters.removeFeaturesFromPricePlanInput),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => PricePlanFromJSON(jsonValue));
    }

    /**
     * Remove features and(or) limits from a price plan in place
     * Remove features and limits
     */
    async pricePlansUuidRemoveFeaturesPost(requestParameters: PricePlansUuidRemoveFeaturesPostRequest, initOverrides?: RequestInit): Promise<PricePlan> {
        const response = await this.pricePlansUuidRemoveFeaturesPostRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
