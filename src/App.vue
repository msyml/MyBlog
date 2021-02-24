<template>
  <router-view />
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
@Options({})
export default class Login extends Vue {
  mounted() {
    // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
    // @ts-ignore
    sessionStorage.setItem('isMobile', !!this.isMobile())
  }

  isMobile() {
    // eslint-disable-next-line require-unicode-regexp
    const flag = navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)
    return flag
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  max-height: 100vh;
}
</style>
