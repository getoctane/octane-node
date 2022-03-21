import {
  PricePlansApi,
  CreatePricePlanArgs,
  UpdatePricePlanArgs,
  PricePlan,
  Configuration as APIConfiguration,
} from '../codegen';
import { ClientConfiguration } from '../types';
import { BaseResource } from './base';

class PricePlans extends BaseResource {
  private api: PricePlansApi;

  constructor(apiConfig: APIConfiguration, clientConfig: ClientConfiguration) {
    super(clientConfig);
    this.api = new PricePlansApi(apiConfig);
  }

  /**
   * Create Price Plan.
   */
  public create(
    createPricePlanArgs: CreatePricePlanArgs,
    overrides?: RequestInit,
  ): Promise<PricePlan> {
    return this.api
      .pricePlansPost({ createPricePlanArgs }, overrides)
      .then(this.formatResponse);
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
          resolve(this.formatResponse(pricePlan));
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
    return this.api
      .pricePlansPricePlanNamePut(
        { updatePricePlanArgs, pricePlanName },
        overrides,
      )
      .then(this.formatResponse);
  }

  /**
   * Retrieve all meters for a given vendor.
   */
  public list(overrides?: RequestInit): Promise<PricePlan[]> {
    return this.api.pricePlansGet(overrides).then(this.formatResponse);
  }

  /**
   * Delete a meter by its unique name.
   */
  public delete(pricePlanName: string, overrides?: RequestInit): Promise<void> {
    // NOTE: there's no need to format the response from a delete endpoint
    return this.api.pricePlansPricePlanNameDelete({ pricePlanName }, overrides);
  }
}

export { PricePlans };
