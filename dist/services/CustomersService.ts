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
     * @param requestBody
     * @returns Customer OK
     * @returns Error Default error response
     * @throws ApiError
     */
    public static async postCustomersService(
        requestBody: CreateCustomerArgs,
    ): Promise<Customer | Error> {
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
     * @param customerName
     * @returns Customer OK
     * @returns Error Default error response
     * @throws ApiError
     */
    public static async getCustomersService1(
        customerName: string,
    ): Promise<Customer | Error> {
        const result = await __request({
            method: 'GET',
            path: `/customers/${customerName}`,
        });
        return result.body;
    }

    /**
     * Update Customer
     * Update a single customer. To update Customer measurement mappings, use the `customers/{customer_name}/mappings` endpoint.
     * @param customerName
     * @param requestBody
     * @returns Customer OK
     * @returns Error Default error response
     * @throws ApiError
     */
    public static async putCustomersService(
        customerName: string,
        requestBody: UpdateCustomerArgs,
    ): Promise<Customer | Error> {
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
     * @param customerName
     * @returns Error Default error response
     * @throws ApiError
     */
    public static async deleteCustomersService(
        customerName: string,
    ): Promise<Error> {
        const result = await __request({
            method: 'DELETE',
            path: `/customers/${customerName}`,
        });
        return result.body;
    }

    /**
     * Get Measurement Mappings
     * Fetch all measurement mappings for a specific customer (by unique customer name).
     * @param customerName
     * @returns CustomerMeasurementMapping OK
     * @returns Error Default error response
     * @throws ApiError
     */
    public static async getCustomersService2(
        customerName: string,
    ): Promise<Array<CustomerMeasurementMapping> | Error> {
        const result = await __request({
            method: 'GET',
            path: `/customers/${customerName}/mappings`,
        });
        return result.body;
    }

    /**
     * Append Measurement Mapping
     * Create a new measurement mapping for a customer. If no value_regex is passed, label existence is checked instead.
     * @param customerName
     * @param requestBody
     * @returns CustomerMeasurementMapping OK
     * @returns Error Default error response
     * @throws ApiError
     */
    public static async postCustomersService1(
        customerName: string,
        requestBody: CustomerMeasurementMappingInputArgs,
    ): Promise<CustomerMeasurementMapping | Error> {
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
     * @param customerName
     * @param requestBody
     * @returns PaymentGatewayCredential OK
     * @returns Error Default error response
     * @throws ApiError
     */
    public static async postCustomersService2(
        customerName: string,
        requestBody: CustomerPaymentGatewayCredentialInputArgs,
    ): Promise<PaymentGatewayCredential | Error> {
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
     * @param customerName
     * @returns BillingSettings OK
     * @returns Error Default error response
     * @throws ApiError
     */
    public static async getCustomersService3(
        customerName: string,
    ): Promise<BillingSettings | Error> {
        const result = await __request({
            method: 'GET',
            path: `/customers/${customerName}/billing_settings`,
        });
        return result.body;
    }

    /**
     * Create billing settings.
     * Create billing settings for a vendor.
     * @param customerName
     * @param requestBody
     * @returns BillingSettings OK
     * @returns Error Default error response
     * @throws ApiError
     */
    public static async postCustomersService3(
        customerName: string,
        requestBody: CreateBillingSettingsInputArgs,
    ): Promise<BillingSettings | Error> {
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
     * @param customerName
     * @param requestBody
     * @returns BillingSettings OK
     * @returns Error Default error response
     * @throws ApiError
     */
    public static async putCustomersService1(
        customerName: string,
        requestBody: UpdateBillingSettingsInputArgs,
    ): Promise<BillingSettings | Error> {
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
     * @param customerName
     * @returns Error Default error response
     * @throws ApiError
     */
    public static async deleteCustomersService1(
        customerName: string,
    ): Promise<Error> {
        const result = await __request({
            method: 'DELETE',
            path: `/customers/${customerName}/billing_settings`,
        });
        return result.body;
    }

    /**
     * Get Customer Revenue
     * Fetch revenue of a customer from start_time and end_time.
     * @param customerName
     * @param endTime
     * @param startTime
     * @returns RevenueResponse OK
     * @returns Error Default error response
     * @throws ApiError
     */
    public static async getCustomersService4(
        customerName: string,
        endTime?: string,
        startTime?: string,
    ): Promise<RevenueResponse | Error> {
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
     * @param customerName
     * @param invoiceId
     * @param token
     * @returns Error Default error response
     * @throws ApiError
     */
    public static async getCustomersService5(
        customerName: string,
        invoiceId: number,
        token: string,
    ): Promise<Error> {
        const result = await __request({
            method: 'GET',
            path: `/customers/${customerName}/invoice/${invoiceId}/${token}`,
        });
        return result.body;
    }

    /**
     * Generate Current Invoice
     * Fetch current cycle revenue for a customer and generate an invoice.
     * @param customerName
     * @param token
     * @returns Error Default error response
     * @throws ApiError
     */
    public static async getCustomersService6(
        customerName: string,
        token: string,
    ): Promise<Error> {
        const result = await __request({
            method: 'GET',
            path: `/customers/${customerName}/sample_invoice/${token}`,
        });
        return result.body;
    }

    /**
     * Get the current status for a customer.
     * @param customerName
     * @returns CustomerStatus OK
     * @returns Error Default error response
     * @throws ApiError
     */
    public static async getCustomersService7(
        customerName: string,
    ): Promise<CustomerStatus | Error> {
        const result = await __request({
            method: 'GET',
            path: `/customers/${customerName}/status`,
        });
        return result.body;
    }

    /**
     * Get the current status for a customer.
     * @param customerName
     * @param meterName
     * @param endTime Ending timestamp to consider usage formatted as ISO-8601.
     * @param startTime Starting timestamp to consider usage formatted as ISO-8601.
     * @returns Error Default error response
     * @throws ApiError
     */
    public static async getCustomersService8(
        customerName: string,
        meterName?: string,
        endTime?: string,
        startTime?: string,
    ): Promise<Error> {
        const result = await __request({
            method: 'GET',
            path: `/customers/${customerName}/usage`,
            query: {
                'meter_name': meterName,
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
     * Get Subscriptions
     * Get all subscriptions for the customer.
     * @param customerName
     * @returns Subscription OK
     * @returns Error Default error response
     * @throws ApiError
     */
    public static async getCustomersService9(
        customerName: string,
    ): Promise<Array<Subscription> | Error> {
        const result = await __request({
            method: 'GET',
            path: `/customers/${customerName}/subscriptions`,
        });
        return result.body;
    }

    /**
     * Create Subscription
     * Create a new subscription for a customer / price plan combination (by unique name).
     * @param customerName
     * @param requestBody
     * @returns Subscription OK
     * @returns Error Default error response
     * @throws ApiError
     */
    public static async postCustomersService4(
        customerName: string,
        requestBody: CreateSubscriptionArgs,
    ): Promise<Subscription | Error> {
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
     * @param customerName
     * @param requestBody
     * @returns Subscription OK
     * @returns Error Default error response
     * @throws ApiError
     */
    public static async putCustomersService2(
        customerName: string,
        requestBody: UpdateSubscriptionArgs,
    ): Promise<Subscription | Error> {
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
     * @param customerName
     * @param requestBody
     * @returns Error Default error response
     * @throws ApiError
     */
    public static async deleteCustomersService2(
        customerName: string,
        requestBody: DeleteSubscriptionArgs,
    ): Promise<Error> {
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