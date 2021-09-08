/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type BillingSettings = {
    /**
     * Time length of the grace period between the end of a billing cycle and invoice generation. *NOTE*: The specified length is unitless. Unit is designated with the `invoice_grace_period_unit` field.
     */
    invoice_grace_period_length?: number | null;
    /**
     * Time length unit of the grace period between the end of a billing cycle and invoice generation. One of `minute`, `hour`, `day`.
     */
    invoice_grace_period_unit?: string | null;
    /**
     * Time length of the grace period between the end of invoice generation and the actual charge. *NOTE*: The specified length is unitless. Unit is designated with the `payment_grace_period_unit` field.
     */
    payment_grace_period_length?: number | null;
    /**
     * Time length unit of the grace period between the end of invoice generation and actual charge. One of `minute`, `hour`, `day`.
     */
    payment_grace_period_unit?: string | null;
    /**
     * Flag that controls whether or not invoices should be sent to customers.
     */
    should_send_invoice_to_customers: boolean | null;
    /**
     * Flat that controls whether to invoice through Octane or through payment provider
     */
    invoice_via_octane: boolean | null;
    /**
     * Flag that controls whether invoices are auto-approved or require manual approval
     */
    auto_approve_invoices: boolean | null;
    readonly customer_invoice_detail_level?: any;
    /**
     * Flag that controls whether or not to charge the customer based on the invoice.
     */
    charges_enabled: boolean | null;
}
