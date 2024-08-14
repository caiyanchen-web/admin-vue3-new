import {createRouter,createWebHistory} from 'vue-router'

/*
* 路由表
* */
//引入本地存储，鉴权
import storage from "@/utils/storage.js";
const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/home',
            name: 'home',
            component: () => import('@/views/home.vue'),
            redirect:'/welcome',
            children:[
                {
                    path: '/welcome',
                    component: () => import('@/views/welcome.vue'),
                }
            ]
        },
        {
            path: '/login',
            name: 'login',
            component: () => import('@/views/login.vue')
        },
    ]
})
/*
* 1,未登录只能进入后台登录页面
* 2,登陆后不能进入登录页面，只能进入到主页
* 导航守卫
* **/
const whiteList = ['/login']
//前置导航
router.beforeEach((to,from,next)=>{
    let token = storage.getItem('token')
    if (token) {
        if (to.path === '/login') {
            next('/home')
        }else {
            next()
        }
    }else{
        if (whiteList.indexOf(to.path) > -1){
            next()
        }else {
            next('/login')
        }

    }
})




export default router