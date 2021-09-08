/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type CreateBillingSettingsInputArgs = {
    customer_invoice_detail_level?: string;
    invoice_grace_period_unit?: string;
    invoice_via_octane?: boolean;
    vendor_id?: number;
    payment_grace_period_length?: number;
    payment_grace_period_unit?: string;
    auto_approve_invoices?: boolean;
    charges_enabled?: boolean;
    should_send_invoice_to_customers?: boolean;
    invoice_grace_period_length?: number;
    customer_id?: number;
}
