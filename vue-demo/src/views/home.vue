<template>
  <div>
    <el-row>
        <el-col :span="6">
            <div>
               欢迎来到首页
            </div>
        </el-col>
        <el-col :span="6">
            <div>
              <router-link :to="{name: 'Login', params: {id: 5}, query: {id: 9}}">返回登录页</router-link>
            </div>
        </el-col>
        <el-col :span="6">
            <div></div>
        </el-col>
        <el-col :span="6">
            <div>
                <el-button ref="btn" @click="handleClick">测试</el-button>
            </div>
        </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
      return {
        project: this.$route.query.project
      }
  },
  methods: {
    handleClick () {
      console.log(this.$route)
    }  
  },
  mounted () {
    let btn = this.$refs.btn.$el
    btn.onclick = function () {
      console.log("点击事件")
    }
  }
}
</script>
<style>
</style>
