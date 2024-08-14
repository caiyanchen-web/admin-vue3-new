import { createApp } from 'vue'
import App from './App.vue'

//引入element-plus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
//图标
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
//引入router
import router from './router/router.js'
//引入全局样式
import '@/styles/index.css'
//打印当权环境和baseurl
console.log(import.meta.env.VITE_APP_ENV,"---",import.meta.env.VITE_APP_BASE_API)
//引入api
import  api from '@/api'
//storage 本地存储
import storage from '@/utils/storage.js'
//引入store
import store from '@/store'


//app实例
const app = createApp(App)
app.use(ElementPlus)   //使用element-plus
app.use(router)  //使用router
app.config.globalProperties.$api = api
app.config.globalProperties.$storage = storage
app.use(store)
//使用图标
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}
app.mount('#app')
