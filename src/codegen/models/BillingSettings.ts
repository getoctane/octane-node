/* tslint:disable */
/* eslint-disable */
/**
 * Octane API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface BillingSettings
 */
export interface BillingSettings {
    /**
     * Time length of the grace period between the end of a billing cycle and invoice generation in days.
     * @type {number}
     * @memberof BillingSettings
     */
    invoiceGracePeriodLength?: number | null;
    /**
     * Time length unit of the grace period between the end of a billing cycle and invoice generation. Must be `day`.
     * @type {string}
     * @memberof BillingSettings
     */
    invoiceGracePeriodUnit?: string | null;
    /**
     * Time length of the grace period between the end of invoice generation and the actual charge. *NOTE*: The specified length is unitless. Unit is designated with the `payment_grace_period_unit` field.
     * @type {number}
     * @memberof BillingSettings
     */
    paymentGracePeriodLength?: number | null;
    /**
     * Time length unit of the grace period between the end of invoice generation and actual charge. One of `minute`, `hour`, `day`.
     * @type {string}
     * @memberof BillingSettings
     */
    paymentGracePeriodUnit?: string | null;
    /**
     * Flag that controls whether or not invoices should be sent to customers.
     * @type {boolean}
     * @memberof BillingSettings
     */
    shouldSendInvoiceToCustomers?: boolean | null;
    /**
     * Flag that controls whether to invoice through Octane or through payment provider
     * @type {boolean}
     * @memberof BillingSettings
     */
    invoiceViaOctane?: boolean | null;
    /**
     * Flag that controls whether invoices are auto-approved or require manual approval
     * @type {boolean}
     * @memberof BillingSettings
     */
    autoApproveInvoices?: boolean | null;
    /**
     * 
     * @type {any}
     * @memberof BillingSettings
     */
    readonly customerInvoiceDetailLevel?: any | null;
    /**
     * Flag that controls whether or not to auto-charge the customer based on the invoice.
     * @type {boolean}
     * @memberof BillingSettings
     */
    chargesEnabled?: boolean | null;
    /**
     * Flag that controls whether or not to invoice/charge the base rate, add ons and other fixed price plan components at the beginning of the billing cycle.
     * @type {boolean}
     * @memberof BillingSettings
     */
    invoiceFixedComponentsAtStart?: boolean | null;
    /**
     * Flag that controls the number of retry attempts for invoicing/payments.
     * @type {number}
     * @memberof BillingSettings
     */
    retryAttempts?: number | null;
    /**
     * Time length after which to attempt invoice/payment retry.
     * @type {number}
     * @memberof BillingSettings
     */
    retryFrequencyLength?: number | null;
    /**
     * Time length unit after which to attempt invoice/payment retry.
     * @type {string}
     * @memberof BillingSettings
     */
    retryFrequencyUnit?: string | null;
    /**
     * The percentage tax rate to apply to invoices.
     * @type {number}
     * @memberof BillingSettings
     */
    taxRate?: number | null;
    /**
     * Flag that controls whether to do automated taxes via payment provider
     * @type {boolean}
     * @memberof BillingSettings
     */
    taxViaPaymentProvider?: boolean | null;
    /**
     * Flag that controls whether or not to invoice/charge gauge meters upfront according to their value at start of cycle. Only applies if invoice_fixed_components_at_start is enabled.
     * @type {boolean}
     * @memberof BillingSettings
     */
    invoiceMeteredComponentsAtStart?: boolean | null;
    /**
     * Flag that controls whether or not to invoice/charge a true up for a billing cycle on the following invoice. Only applies if invoice_fixed_components_at_start is enabled.
     * @type {boolean}
     * @memberof BillingSettings
     */
    invoiceOverages?: boolean | null;
    /**
     * Optional description attached to the invoice
     * @type {string}
     * @memberof BillingSettings
     */
    invoiceMemo?: string | null;
    /**
     * Sets the due date on invoices to the number of days after the invoice is sent
     * @type {number}
     * @memberof BillingSettings
     */
    daysUntilDue?: number | null;
    /**
     * If using stripe, this field can be used to configure whether invoices should be auto advanced for collection
     * @type {boolean}
     * @memberof BillingSettings
     */
    stripeAutoAdvance?: boolean | null;
    /**
     * Default value for whether to align billing cycles to calendar on subscriptions
     * @type {boolean}
     * @memberof BillingSettings
     */
    alignBillingCyclesToCalendar?: boolean | null;
    /**
     * Optional url of a custom image to include on invoices.
     * @type {string}
     * @memberof BillingSettings
     */
    invoiceLogoUrl?: string | null;
    /**
     * Flag determining whether ACH/Wire instructions should be included on invoices.
     * @type {boolean}
     * @memberof BillingSettings
     */
    includeAchInstructions?: boolean | null;
    /**
     * Account name for ACH/Wire transfer instructions
     * @type {string}
     * @memberof BillingSettings
     */
    achAccountName?: string | null;
    /**
     * ABA/Routing number for ACH/Wire transfer instructions
     * @type {string}
     * @memberof BillingSettings
     */
    achRoutingNumber?: string | null;
    /**
     * Account number for ACH/Wire transfer instructions
     * @type {string}
     * @memberof BillingSettings
     */
    achAccountNumber?: string | null;
    /**
     * Swift code for ACH/Wire transfer instructions
     * @type {string}
     * @memberof BillingSettings
     */
    achSwiftCode?: string | null;
    /**
     * Bank name for ACH/Wire transfer instructions
     * @type {string}
     * @memberof BillingSettings
     */
    achBankName?: string | null;
    /**
     * First line of bank address for ACH/Wire transfer instructions
     * @type {string}
     * @memberof BillingSettings
     */
    achBankAddress1?: string | null;
    /**
     * Second line of bank address for ACH/Wire transfer instructions
     * @type {string}
     * @memberof BillingSettings
     */
    achBankAddress2?: string | null;
    /**
     * True if customer updates should be synced to Stripe.
     * @type {boolean}
     * @memberof BillingSettings
     */
    syncCustomerDataToPaymentGateway?: boolean | null;
    /**
     * If using Stripe, this field can be used to configure whether invoices should be finalized immediately when they are created.
     * @type {boolean}
     * @memberof BillingSettings
     */
    stripeImmediateFinalization?: boolean | null;
    /**
     * If set, we will use this template id for our emails instead of our default one
     * @type {string}
     * @memberof BillingSettings
     */
    alternateSendgridTemplateId?: string | null;
    /**
     * If set, a minimum charge line item will override any line items that contribute to the minimum (i.e., the minimum charge line item would be the only line item).
     * @type {boolean}
     * @memberof BillingSettings
     */
    shouldMinimumChargeOverrideLineItems?: boolean | null;
    /**
     * Flag that controls whether to send receipts for paid invoices.
     * @type {boolean}
     * @memberof BillingSettings
     */
    sendReceipts?: boolean | null;
    /**
     * Flag that controls whether to communicate payment failures.
     * @type {boolean}
     * @memberof BillingSettings
     */
    communicatePaymentFailures?: boolean | null;
    /**
     * List of days before an invoice is due to communicate upcoming due notices.
     * @type {any}
     * @memberof BillingSettings
     */
    upcomingReminderDaysArray?: any | null;
    /**
     * List of days after an invoice is due to communicate past due notices.
     * @type {any}
     * @memberof BillingSettings
     */
    pastDueReminderDaysArray?: any | null;
    /**
     * Whether newly attached Stripe payment methods should be made the default for customers.
     * @type {boolean}
     * @memberof BillingSettings
     */
    autoUpdateStripeDefaultPaymentMethod?: boolean | null;
}

