import request from './../utils/request';

export function getHomeInfo(city) {
  return request({
    url: '/travel',
    method: 'get',
    params: {
      city
    }
  })
}