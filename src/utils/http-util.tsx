import Axios, { AxiosRequestConfig } from "axios";
// import { ROUTE_API } from "../api/api";

interface RetryQueueItem {
  resolve: (value?: any) => void;
  reject: (error?: any) => void;
  config: AxiosRequestConfig;
}

const refreshAndRetryQueue: RetryQueueItem[] = [];

const HttpUtil = Axios.create({
  // baseURL: ROUTE_API.root,
  baseURL: "http://localhost:4004/api/v1/",
});

HttpUtil.interceptors.request.use(async (config) => {
  config.headers.Accept = "*/*";

  return config;
});

HttpUtil.interceptors.response.use(
  async function onSuccess(res) {
    const originalRequest: AxiosRequestConfig = res.config;
    if (res?.status < 400) {
      return res;
    } else {
      if (res?.data?.status === 401) {
        return new Promise<any>((resolve, reject) => {
          refreshAndRetryQueue.push({
            config: originalRequest,
            resolve,
            reject,
          });
        });
      } else {
        return Promise.reject(res.data);
      }
    }
  },
  function onError(err) {
    const res = err.response;
    console.log("error respone:", res);
    if (res) {
      if (res?.status === 401) {
        localStorage.clear();
        alert(res?.data?.error);
        window?.location?.reload();
      }
      return Promise.reject(res.data);
    } else {
      return Promise.reject(err);
    }
  }
);

export default HttpUtil;
