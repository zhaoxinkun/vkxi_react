import axios from 'axios'
import {getToken} from "@/utils/token.js";

// 基本地址
// axios.defaults.baseURL = import.meta.env.VITE_BASE_URL


const request = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL,
})

// 请求拦截器
request.interceptors.request.use(config => {
        config.headers['token'] = getToken()
        return config
    }
)

// 响应拦截器
request.interceptors.response.use(res => {
    return res
}, err => {
    return Promise.reject(err)
})


export default request;