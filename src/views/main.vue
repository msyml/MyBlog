<template>
    <div class="header">
      header
    </div>
    <div class="body">
      <div class="aside">aside</div>
      <div class="main">main</div>
    </div>
</template>
<script lang="ts">
import Vue from "vue";
export default {};
</script>
<style scoped>
.header {
  width: 100%;
  height: 10%;
}
.body{
    width: 100%;
    height: 90%;
    display: flex;
}
.aside{
    width: 10%;
    height: 100%;
}
.main{
    width: 90%;
    height: 100%;
}
</style>
