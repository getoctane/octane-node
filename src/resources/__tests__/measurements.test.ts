import { Measurement, Configuration } from 'codegen';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import fetchMock from 'jest-fetch-mock';
import { Measurements } from 'resources/measurements';

dayjs.extend(utc);

const API_CONFIG = new Configuration({
  accessToken: '867-5309',
  basePath: 'https://api.made.up.host:1337',
});

const FAKE_MEASUREMENT: Measurement = {
  meterName: 'someMeter',
  value: 9001,
};

const FAKE_ISO_STRING = '2021-09-10T16:36:59.663Z';

describe('Measurements resource', () => {
  it('makes create requests with either dates or ISO strings', async () => {
    const m = new Measurements(API_CONFIG, {});

    // Make one request with time as a string
    fetchMock.once(JSON.stringify(FAKE_MEASUREMENT));
    const resp1 = await m.create({
      ...FAKE_MEASUREMENT,
      time: FAKE_ISO_STRING,
    });
    expect(resp1).toEqual(FAKE_MEASUREMENT);
    const firstRequest = fetchMock.mock.calls[0];

    // Make one request with time as a date object
    fetchMock.once(JSON.stringify(FAKE_MEASUREMENT));
    const resp2 = await m.create({
      ...FAKE_MEASUREMENT,
      time: dayjs(FAKE_ISO_STRING).utc(true).toDate(),
    });
    expect(resp2).toEqual(FAKE_MEASUREMENT);
    const secondRequest = fetchMock.mock.calls[1];

    // Ensure that the outgoing requests are identical, regardless of
    // whether a date object or an ISO string was passed for `time`
    expect(firstRequest).toEqual(secondRequest);

    // Snapshot the requests so that we can tell if the generated API
    // requests ever change.
    expect(fetchMock.mock.calls).toMatchSnapshot();
  });
});
