import { BaseResource } from 'resources/base';

class TestResource extends BaseResource {
  public makeFakeRequest<T>(response: T) {
    return Promise.resolve(response).then(this.formatResponse);
  }
}

describe('Base resource', () => {
  it('formats results with camelCase when configured to', async () => {
    // Camelcase is explicitly turned on
    const t1 = new TestResource({
      camelCase: true,
    });
    const r1 = await t1.makeFakeRequest({ some_key: 'some_value' });
    expect(r1).toEqual({ someKey: 'some_value' });

    // Camelcase is explicitly turned off
    const t2 = new TestResource({
      camelCase: false,
    });
    const r2 = await t2.makeFakeRequest({ some_key: 'some_value' });
    expect(r2).toEqual({ some_key: 'some_value' });

    // Camelcase is not specified (off by default)
    const t3 = new TestResource({});
    const r3 = await t3.makeFakeRequest({ some_key: 'some_value' });
    expect(r3).toEqual({ some_key: 'some_value' });
  });
});
