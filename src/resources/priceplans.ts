import {
  PricePlansApi,
  CreatePricePlanArgs,
  UpdatePricePlanArgs,
} from '../codegen/api';
import { Configuration as APIConfiguration } from '../codegen/configuration';

class PricePlans {
  private api: PricePlansApi;

  constructor(apiConfig: APIConfiguration) {
    this.api = new PricePlansApi(apiConfig);
  }

  /**
   * Create Price Plan.
   */
  public create(body: CreatePricePlanArgs, options?: any) {
    return this.api.pricePlansPost(body, options);
  }

  /**
   * Fetch an existing price plan.
   */
  public retrieve(pricePlanName: string, options?: any) {
    return this.api.pricePlansPricePlanNameGet(pricePlanName, options);
  }

  /**
   * Update a meter by its unique name.
   */
  public update(
    pricePlanName: string,
    body: UpdatePricePlanArgs,
    options?: any,
  ) {
    // NOTE: order or arguments switched here
    return this.api.pricePlansPricePlanNamePut(body, pricePlanName, options);
  }

  /**
   * Retrieve all meters for a given vendor.
   */
  public list(options?: any) {
    return this.api.pricePlansGet(options);
  }

  /**
   * Delete a meter by its unique name.
   */
  public delete(pricePlanName: string, options?: any) {
    // TODO: void the response as it is inconsistent with others
    return this.api.pricePlansPricePlanNameDelete(pricePlanName, options);
  }
}

export { PricePlans };
