import { MeterInputArgs, MetersApi, UpdateMeterArgs } from '../codegen/api';
import { Configuration as APIConfiguration } from '../codegen/configuration';

class Meters {
  private api: MetersApi;

  constructor(apiConfig: APIConfiguration) {
    this.api = new MetersApi(apiConfig);
  }

  /**
   * Create a new Meter.
   */
  public create(body: MeterInputArgs, options?: any) {
    return this.api.metersPost(body, options);
  }

  /**
   * Fetch a meter by its unique name.
   */
  public retrieve(meterName: string, options?: any) {
    return this.api.metersMeterNameGet(meterName, options);
  }

  /**
   * Update a meter by its unique name.
   */
  public update(meterName: string, body: UpdateMeterArgs, options?: any) {
    // NOTE: order or arguments switched here
    return this.api.metersMeterNamePut(body, meterName, options);
  }

  /**
   * Retrieve all meters for a given vendor.
   */
  public list(options?: any) {
    return this.api.metersGet(options);
  }

  /**
   * Delete a meter by its unique name.
   */
  public delete(meterName: string, options?: any) {
    // TODO: void the response as it is inconsistent with others
    return this.api.metersMeterNameDelete(meterName, options);
  }
}

export { Meters };
