<template>
  <el-container>
    <el-header>Header</el-header>
    <el-main>Main</el-main>
    <el-footer>
      <p>浙ICP备2021005058号</p>
      <p>抹上一抹凉</p>
    </el-footer>
  </el-container>
</template>

<script lang="ts">
import { getUserInfoApi } from '../api/api'
import { Options, Vue } from 'vue-class-component'
import qs from 'qs'

@Options({
  components: {
  }
})
export default class Main extends Vue {
  private loading = false;
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
.el-container{
  .el-header {
    top: 0;
  }
  .el-footer {
    bottom: 0;
  }
}
</style>
