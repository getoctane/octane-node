/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Discount } from './Discount';
import type { Trial } from './Trial';

export type Subscription = {
    /**
     * Unique name identifier of a customer
     */
    customer_name: any;
    /**
     * Unique name indentifier of a price plan
     */
    price_plan_name: any;
    /**
     * Optional discount override for the associated subscription.
     */
    discount_override?: Discount;
    /**
     * Optional trial override for the associated subscription.
     */
    trial_override?: Trial;
    /**
     * Optional base price override for the associated subscription.
     */
    base_price_override?: number | null;
    /**
     * ISO-8601 formatted timestamp that defines when the subscription should take effect. If this field is omitted, the subscription is effective upon creation.
     */
    effective_at?: string;
}
