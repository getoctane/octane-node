/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreatePricePlanArgs } from '../models/CreatePricePlanArgs';
import type { Error } from '../models/Error';
import type { PricePlan } from '../models/PricePlan';
import type { UpdatePricePlanArgs } from '../models/UpdatePricePlanArgs';
import { request as __request } from '../core/request';

export class PricePlansService {

    /**
     * Get All Price Plans
     * Fetch all price plans associated with a vendor.
     * @returns PricePlan OK
     * @returns Error Default error response
     * @throws ApiError
     */
    public static async getPricePlansService(): Promise<Array<PricePlan> | Error> {
        const result = await __request({
            method: 'GET',
            path: `/price_plans/`,
        });
        return result.body;
    }

    /**
     * Create Price Plan
     * @returns PricePlan OK
     * @returns Error Default error response
     * @throws ApiError
     */
    public static async postPricePlansService({
        requestBody,
    }: {
        requestBody: CreatePricePlanArgs,
    }): Promise<PricePlan | Error> {
        const result = await __request({
            method: 'POST',
            path: `/price_plans/`,
            body: requestBody,
            errors: {
                422: `Unprocessable Entity`,
            },
        });
        return result.body;
    }

    /**
     * Get a Price Plan
     * Fetch an existing price plan.
     * @returns PricePlan OK
     * @returns Error Default error response
     * @throws ApiError
     */
    public static async getPricePlansService1({
        pricePlanName,
    }: {
        pricePlanName: string,
    }): Promise<PricePlan | Error> {
        const result = await __request({
            method: 'GET',
            path: `/price_plans/${pricePlanName}`,
        });
        return result.body;
    }

    /**
     * Update a Price Plan
     * Update an existing price plan.
     * @returns PricePlan OK
     * @returns Error Default error response
     * @throws ApiError
     */
    public static async putPricePlansService({
        pricePlanName,
        requestBody,
    }: {
        pricePlanName: string,
        requestBody: UpdatePricePlanArgs,
    }): Promise<PricePlan | Error> {
        const result = await __request({
            method: 'PUT',
            path: `/price_plans/${pricePlanName}`,
            body: requestBody,
            errors: {
                422: `Unprocessable Entity`,
            },
        });
        return result.body;
    }

    /**
     * Delete Price Plan
     * Delete an existing Price Plan. Plans which map to active Subscriptions must be replaced or removed before deletion can occur.
     * @returns Error Default error response
     * @throws ApiError
     */
    public static async deletePricePlansService({
        pricePlanName,
    }: {
        pricePlanName: string,
    }): Promise<Error> {
        const result = await __request({
            method: 'DELETE',
            path: `/price_plans/${pricePlanName}`,
        });
        return result.body;
    }

}