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
import { getUserInfo } from '../api/api'
import { Options, Vue } from 'vue-class-component'

@Options({})
export default class extends Vue {
  mounted() {
    this.getInfo()
  }
  getInfo() {
    const para = {
      name: 'chenhai'
    }
    getUserInfo(para).then((result) => {
      // do
    })
  }
}
</script>
<style scoped></style>
