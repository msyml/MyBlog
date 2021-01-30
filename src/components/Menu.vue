<template>
  <el-menu class="menu" :collapse="isCollapse" default-active="1">
    <el-menu-item index="1">
      <i class="el-icon-document"></i>
      <template #title>随笔管理</template>
    </el-menu-item>
    <div style="position:absolute;bottom:0" @click="isCollapse = !isCollapse">
      <el-menu-item v-if="isCollapse">
        <i class="el-icon-d-arrow-right"></i>
        <template #title>展开菜单</template>
      </el-menu-item>
      <el-menu-item v-else>
        <i class="el-icon-d-arrow-left"></i>
        <template #title>收起菜单</template>
      </el-menu-item>
    </div>
  </el-menu>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'

@Options({})
export default class Menu extends Vue {
  private isCollapse = true
}
</script>

<style lang="scss" scoped>
.menu {
  height: calc(100vh - 60px);
}
</style>
