/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ContactInfoInputArgs } from './ContactInfoInputArgs';
import type { CustomerMeasurementMappingInputArgs } from './CustomerMeasurementMappingInputArgs';

export type UpdateCustomerArgs = {
    vendor_id?: number;
    name?: string;
    tags?: Array<string>;
    measurement_mappings?: Array<CustomerMeasurementMappingInputArgs>;
    contact_info?: ContactInfoInputArgs;
    display_name?: string;
}
