import {
  CreateCustomerArgs,
  CustomersApi,
  UpdateCustomerArgs,
} from '../codegen/api';
import { Configuration as APIConfiguration } from '../codegen/configuration';

class Customers {
  private api: CustomersApi;

  constructor(apiConfig: APIConfiguration) {
    this.api = new CustomersApi(apiConfig);
  }

  public create(body: CreateCustomerArgs, options?: any) {
    return this.api.customersPost(body, options);
  }

  public retrieve(customerName: string, options?: any) {
    return this.api.customersCustomerNameGet(customerName, options);
  }

  public update(customerName: string, body: UpdateCustomerArgs, options?: any) {
    // NOTE: order or arguments switched here
    return this.api.customersCustomerNamePut(body, customerName, options);
  }

  public list(options?: any) {
    return this.api.customersGet(options);
  }

  public del(customerName: string, options?: any) {
    // TODO: void the response as it is inconsistent with others
    return this.api.customersCustomerNameDelete(customerName, options);
  }
}

export { Customers };
