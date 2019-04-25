import axios from 'axios'
// 设置请求根路径
axios.defaults.baseURL = 'http://www.lovegf.cn:8888/api/private/v1/'

// 请求拦截：在所有请求发送之前，将请求拦截下来，对请求参数进行处理，处理完后继续发送请求
// 请求拦截器，给所有的请求加上token
axios.interceptors.request.use(function (config) {
    // 设置到请求头中 Authorization这个名字是后台规定的
    config.headers.Authorization = localStorage.getItem('token')
    return config
  }, function (error) {
    return Promise.reject(error)
  })

// 登录请求
export const login = (params)=>{
    return axios.post('login',params)
}

// 获取用户列表
// export const getusers = (params)=>{
//     return axios.get(`users?query=${params.query}&pagenum=${params.pagenum}&pagesize=${params.pagesize}`,{
//         headers:{
//             "Authorization":localStorage.getItem('token')
//         }
//     })
// }

// export const getusers = (params)=>{
//     return axios.get(`users?query=${params.query}&pagenum=${params.pagenum}&pagesize=${params.pagesize}`)
// }
// get请求使用params属性传参
export const getusers = (params)=>{
    return axios.get('users',{ params })
}

// 获取用户的权限菜单
export const getmenus = ()=>{
    return axios.get('menus')
}