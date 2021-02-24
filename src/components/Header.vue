<template>
  <el-menu
    :default-active="1"
    class="el-menu-demo"
    mode="horizontal"
    @select="handleSelect"
  >
    <el-menu-item index="1">首页</el-menu-item>
    <el-menu-item index="2">关于我</el-menu-item>
  </el-menu>
</template>
<script lang="ts">
import { Options, Vue } from 'vue-class-component'

@Options({})
export default class Header extends Vue {
  handleSelect(key: number, keyPath: string[]) {
    console.log(key, keyPath)
  }
}
</script>
<style scoped lang="scss"></style>
