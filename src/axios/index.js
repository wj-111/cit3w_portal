import axios from 'axios'

const instance = axios.create({
    // baseURL: '/api/v1', // 开发模式下
    // baseURL: 'http://106.15.42.201:8900/', // 线上模式(yc)
    baseURL: 'https://api.aerowang.cn/xanadu/', // 线上模式(guanfang)
    // baseURL: 'http://localhost:3000/api/v1',
    // 请求超时时间
    timeout: 10000
})

export default instance
