import {
  CreateMeterArgs,
  MetersApi,
  UpdateMeterArgs,
  Meter,
  Configuration as APIConfiguration,
} from '../codegen';
import { BaseResource } from './base';

class Meters extends BaseResource {
  private api: MetersApi;

  constructor(apiConfig: APIConfiguration) {
    super(apiConfig);
    this.api = new MetersApi(apiConfig);
  }

  /**
   * Create a new Meter.
   */
  public create(
    createMeterArgs: CreateMeterArgs,
    overrides?: RequestInit,
  ): Promise<Meter> {
    return this.api.metersPost({ createMeterArgs }, overrides);
  }

  /**
   * Fetch a meter by its unique name.
   */
  public retrieve(meterName: string, overrides?: RequestInit): Promise<Meter> {
    return this.api.metersMeterNameGet({ meterName }, overrides);
  }

  /**
   * Update a meter by its unique name.
   */
  public update(
    meterName: string,
    updateMeterArgs: UpdateMeterArgs,
    overrides?: RequestInit,
  ): Promise<Meter> {
    return this.api.metersMeterNamePut(
      { updateMeterArgs, meterName },
      overrides,
    );
  }

  /**
   * Retrieve all meters for a given vendor.
   */
  public list(overrides?: RequestInit): Promise<Meter[]> {
    return this.api.metersGet(overrides);
  }

  /**
   * Delete a meter by its unique name.
   */
  public delete(meterName: string, overrides?: RequestInit): Promise<void> {
    // NOTE: there's no need to format the response from a delete endpoint
    return this.api.metersMeterNameDelete({ meterName }, overrides);
  }
}

export { Meters };
