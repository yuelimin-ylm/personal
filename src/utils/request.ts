import axios, { AxiosRequestConfig } from 'axios';
import NProgress from '@/utils/progress';
import { messageError } from '@/utils/message';
import routers from '@/router/index';

const request = axios.create({
  baseURL: import.meta.env.VITE_BASE_API,
  timeout: 3000
});

request.interceptors.request.use(
  function (config) {
    // NProgress.start();
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

request.interceptors.response.use(
  function (response) {
    // NProgress.done();
    return response.data;
  },
  function (error) {
    let errMsg = error.message;
    const errData = error.response?.data;
    if (errData) {
      if (typeof errData === 'string') {
        errMsg = errData;
      } else if ('message' in errData) {
        errMsg = errData.message;
      }
    }
    NProgress.done();
    messageError(errMsg);
    if (error.response.status === 401 && errMsg === 'Captcha wrong') {
      routers.push('/login');
    } else if (error.response.status === 401 && errMsg === 'Username or password wrong') {
      routers.push('/login');
    } else if (error.response.status === 401 && errMsg === 'Login required') {
      routers.push({ path: '/error/redirect', query: { msg: errMsg } });
    } else if (error.response.status === 403 && errMsg === 'Permission Denied') {
      routers.push({ path: '/error/redirect', query: { msg: errMsg } });
    }
    return Promise.reject(error);
  }
);

export function requestGet<Result>(url: string, config?: AxiosRequestConfig<never>) {
  return request.get<never, Result, never>(url, config);
}

export function requestDelete<Result>(url: string, config?: AxiosRequestConfig<never>) {
  return request.delete<never, Result, never>(url, config);
}

export function requestPost<Data, Result>(
  url: string,
  data?: Data,
  config?: AxiosRequestConfig<Data>
) {
  return request.post<never, Result, Data>(url, data, config);
}

export function requestPut<Data, Result>(
  url: string,
  data?: Data,
  config?: AxiosRequestConfig<Data>
) {
  return request.put<never, Result, Data>(url, data, config);
}

export function requestPatch<Data, Result>(
  url: string,
  data?: Data,
  config?: AxiosRequestConfig<Data>
) {
  return request.patch<never, Result, Data>(url, data, config);
}

export default request;
