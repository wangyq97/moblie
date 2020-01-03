/**
 * 用户相关的请求
 */

import request from '../../utils/request'

/**
 * 用户登录
 */
export const login = (data) => {
  return request({
    url: '/app/v1_0/authorizations',
    method: 'POST',
    data
  })
}
