<template>
  <el-menu
    :default-active="0"
    class="el-menu-demo"
    mode="horizontal"
    @select="handleSelect"
  >
    <el-menu-item
      v-for="(item, index) in menuList"
      :key="item.id"
      :index="index"
      >{{ item.title }}</el-menu-item
    >
  </el-menu>
</template>
<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import { getMenuList } from '../api/api'
import { MenuForm } from '../api/param'

@Options({})
export default class Header extends Vue {
  menuList: MenuForm[] = [];

  mounted() {
    this.getList()
  }

  handleSelect(key: number) {
    this.$router.push('/' + this.menuList[key].name)
  }

  async getList() {
    await getMenuList().then(res => {
      this.menuList = res
    }).finally(() => {
      this.handleSelect(0)
    })
  }
}
</script>
<style scoped lang="scss"></style>
