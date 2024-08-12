/**
 * axios封装
 */
import axios from 'axios'

//创建axios
const service = axios.create({
    baseURL: import.meta.env.VITE_APP_BASE_API,
    timeout: 5000 // request timeout
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