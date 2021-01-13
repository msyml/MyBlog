<template>
  <el-container>
    <el-aside width="200px"
      ><el-menu
        class="el-menu-vertical-demo"
        @open="handleOpen"
        style="height: 100vh"
        @close="handleClose"
        :collapse="isCollapse"
      >
        <el-submenu index="1">
          <template #title>
            <i class="el-icon-location"></i>
            <span>导航一</span>
          </template>
          <el-menu-item-group>
            <template #title>分组一</template>
            <el-menu-item index="1-1">选项1</el-menu-item>
            <el-menu-item index="1-2">选项2</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="分组2">
            <el-menu-item index="1-3">选项3</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-menu-item index="2">
          <i class="el-icon-menu"></i>
          <template #title>导航二</template>
        </el-menu-item>
        <div>
 <el-button
          class="bottom_btn"
          type="text"
          v-if="isCollapse"
          @click="isCollapse = !isCollapse"
          icon="el-icon-d-arrow-right"
        ></el-button> 
         <el-button
          class="bottom_btn"
          type="text"
          v-else
          @click="isCollapse = !isCollapse"
          icon="el-icon-d-arrow-left"
        ></el-button> 
        </div>
       </el-menu
    ></el-aside>
    <el-main>Main</el-main>
  </el-container>
</template>

<script lang="ts">
import joke from "./open/joke.vue";
export default {
  name: "Main",
  props: {
    msg: String,
  },
  components: {
    joke,
  },
  data() {
    return {
      isCollapse: false,
    };
  },
};
</script>
<style scoped>
.bottom_btn {
  position: fixed;
  bottom: 0;
}
</style>
