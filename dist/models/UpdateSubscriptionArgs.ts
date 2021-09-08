/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { DiscountInputArgs } from './DiscountInputArgs';

export type UpdateSubscriptionArgs = {
    price_plan_name?: string;
    price_plan_id?: number;
    effective_at?: string;
    coupon_override_name?: string;
    customer_id?: number;
    coupon_override_id?: number;
    vendor_id?: number;
    discount_override?: DiscountInputArgs;
}
