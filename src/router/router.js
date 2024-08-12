import {createRouter,createWebHistory} from 'vue-router'

/*
* 路由表
* */

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/login',
            name: 'login',
            component: () => import('@/views/login.vue')
        },

    ]
})

export default router