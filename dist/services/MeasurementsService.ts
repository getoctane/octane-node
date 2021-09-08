/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Error } from '../models/Error';
import type { Measurement } from '../models/Measurement';
import { request as __request } from '../core/request';

export class MeasurementsService {

    /**
     * Send Measurement
     * @returns Measurement OK
     * @returns Error Default error response
     * @throws ApiError
     */
    public static async postMeasurementsService({
        requestBody,
    }: {
        requestBody: Measurement,
    }): Promise<Measurement | Error> {
        const result = await __request({
            method: 'POST',
            path: `/measurements/`,
            body: requestBody,
            errors: {
                422: `Unprocessable Entity`,
            },
        });
        return result.body;
    }

    /**
     * Send Batched Measurements
     * @returns Measurement OK
     * @returns Error Default error response
     * @throws ApiError
     */
    public static async postMeasurementsService1({
        requestBody,
    }: {
        requestBody: Array<Measurement>,
    }): Promise<Array<Measurement> | Error> {
        const result = await __request({
            method: 'POST',
            path: `/measurements/multi`,
            body: requestBody,
            errors: {
                422: `Unprocessable Entity`,
            },
        });
        return result.body;
    }

}