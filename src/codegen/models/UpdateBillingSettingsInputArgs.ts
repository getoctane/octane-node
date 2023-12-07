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
 * @interface UpdateBillingSettingsInputArgs
 */
export interface UpdateBillingSettingsInputArgs {
    /**
     * If using stripe, this field can be used to configure whether invoices should be auto advanced for collection
     * @type {boolean}
     * @memberof UpdateBillingSettingsInputArgs
     */
    stripeAutoAdvance?: boolean;
    /**
     * List of days before an invoice is due to communicate upcoming due notices.
     * @type {Array<number>}
     * @memberof UpdateBillingSettingsInputArgs
     */
    upcomingReminderDaysArray?: Array<number> | null;
    /**
     * Flag that controls whether or not to invoice/charge gauge meters upfront according to their value at start of cycle. Only applies if invoice_fixed_components_at_start is enabled.
     * @type {boolean}
     * @memberof UpdateBillingSettingsInputArgs
     */
    invoiceMeteredComponentsAtStart?: boolean;
    /**
     * ABA/Routing number for ACH/Wire transfer instructions
     * @type {string}
     * @memberof UpdateBillingSettingsInputArgs
     */
    achRoutingNumber?: string | null;
    /**
     * First line of bank address for ACH/Wire transfer instructions
     * @type {string}
     * @memberof UpdateBillingSettingsInputArgs
     */
    achBankAddress1?: string | null;
    /**
     * Flag that controls whether or not to invoice/charge a true up for a billing cycle on the following invoice. Only applies if invoice_fixed_components_at_start is enabled.
     * @type {boolean}
     * @memberof UpdateBillingSettingsInputArgs
     */
    invoiceOverages?: boolean;
    /**
     * Flag that controls whether invoices are auto-approved or require manual approval
     * @type {boolean}
     * @memberof UpdateBillingSettingsInputArgs
     */
    autoApproveInvoices?: boolean;
    /**
     * Flag that controls the number of retry attempts for invoicing/payments.
     * @type {number}
     * @memberof UpdateBillingSettingsInputArgs
     */
    retryAttempts?: number;
    /**
     * True if customer updates should be synced to Stripe.
     * @type {boolean}
     * @memberof UpdateBillingSettingsInputArgs
     */
    syncCustomerDataToPaymentGateway?: boolean | null;
    /**
     * The percentage tax rate to apply to invoices.
     * @type {number}
     * @memberof UpdateBillingSettingsInputArgs
     */
    taxRate?: number | null;
    /**
     * If set, a minimum charge line item will override any line items that contribute to the minimum (i.e., the minimum charge line item would be the only line item).
     * @type {boolean}
     * @memberof UpdateBillingSettingsInputArgs
     */
    shouldMinimumChargeOverrideLineItems?: boolean | null;
    /**
     * Flag determining whether ACH/Wire instructions should be included on invoices.
     * @type {boolean}
     * @memberof UpdateBillingSettingsInputArgs
     */
    includeAchInstructions?: boolean | null;
    /**
     * Time length unit after which to attempt invoice/payment retry.
     * @type {string}
     * @memberof UpdateBillingSettingsInputArgs
     */
    retryFrequencyUnit?: string;
    /**
     * Swift code for ACH/Wire transfer instructions
     * @type {string}
     * @memberof UpdateBillingSettingsInputArgs
     */
    achSwiftCode?: string | null;
    /**
     * 
     * @type {string}
     * @memberof UpdateBillingSettingsInputArgs
     */
    customerInvoiceDetailLevel?: string;
    /**
     * Time length of the grace period between the end of invoice generation and the actual charge. *NOTE*: The specified length is unitless. Unit is designated with the `payment_grace_period_unit` field.
     * @type {number}
     * @memberof UpdateBillingSettingsInputArgs
     */
    paymentGracePeriodLength?: number;
    /**
     * Flag that controls whether or not invoices should be sent to customers.
     * @type {boolean}
     * @memberof UpdateBillingSettingsInputArgs
     */
    shouldSendInvoiceToCustomers?: boolean;
    /**
     * Flag that controls whether or not to auto-charge the customer based on the invoice.
     * @type {boolean}
     * @memberof UpdateBillingSettingsInputArgs
     */
    chargesEnabled?: boolean;
    /**
     * Optional url of a custom image to include on invoices.
     * @type {string}
     * @memberof UpdateBillingSettingsInputArgs
     */
    invoiceLogoUrl?: string | null;
    /**
     * Flag that controls whether to invoice through Octane or through payment provider
     * @type {boolean}
     * @memberof UpdateBillingSettingsInputArgs
     */
    invoiceViaOctane?: boolean;
    /**
     * List of days after an invoice is due to communicate past due notices.
     * @type {Array<number>}
     * @memberof UpdateBillingSettingsInputArgs
     */
    pastDueReminderDaysArray?: Array<number> | null;
    /**
     * Whether newly attached Stripe payment methods should be made the default for customers.
     * @type {boolean}
     * @memberof UpdateBillingSettingsInputArgs
     */
    autoUpdateStripeDefaultPaymentMethod?: boolean | null;
    /**
     * Account name for ACH/Wire transfer instructions
     * @type {string}
     * @memberof UpdateBillingSettingsInputArgs
     */
    achAccountName?: string | null;
    /**
     * Account number for ACH/Wire transfer instructions
     * @type {string}
     * @memberof UpdateBillingSettingsInputArgs
     */
    achAccountNumber?: string | null;
    /**
     * If using Stripe, this field can be used to configure whether invoices should be finalized immediately when they are created.
     * @type {boolean}
     * @memberof UpdateBillingSettingsInputArgs
     */
    stripeImmediateFinalization?: boolean | null;
    /**
     * Flag that controls whether or not to invoice/charge the base rate, add ons and other fixed price plan components at the beginning of the billing cycle.
     * @type {boolean}
     * @memberof UpdateBillingSettingsInputArgs
     */
    invoiceFixedComponentsAtStart?: boolean;
    /**
     * Flag that controls whether to do automated taxes via payment provider
     * @type {boolean}
     * @memberof UpdateBillingSettingsInputArgs
     */
    taxViaPaymentProvider?: boolean;
    /**
     * Time length unit of the grace period between the end of invoice generation and actual charge. One of `minute`, `hour`, `day`.
     * @type {string}
     * @memberof UpdateBillingSettingsInputArgs
     */
    paymentGracePeriodUnit?: string;
    /**
     * Time length after which to attempt invoice/payment retry.
     * @type {number}
     * @memberof UpdateBillingSettingsInputArgs
     */
    retryFrequencyLength?: number;
    /**
     * Optional description attached to the invoice
     * @type {string}
     * @memberof UpdateBillingSettingsInputArgs
     */
    invoiceMemo?: string | null;
    /**
     * Default value for whether to align billing cycles to calendar on subscriptions
     * @type {boolean}
     * @memberof UpdateBillingSettingsInputArgs
     */
    alignBillingCyclesToCalendar?: boolean;
    /**
     * Second line of bank address for ACH/Wire transfer instructions
     * @type {string}
     * @memberof UpdateBillingSettingsInputArgs
     */
    achBankAddress2?: string | null;
    /**
     * Flag that controls whether to send receipts for paid invoices.
     * @type {boolean}
     * @memberof UpdateBillingSettingsInputArgs
     */
    sendReceipts?: boolean | null;
    /**
     * Flag that controls whether to communicate payment failures.
     * @type {boolean}
     * @memberof UpdateBillingSettingsInputArgs
     */
    communicatePaymentFailures?: boolean | null;
    /**
     * Bank name for ACH/Wire transfer instructions
     * @type {string}
     * @memberof UpdateBillingSettingsInputArgs
     */
    achBankName?: string | null;
    /**
     * Sets the due date on invoices to the number of days after the invoice is sent
     * @type {number}
     * @memberof UpdateBillingSettingsInputArgs
     */
    daysUntilDue?: number | null;
    /**
     * Time length unit of the grace period between the end of a billing cycle and invoice generation. Must be `day`.
     * @type {string}
     * @memberof UpdateBillingSettingsInputArgs
     */
    invoiceGracePeriodUnit?: UpdateBillingSettingsInputArgsInvoiceGracePeriodUnitEnum;
    /**
     * Time length of the grace period between the end of a billing cycle and invoice generation in days.
     * @type {number}
     * @memberof UpdateBillingSettingsInputArgs
     */
    invoiceGracePeriodLength?: number;
}

