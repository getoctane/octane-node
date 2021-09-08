/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { PriceInputArgs } from './PriceInputArgs';

export type PriceSchemeInputArgs = {
    unit_name?: string;
    prices?: Array<PriceInputArgs>;
    scheme_type?: string;
    time_unit_name?: string;
}
