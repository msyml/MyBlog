<template>
  <div class="login_body">
    <el-card shadow="always" class="login_card">
      <h2>系统登录</h2>
      <el-form :model="loginForm">
        <el-form-item prop="username">
          <el-input prefix-icon="el-icon-user" placeholder="在此输入帐号" v-model="loginForm.username"></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input prefix-icon="el-icon-lock" placeholder="在此输入密码" type="password" v-model="loginForm.password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button>游客模式</el-button>
          <el-button type="primary" @click="Login" v-loading="loading">登录</el-button>
        </el-form-item>
      </el-form>
      浙ICP备2021005058号
    </el-card>
  </div>
</template>
<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import { LoginForm } from '../api/param'
import { loginApi } from '../api/api'

@Options({})
export default class Login extends Vue {
  private loading = false
  private loginForm: LoginForm = {
    username: '',
    password: ''
  }

  private async Login() {
    if (this.loading) {
      return
    }
    this.loading = true
    const para = {
      ...this.loginForm
    }
    await loginApi(para)
      .then((res) => {
        localStorage.setItem('token', res.token)
        this.$router.push('main')
      })
      .finally(() => {
        this.loading = false
      })
  }
}
</script>
<style scoped>
.login_body {
  display: flex;
  height: 100vh;
  overflow: hidden;
  justify-content: center;
  align-items: center;
}

.el-form {
  margin-top: 2vh;
}

.login_card {
  width: 48vh;
}

.el-button {
  width: 48%;
}
</style>
