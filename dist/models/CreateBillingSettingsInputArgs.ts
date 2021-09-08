/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type CreateBillingSettingsInputArgs = {
    payment_grace_period_length?: number;
    should_send_invoice_to_customers?: boolean;
    invoice_grace_period_unit?: string;
    auto_approve_invoices?: boolean;
    customer_invoice_detail_level?: string;
    vendor_id?: number;
    payment_grace_period_unit?: string;
    charges_enabled?: boolean;
    customer_id?: number;
    invoice_via_octane?: boolean;
    invoice_grace_period_length?: number;
}
