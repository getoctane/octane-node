import {
  PricePlansApi,
  CreatePricePlanArgs,
  UpdatePricePlanArgs,
  PricePlan,
  Configuration as APIConfiguration,
} from '../codegen';
import { BaseResource } from './base';

class PricePlans extends BaseResource {
  private api: PricePlansApi;

  constructor(apiConfig: APIConfiguration) {
    super(apiConfig);
    this.api = new PricePlansApi(apiConfig);
  }

  /**
   * Create Price Plan.
   */
  public create(
    createPricePlanArgs: CreatePricePlanArgs,
    overrides?: RequestInit,
  ): Promise<PricePlan> {
    return this.api.pricePlansPost({ createPricePlanArgs }, overrides);
  }

  /**
   * Fetch an existing price plan.
   */
  public retrieve(
    pricePlanName: string,
    overrides?: RequestInit,
  ): Promise<PricePlan> {
    return new Promise((resolve, reject) => {
      this.api
        .pricePlansPricePlanNameGet({ pricePlanName }, overrides)
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
    updatePricePlanArgs: UpdatePricePlanArgs,
    overrides?: RequestInit,
  ): Promise<PricePlan> {
    return this.api.pricePlansPricePlanNamePut(
      { updatePricePlanArgs, pricePlanName },
      overrides,
    );
  }

  /**
   * Retrieve all meters for a given vendor.
   */
  public list(overrides?: RequestInit): Promise<PricePlan[]> {
    return this.api.pricePlansGet(overrides);
  }

  /**
   * Delete a meter by its unique name.
   */
  public delete(pricePlanName: string, overrides?: RequestInit): Promise<void> {
    return this.api.pricePlansPricePlanNameDelete({ pricePlanName }, overrides);
  }
}

export { PricePlans };
