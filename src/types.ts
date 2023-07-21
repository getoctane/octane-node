import {
  ConfigurationParameters,
  Customer,
  CreateCustomerArgs,
  UpdateCustomerArgs,
  CustomerPaymentGatewayCredentialInputArgs,
  PaymentGatewayCredential,
  CreateSubscriptionArgs,
  UpdateSubscriptionArgs,
  DeleteSubscriptionArgs,
  Subscription,
  ActiveSubscription,
  SubscriptionAddOnItem,
  Measurement,
  CreateMeterArgs,
  UpdateMeterArgs,
  Meter,
  CreatePricePlanArgs,
  UpdatePricePlanArgs,
  PricePlan,
  CustomerFeature,
  CustomerUsage,
  CustomerBillingSettingsInputArgs,
  BillingSettings,
} from './codegen';

/**
 * Configures the connection to the Octane API
 */
export interface Configuration
  extends Omit<
    ConfigurationParameters,
    'apiKey' | 'username' | 'password' | 'credentials'
  > {
  host?: string;
  port?: number;
  protocol?: string;
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
  ActiveSubscription,
  SubscriptionAddOnItem,
  Measurement,
  CreateMeterArgs,
  UpdateMeterArgs,
  Meter,
  CreatePricePlanArgs,
  UpdatePricePlanArgs,
  PricePlan,
  CustomerFeature,
  CustomerUsage,
  CustomerBillingSettingsInputArgs,
  BillingSettings,
};
