/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Customer1 } from './Customer1';
import type { PricePlan1 } from './PricePlan1';

export type Coupon1 = {
    /**
     * Unique name identifier.
     */
    readonly name: string;
    /**
     * UI-friendly name used for data display. Defaults to `name`.
     */
    display_name?: string;
    /**
     * The time when the coupon will stop being effective one its applied.
     */
    duration_length?: number | null;
    /**
     * The unit time unit to apply to the specified duration length.
     */
    duration_unit?: string | null;
    /**
     * ISO-8601 formatted timestamp that defines after what timestamp this coupon cannot be applied.
     */
    expiration_time?: string | null;
    /**
     * One of RECURRRING or ONCE.
     */
    frequency?: 'ONCE' | 'RECURRING' | null;
    /**
     * The maximum number of times this coupon can be used.
     */
    max_uses?: number | null;
    /**
     * Customer facing code that can be used to apply coupon.
     */
    code?: string | null;
    /**
     * True if prorate at application date, false otherwise
     */
    is_start_prorated: boolean | null;
    /**
     * True if prorate at end of duration, false otherwise
     */
    is_end_prorated: boolean | null;
    /**
     * One of FLAT or PERCENT.
     */
    discount_type: 'FLAT' | 'PERCENT';
    /**
     * The amount of discount to give based on discount_type
     */
    discount_amount: number;
    excluded_customers?: Array<Customer1>;
    excluded_price_plans?: Array<PricePlan1>;
}
