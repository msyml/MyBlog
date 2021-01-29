<template>
  <div class="login_body">
    <el-card shadow="always" class="login_card">
      <h3>系统登录</h3>
      <el-form>
        <el-form-item>
          <el-input
            prefix-icon="el-icon-user"
            placeholder="在此输入帐号"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-input
            prefix-icon="el-icon-lock"
            placeholder="在此输入密码"
            type="password"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button>注册</el-button>
          <el-button type="primary">登录</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>
<script lang="ts">
import { Options, Vue } from 'vue-class-component'
// import { LoginForm } from "interface";

@Options({})
export default class Login extends Vue {
  private loginForm: object = {
    username: '',
    password: ''
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
.login_card {
  width: 48vh;
}

.el-button {
  width: 48%;
}
</style>
