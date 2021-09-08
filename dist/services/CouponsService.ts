/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ApplyCouponInputArgs } from '../models/ApplyCouponInputArgs';
import type { Coupon1 } from '../models/Coupon1';
import type { CouponInputArgs } from '../models/CouponInputArgs';
import type { Error } from '../models/Error';
import { request as __request } from '../core/request';

export class CouponsService {

    /**
     * Get Coupons
     * Gets all the coupons for a vendor.
     * @returns Coupon1 OK
     * @returns Error Default error response
     * @throws ApiError
     */
    public static async getCouponsService(): Promise<Array<Coupon1> | Error> {
        const result = await __request({
            method: 'GET',
            path: `/coupons/`,
        });
        return result.body;
    }

    /**
     * Create coupon
     * Create a new coupon.
     * @param requestBody
     * @returns Coupon1 OK
     * @returns Error Default error response
     * @throws ApiError
     */
    public static async postCouponsService(
        requestBody: CouponInputArgs,
    ): Promise<Coupon1 | Error> {
        const result = await __request({
            method: 'POST',
            path: `/coupons/`,
            body: requestBody,
            errors: {
                422: `Unprocessable Entity`,
            },
        });
        return result.body;
    }

    /**
     * Get Coupon
     * Fetch a Coupon by its unique name.
     * @param couponName
     * @returns Coupon1 OK
     * @returns Error Default error response
     * @throws ApiError
     */
    public static async getCouponsService1(
        couponName: string,
    ): Promise<Coupon1 | Error> {
        const result = await __request({
            method: 'GET',
            path: `/coupons/${couponName}`,
        });
        return result.body;
    }

    /**
     * Delete Coupon
     * Delete a coupon by its unique name.
     * @param couponName
     * @returns Error Default error response
     * @throws ApiError
     */
    public static async deleteCouponsService(
        couponName: string,
    ): Promise<Error> {
        const result = await __request({
            method: 'DELETE',
            path: `/coupons/${couponName}`,
        });
        return result.body;
    }

    /**
     * @param requestBody
     * @returns any OK
     * @returns Error Default error response
     * @throws ApiError
     */
    public static async postCouponsService1(
        requestBody: ApplyCouponInputArgs,
    ): Promise<any | Error> {
        const result = await __request({
            method: 'POST',
            path: `/coupons/apply_coupon`,
            body: requestBody,
            errors: {
                422: `Unprocessable Entity`,
            },
        });
        return result.body;
    }

}