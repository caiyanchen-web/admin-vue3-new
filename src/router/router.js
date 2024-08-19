import {createRouter,createWebHistory} from 'vue-router'


//进度条依赖
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
/*
* 路由表
* */
//引入本地存储，鉴权
import storage from "@/utils/storage.js";
const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/login',
            name: 'login',
            component: () => import('@/views/login.vue')
        },
        {
            path: '/home',
            name: 'home',
            component: () => import('@/views/home.vue'),
            redirect:'/welcome',
            children:[
                {
                    path: '/welcome',
                    component: () => import('@/views/welcome.vue'),
                    meta:{tTitle :'首页'}
                },
                {
                    path: '/system/sysAdmin',
                    component: () => import('@/views/system/sysAdmin.vue'),
                    meta:{sTitle :'系统管理',tTitle: '用户信息'}
                },
                {
                    path: '/system/sysRole',
                    component: () => import('@/views/system/sysRole.vue'),
                    meta:{sTitle :'系统管理',tTitle: '角色信息'}
                },
                {
                    path: '/system/sysMenu',
                    component: () => import('@/views/system/sysMenu.vue'),
                    meta:{sTitle :'系统管理',tTitle: '菜单信息'}
                },
                {
                    path: '/system/sysConfig',
                    component: () => import('@/views/system/sysConfig.vue'),
                    meta:{sTitle :'系统管理',tTitle: '参数信息'}
                },
                {
                    path: '/system/personal',
                    component: () => import('@/views/system/personal.vue'),
                    meta:{sTitle :'个人中心',tTitle: '个人信息'}

                },
                {
                    path: '/article/article',
                    component: () => import('@/views/article/article.vue'),
                    meta:{sTitle :'文章管理',tTitle: '文章信息'}
                },
                {
                    path: '/article/articleComment',
                    component: () => import('@/views/article/articleComment.vue'),
                    meta:{sTitle :'文章管理',tTitle: '文章评论'}
                },
                {
                    path: '/article/carousel',
                    component: () => import('@/views/article/carousel.vue'),
                    meta:{sTitle :'文章管理',tTitle: '轮播图'}
                },
                {
                    path: '/article/category',
                    component: () => import('@/views/article/category.vue'),
                    meta:{sTitle :'文章管理',tTitle: '文章分类'}
                },
                {
                    path: '/article/tag',
                    component: () => import('@/views/article/tag.vue'),
                    meta:{sTitle :'文章管理',tTitle: '文章标签'}
                },
                {
                    path: '/member/user',
                    component: () => import('@/views/member/user.vue'),
                    meta:{sTitle :'前台用户',tTitle: '用户信息'}
                },

            ]
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
        //如果token存在，开启进度条
        NProgress.start()
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

//后置守卫
router.afterEach((to,from,next)=>{
    //进入后关闭进度条
    NProgress.done()
})


export default router


