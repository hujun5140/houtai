import axios from 'axios'

axios.defaults.baseURL = 'http://mockjs.com/api/' // 设置默认请求的url

// 请求拦截器，给所有的请求加上token
axios.interceptors.request.use(function (config) {
  // 设置到请求头中 Authorization这个名字是后台规定的
  config.headers.Authorization = localStorage.getItem('token')
  return config
}, function (error) {
  return Promise.reject(error)
})

// 响应拦截器
axios.interceptors.response.use(function (response) {

  // 如果状态码不是200做统一提示
  if (response.data.meta.status !== 200) {
    // 使用模态框提示用户请求失败
    console.log('error')
  } else {
    return response.data.data;
  }
}, function (error) {
  // 对响应错误做点什么
  return Promise.reject(error);
});


// 登录请求
export const login = (params) => {
  return axios.post('login', params)
}
// 获取用户列表
export const getusers = (params) => {
  return axios.get('users', { params })
}
// 获取用户的权限菜单
export const getmenus = () => {
  return axios.get('menus')
}