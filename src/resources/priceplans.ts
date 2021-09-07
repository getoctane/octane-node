import {
  PricePlansApi,
  CreatePricePlanArgs,
  UpdatePricePlanArgs,
  PricePlan,
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
  public create(body: CreatePricePlanArgs, options?: any): Promise<PricePlan> {
    return this.api.pricePlansPost(body, options);
  }

  /**
   * Fetch an existing price plan.
   */
  public retrieve(pricePlanName: string, options?: any): Promise<PricePlan> {
    return new Promise((resolve, reject) => {
      this.api
        .pricePlansPricePlanNameGet(pricePlanName, options)
        .then((pricePlan) => {
          if (!pricePlan.name) {
            throw new Error('Price plan does not exist');
          }
          resolve(pricePlan);
        })
        .catch(reject);
    });
    // TODO: when price plan does not exist, no 404, just empty response body
    // return this.api.pricePlansPricePlanNameGet(pricePlanName, options);
  }

  /**
   * Update a meter by its unique name.
   */
  public update(
    pricePlanName: string,
    body: UpdatePricePlanArgs,
    options?: any,
  ): Promise<PricePlan> {
    // NOTE: order of arguments switched here
    return this.api.pricePlansPricePlanNamePut(body, pricePlanName, options);
  }

  /**
   * Retrieve all meters for a given vendor.
   */
  public list(options?: any): Promise<PricePlan[]> {
    return this.api.pricePlansGet(options);
  }

  /**
   * Delete a meter by its unique name.
   */
  public delete(pricePlanName: string, options?: any): Promise<Response> {
    // TODO: void the response as it is inconsistent with others
    return this.api.pricePlansPricePlanNameDelete(pricePlanName, options);
  }
}

export { PricePlans };
