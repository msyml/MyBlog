<template>
  <span style="float:left">
    Msyml
  </span>
  <div class="header_right">
    当前用户：{{ userInfo.username }} |
    <el-button type="text" @click="exit" v-loading="loading">退出登录</el-button>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import { logoutApi } from '../api/api'
import qs from 'qs'

@Options({})
export default class Header extends Vue {
  private loading = false
  private userInfo = {}

  mounted() {
    this.userInfo = qs.parse(localStorage.getItem('userInfo') as string)
  }

  async exit() {
    if (this.loading) {
      return
    }
    this.loading = true
    await logoutApi()
      .then(() => {
        localStorage.removeItem('token')
        this.$router.push('/login')
      })
      .finally(() => {
        this.loading = false
      })
  }
}
</script>
<style scoped>
@import 'https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap';

.header_right {
  float: right;
  margin-top: 10px;
}

span,
span::after {
  width: 80px;
  height: 60px;
  font-size: 32px;
  font-family: 'Bebas Neue', cursive;
  border: 0;
  color: #000;
  letter-spacing: 3px;
  line-height: 48px;
  outline: transparent;
  position: relative;
}

span::after {
  --slice-0: inset(50% 50% 50% 50%);
  --slice-1: inset(80% -6px 0 0);
  --slice-2: inset(50% -6px 30% 0);
  --slice-3: inset(10% -6px 85% 0);
  --slice-4: inset(40% -6px 43% 0);
  --slice-5: inset(80% -6px 5% 0);

  content: 'Msyml';
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(45deg, transparent 3%, #00e6f6 3%, #00e6f6 5%, #ff013c 5%);
  text-shadow: -3px -3px 0px #f8f005, 3px 3px 0px #00e6f6;
  clip-path: var(--slice-0);
}

span:hover::after {
  animation: 1s glitch;
  animation-timing-function: steps(2, end);
}

@keyframes glitch {
  0% {
    clip-path: var(--slice-1);
    transform: translate(-20px, -10px);
  }
  10% {
    clip-path: var(--slice-3);
    transform: translate(10px, 10px);
  }
  20% {
    clip-path: var(--slice-1);
    transform: translate(-10px, 10px);
  }
  30% {
    clip-path: var(--slice-3);
    transform: translate(0px, 5px);
  }
  40% {
    clip-path: var(--slice-2);
    transform: translate(-5px, 0px);
  }
  50% {
    clip-path: var(--slice-3);
    transform: translate(5px, 0px);
  }
  60% {
    clip-path: var(--slice-4);
    transform: translate(5px, 10px);
  }
  70% {
    clip-path: var(--slice-2);
    transform: translate(-10px, 10px);
  }
  80% {
    clip-path: var(--slice-5);
    transform: translate(20px, -10px);
  }
  90% {
    clip-path: var(--slice-1);
    transform: translate(-10px, 0px);
  }
  100% {
    clip-path: var(--slice-1);
    transform: translate(0);
  }
}
</style>
