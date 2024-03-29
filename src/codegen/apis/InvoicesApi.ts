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


import * as runtime from '../runtime';
import {
    Invoice,
    InvoiceFromJSON,
    InvoiceToJSON,
    PastInvoices,
    PastInvoicesFromJSON,
    PastInvoicesToJSON,
    Retry,
    RetryFromJSON,
    RetryToJSON,
    UpdateInvoiceStatusArgs,
    UpdateInvoiceStatusArgsFromJSON,
    UpdateInvoiceStatusArgsToJSON,
} from '../models';

export interface InvoicesGetRequest {
    customerName?: string;
    forwardSortOffset?: string;
    sortColumn?: string;
    limit?: number;
    startTime?: Date;
    forwardSecondarySortOffset?: string;
    status?: string;
    sortDirection?: string;
}

export interface InvoicesInvoiceUuidDeleteRequest {
    invoiceUuid: string;
}

export interface InvoicesInvoiceUuidGetRequest {
    invoiceUuid: string;
}

export interface InvoicesInvoiceUuidRetriesPostRequest {
    invoiceUuid: string;
    body: object;
}

export interface InvoicesInvoiceUuidStatusPostRequest {
    invoiceUuid: string;
    updateInvoiceStatusArgs: UpdateInvoiceStatusArgs;
}

export interface InvoicesInvoiceUuidTokenPdfGetRequest {
    invoiceUuidToken: string;
}

/**
 * 
 */
export class InvoicesApi extends runtime.BaseAPI {