/**
* @export
* @enum {string}
*/
export enum UpdateBillingSettingsInputArgsInvoiceGracePeriodUnitEnum {
    Day = 'day'
}

export function UpdateBillingSettingsInputArgsFromJSON(json: any): UpdateBillingSettingsInputArgs {
    return UpdateBillingSettingsInputArgsFromJSONTyped(json, false);
}

export function UpdateBillingSettingsInputArgsFromJSONTyped(json: any, ignoreDiscriminator: boolean): UpdateBillingSettingsInputArgs {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'stripeAutoAdvance': !exists(json, 'stripe_auto_advance') ? undefined : json['stripe_auto_advance'],
        'upcomingReminderDaysArray': !exists(json, 'upcoming_reminder_days_array') ? undefined : json['upcoming_reminder_days_array'],
        'invoiceMeteredComponentsAtStart': !exists(json, 'invoice_metered_components_at_start') ? undefined : json['invoice_metered_components_at_start'],
        'achRoutingNumber': !exists(json, 'ach_routing_number') ? undefined : json['ach_routing_number'],
        'achBankAddress1': !exists(json, 'ach_bank_address_1') ? undefined : json['ach_bank_address_1'],
        'invoiceOverages': !exists(json, 'invoice_overages') ? undefined : json['invoice_overages'],
        'autoApproveInvoices': !exists(json, 'auto_approve_invoices') ? undefined : json['auto_approve_invoices'],
        'retryAttempts': !exists(json, 'retry_attempts') ? undefined : json['retry_attempts'],
        'syncCustomerDataToPaymentGateway': !exists(json, 'sync_customer_data_to_payment_gateway') ? undefined : json['sync_customer_data_to_payment_gateway'],
        'taxRate': !exists(json, 'tax_rate') ? undefined : json['tax_rate'],
        'shouldMinimumChargeOverrideLineItems': !exists(json, 'should_minimum_charge_override_line_items') ? undefined : json['should_minimum_charge_override_line_items'],
        'includeAchInstructions': !exists(json, 'include_ach_instructions') ? undefined : json['include_ach_instructions'],
        'retryFrequencyUnit': !exists(json, 'retry_frequency_unit') ? undefined : json['retry_frequency_unit'],
        'achSwiftCode': !exists(json, 'ach_swift_code') ? undefined : json['ach_swift_code'],
        'customerInvoiceDetailLevel': !exists(json, 'customer_invoice_detail_level') ? undefined : json['customer_invoice_detail_level'],
        'paymentGracePeriodLength': !exists(json, 'payment_grace_period_length') ? undefined : json['payment_grace_period_length'],
        'shouldSendInvoiceToCustomers': !exists(json, 'should_send_invoice_to_customers') ? undefined : json['should_send_invoice_to_customers'],
        'chargesEnabled': !exists(json, 'charges_enabled') ? undefined : json['charges_enabled'],
        'invoiceLogoUrl': !exists(json, 'invoice_logo_url') ? undefined : json['invoice_logo_url'],
        'invoiceViaOctane': !exists(json, 'invoice_via_octane') ? undefined : json['invoice_via_octane'],
        'pastDueReminderDaysArray': !exists(json, 'past_due_reminder_days_array') ? undefined : json['past_due_reminder_days_array'],
        'autoUpdateStripeDefaultPaymentMethod': !exists(json, 'auto_update_stripe_default_payment_method') ? undefined : json['auto_update_stripe_default_payment_method'],
        'achAccountName': !exists(json, 'ach_account_name') ? undefined : json['ach_account_name'],
        'achAccountNumber': !exists(json, 'ach_account_number') ? undefined : json['ach_account_number'],
        'stripeImmediateFinalization': !exists(json, 'stripe_immediate_finalization') ? undefined : json['stripe_immediate_finalization'],
        'invoiceFixedComponentsAtStart': !exists(json, 'invoice_fixed_components_at_start') ? undefined : json['invoice_fixed_components_at_start'],
        'taxViaPaymentProvider': !exists(json, 'tax_via_payment_provider') ? undefined : json['tax_via_payment_provider'],
        'paymentGracePeriodUnit': !exists(json, 'payment_grace_period_unit') ? undefined : json['payment_grace_period_unit'],
        'retryFrequencyLength': !exists(json, 'retry_frequency_length') ? undefined : json['retry_frequency_length'],
        'invoiceMemo': !exists(json, 'invoice_memo') ? undefined : json['invoice_memo'],
        'alignBillingCyclesToCalendar': !exists(json, 'align_billing_cycles_to_calendar') ? undefined : json['align_billing_cycles_to_calendar'],
        'achBankAddress2': !exists(json, 'ach_bank_address_2') ? undefined : json['ach_bank_address_2'],
        'sendReceipts': !exists(json, 'send_receipts') ? undefined : json['send_receipts'],
        'communicatePaymentFailures': !exists(json, 'communicate_payment_failures') ? undefined : json['communicate_payment_failures'],
        'achBankName': !exists(json, 'ach_bank_name') ? undefined : json['ach_bank_name'],
        'daysUntilDue': !exists(json, 'days_until_due') ? undefined : json['days_until_due'],
        'invoiceGracePeriodUnit': !exists(json, 'invoice_grace_period_unit') ? undefined : json['invoice_grace_period_unit'],
        'invoiceGracePeriodLength': !exists(json, 'invoice_grace_period_length') ? undefined : json['invoice_grace_period_length'],
    };
}

