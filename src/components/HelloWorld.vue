<template>
    <div class="header"></div>
    <div class="body">
      <div class="aside"></div>
      <div class="main"></div>
    </div>
    <div class="fotter"></div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header{
  height: 10%;
  background: black;
  width: 100%;
}
</style>
