/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateVendorArgs } from '../models/CreateVendorArgs';
import type { Error } from '../models/Error';
import type { UpdateVendorArgs } from '../models/UpdateVendorArgs';
import type { Vendor } from '../models/Vendor';
import { request as __request } from '../core/request';

export class VendorsService {

    /**
     * Get Vendor
     * Fetch vendor data. The vendor used is based on the API Key provided as a part of auth.
     * @returns Vendor OK
     * @returns Error Default error response
     * @throws ApiError
     */
    public static async getVendorsService(): Promise<Vendor | Error> {
        const result = await __request({
            method: 'GET',
            path: `/vendors/`,
        });
        return result.body;
    }

    /**
     * Create Vendor
     * **[ADMIN ONLY]** Create a new vendor.
     * @returns Vendor OK
     * @returns Error Default error response
     * @throws ApiError
     */
    public static async postVendorsService({
        requestBody,
    }: {
        requestBody: CreateVendorArgs,
    }): Promise<Vendor | Error> {
        const result = await __request({
            method: 'POST',
            path: `/vendors/`,
            body: requestBody,
            errors: {
                422: `Unprocessable Entity`,
            },
        });
        return result.body;
    }

    /**
     * Update Vendor
     * Update vendor metadata.
     * @returns Vendor OK
     * @returns Error Default error response
     * @throws ApiError
     */
    public static async putVendorsService({
        requestBody,
    }: {
        requestBody: UpdateVendorArgs,
    }): Promise<Vendor | Error> {
        const result = await __request({
            method: 'PUT',
            path: `/vendors/`,
            body: requestBody,
            errors: {
                422: `Unprocessable Entity`,
            },
        });
        return result.body;
    }

    /**
     * Delete Vendor
     * @returns Error Default error response
     * @throws ApiError
     */
    public static async deleteVendorsService(): Promise<Error> {
        const result = await __request({
            method: 'DELETE',
            path: `/vendors/`,
        });
        return result.body;
    }

}