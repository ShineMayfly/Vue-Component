import request from '@/util/request'

// eslint-disable-next-line space-before-function-paren
export function login(data) {
  return request({
    url: '/account/login',
    method: 'post',
    data
  })
}
