<template>
  <main>
    <FeaturedPost />
    <hr>

    <div class="container mx-auto">
      <TitleFlexList />
    </div>
    <hr>

    <NewsletterSingleLine />
    <hr>

    <div class="container mx-auto">
      <ButtonBlockList />
    </div>
    <PostCardGridList />
   
    <hr>

    <NewsletterWide /> 
  </main>

  <Footer lang="en" :listData="footerData" />
</template>

<script setup>
  //////////////////////////
  // IMPORTING COMPONENTS //
  //////////////////////////
  
  import ButtonBlockList from './templates/button-block-list/index.vue';
  import FeaturedPost from './templates/article/featured-post/index.vue';
  import Footer from './templates/footer/index.vue';
  import PostCardGridList from './templates/article/card-grid-list/index.vue';
  import NewsletterSingleLine from './templates/newsletter/single-line/index.vue';
  import NewsletterWide from './templates/newsletter/wide/index.vue';
  import TitleFlexList from './templates/article/title-grid-list/index.vue';

  ////////////////////////
  // MOCKING PARAMETERS /
  ///////////////////////

  import footerData from './mock/footer.js';
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
