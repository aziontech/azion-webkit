<template>
  <!--
    <HeroBlock
      overline="Overline"
      title="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariata"
      description="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo con"
      :centered="true"
  >
    <template #content>
      <img src="./assets/images/mocks/_slot.png" />
    </template>
    <template #main>
      <img src="./assets/images/mocks/_slot.png" class="h-full w-full"/>
    </template>
    <template #buttons>
      <LinkButton label="Button" link="./" />
      <LinkButton label="Button" link="./" outlined />
    </template>
  </HeroBlock>
  -->

  <BlogHome />
</template>

<script setup>
  import BlogHome from './views/blog/home.vue'
  // import BlogPost from './views/blog/post.vue';
  // import HeroBlock from "./templates/hero-block-base/index.vue"
  // import LinkButton from "./templates/button/link.vue"
</script>

<style lang="scss">
  hr {
    margin: 2rem 0;
    border: none;
    height: 0;
    background-color: transparent;
  }
</style>
