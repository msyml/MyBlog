<template>
  <el-container>
    <el-header>Header</el-header>
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

@Options({})
export default class extends Vue {
  mounted() {
    this.getInfo()
  }
  async getInfo() {
    const para = {
      name: 'chenhai'
    }
    await getUserInfoApi(para).then((result) => {
      // do
    })
  }
}
</script>
<style scoped></style>
