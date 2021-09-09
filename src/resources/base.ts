import camelcaseKeys from 'camelcase-keys';
import { ClientConfiguration } from '../types';

export abstract class BaseResource {
  private clientConfig: ClientConfiguration;

  constructor(clientConfig: ClientConfiguration) {
    this.clientConfig = clientConfig;
  }

  protected formatResponse = <T>(data: T): T => {
    const { camelCase = false } = this.clientConfig;
    if (camelCase) {
      // Note: It's not good that we're casting CamelCase<T> as T here. However,
      // all of our generated types are camelCased, even though the resulting
      // data from our API is snake_cased. This means that, when `camelCase` is
      // false, the SDK's types are incorrect. Ideally, we would either
      //   1. Make these resources accept a generic that encodes whether or not
      //      camelCase is enabled, which would in turn update the return types
      //      of all of the SDK's methods.
      //   2. Commit to using camelCase everywhere and let folks who want
      //      to use snake_case with this SDK wrap it themselves.
      //
      // For now, to avoid breaking changes, I'm keeping the types as defined.
      return camelcaseKeys(data, { deep: true }) as T;
    }
    return data;
  };
}
