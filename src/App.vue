<template>
  <BlogHome />

  <hr />

  <BlogPost /> 
</template>

<script setup>
  import BlogHome from './views/BlogHome.vue'
  import BlogPost from './views/BlogPost.vue';
</script>3

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
