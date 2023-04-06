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
 * @interface CustomerBillingSettingsInputArgs
 */
export interface CustomerBillingSettingsInputArgs {
    /**
     * Default value for whether to align billing cycles to calendar on subscriptions
     * @type {boolean}
     * @memberof CustomerBillingSettingsInputArgs
     */
    alignBillingCyclesToCalendar?: boolean | null;
    /**
     * Time length unit of the grace period between the end of invoice generation and actual charge. One of `minute`, `hour`, `day`.
     * @type {string}
     * @memberof CustomerBillingSettingsInputArgs
     */
    paymentGracePeriodUnit?: string | null;
    /**
     * True if customer updates should be synced to Stripe.
     * @type {boolean}
     * @memberof CustomerBillingSettingsInputArgs
     */
    syncCustomerDataToPaymentGateway?: boolean | null;
    /**
     * Bank name for ACH/Wire transfer instructions
     * @type {string}
     * @memberof CustomerBillingSettingsInputArgs
     */
    achBankName?: string | null;
    /**
     * Flag that controls whether to do automated taxes via payment provider
     * @type {boolean}
     * @memberof CustomerBillingSettingsInputArgs
     */
    taxViaPaymentProvider?: boolean | null;
    /**
     * Second line of bank address for ACH/Wire transfer instructions
     * @type {string}
     * @memberof CustomerBillingSettingsInputArgs
     */
    achBankAddress2?: string | null;
    /**
     * Flag that controls whether or not to invoice/charge a true up for a billing cycle on the following invoice. Only applies if invoice_fixed_components_at_start is enabled.
     * @type {boolean}
     * @memberof CustomerBillingSettingsInputArgs
     */
    invoiceOverages?: boolean | null;
    /**
     * Flag that controls whether or not invoices should be sent to customers.
     * @type {boolean}
     * @memberof CustomerBillingSettingsInputArgs
     */
    shouldSendInvoiceToCustomers?: boolean | null;
    /**
     * Optional description attached to the invoice
     * @type {string}
     * @memberof CustomerBillingSettingsInputArgs
     */
    invoiceMemo?: string | null;
    /**
     * Sets the due date on invoices to the number of days after the invoice is sent
     * @type {number}
     * @memberof CustomerBillingSettingsInputArgs
     */
    daysUntilDue?: number | null;
    /**
     * Optional url of a custom image to include on invoices.
     * @type {string}
     * @memberof CustomerBillingSettingsInputArgs
     */
    invoiceLogoUrl?: string | null;
    /**
     * Flag that controls whether invoices are auto-approved or require manual approval
     * @type {boolean}
     * @memberof CustomerBillingSettingsInputArgs
     */
    autoApproveInvoices?: boolean | null;
    /**
     * The percentage tax rate to apply to invoices.
     * @type {number}
     * @memberof CustomerBillingSettingsInputArgs
     */
    taxRate?: number | null;
    /**
     * First line of bank address for ACH/Wire transfer instructions
     * @type {string}
     * @memberof CustomerBillingSettingsInputArgs
     */
    achBankAddress1?: string | null;
    /**
     * Flag that controls whether to invoice through Octane or through payment provider
     * @type {boolean}
     * @memberof CustomerBillingSettingsInputArgs
     */
    invoiceViaOctane?: boolean | null;
    /**
     * Flag that controls whether or not to invoice/charge the base rate, add ons and other fixed price plan components at the beginning of the billing cycle.
     * @type {boolean}
     * @memberof CustomerBillingSettingsInputArgs
     */
    invoiceFixedComponentsAtStart?: boolean | null;
    /**
     * Time length after which to attempt invoice/payment retry.
     * @type {number}
     * @memberof CustomerBillingSettingsInputArgs
     */
    retryFrequencyLength?: number | null;
    /**
     * Time length of the grace period between the end of invoice generation and the actual charge. *NOTE*: The specified length is unitless. Unit is designated with the `payment_grace_period_unit` field.
     * @type {number}
     * @memberof CustomerBillingSettingsInputArgs
     */
    paymentGracePeriodLength?: number | null;
    /**
     * 
     * @type {string}
     * @memberof CustomerBillingSettingsInputArgs
     */
    customerInvoiceDetailLevel?: string;
    /**
     * Flag that controls whether or not to auto-charge the customer based on the invoice.
     * @type {boolean}
     * @memberof CustomerBillingSettingsInputArgs
     */
    chargesEnabled?: boolean | null;
    /**
     * Account number for ACH/Wire transfer instructions
     * @type {string}
     * @memberof CustomerBillingSettingsInputArgs
     */
    achAccountNumber?: string | null;
    /**
     * ABA/Routing number for ACH/Wire transfer instructions
     * @type {string}
     * @memberof CustomerBillingSettingsInputArgs
     */
    achRoutingNumber?: string | null;
    /**
     * Flag determining whether ACH/Wire instructions should be included on invoices.
     * @type {boolean}
     * @memberof CustomerBillingSettingsInputArgs
     */
    includeAchInstructions?: boolean | null;
    /**
     * If using stripe, this field can be used to configure whether invoices should be auto advanced for collection
     * @type {boolean}
     * @memberof CustomerBillingSettingsInputArgs
     */
    stripeAutoAdvance?: boolean | null;
    /**
     * Time length of the grace period between the end of a billing cycle and invoice generation in days.
     * @type {number}
     * @memberof CustomerBillingSettingsInputArgs
     */
    invoiceGracePeriodLength?: number | null;
    /**
     * Time length unit after which to attempt invoice/payment retry.
     * @type {string}
     * @memberof CustomerBillingSettingsInputArgs
     */
    retryFrequencyUnit?: string | null;
    /**
     * Account name for ACH/Wire transfer instructions
     * @type {string}
     * @memberof CustomerBillingSettingsInputArgs
     */
    achAccountName?: string | null;
    /**
     * If using Stripe, this field can be used to configure whether invoices should be finalized immediately when they are created.
     * @type {boolean}
     * @memberof CustomerBillingSettingsInputArgs
     */
    stripeImmediateFinalization?: boolean | null;
    /**
     * Flag that controls the number of retry attempts for invoicing/payments.
     * @type {number}
     * @memberof CustomerBillingSettingsInputArgs
     */
    retryAttempts?: number | null;
    /**
     * Flag that controls whether or not to invoice/charge gauge meters upfront according to their value at start of cycle. Only applies if invoice_fixed_components_at_start is enabled.
     * @type {boolean}
     * @memberof CustomerBillingSettingsInputArgs
     */
    invoiceMeteredComponentsAtStart?: boolean | null;
    /**
     * Time length unit of the grace period between the end of a billing cycle and invoice generation. Must be `day`.
     * @type {string}
     * @memberof CustomerBillingSettingsInputArgs
     */
    invoiceGracePeriodUnit?: CustomerBillingSettingsInputArgsInvoiceGracePeriodUnitEnum;
    /**
     * Swift code for ACH/Wire transfer instructions
     * @type {string}
     * @memberof CustomerBillingSettingsInputArgs
     */
    achSwiftCode?: string | null;
}

