import http from './http'

// 用户登陆
export const userLogin = data => http.post('/user/login', data)
