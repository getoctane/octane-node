import { Customers } from 'resources/customers';
import fetchMock from 'jest-fetch-mock';
import { Configuration, CreateCustomerArgs } from 'codegen';

const API_CONFIG = new Configuration({
  accessToken: '867-5309',
  basePath: 'https://api.made.up.host:1337',
});

const FAKE_CUSTOMER: CreateCustomerArgs = {
  name: 'chuck_testa',
  displayName: 'Chuck Testa',
  contactInfo: {
    addressLine1: '1600 Pennsylvania Avenue NW',
    addressLine2: 'Apt. 4F',
    city: 'Washington',
    state: 'DC',
    zipcode: '20500',
  },
};

// The response comes back from the server in snake_case.
// This response is just FAKE_CUSTOMER but in snake_case.
const FAKE_RESPONSE = {
  name: 'chuck_testa',
  display_name: 'Chuck Testa',
  contact_info: {
    address_line_1: '1600 Pennsylvania Avenue NW',
    address_line_2: 'Apt. 4F',
    city: 'Washington',
    state: 'DC',
    zipcode: '20500',
  },
};

describe('Customers resource', () => {
  it('makes create requests', async () => {
    const c = new Customers(API_CONFIG);
    fetchMock.once(JSON.stringify(FAKE_RESPONSE));
    expect(await c.create(FAKE_CUSTOMER)).toEqual(FAKE_CUSTOMER);
    expect(fetchMock.mock.calls).toMatchSnapshot();
  });

  it('makes retrieve requests', async () => {
    const c = new Customers(API_CONFIG);
    fetchMock.once(JSON.stringify(FAKE_RESPONSE));
    expect(await c.retrieve('chuck_testa')).toEqual(FAKE_CUSTOMER);
    expect(fetchMock.mock.calls).toMatchSnapshot();
  });

  it('makes update requests', async () => {
    const c = new Customers(API_CONFIG);
    fetchMock.once(JSON.stringify(FAKE_RESPONSE));
    expect(await c.update('chuck_testa', FAKE_CUSTOMER)).toEqual(FAKE_CUSTOMER);
    expect(fetchMock.mock.calls).toMatchSnapshot();
  });

  it('makes list requests', async () => {
    const c = new Customers(API_CONFIG);
    fetchMock.once(JSON.stringify([FAKE_RESPONSE]));
    expect(await c.list()).toEqual([FAKE_CUSTOMER]);
    expect(fetchMock.mock.calls).toMatchSnapshot();
  });

  it('makes delete requests', async () => {
    const c = new Customers(API_CONFIG);
    fetchMock.once(JSON.stringify(FAKE_CUSTOMER));
    expect(await c.delete('chuck_testa')).toBeUndefined();
    expect(fetchMock.mock.calls).toMatchSnapshot();
  });
});
