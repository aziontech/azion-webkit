<template>
  <Home />

  <hr />
  <BlogPost />
</template>

<script setup>
import BlogPost from './views/BlogPost.vue';
import Home from './views/Home.vue'


</script>

<style lang="scss">
main {
  padding: 2rem 0;
}

hr {
  margin: 2rem 0;
  border: none;
  height: 0;
  background-color: transparent;
}
</style>
