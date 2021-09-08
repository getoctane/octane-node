/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type CouponInputArgs = {
    max_uses?: number;
    discount_amount: number;
    expiration_time?: string;
    excluded_price_plans?: Array<string>;
    is_start_prorated?: boolean;
    vendor_id?: number;
    discount_type: string;
    name: string;
    duration_unit?: string;
    is_end_prorated?: boolean;
    frequency: string;
    code?: string;
    duration_length?: number;
    excluded_customers?: Array<string>;
    display_name?: string;
}
