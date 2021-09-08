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
    add_ons?: Array<AddOnInputArgs>;
    coupon_name?: string;
    vendor_id?: number;
    base_price?: number;
    name?: string;
    tags?: Array<string>;
    period?: string;
    limits?: Array<LimitInputArgs>;
    trial?: TrialInputArgs;
    features?: Array<FeatureInputArgs>;
    description?: string;
    metered_components?: Array<MeteredComponentInputArgs>;
    discount?: DiscountInputArgs;
    display_name?: string;
}
