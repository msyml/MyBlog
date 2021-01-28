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

export default {
  name: "Main",
  props: {
    msg: String,
  },
  components: {},
  data() {
    return {};
  },
  mounted() {
    this.getInfo()
  },
  methods: {
    getInfo(){
      let para = {
        name:"chenhai"
      }
      getUserInfo(para).then((result) => {
        
      }).catch((err) => {
        
      });;
    }
  }
};
</script>
<style scoped></style>
