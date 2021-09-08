/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ContactInfo } from './ContactInfo';

export type Customer = {
    /**
     * Unique name identifier of a customer
     */
    readonly name: string;
    display_name?: string;
    contact_info?: ContactInfo | null;
    measurement_mappings?: Array<any>;
}