/**
* @export
* @enum {string}
*/
export enum CustomerBillingSettingsInputArgsInvoiceGracePeriodUnitEnum {
    Day = 'day'
}

export function CustomerBillingSettingsInputArgsFromJSON(json: any): CustomerBillingSettingsInputArgs {
    return CustomerBillingSettingsInputArgsFromJSONTyped(json, false);
}

export function CustomerBillingSettingsInputArgsFromJSONTyped(json: any, ignoreDiscriminator: boolean): CustomerBillingSettingsInputArgs {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'alignBillingCyclesToCalendar': !exists(json, 'align_billing_cycles_to_calendar') ? undefined : json['align_billing_cycles_to_calendar'],
        'paymentGracePeriodUnit': !exists(json, 'payment_grace_period_unit') ? undefined : json['payment_grace_period_unit'],
        'syncCustomerDataToPaymentGateway': !exists(json, 'sync_customer_data_to_payment_gateway') ? undefined : json['sync_customer_data_to_payment_gateway'],
        'achBankName': !exists(json, 'ach_bank_name') ? undefined : json['ach_bank_name'],
        'taxViaPaymentProvider': !exists(json, 'tax_via_payment_provider') ? undefined : json['tax_via_payment_provider'],
        'achBankAddress2': !exists(json, 'ach_bank_address_2') ? undefined : json['ach_bank_address_2'],
        'invoiceOverages': !exists(json, 'invoice_overages') ? undefined : json['invoice_overages'],
        'shouldSendInvoiceToCustomers': !exists(json, 'should_send_invoice_to_customers') ? undefined : json['should_send_invoice_to_customers'],
        'invoiceMemo': !exists(json, 'invoice_memo') ? undefined : json['invoice_memo'],
        'daysUntilDue': !exists(json, 'days_until_due') ? undefined : json['days_until_due'],
        'invoiceLogoUrl': !exists(json, 'invoice_logo_url') ? undefined : json['invoice_logo_url'],
        'autoApproveInvoices': !exists(json, 'auto_approve_invoices') ? undefined : json['auto_approve_invoices'],
        'taxRate': !exists(json, 'tax_rate') ? undefined : json['tax_rate'],
        'achBankAddress1': !exists(json, 'ach_bank_address_1') ? undefined : json['ach_bank_address_1'],
        'invoiceViaOctane': !exists(json, 'invoice_via_octane') ? undefined : json['invoice_via_octane'],
        'invoiceFixedComponentsAtStart': !exists(json, 'invoice_fixed_components_at_start') ? undefined : json['invoice_fixed_components_at_start'],
        'retryFrequencyLength': !exists(json, 'retry_frequency_length') ? undefined : json['retry_frequency_length'],
        'paymentGracePeriodLength': !exists(json, 'payment_grace_period_length') ? undefined : json['payment_grace_period_length'],
        'customerInvoiceDetailLevel': !exists(json, 'customer_invoice_detail_level') ? undefined : json['customer_invoice_detail_level'],
        'chargesEnabled': !exists(json, 'charges_enabled') ? undefined : json['charges_enabled'],
        'achAccountNumber': !exists(json, 'ach_account_number') ? undefined : json['ach_account_number'],
        'achRoutingNumber': !exists(json, 'ach_routing_number') ? undefined : json['ach_routing_number'],
        'includeAchInstructions': !exists(json, 'include_ach_instructions') ? undefined : json['include_ach_instructions'],
        'stripeAutoAdvance': !exists(json, 'stripe_auto_advance') ? undefined : json['stripe_auto_advance'],
        'invoiceGracePeriodLength': !exists(json, 'invoice_grace_period_length') ? undefined : json['invoice_grace_period_length'],
        'retryFrequencyUnit': !exists(json, 'retry_frequency_unit') ? undefined : json['retry_frequency_unit'],
        'achAccountName': !exists(json, 'ach_account_name') ? undefined : json['ach_account_name'],
        'stripeImmediateFinalization': !exists(json, 'stripe_immediate_finalization') ? undefined : json['stripe_immediate_finalization'],
        'retryAttempts': !exists(json, 'retry_attempts') ? undefined : json['retry_attempts'],
        'invoiceMeteredComponentsAtStart': !exists(json, 'invoice_metered_components_at_start') ? undefined : json['invoice_metered_components_at_start'],
        'invoiceGracePeriodUnit': !exists(json, 'invoice_grace_period_unit') ? undefined : json['invoice_grace_period_unit'],
        'achSwiftCode': !exists(json, 'ach_swift_code') ? undefined : json['ach_swift_code'],
    };
}

