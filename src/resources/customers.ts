import {
  CreateCustomerArgs,
  CreateSubscriptionArgs,
  CustomerPaymentGatewayCredentialInputArgs,
  CustomersApi,
  DeleteSubscriptionArgs,
  UpdateCustomerArgs,
  UpdateSubscriptionArgs,
} from '../codegen/api';
import { Configuration as APIConfiguration } from '../codegen/configuration';

class Customers {
  private api: CustomersApi;

  constructor(apiConfig: APIConfiguration) {
    this.api = new CustomersApi(apiConfig);
  }

  /**
   * Create a new customer.
   */
  public create(body: CreateCustomerArgs, options?: any) {
    return this.api.customersPost(body, options);
  }

  /**
   * Fetch a customer by their unique name.
   */
  public retrieve(customerName: string, options?: any) {
    return this.api.customersCustomerNameGet(customerName, options);
  }

  /**
   * Update a single customer.
   */
  public update(customerName: string, body: UpdateCustomerArgs, options?: any) {
    // NOTE: order or arguments switched here
    return this.api.customersCustomerNamePut(body, customerName, options);
  }

  /**
   * Retrieve all customers for a given vendor.
   */
  public list(options?: any) {
    return this.api.customersGet(options);
  }

  /**
   * Delete a customer by their unique name.
   */
  public delete(customerName: string, options?: any) {
    // TODO: void the response as it is inconsistent with others
    return this.api.customersCustomerNameDelete(customerName, options);
  }

  /**
   * Add PaymentGatewayCredential for a customer.
   */
  public createPaymentGatewayCredential(
    customerName: string,
    body: CustomerPaymentGatewayCredentialInputArgs,
    options?: any,
  ) {
    // NOTE: order or arguments switched here
    return this.api.customersCustomerNamePaymentGatewayCredentialsPost(
      body,
      customerName,
      options,
    );
  }

  /**
   * Create a new subscription for a customer / price plan combination (by unique name).
   */
  public createSubscription(
    customerName: string,
    body: CreateSubscriptionArgs,
    options?: any,
  ) {
    // NOTE: order or arguments switched here
    return this.api.customersCustomerNameSubscriptionsPost(
      body,
      customerName,
      options,
    );
  }

  /**
   * Get all subscriptions for the customer.
   */
  public listSubscriptions(customerName: string, options?: any) {
    return this.api.customersCustomerNameSubscriptionsGet(
      customerName,
      options,
    );
  }

  /**
   * Update a subscription for a specific customer (by customer name).
   */
  public updateSubscription(
    customerName: string,
    body: UpdateSubscriptionArgs,
    options?: any,
  ) {
    // NOTE: order or arguments switched here
    return this.api.customersCustomerNameSubscriptionPut(
      body,
      customerName,
      options,
    );
  }

  /**
   * Delete a subscription for a specific customer (by customer name).
   */
  public deleteSubscription(
    customerName: string,
    body: DeleteSubscriptionArgs,
    options?: any,
  ) {
    // TODO: void the response as it is inconsistent with others
    // NOTE: order or arguments switched here
    return this.api.customersCustomerNameSubscriptionDelete(
      body,
      customerName,
      options,
    );
  }
}

export { Customers };
