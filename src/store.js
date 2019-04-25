import Vue from 'vue'
import Vuex from 'vuex'
import { getmenus } from '@/api/api.js'

import router from '@/router'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        //  存储每个用户登录成功之后的权限菜单
        menus: JSON.parse(localStorage.getItem('menus')) || []
    },
    mutations: {
        set_menus(state, menus) {
            state.menus = menus
            // 数据保持成功后再跳转页面
            router.push('/home')
        }
    },
    // 定义一步操作数据的方法，不直接修改数据，在一步操作拿到数据后触发mutations修改数据
    actions: {
        // context就是store实例,arg是调用该方法时传入的真实数据
        get_menus(context,arg) {
            getmenus().then(res => {
                localStorage.setItem('menus', JSON.stringify(res))
                context.commit('set_menus', res)
            })
        }
    }
})


export default store