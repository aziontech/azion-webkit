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
  
  import ButtonBlockList from './templates/ButtonBlockList/index.vue';
  import FeaturedPost from './templates/Article/FeaturedPost/index.vue';
  import TitleFlexList from './templates/Article/TitleGridList/index.vue';
  import NewsletterWide from './templates/Newsletter/Wide/index.vue';
  import NewsletterSingleLine from './templates/Newsletter/SingleLine/index.vue';
  import PostCardGridList from './templates/Article/CardGridList/index.vue';
  import Footer from './templates/Footer/index.vue';


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
