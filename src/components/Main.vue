<template>
  <el-container>
    <el-header>
      <Header></Header>
    </el-header>
    <el-main>
      <router-view></router-view>
    </el-main>
    <el-footer>
      <img src='../assets/beian.png'/>浙公网安备 33032402002173号
      <p>浙ICP备2021005058号</p>
      <p>@抹上一抹凉</p>
    </el-footer>
  </el-container>
</template>

<script lang="ts">
import { getUserInfoApi } from '../api/api'
import { Options, Vue } from 'vue-class-component'
import qs from 'qs'
import Header from './Header.vue'

@Options({
  components: {
    Header
  }
})
export default class Main extends Vue {
  private loading = false;
  private isMobile = true;
  created() {
    this.getInfo()
    this.isMobile = sessionStorage.getItem('isMobile') === 'true'
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
      .then(result => {
        localStorage.setItem('userInfo', qs.stringify(result))
      })
      .finally(() => {
        this.loading = false
      })
  }
}
</script>
<style lang="scss" scoped>
.el-container {
  overflow: auto;
  height: 100vh;
  .el-header {
    top: 0;
  }
  .el-footer {
    bottom: 0;
    p {
      font-size: 10px;
      color: rgb(190, 175, 175);
    }
  }
}
</style>
