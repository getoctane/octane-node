import * as octaneApi from "./api"
import * as octaneConfig from "./configuration"

const octaneDefaultHost = "api.cloud.getoctane.io"

export interface Configuration {
    host?: string;
    port?: number;
    protocol?: string;
}

class Customer {
    private _api: octaneApi.CustomersApi
    constructor(config: octaneConfig.Configuration) {
        this._api = new octaneApi.CustomersApi(config)
    }
    public create(body: octaneApi.CreateCustomerArgs, options?: any) {
        return this._api.customersPost(body, options)
    }
    public list(options?: any) {
        return this._api.customersGet(options)
    }
}

class Octane {
    Customer: Customer;
    constructor(key: string, overrides?: Configuration) {
        const host = overrides?.host || octaneDefaultHost
        const port = overrides?.port || 443
        const protocol = overrides?.protocol || "https"
        const config: octaneConfig.Configuration = {
            apiKey: key,
            basePath: `${protocol}://${host}:${port}`,
        }
        this.Customer = new Customer(config)
    }
}

const octane = function(key: string, overrides?: Configuration):Octane {
    return new Octane(key, overrides)
}

module.exports = octane
module.exports.default = octane
