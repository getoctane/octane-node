/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { PriceInputArgs } from './PriceInputArgs';

export type PriceSchemeInputArgs = {
    time_unit_name?: string;
    prices?: Array<PriceInputArgs>;
    unit_name?: string;
    scheme_type?: string;
}
