import { request } from './request';

const get = (url: string, query?: any, headers?: any) => {
  return request(url, 'GET', null, query, headers);
};

export const RESTActions = { get };
