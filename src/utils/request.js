import axios from 'axios';

const service = axios.create({
  baseURL: 'http://zjyegt.cn:8888',
  // withCredentials: true,
  timeout: 10000
});

// 请求拦截器
// service.interceptors.request.usr(
//   config => {
//     return config;
//   },
//   error => {
//     return Promise.reject(error);
//   }
// );

// 响应拦截器
service.interceptors.response.use(
  response => {
    const res = response.data;

    if (res.code === 200) {
      return res;
    } else {
      return {
        msg: '数据获取失败',
        code: 404
      }
    }
  },
  error => {
    return Promise.reject(error);
  }
);

export default service;