export function CustomerBillingSettingsInputArgsToJSON(value?: CustomerBillingSettingsInputArgs | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'align_billing_cycles_to_calendar': value.alignBillingCyclesToCalendar,
        'payment_grace_period_unit': value.paymentGracePeriodUnit,
        'sync_customer_data_to_payment_gateway': value.syncCustomerDataToPaymentGateway,
        'ach_bank_name': value.achBankName,
        'tax_via_payment_provider': value.taxViaPaymentProvider,
        'ach_bank_address_2': value.achBankAddress2,
        'invoice_overages': value.invoiceOverages,
        'should_send_invoice_to_customers': value.shouldSendInvoiceToCustomers,
        'invoice_memo': value.invoiceMemo,
        'days_until_due': value.daysUntilDue,
        'invoice_logo_url': value.invoiceLogoUrl,
        'auto_approve_invoices': value.autoApproveInvoices,
        'tax_rate': value.taxRate,
        'ach_bank_address_1': value.achBankAddress1,
        'invoice_via_octane': value.invoiceViaOctane,
        'invoice_fixed_components_at_start': value.invoiceFixedComponentsAtStart,
        'retry_frequency_length': value.retryFrequencyLength,
        'payment_grace_period_length': value.paymentGracePeriodLength,
        'customer_invoice_detail_level': value.customerInvoiceDetailLevel,
        'charges_enabled': value.chargesEnabled,
        'ach_account_number': value.achAccountNumber,
        'ach_routing_number': value.achRoutingNumber,
        'include_ach_instructions': value.includeAchInstructions,
        'stripe_auto_advance': value.stripeAutoAdvance,
        'invoice_grace_period_length': value.invoiceGracePeriodLength,
        'retry_frequency_unit': value.retryFrequencyUnit,
        'ach_account_name': value.achAccountName,
        'stripe_immediate_finalization': value.stripeImmediateFinalization,
        'retry_attempts': value.retryAttempts,
        'invoice_metered_components_at_start': value.invoiceMeteredComponentsAtStart,
        'invoice_grace_period_unit': value.invoiceGracePeriodUnit,
        'ach_swift_code': value.achSwiftCode,
    };
}
