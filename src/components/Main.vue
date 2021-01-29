<template>
  <el-container>
    <el-header><Header></Header></el-header>
    <el-container>
      <el-aside>Aside</el-aside>
      <el-container>
        <el-main>Main</el-main>
      </el-container>
    </el-container>
  </el-container>
</template>

<script lang="ts">
import { getUserInfoApi } from '../api/api'
import { Options, Vue } from 'vue-class-component'
import Header from './Header.vue'
import qs from 'qs'

@Options({
  components: {
    Header
  }
})
export default class Main extends Vue {
  created() {
    this.getInfo()
  }
  async getInfo() {
    const para = {
      name: 'chenhai'
    }
    await getUserInfoApi(para).then((result) => {
      localStorage.setItem('userInfo', qs.stringify(result))
    })
  }
}
</script>
<style scoped></style>
