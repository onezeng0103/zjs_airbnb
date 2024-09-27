import axios from 'axios'
axios.defaults.headers['Content-Type'] = 'application/json;charset=utf-8'
// 创建axios实例
const service = axios.create({
  // axios中请求配置有baseURL选项，表示请求URL公共部分
  baseURL: 'http://codercba.com:1888/airbnb/api',
  // 超时
  timeout: 1000000
})
service.interceptors.request.use(config => {
  // 发送请求前做些什么
  console.log('Request Interceptor:', config)
  return config
})
service.interceptors.response.use(response => {
  // 对响应数据做点什么
  console.log('Response Interceptor:', response)
  if (response.status === 200) {
    return response.data
  } else if (response.status === 401) {
    console.log('401')
  } else {
    console.log('Error')
  }

})
export default service
