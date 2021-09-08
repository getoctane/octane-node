/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { PriceTier } from './PriceTier';

export type PriceScheme = {
    display_name?: string | null;
    name?: string | null;
    readonly scheme_type?: any;
    /**
     * Array of price tiers, each of which consists of `price` and `cap` key:value pairs
     */
    prices?: Array<PriceTier>;
    time_unit_name?: string | null;
    unit_name?: string | null;
}
