/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BillingSettings } from '../models/BillingSettings';
import type { CreateBillingSettingsInputArgs } from '../models/CreateBillingSettingsInputArgs';
import type { CreateCustomerArgs } from '../models/CreateCustomerArgs';
import type { CreateSubscriptionArgs } from '../models/CreateSubscriptionArgs';
import type { Customer } from '../models/Customer';
import type { CustomerMeasurementMapping } from '../models/CustomerMeasurementMapping';
import type { CustomerMeasurementMappingInputArgs } from '../models/CustomerMeasurementMappingInputArgs';
import type { CustomerPaymentGatewayCredentialInputArgs } from '../models/CustomerPaymentGatewayCredentialInputArgs';
import type { CustomerStatus } from '../models/CustomerStatus';
import type { DeleteSubscriptionArgs } from '../models/DeleteSubscriptionArgs';
import type { Error } from '../models/Error';
import type { PaymentGatewayCredential } from '../models/PaymentGatewayCredential';
import type { RevenueResponse } from '../models/RevenueResponse';
import type { Subscription } from '../models/Subscription';
import type { UpdateBillingSettingsInputArgs } from '../models/UpdateBillingSettingsInputArgs';
import type { UpdateCustomerArgs } from '../models/UpdateCustomerArgs';
import type { UpdateSubscriptionArgs } from '../models/UpdateSubscriptionArgs';
import { request as __request } from '../core/request';

export class CustomersService {

    /**
     * Get All Customers
     * Retrieve all customers for a given vendor.
     * @returns Customer OK
     * @returns Error Default error response
     * @throws ApiError
     */
    public static async getCustomersService(): Promise<Array<Customer> | Error> {
        const result = await __request({
            method: 'GET',
            path: `/customers/`,
        });
        return result.body;
    }

    /**
     * Create Customer
     * Create a new customer.
     * @returns Customer OK
     * @returns Error Default error response
     * @throws ApiError
     */
    public static async postCustomersService({
        requestBody,
    }: {
        requestBody: CreateCustomerArgs,
    }): Promise<Customer | Error> {
        const result = await __request({
            method: 'POST',
            path: `/customers/`,
            body: requestBody,
            errors: {
                422: `Unprocessable Entity`,
            },
        });
        return result.body;
    }

    /**
     * Get Customer
     * Fetch a customer by their unique name.
     * @returns Customer OK
     * @returns Error Default error response
     * @throws ApiError
     */
    public static async getCustomersService1({
        customerName,
    }: {
        customerName: string,
    }): Promise<Customer | Error> {
        const result = await __request({
            method: 'GET',
            path: `/customers/${customerName}`,
        });
        return result.body;
    }

    /**
     * Update Customer
     * Update a single customer. To update Customer measurement mappings, use the `customers/{customer_name}/mappings` endpoint.
     * @returns Customer OK
     * @returns Error Default error response
     * @throws ApiError
     */
    public static async putCustomersService({
        customerName,
        requestBody,
    }: {
        customerName: string,
        requestBody: UpdateCustomerArgs,
    }): Promise<Customer | Error> {
        const result = await __request({
            method: 'PUT',
            path: `/customers/${customerName}`,
            body: requestBody,
            errors: {
                422: `Unprocessable Entity`,
            },
        });
        return result.body;
    }

    /**
     * Delete Customer
     * Delete a customer by their unique name.
     * @returns Error Default error response
     * @throws ApiError
     */
    public static async deleteCustomersService({
        customerName,
    }: {
        customerName: string,
    }): Promise<Error> {
        const result = await __request({
            method: 'DELETE',
            path: `/customers/${customerName}`,
        });
        return result.body;
    }

    /**
     * Get Measurement Mappings
     * Fetch all measurement mappings for a specific customer (by unique customer name).
     * @returns CustomerMeasurementMapping OK
     * @returns Error Default error response
     * @throws ApiError
     */
    public static async getCustomersService2({
        customerName,
    }: {
        customerName: string,
    }): Promise<Array<CustomerMeasurementMapping> | Error> {
        const result = await __request({
            method: 'GET',
            path: `/customers/${customerName}/mappings`,
        });
        return result.body;
    }