    /**
     * Fetch a list of historical invoices generated by Octane.
     * Get Past Invoices
     */
    async invoicesGetRaw(requestParameters: InvoicesGetRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<PastInvoices>> {
        const queryParameters: any = {};

        if (requestParameters.customerName !== undefined) {
            queryParameters['customer_name'] = requestParameters.customerName;
        }

        if (requestParameters.forwardSortOffset !== undefined) {
            queryParameters['forward_sort_offset'] = requestParameters.forwardSortOffset;
        }

        if (requestParameters.sortColumn !== undefined) {
            queryParameters['sort_column'] = requestParameters.sortColumn;
        }

        if (requestParameters.limit !== undefined) {
            queryParameters['limit'] = requestParameters.limit;
        }

        if (requestParameters.startTime !== undefined) {
            queryParameters['start_time'] = (requestParameters.startTime as any).toISOString();
        }

        if (requestParameters.forwardSecondarySortOffset !== undefined) {
            queryParameters['forward_secondary_sort_offset'] = requestParameters.forwardSecondarySortOffset;
        }

        if (requestParameters.status !== undefined) {
            queryParameters['status'] = requestParameters.status;
        }

        if (requestParameters.sortDirection !== undefined) {
            queryParameters['sort_direction'] = requestParameters.sortDirection;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("BearerApiKeyAuth", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/invoices/`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => PastInvoicesFromJSON(jsonValue));
    }

    /**
     * Fetch a list of historical invoices generated by Octane.
     * Get Past Invoices
     */
    async invoicesGet(requestParameters: InvoicesGetRequest = {}, initOverrides?: RequestInit): Promise<PastInvoices> {
        const response = await this.invoicesGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Delete a specific invoice via it\'s UUID. Invoices can only be deleted if they have not been issued.
     * Delete Invoice
     */
    async invoicesInvoiceUuidDeleteRaw(requestParameters: InvoicesInvoiceUuidDeleteRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.invoiceUuid === null || requestParameters.invoiceUuid === undefined) {
            throw new runtime.RequiredError('invoiceUuid','Required parameter requestParameters.invoiceUuid was null or undefined when calling invoicesInvoiceUuidDelete.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("BearerApiKeyAuth", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/invoices/{invoice_uuid}`.replace(`{${"invoice_uuid"}}`, encodeURIComponent(String(requestParameters.invoiceUuid))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Delete a specific invoice via it\'s UUID. Invoices can only be deleted if they have not been issued.
     * Delete Invoice
     */
    async invoicesInvoiceUuidDelete(requestParameters: InvoicesInvoiceUuidDeleteRequest, initOverrides?: RequestInit): Promise<void> {
        await this.invoicesInvoiceUuidDeleteRaw(requestParameters, initOverrides);
    }

    /**
     * Get a specific invoice via it\'s UUID.
     * Get Invoice
     */
    async invoicesInvoiceUuidGetRaw(requestParameters: InvoicesInvoiceUuidGetRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<Invoice>> {
        if (requestParameters.invoiceUuid === null || requestParameters.invoiceUuid === undefined) {
            throw new runtime.RequiredError('invoiceUuid','Required parameter requestParameters.invoiceUuid was null or undefined when calling invoicesInvoiceUuidGet.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("BearerApiKeyAuth", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/invoices/{invoice_uuid}`.replace(`{${"invoice_uuid"}}`, encodeURIComponent(String(requestParameters.invoiceUuid))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => InvoiceFromJSON(jsonValue));
    }

    /**
     * Get a specific invoice via it\'s UUID.
     * Get Invoice
     */
    async invoicesInvoiceUuidGet(requestParameters: InvoicesInvoiceUuidGetRequest, initOverrides?: RequestInit): Promise<Invoice> {
        const response = await this.invoicesInvoiceUuidGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Moves the invoice into the next logical action. For example, an invoice that is generated gets moved to issued, and an invoice that is in payment error tries payment again. For more information see our docs https://docs.getoctane.io/docs/manual-invoicing-triggers.
     * Create Retry
     */
    async invoicesInvoiceUuidRetriesPostRaw(requestParameters: InvoicesInvoiceUuidRetriesPostRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<Retry>> {
        if (requestParameters.invoiceUuid === null || requestParameters.invoiceUuid === undefined) {
            throw new runtime.RequiredError('invoiceUuid','Required parameter requestParameters.invoiceUuid was null or undefined when calling invoicesInvoiceUuidRetriesPost.');
        }

        if (requestParameters.body === null || requestParameters.body === undefined) {
            throw new runtime.RequiredError('body','Required parameter requestParameters.body was null or undefined when calling invoicesInvoiceUuidRetriesPost.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("BearerApiKeyAuth", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/invoices/{invoice_uuid}/retries`.replace(`{${"invoice_uuid"}}`, encodeURIComponent(String(requestParameters.invoiceUuid))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.body as any,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => RetryFromJSON(jsonValue));
    }

    /**
     * Moves the invoice into the next logical action. For example, an invoice that is generated gets moved to issued, and an invoice that is in payment error tries payment again. For more information see our docs https://docs.getoctane.io/docs/manual-invoicing-triggers.
     * Create Retry
     */
    async invoicesInvoiceUuidRetriesPost(requestParameters: InvoicesInvoiceUuidRetriesPostRequest, initOverrides?: RequestInit): Promise<Retry> {
        const response = await this.invoicesInvoiceUuidRetriesPostRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Manually change the status of an invoice in Octane. For example, if an invoice was paid outside of Octane\'s payment providers, you can reflect that in Octane by setting the status to paid.
     * Update Invoice Status
     */
    async invoicesInvoiceUuidStatusPostRaw(requestParameters: InvoicesInvoiceUuidStatusPostRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.invoiceUuid === null || requestParameters.invoiceUuid === undefined) {
            throw new runtime.RequiredError('invoiceUuid','Required parameter requestParameters.invoiceUuid was null or undefined when calling invoicesInvoiceUuidStatusPost.');
        }

        if (requestParameters.updateInvoiceStatusArgs === null || requestParameters.updateInvoiceStatusArgs === undefined) {
            throw new runtime.RequiredError('updateInvoiceStatusArgs','Required parameter requestParameters.updateInvoiceStatusArgs was null or undefined when calling invoicesInvoiceUuidStatusPost.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("BearerApiKeyAuth", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/invoices/{invoice_uuid}/status/`.replace(`{${"invoice_uuid"}}`, encodeURIComponent(String(requestParameters.invoiceUuid))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: UpdateInvoiceStatusArgsToJSON(requestParameters.updateInvoiceStatusArgs),
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Manually change the status of an invoice in Octane. For example, if an invoice was paid outside of Octane\'s payment providers, you can reflect that in Octane by setting the status to paid.
     * Update Invoice Status
     */
    async invoicesInvoiceUuidStatusPost(requestParameters: InvoicesInvoiceUuidStatusPostRequest, initOverrides?: RequestInit): Promise<void> {
        await this.invoicesInvoiceUuidStatusPostRaw(requestParameters, initOverrides);
    }

    /**
     * Return the invoice pdf for the given invoice_uuid, first validating token.
     * Return Invoice PDF
     */
    async invoicesInvoiceUuidTokenPdfGetRaw(requestParameters: InvoicesInvoiceUuidTokenPdfGetRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<Error>> {
        if (requestParameters.invoiceUuidToken === null || requestParameters.invoiceUuidToken === undefined) {
            throw new runtime.RequiredError('invoiceUuidToken','Required parameter requestParameters.invoiceUuidToken was null or undefined when calling invoicesInvoiceUuidTokenPdfGet.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("BearerApiKeyAuth", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/invoices/{invoice_uuid_token}/pdf`.replace(`{${"invoice_uuid_token"}}`, encodeURIComponent(String(requestParameters.invoiceUuidToken))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.TextApiResponse(response) as any;
    }

    /**
     * Return the invoice pdf for the given invoice_uuid, first validating token.
     * Return Invoice PDF
     */
    async invoicesInvoiceUuidTokenPdfGet(requestParameters: InvoicesInvoiceUuidTokenPdfGetRequest, initOverrides?: RequestInit): Promise<Error> {
        const response = await this.invoicesInvoiceUuidTokenPdfGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
