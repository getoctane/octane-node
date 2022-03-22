import { Configuration as APIConfiguration } from '../codegen/runtime';

export abstract class BaseResource {
  private apiConfig: APIConfiguration;

  constructor(apiConfig: APIConfiguration) {
    this.apiConfig = apiConfig;
  }
}
