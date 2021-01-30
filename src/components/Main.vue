<template>
  <el-container v-loading="loading">
    <el-header width="auto"><Header></Header></el-header>
    <el-container class="main_body">
      <Menu></Menu>
      <el-container>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </el-container>
</template>

<script lang="ts">
import { getUserInfoApi } from '../api/api'
import { Options, Vue } from 'vue-class-component'
import Header from './Header.vue'
import Menu from './Menu.vue'
import qs from 'qs'

@Options({
  components: {
    Header,
    Menu
  }
})
export default class Main extends Vue {
  private loading = false
  created() {
    this.getInfo()
  }
  async getInfo() {
    if (this.loading) {
      return
    }
    this.loading = true
    const para = {
      name: 'chenhai'
    }
    await getUserInfoApi(para)
      .then((result) => {
        localStorage.setItem('userInfo', qs.stringify(result))
      })
      .finally(() => {
        this.loading = false
      })
  }
}
</script>
<style scoped>
.app {
  height: 100vh;
}
.header {
  border-bottom: 1px solid #eaeaea;
}
</style>
