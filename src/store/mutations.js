/*
* store 和 本地存储
* */

import storage from '@/utils/storage'
export default {
    //存token
    saveToken(state,token ){
        state.token = token
        storage.setItem('token',token)
    },

}