/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { DiscountInputArgs } from './DiscountInputArgs';

export type CreateSubscriptionArgs = {
    coupon_override_id?: number;
    effective_at?: string;
    vendor_id?: number;
    price_plan_id?: number;
    price_plan_name?: string;
    customer_id?: number;
    discount_override?: DiscountInputArgs;
    coupon_override_name?: string;
}
