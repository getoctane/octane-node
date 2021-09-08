/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type PriceTier = {
    /**
     * Cap of the tier, meaning that any subsequent usage will be bucketed into the following tier. If cap is undefined, it is effectively treated as Infinity.
     */
    cap?: number;
    /**
     * The price (in lowest currency denomination by which to charge, given that the usage is within the cap range.
     */
    price: number;
}
