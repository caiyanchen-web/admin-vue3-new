/*
* api接口封装
* */
import request from '@/utils/request.js'
export default {
    login(params){
        return request({
            url:'/sysAdmin/login',
            method:'post',
            data:params
        })
    }
}