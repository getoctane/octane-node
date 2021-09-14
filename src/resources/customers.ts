import {
  CreateCustomerArgs,
  CreateSubscriptionArgs,
  Customer,
  CustomerFeature,
  CustomerPaymentGatewayCredentialInputArgs,
  CustomersApi,
  DeleteSubscriptionArgs,
  PaymentGatewayCredential,
  Subscription,
  UpdateCustomerArgs,
  UpdateSubscriptionArgs,
} from '../codegen/api';
import { ClientConfiguration } from '../types';
import { Configuration as APIConfiguration } from '../codegen/configuration';
import { BaseResource } from './base';

class Customers extends BaseResource {
  private api: CustomersApi;

  constructor(apiConfig: APIConfiguration, clientConfig: ClientConfiguration) {
    super(clientConfig);
    this.api = new CustomersApi(apiConfig);
  }

  /**
   * Create a new customer.
   */
  public create(body: CreateCustomerArgs, options?: any): Promise<Customer> {
    return this.api.customersPost(body, options).then(this.formatResponse);
  }

  /**
   * Fetch a customer by their unique name.
   */
  public retrieve(customerName: string, options?: any): Promise<Customer> {
    return this.api
      .customersCustomerNameGet(customerName, options)
      .then(this.formatResponse);
  }

  /**
   * Update a single customer.
   */
  public update(
    customerName: string,
    body: UpdateCustomerArgs,
    options?: any,
  ): Promise<Customer> {
    // NOTE: order or arguments switched here
    return this.api
      .customersCustomerNamePut(body, customerName, options)
      .then(this.formatResponse);
  }

  /**
   * Retrieve all customers for a given vendor.
   */
  public list(options?: any): Promise<Customer[]> {
    return this.api.customersGet(options).then(this.formatResponse);
  }

  /**
   * Delete a customer by their unique name.
   */
  public delete(customerName: string, options?: any): Promise<Response> {
    // TODO: void the response as it is inconsistent with others
    // NOTE: there's no need to format the response from a delete endpoint
    return this.api.customersCustomerNameDelete(customerName, options);
  }

  /**
   * Add PaymentGatewayCredential for a customer.
   */
  public createPaymentGatewayCredential(
    customerName: string,
    body: CustomerPaymentGatewayCredentialInputArgs,
    options?: any,
  ): Promise<PaymentGatewayCredential> {
    // NOTE: order or arguments switched here
    return this.api
      .customersCustomerNamePaymentGatewayCredentialsPost(
        body,
        customerName,
        options,
      )
      .then(this.formatResponse);
  }

  /**
   * Create a new subscription for a customer / price plan combination (by unique name).
   */
  public createSubscription(
    customerName: string,
    body: CreateSubscriptionArgs,
    options?: any,
  ): Promise<Subscription> {
    // NOTE: order or arguments switched here
    return this.api
      .customersCustomerNameSubscriptionsPost(body, customerName, options)
      .then(this.formatResponse);
  }

  /**
   * Get all subscriptions for the customer.
   */
  public listSubscriptions(
    customerName: string,
    options?: any,
  ): Promise<Subscription[]> {
    return this.api
      .customersCustomerNameSubscriptionsGet(customerName, options)
      .then(this.formatResponse);
  }

  /**
   * Update a subscription for a specific customer (by customer name).
   */
  public updateSubscription(
    customerName: string,
    body: UpdateSubscriptionArgs,
    options?: any,
  ): Promise<Subscription> {
    // NOTE: order or arguments switched here
    return this.api
      .customersCustomerNameSubscriptionPut(body, customerName, options)
      .then(this.formatResponse);
  }

  /**
   * Delete a subscription for a specific customer (by customer name).
   */
  public deleteSubscription(
    customerName: string,
    body: DeleteSubscriptionArgs,
    options?: any,
  ): Promise<Response> {
    // TODO: void the response as it is inconsistent with others
    // NOTE: order or arguments switched here
    return this.api
      .customersCustomerNameSubscriptionDelete(body, customerName, options)
      .then(this.formatResponse);
  }

  /**
   * Retreive a customer's access to feature/limitation.
   */
  public retrieveFeature(
    customerName: string,
    featureName: string,
    options?: any,
  ): Promise<CustomerFeature> {
    // TODO: void the response as it is inconsistent with others
    // NOTE: order or arguments switched here
    return this.api
      .customersCustomerNameFeaturesFeatureNameGet(
        featureName,
        customerName,
        options,
      )
      .then(this.formatResponse);
  }
}

export { Customers };
