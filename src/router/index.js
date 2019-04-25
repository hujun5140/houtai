import Vue from 'vue'
import Router from 'vue-router'
import { getmenus } from '@/api/api.js'
import store from '@/store'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      component: () => import('@/views/Login.vue')
    },
    {
      path: '/home',
      component: () => import('@/views/Home.vue'),
      children: [
      //   {
      //   path: '/welcome',
      //   component: () => import('@/views/Welcome.vue')
      // },
      // {
      //   path: '/users',
      //   name: 'Users',
      //   component: () => import('@/components/users/user.vue')
      // },
      // {
      //   path: '/rights',
      //   name: 'rights',
      //   component: () => import('@/components/rights/rights.vue')
      // },{
      //   path: '/roles',
      //   name: 'roles',
      //   component: () => import('@/components/rights/roles.vue')
      // }
      ]
    }
  ]
})
console.log(router)
store.state.menus.forEach(v=>{
  v.children.forEach(item=>{
    let route = {}
    route.path = '/' + item.path
    route.component = ()=> import(`@/components/${v.path}/${item.path}.vue`)
    router.options.routes[2].children.push(route)
  })
})
router.addRoutes(router.options.routes)


// const menuroutes = [{
//   path: '/rights',
//   name: 'rights',
//   component: () => import('@/components/rights/rights.vue')
// },{
//   path: '/roles',
//   name: 'roles',
//   component: () => import('@/components/rights/roles.vue')
// }]

// 动态路由加载
// const menuroutes = []
// getmenus().then(res=>{
//   // console.log(res.data.data)
//   const menulist = res.data.data
//   menulist.forEach(v=>{
//     v.children.forEach(menu=>{
//       // console.log(menu)
//       const menu_router = {
//         path: '/' + menu.path,
//         component:() => import(`@/components/${v.path}/${menu.path}.vue`)
//       }
//       menuroutes.push(menu_router)
//     })
//   })
//   // console.log(menuroutes)
//   router.options.routes[1].children.push(...menuroutes)

//   router.addRoutes(router.options.routes)
  
//   // console.log(router)
// })



// 注册一个全局守卫，作用是在路由跳转前，对路由进行判断，防止未登录的用户跳转到其他需要登录的页面去
router.beforeEach((to, from, next) => {
  const token = localStorage.getItem('token')
  // 如果已经登录，放行
  if (token) {
    next()
  } else {
    // 如果没有登录，但访问的是登录页面,直接进入
    if (to.path === '/login') {
      next()
    } else {
      // 如果没有登录，访问非登录页面,则跳转到登录页面
      next('/login')
    }
  }
})

export default router