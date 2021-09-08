/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BillingSettings } from '../models/BillingSettings';
import type { CreateBillingSettingsInputArgs } from '../models/CreateBillingSettingsInputArgs';
import type { Error } from '../models/Error';
import type { UpdateBillingSettingsInputArgs } from '../models/UpdateBillingSettingsInputArgs';
import { request as __request } from '../core/request';

export class BillingSettingsService {

    /**
     * Get Billing Settings
     * Fetch the billing settings for a vendor.
     * @returns BillingSettings OK
     * @returns Error Default error response
     * @throws ApiError
     */
    public static async getBillingSettingsService(): Promise<BillingSettings | Error> {
        const result = await __request({
            method: 'GET',
            path: `/billing_settings/`,
        });
        return result.body;
    }

    /**
     * Create billing settings.
     * Create billing settings for a vendor.
     * @returns BillingSettings OK
     * @returns Error Default error response
     * @throws ApiError
     */
    public static async postBillingSettingsService({
        requestBody,
    }: {
        requestBody: CreateBillingSettingsInputArgs,
    }): Promise<BillingSettings | Error> {
        const result = await __request({
            method: 'POST',
            path: `/billing_settings/`,
            body: requestBody,
            errors: {
                422: `Unprocessable Entity`,
            },
        });
        return result.body;
    }

    /**
     * Update Billing Settings
     * Update billing settings for a vendor.
     * @returns BillingSettings OK
     * @returns Error Default error response
     * @throws ApiError
     */
    public static async putBillingSettingsService({
        requestBody,
    }: {
        requestBody: UpdateBillingSettingsInputArgs,
    }): Promise<BillingSettings | Error> {
        const result = await __request({
            method: 'PUT',
            path: `/billing_settings/`,
            body: requestBody,
            errors: {
                422: `Unprocessable Entity`,
            },
        });
        return result.body;
    }

    /**
     * Delete Billing Settings
     * Delete billing settings for a vendor.
     * @returns Error Default error response
     * @throws ApiError
     */
    public static async deleteBillingSettingsService(): Promise<Error> {
        const result = await __request({
            method: 'DELETE',
            path: `/billing_settings/`,
        });
        return result.body;
    }

}