    /**
     * Append Measurement Mapping
     * Create a new measurement mapping for a customer. If no value_regex is passed, label existence is checked instead.
     * @returns CustomerMeasurementMapping OK
     * @returns Error Default error response
     * @throws ApiError
     */
    public static async postCustomersService1({
        customerName,
        requestBody,
    }: {
        customerName: string,
        requestBody: CustomerMeasurementMappingInputArgs,
    }): Promise<CustomerMeasurementMapping | Error> {
        const result = await __request({
            method: 'POST',
            path: `/customers/${customerName}/mappings`,
            body: requestBody,
            errors: {
                422: `Unprocessable Entity`,
            },
        });
        return result.body;
    }

    /**
     * Add PaymentGatewayCredential for Customer
     * @returns PaymentGatewayCredential OK
     * @returns Error Default error response
     * @throws ApiError
     */
    public static async postCustomersService2({
        customerName,
        requestBody,
    }: {
        customerName: string,
        requestBody: CustomerPaymentGatewayCredentialInputArgs,
    }): Promise<PaymentGatewayCredential | Error> {
        const result = await __request({
            method: 'POST',
            path: `/customers/${customerName}/payment_gateway_credentials`,
            body: requestBody,
            errors: {
                422: `Unprocessable Entity`,
            },
        });
        return result.body;
    }

    /**
     * Get Billing Settings
     * Fetch the billing settings for a customer.
     * @returns BillingSettings OK
     * @returns Error Default error response
     * @throws ApiError
     */
    public static async getCustomersService3({
        customerName,
    }: {
        customerName: string,
    }): Promise<BillingSettings | Error> {
        const result = await __request({
            method: 'GET',
            path: `/customers/${customerName}/billing_settings`,
        });
        return result.body;
    }

    /**
     * Create billing settings.
     * Create billing settings for a vendor.
     * @returns BillingSettings OK
     * @returns Error Default error response
     * @throws ApiError
     */
    public static async postCustomersService3({
        customerName,
        requestBody,
    }: {
        customerName: string,
        requestBody: CreateBillingSettingsInputArgs,
    }): Promise<BillingSettings | Error> {
        const result = await __request({
            method: 'POST',
            path: `/customers/${customerName}/billing_settings`,
            body: requestBody,
            errors: {
                422: `Unprocessable Entity`,
            },
        });
        return result.body;
    }

    /**
     * Update Billing Settings.
     * Update billing settings for a customer.
     * @returns BillingSettings OK
     * @returns Error Default error response
     * @throws ApiError
     */
    public static async putCustomersService1({
        customerName,
        requestBody,
    }: {
        customerName: string,
        requestBody: UpdateBillingSettingsInputArgs,
    }): Promise<BillingSettings | Error> {
        const result = await __request({
            method: 'PUT',
            path: `/customers/${customerName}/billing_settings`,
            body: requestBody,
            errors: {
                422: `Unprocessable Entity`,
            },
        });
        return result.body;
    }

    /**
     * Delete Billing Settings
     * Delete billing settings for a customer.
     * @returns Error Default error response
     * @throws ApiError
     */
    public static async deleteCustomersService1({
        customerName,
    }: {
        customerName: string,
    }): Promise<Error> {
        const result = await __request({
            method: 'DELETE',
            path: `/customers/${customerName}/billing_settings`,
        });
        return result.body;
    }

    /**
     * Get Customer Revenue
     * Fetch revenue of a customer from start_time and end_time.
     * @returns RevenueResponse OK
     * @returns Error Default error response
     * @throws ApiError
     */
    public static async getCustomersService4({
        customerName,
        endTime,
        startTime,
    }: {
        customerName: string,
        endTime?: string,
        startTime?: string,
    }): Promise<RevenueResponse | Error> {
        const result = await __request({
            method: 'GET',
            path: `/customers/${customerName}/revenue`,
            query: {
                'end_time': endTime,
                'start_time': startTime,
            },
            errors: {
                422: `Unprocessable Entity`,
            },
        });
        return result.body;
    }

