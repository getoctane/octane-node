/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type PaymentGatewayCredential = {
    /**
     * One of `STRIPE` or `PADDLE`
     */
    payment_gateway: PaymentGatewayCredential.payment_gateway;
    /**
     * Payment gateway account id associated with customer
     */
    account_id: string;
    /**
     * Unique name identifier of a customer
     */
    auth_token?: string | null;
}

export namespace PaymentGatewayCredential {

    /**
     * One of `STRIPE` or `PADDLE`
     */
    export enum payment_gateway {
        STRIPE = 'STRIPE',
        PADDLE = 'PADDLE',
    }


}