export function BillingSettingsFromJSON(json: any): BillingSettings {
    return BillingSettingsFromJSONTyped(json, false);
}

export function BillingSettingsFromJSONTyped(json: any, ignoreDiscriminator: boolean): BillingSettings {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'invoiceGracePeriodLength': !exists(json, 'invoice_grace_period_length') ? undefined : json['invoice_grace_period_length'],
        'invoiceGracePeriodUnit': !exists(json, 'invoice_grace_period_unit') ? undefined : json['invoice_grace_period_unit'],
        'paymentGracePeriodLength': !exists(json, 'payment_grace_period_length') ? undefined : json['payment_grace_period_length'],
        'paymentGracePeriodUnit': !exists(json, 'payment_grace_period_unit') ? undefined : json['payment_grace_period_unit'],
        'shouldSendInvoiceToCustomers': !exists(json, 'should_send_invoice_to_customers') ? undefined : json['should_send_invoice_to_customers'],
        'invoiceViaOctane': !exists(json, 'invoice_via_octane') ? undefined : json['invoice_via_octane'],
        'autoApproveInvoices': !exists(json, 'auto_approve_invoices') ? undefined : json['auto_approve_invoices'],
        'customerInvoiceDetailLevel': !exists(json, 'customer_invoice_detail_level') ? undefined : json['customer_invoice_detail_level'],
        'chargesEnabled': !exists(json, 'charges_enabled') ? undefined : json['charges_enabled'],
        'invoiceFixedComponentsAtStart': !exists(json, 'invoice_fixed_components_at_start') ? undefined : json['invoice_fixed_components_at_start'],
        'retryAttempts': !exists(json, 'retry_attempts') ? undefined : json['retry_attempts'],
        'retryFrequencyLength': !exists(json, 'retry_frequency_length') ? undefined : json['retry_frequency_length'],
        'retryFrequencyUnit': !exists(json, 'retry_frequency_unit') ? undefined : json['retry_frequency_unit'],
        'taxRate': !exists(json, 'tax_rate') ? undefined : json['tax_rate'],
        'taxViaPaymentProvider': !exists(json, 'tax_via_payment_provider') ? undefined : json['tax_via_payment_provider'],
        'invoiceMeteredComponentsAtStart': !exists(json, 'invoice_metered_components_at_start') ? undefined : json['invoice_metered_components_at_start'],
        'invoiceOverages': !exists(json, 'invoice_overages') ? undefined : json['invoice_overages'],
        'invoiceMemo': !exists(json, 'invoice_memo') ? undefined : json['invoice_memo'],
        'daysUntilDue': !exists(json, 'days_until_due') ? undefined : json['days_until_due'],
        'stripeAutoAdvance': !exists(json, 'stripe_auto_advance') ? undefined : json['stripe_auto_advance'],
        'alignBillingCyclesToCalendar': !exists(json, 'align_billing_cycles_to_calendar') ? undefined : json['align_billing_cycles_to_calendar'],
        'invoiceLogoUrl': !exists(json, 'invoice_logo_url') ? undefined : json['invoice_logo_url'],
        'includeAchInstructions': !exists(json, 'include_ach_instructions') ? undefined : json['include_ach_instructions'],
        'achAccountName': !exists(json, 'ach_account_name') ? undefined : json['ach_account_name'],
        'achRoutingNumber': !exists(json, 'ach_routing_number') ? undefined : json['ach_routing_number'],
        'achAccountNumber': !exists(json, 'ach_account_number') ? undefined : json['ach_account_number'],
        'achSwiftCode': !exists(json, 'ach_swift_code') ? undefined : json['ach_swift_code'],
        'achBankName': !exists(json, 'ach_bank_name') ? undefined : json['ach_bank_name'],
        'achBankAddress1': !exists(json, 'ach_bank_address_1') ? undefined : json['ach_bank_address_1'],
        'achBankAddress2': !exists(json, 'ach_bank_address_2') ? undefined : json['ach_bank_address_2'],
        'syncCustomerDataToPaymentGateway': !exists(json, 'sync_customer_data_to_payment_gateway') ? undefined : json['sync_customer_data_to_payment_gateway'],
        'stripeImmediateFinalization': !exists(json, 'stripe_immediate_finalization') ? undefined : json['stripe_immediate_finalization'],
        'alternateSendgridTemplateId': !exists(json, 'alternate_sendgrid_template_id') ? undefined : json['alternate_sendgrid_template_id'],
        'shouldMinimumChargeOverrideLineItems': !exists(json, 'should_minimum_charge_override_line_items') ? undefined : json['should_minimum_charge_override_line_items'],
        'sendReceipts': !exists(json, 'send_receipts') ? undefined : json['send_receipts'],
        'communicatePaymentFailures': !exists(json, 'communicate_payment_failures') ? undefined : json['communicate_payment_failures'],
        'upcomingReminderDaysArray': !exists(json, 'upcoming_reminder_days_array') ? undefined : json['upcoming_reminder_days_array'],
        'pastDueReminderDaysArray': !exists(json, 'past_due_reminder_days_array') ? undefined : json['past_due_reminder_days_array'],
        'autoUpdateStripeDefaultPaymentMethod': !exists(json, 'auto_update_stripe_default_payment_method') ? undefined : json['auto_update_stripe_default_payment_method'],
    };
}

