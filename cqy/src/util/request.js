import axios from 'axios'
import {
  Message
} from 'element-ui'
import store from '@/store'

const url = '/api' // 代理地址
// const url = 'http://118.24.180.243:8103/api/' // 服务器地址

// 创建一个axios实例
const service = axios.create({
  baseURL: url // api url = base url + request url
})

// 请求拦截器 request interceptor
service.interceptors.request.use(
  config => {
    //    设置token
    //   'Token':'8D228257D5D743B7A12709A6C5CC371D',
    //    设置openID
    //   'OpenID':'E63A8BC9665E4EF097F916109CF0DA53',
    //    设置语言
    //   'Culture':'zh-cn'
    // if(store)
    // config.headers['Access-Control-Allow-Origin'] = '*'
    // config.headers['Token'] = '8D228257D5D743B7A12709A6C5CC371D'
    // config.headers['OpenID'] = 'E63A8BC9665E4EF097F916109CF0DA53'
    // config.headers['Culture'] = 'zh-cn'
    // console.log(store)
    return config
  },
  error => {
    console.log(error)
    return Promise.reject(error)
  }
)

// 响应拦截器 response intercepter
service.interceptors.response.use(
  response => {
    const res = response.data
    console.log(store)
    if (res.Status !== '0') {
      Message({
        message: res.Message || 'Error',
        type: 'error',
        duration: 2 * 1000
      })
      return Promise.reject(new Error(res.message || 'Error'))
    } else {
      return res
    }
  },
  error => {
    console.log('err' + error)
    Message({
      message: error.Message,
      type: 'error',
      duration: 2 * 1000
    })
    return Promise.reject(error)
  }
)

export default service
