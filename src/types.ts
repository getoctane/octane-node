import {
  Customer,
  CreateCustomerArgs,
  UpdateCustomerArgs,
  CustomerPaymentGatewayCredentialInputArgs,
  PaymentGatewayCredential,
  CreateSubscriptionArgs,
  UpdateSubscriptionArgs,
  DeleteSubscriptionArgs,
  Subscription,
  Measurement,
  MeterInputArgs,
  UpdateMeterArgs,
  Meter,
  CreatePricePlanArgs,
  UpdatePricePlanArgs,
  PricePlan,
  CustomerFeature,
  CustomerUsage,
} from './codegen';

/**
 * Configures the connection to the Octane API
 */
export interface Configuration {
  host?: string;
  port?: number;
  protocol?: string;
  clientConfig?: ClientConfiguration;
}

/**
 * Configures the behavior of the client / sdk, like whether or not it should
 * convert response data to camelCase.
 */
export interface ClientConfiguration {
  /**
   * Experimental: convert response data into CamelCase.
   * This flag lets the API responses match our generated types.
   */
  camelCase?: boolean;
}

export {
  Customer,
  CreateCustomerArgs,
  UpdateCustomerArgs,
  CustomerPaymentGatewayCredentialInputArgs,
  PaymentGatewayCredential,
  CreateSubscriptionArgs,
  UpdateSubscriptionArgs,
  DeleteSubscriptionArgs,
  Subscription,
  Measurement,
  MeterInputArgs,
  UpdateMeterArgs,
  Meter,
  CreatePricePlanArgs,
  UpdatePricePlanArgs,
  PricePlan,
  CustomerFeature,
  CustomerUsage,
};
