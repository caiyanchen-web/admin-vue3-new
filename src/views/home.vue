<template>
  <el-container class="home_container">
    <!--侧边栏-->
    <el-aside>
      <div class="logo">
        <img  alt="logo" src="@/assets/image/logo.png" class="aside-logo">
        <h4>博客运营后台</h4>
      </div>
      <el-menu unique-opened>
        <el-menu-item :index="'/welcome'">
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
          <el-menu-item :index="subitem.menu_id +''" v-for="subitem in item.children" :key="subitem.menu_id+''">
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
        header
      </el-header>
      <!--主题页面-->
      <el-main>
        main
      </el-main>
    </el-container>
  </el-container>
</template>
<script setup>
import { getCurrentInstance } from 'vue'
const {proxy} = getCurrentInstance()
//获取菜单数据
const leftMenuList = proxy.$store.state.leftMenuList
console.log(leftMenuList)
</script>

<style lang="css">
  .home_container{
    height: 100%;
    .el-aside{
      background-color: #304156;
      width: 200px;
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

    }
    .el-header{
      background-color: #f9fafc;
      height: 200px;
    }
    .el-main{
      background-color: #eaedf1;
    }
  }

</style>