    /**
     * Generate Current Invoice
     * Fetch current cycle revenue for a customer and generate an invoice.
     * @returns Error Default error response
     * @throws ApiError
     */
    public static async getCustomersService5({
        token,
        invoiceId,
        customerName,
    }: {
        token: string,
        invoiceId: number,
        customerName: string,
    }): Promise<Error> {
        const result = await __request({
            method: 'GET',
            path: `/customers/${customerName}/invoice/${invoiceId}/${token}`,
        });
        return result.body;
    }

    /**
     * Generate Current Invoice
     * Fetch current cycle revenue for a customer and generate an invoice.
     * @returns Error Default error response
     * @throws ApiError
     */
    public static async getCustomersService6({
        token,
        customerName,
    }: {
        token: string,
        customerName: string,
    }): Promise<Error> {
        const result = await __request({
            method: 'GET',
            path: `/customers/${customerName}/sample_invoice/${token}`,
        });
        return result.body;
    }

    /**
     * Get the current status for a customer.
     * @returns CustomerStatus OK
     * @returns Error Default error response
     * @throws ApiError
     */
    public static async getCustomersService7({
        customerName,
    }: {
        customerName: string,
    }): Promise<CustomerStatus | Error> {
        const result = await __request({
            method: 'GET',
            path: `/customers/${customerName}/status`,
        });
        return result.body;
    }

    /**
     * Get the current status for a customer.
     * @returns Error Default error response
     * @throws ApiError
     */
    public static async getCustomersService8({
        customerName,
        endTime,
        meterName,
        startTime,
    }: {
        customerName: string,
        /** Ending timestamp to consider usage formatted as ISO-8601. **/
        endTime?: string,
        meterName?: string,
        /** Starting timestamp to consider usage formatted as ISO-8601. **/
        startTime?: string,
    }): Promise<Error> {
        const result = await __request({
            method: 'GET',
            path: `/customers/${customerName}/usage`,
            query: {
                'end_time': endTime,
                'meter_name': meterName,
                'start_time': startTime,
            },
            errors: {
                422: `Unprocessable Entity`,
            },
        });
        return result.body;
    }

    /**
     * Get Subscriptions
     * Get all subscriptions for the customer.
     * @returns Subscription OK
     * @returns Error Default error response
     * @throws ApiError
     */
    public static async getCustomersService9({
        customerName,
    }: {
        customerName: string,
    }): Promise<Array<Subscription> | Error> {
        const result = await __request({
            method: 'GET',
            path: `/customers/${customerName}/subscriptions`,
        });
        return result.body;
    }

    /**
     * Create Subscription
     * Create a new subscription for a customer / price plan combination (by unique name).
     * @returns Subscription OK
     * @returns Error Default error response
     * @throws ApiError
     */
    public static async postCustomersService4({
        customerName,
        requestBody,
    }: {
        customerName: string,
        requestBody: CreateSubscriptionArgs,
    }): Promise<Subscription | Error> {
        const result = await __request({
            method: 'POST',
            path: `/customers/${customerName}/subscriptions`,
            body: requestBody,
            errors: {
                422: `Unprocessable Entity`,
            },
        });
        return result.body;
    }

    /**
     * Update Subscription
     * Update a subscription for a specific customer (by customer name).
     * @returns Subscription OK
     * @returns Error Default error response
     * @throws ApiError
     */
    public static async putCustomersService2({
        customerName,
        requestBody,
    }: {
        customerName: string,
        requestBody: UpdateSubscriptionArgs,
    }): Promise<Subscription | Error> {
        const result = await __request({
            method: 'PUT',
            path: `/customers/${customerName}/subscription`,
            body: requestBody,
            errors: {
                422: `Unprocessable Entity`,
            },
        });
        return result.body;
    }

    /**
     * Delete Subscription
     * Delete a subscription for a specific customer (by customer name).
     * @returns Error Default error response
     * @throws ApiError
     */
    public static async deleteCustomersService2({
        customerName,
        requestBody,
    }: {
        customerName: string,
        requestBody: DeleteSubscriptionArgs,
    }): Promise<Error> {
        const result = await __request({
            method: 'DELETE',
            path: `/customers/${customerName}/subscription`,
            body: requestBody,
            errors: {
                422: `Unprocessable Entity`,
            },
        });
        return result.body;
    }

}