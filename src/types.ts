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
} from './codegen/api';

interface Configuration {
  host?: string;
  port?: number;
  protocol?: string;
}

export {
  Configuration,
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
};
