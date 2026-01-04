import request from './axios'

// 请求方式的封装

const http = {
    // get请求
    get(url, params) {
        return request.get(url, {params})
    },
    // post请求
    post(url, data) {
        return request.post(url, data)
    },
    // put请求
    put(url, data) {
        return request.put(url, data)
    },
    // delete请求
    delete(url, params) {
        return request.delete(url, {params})
    },
    // 上传文件请求
    upload(url, data) {
        return request.post(url, data, {
            headers: {'Content-Type': 'multipart/form-data'}
        })
    },
    // 其他请求方式
    request(config) {
        return request.request(config)
    },

}


export default http;