import { Customers } from 'resources/customers';
import fetchMock from 'jest-fetch-mock';
import type { Customer } from 'codegen/api';

const API_CONFIG = {
  apiKey: '867-5309',
  basePath: 'https://api.made.up.host:1337',
};

const FAKE_CUSTOMER: Customer = {
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

describe('Customers resource', () => {
  it('makes create requests', async () => {
    const c = new Customers(API_CONFIG, {});
    fetchMock.once(JSON.stringify(FAKE_CUSTOMER));
    expect(await c.create(FAKE_CUSTOMER)).toEqual(FAKE_CUSTOMER);
    expect(fetchMock.mock.calls).toMatchSnapshot();
  });

  it('makes retrieve requests', async () => {
    const c = new Customers(API_CONFIG, {});
    fetchMock.once(JSON.stringify(FAKE_CUSTOMER));
    expect(await c.retrieve('chuck_testa')).toEqual(FAKE_CUSTOMER);
    expect(fetchMock.mock.calls).toMatchSnapshot();
  });

  it('makes update requests', async () => {
    const c = new Customers(API_CONFIG, {});
    fetchMock.once(JSON.stringify(FAKE_CUSTOMER));
    expect(await c.update('chuck_testa', FAKE_CUSTOMER)).toEqual(FAKE_CUSTOMER);
    expect(fetchMock.mock.calls).toMatchSnapshot();
  });

  it('makes list requests', async () => {
    const c = new Customers(API_CONFIG, {});
    fetchMock.once(JSON.stringify([FAKE_CUSTOMER]));
    expect(await c.list()).toEqual([FAKE_CUSTOMER]);
    expect(fetchMock.mock.calls).toMatchSnapshot();
  });

  it('makes delete requests', async () => {
    const c = new Customers(API_CONFIG, {});
    fetchMock.once(JSON.stringify(FAKE_CUSTOMER));
    expect(await c.delete('chuck_testa').then((res) => res.json())).toEqual(
      FAKE_CUSTOMER,
    );
    expect(fetchMock.mock.calls).toMatchSnapshot();
  });
});
