import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import {
  CreateCustomerArgs,
  CustomersCustomerNameFeaturesFeatureNameGetRequest,
  CustomersCustomerNameUsageGetRequest,
  CreateSubscriptionArgs,
  Customer,
  CustomerFeature,
  CustomerPaymentGatewayCredentialInputArgs,
  CustomersApi,
  CustomerUsage,
  DeleteSubscriptionArgs,
  PaymentGatewayCredential,
  Subscription,
  UpdateCustomerArgs,
  UpdateSubscriptionArgs,
} from '../codegen';
import { Configuration as APIConfiguration } from '../codegen/runtime';
import { ClientConfiguration } from '../types';
import { BaseResource } from './base';

dayjs.extend(utc);

// Extend the generated args for retrieveUsage so we can optionally convert date
// objects into strings.
interface RetrieveUsageArgs
  extends Omit<CustomersCustomerNameUsageGetRequest, 'startTime' | 'endTime'> {
  startTime?: Date | string;
  endTime?: Date | string;
}

class Customers extends BaseResource {
  private api: CustomersApi;

  constructor(apiConfig: APIConfiguration, clientConfig: ClientConfiguration) {
    super(clientConfig);
    this.api = new CustomersApi(apiConfig);
  }

  /**
   * Create a new customer.
   */
  public create(
    createCustomerArgs: CreateCustomerArgs,
    overrides?: RequestInit,
  ): Promise<Customer> {
    return this.api
      .customersPost({ createCustomerArgs }, overrides)
      .then(this.formatResponse);
  }

  /**
   * Fetch a customer by their unique name.
   */
  public retrieve(
    customerName: string,
    overrides?: RequestInit,
  ): Promise<Customer> {
    return this.api
      .customersCustomerNameGet({ customerName }, overrides)
      .then(this.formatResponse);
  }

  /**
   * Update a single customer.
   */
  public update(
    customerName: string,
    updateCustomerArgs: UpdateCustomerArgs,
    overrides?: RequestInit,
  ): Promise<Customer> {
    return this.api
      .customersCustomerNamePut({ customerName, updateCustomerArgs }, overrides)
      .then(this.formatResponse);
  }

  /**
   * Retrieve all customers for a given vendor.
   */
  public list(overrides?: RequestInit): Promise<Customer[]> {
    return this.api.customersGet(overrides).then(this.formatResponse);
  }

  /**
   * Delete a customer by their unique name.
   */
  public delete(customerName: string, overrides?: RequestInit): Promise<void> {
    // NOTE: there's no need to format the response from a delete endpoint
    return this.api.customersCustomerNameDelete({ customerName }, overrides);
  }

  /**
   * Add PaymentGatewayCredential for a customer.
   */
  public createPaymentGatewayCredential(
    customerName: string,
    customerPaymentGatewayCredentialInputArgs: CustomerPaymentGatewayCredentialInputArgs,
    overrides?: RequestInit,
  ): Promise<PaymentGatewayCredential> {
    return this.api
      .customersCustomerNamePaymentGatewayCredentialsPost(
        {
          customerName,
          customerPaymentGatewayCredentialInputArgs,
        },
        overrides,
      )
      .then(this.formatResponse);
  }

  /**
   * Create a new subscription for a customer / price plan combination (by unique name).
   */
  public createSubscription(
    customerName: string,
    createSubscriptionArgs: CreateSubscriptionArgs,
    overrides?: RequestInit,
  ): Promise<Subscription> {
    return this.api
      .customersCustomerNameSubscriptionsPost(
        { customerName, createSubscriptionArgs },
        overrides,
      )
      .then(this.formatResponse);
  }

  /**
   * Get all subscriptions for the customer.
   */
  public listSubscriptions(
    customerName: string,
    overrides?: RequestInit,
  ): Promise<Subscription[]> {
    return this.api
      .customersCustomerNameSubscriptionsGet({ customerName }, overrides)
      .then(this.formatResponse);
  }

  /**
   * Update a subscription for a specific customer (by customer name).
   */
  public updateSubscription(
    customerName: string,
    updateSubscriptionArgs: UpdateSubscriptionArgs,
    overrides?: RequestInit,
  ): Promise<Subscription> {
    return this.api
      .customersCustomerNameSubscriptionPut(
        { customerName, updateSubscriptionArgs },
        overrides,
      )
      .then(this.formatResponse);
  }

  /**
   * Delete a subscription for a specific customer (by customer name).
   */
  public deleteSubscription(
    customerName: string,
    deleteSubscriptionArgs: DeleteSubscriptionArgs,
    overrides?: RequestInit,
  ): Promise<void> {
    return this.api.customersCustomerNameSubscriptionDelete(
      { customerName, deleteSubscriptionArgs },
      overrides,
    );
  }

  /**
   * Retreive a customer's access to feature/limitation.
   */
  public retrieveUsage(
    { startTime, endTime, ...rest }: RetrieveUsageArgs,
    overrides?: RequestInit,
  ): Promise<CustomerUsage> {
    let startTimeAsDate: Date | undefined;
    if (startTime) {
      startTimeAsDate =
        startTime instanceof Date
          ? startTime
          : dayjs(startTime).utc(true).toDate();
    }
    let endTimeAsDate: Date | undefined;
    if (endTime) {
      endTimeAsDate =
        endTime instanceof Date ? endTime : dayjs(endTime).utc(true).toDate();
    }
    return this.api
      .customersCustomerNameUsageGet(
        {
          startTime: startTimeAsDate,
          endTime: endTimeAsDate,
          ...rest,
        },
        overrides,
      )
      .then(this.formatResponse);
  }

  /**
   * Retreive a customer's access to feature/limitation.
   */
  public retrieveFeature(
    retrieveFeatureArgs: CustomersCustomerNameFeaturesFeatureNameGetRequest,
    overrides?: RequestInit,
  ): Promise<CustomerFeature> {
    return this.api
      .customersCustomerNameFeaturesFeatureNameGet(
        retrieveFeatureArgs,
        overrides,
      )
      .then(this.formatResponse);
  }
}

export { Customers };
