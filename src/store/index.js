/*
* 获取的方法
* */

import {createStore} from 'vuex'
import mutations from "@/store/mutations.js";
import storage from "@/utils/storage.js";

const state = {
  token:storage.getStorage('token')
}

export default createStore({
    state,
    mutations
})