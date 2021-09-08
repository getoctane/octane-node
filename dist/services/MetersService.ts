/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Error } from '../models/Error';
import type { Meter } from '../models/Meter';
import type { MeterInputArgs } from '../models/MeterInputArgs';
import type { UpdateMeterArgs } from '../models/UpdateMeterArgs';
import { request as __request } from '../core/request';

export class MetersService {

    /**
     * Get Meters
     * Retrieve all meters for a given vendor.
     * @returns Meter OK
     * @returns Error Default error response
     * @throws ApiError
     */
    public static async getMetersService(): Promise<Array<Meter> | Error> {
        const result = await __request({
            method: 'GET',
            path: `/meters/`,
        });
        return result.body;
    }

    /**
     * Create Meter
     * Create a new Meter.
     * @returns Meter OK
     * @returns Error Default error response
     * @throws ApiError
     */
    public static async postMetersService({
        requestBody,
    }: {
        requestBody: MeterInputArgs,
    }): Promise<Meter | Error> {
        const result = await __request({
            method: 'POST',
            path: `/meters/`,
            body: requestBody,
            errors: {
                422: `Unprocessable Entity`,
            },
        });
        return result.body;
    }

    /**
     * Get Meter
     * Fetch a meter by its unique name
     * @returns Meter OK
     * @returns Error Default error response
     * @throws ApiError
     */
    public static async getMetersService1({
        meterName,
    }: {
        meterName: string,
    }): Promise<Meter | Error> {
        const result = await __request({
            method: 'GET',
            path: `/meters/${meterName}`,
        });
        return result.body;
    }

    /**
     * Update Meter
     * Update a meter by its unique name
     * @returns Meter OK
     * @returns Error Default error response
     * @throws ApiError
     */
    public static async putMetersService({
        meterName,
        requestBody,
    }: {
        meterName: string,
        requestBody: UpdateMeterArgs,
    }): Promise<Meter | Error> {
        const result = await __request({
            method: 'PUT',
            path: `/meters/${meterName}`,
            body: requestBody,
            errors: {
                422: `Unprocessable Entity`,
            },
        });
        return result.body;
    }

    /**
     * Delete Meter
     * Delete a meter by its unique name. Meters can only be deleted if not in-use by a price plan.
     * @returns Error Default error response
     * @throws ApiError
     */
    public static async deleteMetersService({
        meterName,
    }: {
        meterName: string,
    }): Promise<Error> {
        const result = await __request({
            method: 'DELETE',
            path: `/meters/${meterName}`,
        });
        return result.body;
    }

}