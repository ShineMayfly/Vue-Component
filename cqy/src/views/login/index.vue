<template>
  <el-row>
    <el-col :span="6"
            :offset="9">
      <el-form label-position="left"
               label-width="100px">
        <el-form-item label="用户名">
          <el-input placeholder="请输入用户名"
                    v-model="userName"
                    clearable></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input placeholder="请输入密码"
                    v-model="password"
                    show-password></el-input>
        </el-form-item>
        <el-form-item>
          <el-button class="login-btn"
                     type="primary"
                     @click="login">登录</el-button>
        </el-form-item>
        <el-form-item>
          <el-checkbox v-model="remember">记住我</el-checkbox>
        </el-form-item>
      </el-form>
    </el-col>
  </el-row>
</template>

<script>
import { login } from '@/api/user'
export default {
  name: 'login',
  data () {
    return {
      userName: '',
      password: '',
      remember: ''
    }
  },
  methods: {
    login () {
      login({
        userName: this.userName,
        pwd: this.password,
        uuid: 'webdwadwa',
        entertype: '0'
      }).then(response => {
        this.$store.commit('setToken', response.Data.token)
        this.$router.push({ path: '/home' })
      })
    }
  }
}
</script>

<style scoped>
.el-row {
  margin-top: 200px;
}

.login-btn {
  margin-top: 50px;
  width: 100%;
}
</style>
