import {
  Customer,
  CreateCustomerArgs,
  UpdateCustomerArgs,
  Measurement,
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
  Measurement,
};
