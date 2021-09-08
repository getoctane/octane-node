/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type Discount = {
    readonly discount_type?: any;
    amount?: number | null;
    /**
     * The date when the discount is applied from.
     */
    start_date?: string | null;
    /**
     * The date when the discount ends.
     */
    end_date?: string | null;
    /**
     * The id of coupon associated with this discount, none if discount does not originate from coupon
     */
    coupon_id?: number | null;
}
