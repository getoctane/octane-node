/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type CouponInputArgs = {
    duration_unit?: string;
    max_uses?: number;
    is_end_prorated?: boolean;
    code?: string;
    excluded_price_plans?: Array<string>;
    is_start_prorated?: boolean;
    discount_amount: number;
    discount_type: string;
    expiration_time?: string;
    duration_length?: number;
    name: string;
    excluded_customers?: Array<string>;
    display_name?: string;
    frequency: string;
    vendor_id?: number;
}
