/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ContactInfo } from './ContactInfo';

export type Vendor = {
    /**
     * Unique name identifier of a Vendor
     */
    readonly name: string;
    display_name?: string;
    api_key?: string;
    contact_info?: ContactInfo | null;
}
