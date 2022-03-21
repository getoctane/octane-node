import {
  MeterInputArgs,
  MetersApi,
  UpdateMeterArgs,
  Meter,
  Configuration as APIConfiguration,
} from '../codegen';
import { ClientConfiguration } from '../types';
import { BaseResource } from './base';

class Meters extends BaseResource {
  private api: MetersApi;

  constructor(apiConfig: APIConfiguration, clientConfig: ClientConfiguration) {
    super(clientConfig);
    this.api = new MetersApi(apiConfig);
  }

  /**
   * Create a new Meter.
   */
  public create(
    meterInputArgs: MeterInputArgs,
    overrides?: RequestInit,
  ): Promise<Meter> {
    return this.api
      .metersPost({ meterInputArgs }, overrides)
      .then(this.formatResponse);
  }

  /**
   * Fetch a meter by its unique name.
   */
  public retrieve(meterName: string, overrides?: RequestInit): Promise<Meter> {
    return this.api
      .metersMeterNameGet({ meterName }, overrides)
      .then(this.formatResponse);
  }

  /**
   * Update a meter by its unique name.
   */
  public update(
    meterName: string,
    updateMeterArgs: UpdateMeterArgs,
    overrides?: RequestInit,
  ): Promise<Meter> {
    return this.api
      .metersMeterNamePut({ updateMeterArgs, meterName }, overrides)
      .then(this.formatResponse);
  }

  /**
   * Retrieve all meters for a given vendor.
   */
  public list(overrides?: RequestInit): Promise<Meter[]> {
    return this.api.metersGet(overrides).then(this.formatResponse);
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
