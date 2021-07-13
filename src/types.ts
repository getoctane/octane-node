import {
  Customer,
  CreateCustomerArgs,
  UpdateCustomerArgs,
} from './codegen/api';

interface Configuration {
  host?: string;
  port?: number;
  protocol?: string;
}

export { Configuration, Customer, CreateCustomerArgs, UpdateCustomerArgs };
