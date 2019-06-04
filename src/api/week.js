import request from './../utils/request';

export function getWeekList(skuId) {
  return request({
    url: '/weekend',
    method: 'get',
    params: {
      skuId
    }
  });
}