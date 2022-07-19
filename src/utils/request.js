// 导入axios
import axios from 'axios'

// 创建axios实例对象
const service = axios.create({
  baseURL: process.env.VUE_APP_API,
  timeout: 5000
})

// 请求拦截器
service.interceptors.request.use((config) => {
  return config
}, (error) => {
  return Promise.reject(error)
})

// 响应拦截器
service.interceptors.response.use((response) => {
  return response
}, (error) => {
  return Promise.reject(error)
})

// 统一传参处理
const request = (options) => {
  return service(options)
}

// 导出axios实例对象
export default request
