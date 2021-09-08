/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ContactInfoInputArgs } from './ContactInfoInputArgs';
import type { CustomerMeasurementMappingInputArgs } from './CustomerMeasurementMappingInputArgs';

export type UpdateCustomerArgs = {
    contact_info?: ContactInfoInputArgs;
    name?: string;
    tags?: Array<string>;
    display_name?: string;
    vendor_id?: number;
    measurement_mappings?: Array<CustomerMeasurementMappingInputArgs>;
}