export function BillingSettingsToJSON(value?: BillingSettings | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'invoice_grace_period_length': value.invoiceGracePeriodLength,
        'invoice_grace_period_unit': value.invoiceGracePeriodUnit,
        'payment_grace_period_length': value.paymentGracePeriodLength,
        'payment_grace_period_unit': value.paymentGracePeriodUnit,
        'should_send_invoice_to_customers': value.shouldSendInvoiceToCustomers,
        'invoice_via_octane': value.invoiceViaOctane,
        'auto_approve_invoices': value.autoApproveInvoices,
        'charges_enabled': value.chargesEnabled,
        'invoice_fixed_components_at_start': value.invoiceFixedComponentsAtStart,
        'retry_attempts': value.retryAttempts,
        'retry_frequency_length': value.retryFrequencyLength,
        'retry_frequency_unit': value.retryFrequencyUnit,
        'tax_rate': value.taxRate,
        'tax_via_payment_provider': value.taxViaPaymentProvider,
        'invoice_metered_components_at_start': value.invoiceMeteredComponentsAtStart,
        'invoice_overages': value.invoiceOverages,
        'invoice_memo': value.invoiceMemo,
        'days_until_due': value.daysUntilDue,
        'stripe_auto_advance': value.stripeAutoAdvance,
        'align_billing_cycles_to_calendar': value.alignBillingCyclesToCalendar,
        'invoice_logo_url': value.invoiceLogoUrl,
        'include_ach_instructions': value.includeAchInstructions,
        'ach_account_name': value.achAccountName,
        'ach_routing_number': value.achRoutingNumber,
        'ach_account_number': value.achAccountNumber,
        'ach_swift_code': value.achSwiftCode,
        'ach_bank_name': value.achBankName,
        'ach_bank_address_1': value.achBankAddress1,
        'ach_bank_address_2': value.achBankAddress2,
        'sync_customer_data_to_payment_gateway': value.syncCustomerDataToPaymentGateway,
        'stripe_immediate_finalization': value.stripeImmediateFinalization,
        'alternate_sendgrid_template_id': value.alternateSendgridTemplateId,
        'should_minimum_charge_override_line_items': value.shouldMinimumChargeOverrideLineItems,
        'send_receipts': value.sendReceipts,
        'communicate_payment_failures': value.communicatePaymentFailures,
        'upcoming_reminder_days_array': value.upcomingReminderDaysArray,
        'past_due_reminder_days_array': value.pastDueReminderDaysArray,
        'auto_update_stripe_default_payment_method': value.autoUpdateStripeDefaultPaymentMethod,
    };
}

