import {
  MeterInputArgs,
  MetersApi,
  UpdateMeterArgs,
  Meter,
} from '../codegen/api';
import { Configuration as APIConfiguration } from '../codegen/configuration';
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
  public create(body: MeterInputArgs, options?: any): Promise<Meter> {
    return this.api.metersPost(body, options).then(this.formatResponse);
  }

  /**
   * Fetch a meter by its unique name.
   */
  public retrieve(meterName: string, options?: any): Promise<Meter> {
    return this.api
      .metersMeterNameGet(meterName, options)
      .then(this.formatResponse);
  }

  /**
   * Update a meter by its unique name.
   */
  public update(
    meterName: string,
    body: UpdateMeterArgs,
    options?: any,
  ): Promise<Meter> {
    // NOTE: order or arguments switched here
    return this.api
      .metersMeterNamePut(body, meterName, options)
      .then(this.formatResponse);
  }

  /**
   * Retrieve all meters for a given vendor.
   */
  public list(options?: any): Promise<Meter[]> {
    return this.api.metersGet(options).then(this.formatResponse);
  }

  /**
   * Delete a meter by its unique name.
   */
  public delete(meterName: string, options?: any): Promise<Response> {
    // TODO: void the response as it is inconsistent with others
    // NOTE: there's no need to format the response from a delete endpoint
    return this.api.metersMeterNameDelete(meterName, options);
  }
}

export { Meters };
