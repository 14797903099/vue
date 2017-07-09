<template>
  <div>
    <el-row>
      <el-col>
        <div>欢迎来到登录页</div>
      </el-col>
    </el-row>
    <el-row>
      <el-col>
        <div>
          <el-input v-model="userName" placeholder="请输入账号"></el-input>
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-col>
        <div>
          <el-input type="password" v-model="passWord" placeholder="请输入密码"></el-input>
        </div>
      </el-col>
    </el-row>
     <el-row>
      <el-col>
        <div>
          <el-button @click="login">登录</el-button>
          <el-button @click="handleCilck">测试</el-button>
          <el-button @click="handleBack">返回vue 历史上一页</el-button>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  data () {
    return {
      userName:'',
      passWord:'',
      project: 1
    }
  },
  methods: {
    login () {
      if (this.userName === '123' && this.passWord === '123') {
        this.$router.push(`/home?project=${this.project}`)
      } else {
         this.$router.push({name: 'Login',query: {name: '张三'}, params: {name: '李四'}, meta: {name: '测试'}}) 
         alert('登录失败！！！')
      }
    },
    handleCilck () {
      console.log(this.$route)
    },
    handleBack () {
      // this.$router.go(-1)
      window.history.go(-1)
    }
  }
}
</script>
<style>

</style>
