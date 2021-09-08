/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ContactInfoInputArgs } from './ContactInfoInputArgs';

export type CreateVendorArgs = {
    vendor_name?: string;
    vendor_display_name?: string;
    name?: string;
    api_key?: string;
    contact_info?: ContactInfoInputArgs;
    display_name?: string;
}
