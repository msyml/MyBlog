<template>
  <el-menu class="menu" :collapse="isCollapse" default-active='1'>
    <el-menu-item index="1">
      <i class="el-icon-document"></i>
      <template #title>随笔管理</template>
    </el-menu-item>
    <el-menu-item style="bottom:0" @click="isCollapse = !isCollapse">
      <i class="el-icon-setting"></i>
      <template #title>展开/收起</template>
    </el-menu-item>
  </el-menu>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import { logoutApi } from '../api/api'
import qs from 'qs'

@Options({})
export default class Menu extends Vue {
  private isCollapse = true
}
</script>

<style lang="scss" scoped>
.menu {
  height: 100%;
}
</style>