export function UpdateBillingSettingsInputArgsToJSON(value?: UpdateBillingSettingsInputArgs | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'stripe_auto_advance': value.stripeAutoAdvance,
        'upcoming_reminder_days_array': value.upcomingReminderDaysArray,
        'invoice_metered_components_at_start': value.invoiceMeteredComponentsAtStart,
        'ach_routing_number': value.achRoutingNumber,
        'ach_bank_address_1': value.achBankAddress1,
        'invoice_overages': value.invoiceOverages,
        'auto_approve_invoices': value.autoApproveInvoices,
        'retry_attempts': value.retryAttempts,
        'sync_customer_data_to_payment_gateway': value.syncCustomerDataToPaymentGateway,
        'tax_rate': value.taxRate,
        'should_minimum_charge_override_line_items': value.shouldMinimumChargeOverrideLineItems,
        'include_ach_instructions': value.includeAchInstructions,
        'retry_frequency_unit': value.retryFrequencyUnit,
        'ach_swift_code': value.achSwiftCode,
        'customer_invoice_detail_level': value.customerInvoiceDetailLevel,
        'payment_grace_period_length': value.paymentGracePeriodLength,
        'should_send_invoice_to_customers': value.shouldSendInvoiceToCustomers,
        'charges_enabled': value.chargesEnabled,
        'invoice_logo_url': value.invoiceLogoUrl,
        'invoice_via_octane': value.invoiceViaOctane,
        'past_due_reminder_days_array': value.pastDueReminderDaysArray,
        'auto_update_stripe_default_payment_method': value.autoUpdateStripeDefaultPaymentMethod,
        'ach_account_name': value.achAccountName,
        'ach_account_number': value.achAccountNumber,
        'stripe_immediate_finalization': value.stripeImmediateFinalization,
        'invoice_fixed_components_at_start': value.invoiceFixedComponentsAtStart,
        'tax_via_payment_provider': value.taxViaPaymentProvider,
        'payment_grace_period_unit': value.paymentGracePeriodUnit,
        'retry_frequency_length': value.retryFrequencyLength,
        'invoice_memo': value.invoiceMemo,
        'align_billing_cycles_to_calendar': value.alignBillingCyclesToCalendar,
        'ach_bank_address_2': value.achBankAddress2,
        'send_receipts': value.sendReceipts,
        'communicate_payment_failures': value.communicatePaymentFailures,
        'ach_bank_name': value.achBankName,
        'days_until_due': value.daysUntilDue,
        'invoice_grace_period_unit': value.invoiceGracePeriodUnit,
        'invoice_grace_period_length': value.invoiceGracePeriodLength,
    };
}

