<template>
  <div class="login-container">
    <el-form class="login-form" :rules="rules" :model="loginForm" ref="loginFormRef">
      <!--标题-->
      <div class="title-container">博客运营后台</div>
      <!--用户名-->
      <el-form-item prop="username">
        <el-input placeholder="请输入用户名" v-model="loginForm.username" type="text" prefix-icon="User"></el-input>
      </el-form-item>
      <!--密码-->
      <el-form-item prop="password">
        <el-input placeholder="请输入密码" v-model="loginForm.password" :type="flagType">
          <template #prefix>
            <el-icon v-if="flag === true">
              <lock/>
            </el-icon>
            <el-icon v-if="flag === false">
              <Unlock/>
            </el-icon>
          </template>
          <template #suffix>
            <span @click="changeView">
              <el-icon v-if="flag === true" style="cursor: pointer">
                <Hide/>
              </el-icon>
               <el-icon v-else-if="flag === false" style="cursor: pointer">
                <View/>
              </el-icon>
            </span>
          </template>
        </el-input>
      </el-form-item>
      <!--登录按钮-->
      <el-button type="primary" style="width: 100%;margin-bottom: 30px" @click="handleLogin">登录</el-button>
    </el-form>
  </div>
</template>

<script setup>
import {ref ,getCurrentInstance} from 'vue'
import {useStore} from "vuex";
//引入路由
import {useRouter} from "vue-router";
//定义路由
const router = useRouter()
const username = ref('')
const password = ref('')
const {proxy} = getCurrentInstance()
//验证规则，用户名密码不能为空
const rules = {
  username:[{required:true,message:'用户名不能为空',trigger:'blur'}],
  password:[{required:true,message:'密码不能为空',trigger:'blur'}]
}
//表单校验验证
const loginForm =ref({
  username:username,
  password:password
})

//小眼睛切换
const flagType = ref('password')
const flag = ref(true)
const changeView = () =>{
  flag.value = !flag.value
  flagType.value = flag.value ? 'password' : 'text'
}
//处理登录
const loginFormRef = ref()
const store = useStore()
const handleLogin = ()=>{
  loginFormRef.value.validate(valid =>{
    if(!valid) return
    proxy.$api.login(loginForm.value).then(res =>{
      //console.log(res.data.token)
      //proxy.$message.success("xxxx")
      if(res.code !== 200){
        proxy.$message.error(message)
      }else{
        store.commit('saveToken',res.data.token)
        store.commit("saveSysAdmin",res.data.sysAdmin)
        //console.log(store.watch('token'))
        router.push('/home')
      }
}).catch(err =>{
  console.log(err)
    })
  })
}
</script>
<style lang="css" scoped>
.login-container{
  height: 100%;
  background-image: url("@/assets/43dd1ef57c9cb8b80480f638326621c0.jpeg");
  background-size: 100%;
}
.login-form{
  padding: 20px;
  border: 2px solid #816666;
  margin-right: 100px;
  width: 300px;
  position: absolute;
  right: 0;
  top: 25%;
  border-radius: 10px;
}
.login-form el-form-item{
  margin-bottom: 30px;

}
.title-container{
  font-size: 28px;
  text-align: center;
  margin-bottom: 30px;
  font-weight: bold;
  color: #447ae5;
}

</style>