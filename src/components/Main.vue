<template>
  <joke></joke>
</template>

<script lang="ts">
import joke from './open/joke.vue'
export default {
  name: "Main",
  props: {
    msg: String,
  },
  components: {
    joke
  },
  data() {
    return {
      count: 0,
    };
  },
};
</script>
