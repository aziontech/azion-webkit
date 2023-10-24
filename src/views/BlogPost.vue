<template>
  <main>
    <div class="container mx-auto px-1">
      <PostHero class="lg:py-20" />
      <div class="lg:flex">
        <ReadableContent class="lg:w-2/3" />
        <div class="lg:w-1/3 lg:pl-20">
          <PostVerticalList />
          <NewsletterCard />
          <CategoriesList />
        </div>
      </div>
      <Newsletter />
    </div>
  </main>
  <Footer lang="en" :listData="footerData" />
</template>

<script setup>
//////////////////////////
// IMPORTING COMPONENTS //
//////////////////////////
import PostHero from "../templates/hero/post/index.vue"
import ReadableContent from "../templates/article/readable-content/index.vue"
import Newsletter from "../templates/newsletter/wide/index.vue"
import NewsletterCard from "../templates/newsletter/card/small.vue"
import PostVerticalList from "../templates/article/title-grid-list/vertical.vue"
import CategoriesList from "../templates/categories/index.vue"
import Footer from '../templates/footer/index.vue';

////////////////////////
// MOCKING PARAMETERS /
///////////////////////

import footerData from '../mock/footer.js';
</script>
