/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { PriceScheme } from './PriceScheme';

export type MeteredComponent = {
    /**
     * Unique name identifier
     */
    meter_name?: any;
    price_scheme?: PriceScheme;
}
