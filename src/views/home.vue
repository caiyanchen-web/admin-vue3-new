<template>
  <el-container class="home_container">
    <!--侧边栏-->
    <el-aside>
      <div class="logo">
        <img  alt="logo" src="@/assets/image/logo.png" class="aside-logo">
        <h4>博客运营后台</h4>
      </div>
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