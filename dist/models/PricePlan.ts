/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Coupon } from './Coupon';
import type { Discount } from './Discount';
import type { Feature } from './Feature';
import type { MeteredComponent } from './MeteredComponent';
import type { PricePlanTag } from './PricePlanTag';
import type { Trial } from './Trial';

export type PricePlan = {
    /**
     * Unique name indentifier of a price plan
     */
    name: string;
    /**
     * UI-friendly name used for data display. Defaults to `name`.
     */
    display_name?: string;
    description?: string | null;
    /**
     * Lowest denomination of currency. e.g. USD is represented as cents.
     */
    base_price?: number | null;
    /**
     * Time period that defines the length of a price plan cycle. One of `day`, `week`, `month`, `quarter`, or `year`.
     */
    period: string;
    coupon?: Coupon;
    metered_components?: Array<MeteredComponent>;
    discount?: Discount;
    features?: Array<Feature>;
    tags?: Array<PricePlanTag>;
    trial?: Trial;
}
