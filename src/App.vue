<template>
  <BlogHome />

  <hr />

  <BlogPost />
</template>

<script setup>
  import BlogHome from './views/blog/home.vue'
  import BlogPost from './views/blog/post.vue';
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
