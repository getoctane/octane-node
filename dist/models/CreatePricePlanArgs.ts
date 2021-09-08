/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AddOnInputArgs } from './AddOnInputArgs';
import type { DiscountInputArgs } from './DiscountInputArgs';
import type { FeatureInputArgs } from './FeatureInputArgs';
import type { LimitInputArgs } from './LimitInputArgs';
import type { MeteredComponentInputArgs } from './MeteredComponentInputArgs';
import type { TrialInputArgs } from './TrialInputArgs';

export type CreatePricePlanArgs = {
    features?: Array<FeatureInputArgs>;
    add_ons?: Array<AddOnInputArgs>;
    metered_components?: Array<MeteredComponentInputArgs>;
    coupon_name?: string;
    limits?: Array<LimitInputArgs>;
    base_price?: number;
    trial?: TrialInputArgs;
    name?: string;
    tags?: Array<string>;
    discount?: DiscountInputArgs;
    period?: string;
    display_name?: string;
    vendor_id?: number;
    description?: string;
}
