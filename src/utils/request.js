import axios from "axios";
import store from "/@/store";
import { ElMessage } from "element-plus";

const service = axios.create({
  // 请求地址前加上baseURL
  baseURL: import.meta.env.VITE_BASE_API,
  time: 5000,
});

// 请求拦截
service.interceptors.request.use(
  // 配置
  config => {
    if (store.getters.token) {
      config.headers["X-Token"] = store.getters.token;
    }
    return config;
  },
  // 错误
  error => {
    console.log(error);
    return Promise.reject(error);
  }
);

// 响应拦截
service.interceptors.response.use(
  response => {
    const res = response;
    if (res.code !== 20000) {
      ElMessage.error({
        message: res.message || "Error",
        duration: 5 * 1000,
      });

      return Promise.reject(new Error(res.message || "Error"));
    } else {
      return res;
    }
  },
  error => {
    console.log(error);
    ElMessage({
      message: error.message,
      type: "error",
      duration: 5 * 1000,
    });
    return Promise.reject(error);
  }
);

export default service;
