import httpClient from './httpClient';

describe('httpClient test', () => {
  it('setAccessToken method', () => {
  	expect(typeof httpClient.setAccessToken === 'function').toBeTruthy();

  	httpClient.setAccessToken('test');
  	expect(httpClient.defaults.headers.Authorization).toEqual('Bearer test');
  });

  it('removeAccessToken method', () => {
  	expect(typeof httpClient.removeAccessToken === 'function').toBeTruthy();

  	httpClient.removeAccessToken();
  	expect(httpClient.defaults.headers.Authorization).toBeUndefined();
  });
});