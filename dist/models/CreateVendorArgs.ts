/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ContactInfoInputArgs } from './ContactInfoInputArgs';

export type CreateVendorArgs = {
    api_key?: string;
    vendor_name?: string;
    vendor_display_name?: string;
    contact_info?: ContactInfoInputArgs;
    name?: string;
    display_name?: string;
}
