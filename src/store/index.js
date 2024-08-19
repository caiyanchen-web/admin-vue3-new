/*
* 获取的方法
* */

import {createStore} from 'vuex'
import mutations from "@/store/mutations.js";
import storage from "@/utils/storage.js";

const state = {
    token:"" || storage.getStorage('token'),
    sysAdmin:"" ||storage.getItem('sysAdmin'),
    leftMenuList:"" ||storage.getItem('leftMenuLIst'),
    permissionList:"" ||storage.getItem('permissionList'),
    saveActivePath:"" || storage.getItem('saveActivePath'),
}

export default createStore({
    state,
    mutations
})