<template>
  <el-container class="home_container">
    <!--侧边栏-->
    <el-aside :width="isCollapse ? '64px' : '200px'" >
      <div class="logo">
        <img  alt="logo" src="@/assets/image/logo.png" class="aside-logo">
        <h4 v-show="!isCollapse">博客运营后台</h4>
      </div>
      <el-menu  unique-opened :default-active="defaultActive"  text-color="#c1c1c1" router :collapse="isCollapse" :collapse-transition="false">
        <el-menu-item :index="'/welcome'" @click="saveNavState('/welcome')">
          <el-icon>
            <component is="HomeFilled">
            </component>
          </el-icon>
          <template #title>
            <span>首页</span>
          </template>
        </el-menu-item>
        <el-sub-menu :index="item.menu_id +''" v-for="item in leftMenuList" :key="item.menu_id+''">
          <template #title>
            <el-icon>
              <component :is="item.icon"></component>
            </el-icon>
            <span>{{item.menu_name}}</span>
          </template>
          <el-menu-item :index="subitem.url +''" v-for="subitem in item.children" :key="subitem.menu_id" @click="saveNavState(subitem.url)">
            <template #title>
              <el-icon>
                <component :is="subitem.icon"></component>
              </el-icon>
              <span>{{subitem.menu_name}}</span>
            </template>
          </el-menu-item>
        </el-sub-menu>

      </el-menu>
    </el-aside>
    <el-container>
      <!--头部-->
      <el-header>
        <!--展开与折叠-->
        <div class="fold-btn">
          <el-icon @click="toggleCollapse">
            <component :is="collapseBtnClass"></component>
          </el-icon>
        </div>
        <!--面包屑-->
        <div class="bread-btn">
          <el-breadcrumb separator="/" v-if="router.currentRoute.value.path !=='/welcome'">
            <el-breadcrumb-item :to="{path:'/welcome'}">
              <span style="font-weight: bold">首页</span>
            </el-breadcrumb-item>
            <el-breadcrumb-item>{{route.meta.sTitle}}</el-breadcrumb-item>
            <el-breadcrumb-item>{{route.meta.tTitle}}</el-breadcrumb-item>
          </el-breadcrumb>
          <el-breadcrumb separator="/" v-else>
            <el-breadcrumb-item :to="{path:'/welcome'}">
              <span style="font-weight: bold">首页</span>
            </el-breadcrumb-item>
          </el-breadcrumb>
        </div>
      </el-header>
      <!--主题页面-->
      <el-main>
        <router-view>
        </router-view>
      </el-main>
    </el-container>
  </el-container>
</template>
<script setup>
import {ref, getCurrentInstance} from 'vue'
import { useRouter,useRoute}  from "vue-router";
import {useStore} from "vuex";
import storage from "@/utils/storage.js";
const {proxy} = getCurrentInstance()
//获取菜单数据
const leftMenuList = storage.getItem("leftMenuList")
//console.log(leftMenuList)

//保持路由激活
const store = useStore()
const route = useRoute()
const router = useRouter()
const defaultActive = ref(router.currentRoute.value.path)

const saveNavState = (activePath) => {
  //console.log(defaultActivePath.value)
  //console.log(activePath)

  store.commit("saveActivePath",activePath)
  //defaultActive.value = storage.getItem("activePath")
  console.log(activePath)
}

//侧边栏展开与折叠
const isCollapse = ref(false)
const collapseBtnClass =ref('Expand')
const toggleCollapse = ()=>{
  isCollapse.value = !isCollapse.value
  if(isCollapse.value){
    collapseBtnClass.value = 'Fold'
  }else{
    collapseBtnClass.value = 'Expand'
  }
}

</script>

<style lang="css">

  .home_container{
    height: 100%;
    .el-aside{
      background-color: #304156;
      .logo{
        margin-top: 5px;
        display: flex;
        align-items: center;
        font-size: 15px;
        height: 50px;
        color: #fff;
        .aside-logo{
          width: 32px;
          height: 32px;
          margin:0 16px;
          border-radius: 5px;
        }
      }
      .el-menu{
        border-right: none;
        background-color:#304156;
      }
    }
    .el-header{
      background-color: #f9fafc;
      height: 80px;
      align-items: center;
      justify-content: space-between;
      display: flex;
      .fold-btn{
        padding-top: 6px;
        font-size: 23px;
        cursor: pointer;
      }
      .bread-btn{
        position: fixed;
        margin-left: 40px;
      }
    }
    .el-main{
      background-color: #eaedf1;
    }
  }

</style>