import {
  MeterInputArgs,
  MetersApi,
  UpdateMeterArgs,
  Meter,
} from '../codegen/api';
import { Configuration as APIConfiguration } from '../codegen/configuration';

class Meters {
  private api: MetersApi;

  constructor(apiConfig: APIConfiguration) {
    this.api = new MetersApi(apiConfig);
  }

  /**
   * Create a new Meter.
   */
  public create(body: MeterInputArgs, options?: any): Promise<Meter> {
    return this.api.metersPost(body, options);
  }

  /**
   * Fetch a meter by its unique name.
   */
  public retrieve(meterName: string, options?: any): Promise<Meter> {
    return this.api.metersMeterNameGet(meterName, options);
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
    return this.api.metersMeterNamePut(body, meterName, options);
  }

  /**
   * Retrieve all meters for a given vendor.
   */
  public list(options?: any): Promise<Meter[]> {
    return this.api.metersGet(options);
  }

  /**
   * Delete a meter by its unique name.
   */
  public delete(meterName: string, options?: any): Promise<Response> {
    // TODO: void the response as it is inconsistent with others
    return this.api.metersMeterNameDelete(meterName, options);
  }
}

export { Meters };
