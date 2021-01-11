<template>
  <el-container>
    <el-header>{{ count }}</el-header>
    <el-main>Main</el-main>
  </el-container>
</template>

<script lang="ts">
import {getJoke} from '../api/api'
export default {
  name: "Main",
  props: {
    msg: String,
  },
  data() {
    return {
      count: 0,
    };
  },
  mounted() {
    this.getList();
  },
  methods: {
    getList() {
      const para = {
        type: 'all',
        count: 10,
      }
      getJoke(para).then((res) => {
        console.log("result:",res)
        this.count = res;
      }).catch((err) => {

      });
    },
  },
};
</script>
