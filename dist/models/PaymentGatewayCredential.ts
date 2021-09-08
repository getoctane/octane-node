/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type PaymentGatewayCredential = {
    /**
     * One of `STRIPE` or `PADDLE`
     */
    payment_gateway: 'STRIPE' | 'PADDLE';
    /**
     * Payment gateway account id associated with customer
     */
    account_id: string;
    /**
     * Unique name identifier of a customer
     */
    auth_token?: string | null;
}
