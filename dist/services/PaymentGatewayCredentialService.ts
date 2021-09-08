/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Error } from '../models/Error';
import type { PaymentGatewayCredential } from '../models/PaymentGatewayCredential';
import type { PaymentGatewayCredentialInputArgs } from '../models/PaymentGatewayCredentialInputArgs';
import { request as __request } from '../core/request';

export class PaymentGatewayCredentialService {

    /**
     * Add PaymentGatewayCredential for Vendor
     * @param requestBody
     * @returns PaymentGatewayCredential OK
     * @returns Error Default error response
     * @throws ApiError
     */
    public static async postPaymentGatewayCredentialService(
        requestBody: PaymentGatewayCredentialInputArgs,
    ): Promise<PaymentGatewayCredential | Error> {
        const result = await __request({
            method: 'POST',
            path: `/payment_gateway_credentials/`,
            body: requestBody,
            errors: {
                422: `Unprocessable Entity`,
            },
        });
        return result.body;
    }

}