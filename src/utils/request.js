/**
 * axios封装
 */
import axios from 'axios'
import {ElMessage} from "element-plus";
import router from "@/router/router.js";
//创建axios
const service = axios.create({
    baseURL: import.meta.env.VITE_APP_BASE_API,
    timeout: 5000 // request timeout
})
//请求拦截
service.interceptors.request.use((req)=>{
    const header= req.headers
    const token = "admin"
    if (!header.Authorization){
        header.Authorization = `Bearer + ${token}`
    }
    return req
})
//响应拦截
service.interceptors.request.use((res)=>{
    const {code,data,msg} = res.data
    if (code == 403){
        ElMessage.error(msg)
        //todo
        setTimeout(()=>{
            router.push('/login')
        },1500)
    }else if(code == 200){
        return res.data
    }else {
        ElMessage.error(msg)
    }
})
//核心函数
const request = (config) => {
    config.method = config.method ||'get'
    if (config.method.toLowerCase() === 'get'){
        config.params = config.data
    }
    service.defaults.baseURL=import.meta.env.VITE_APP_BASE_API
    return service(config)
}

export default request