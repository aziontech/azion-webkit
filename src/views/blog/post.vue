<template>
  <main>
    <PostHero class="lg:py-20"
    :date="hero.date"
    :title="hero.title"
    :tagList="hero.tagList"
    :authors="hero.authors"
    />
    <div class="container mx-auto px-1 lg:px-16">
      <div class="lg:flex">
        <ReadableContent class="lg:w-2/3" />
        <div class="lg:w-1/3 lg:pl-20">
          <PostVerticalList :data="featuredPostList" />
          <NewsletterCard class="hidden lg:inline-block"
            :title="newsletterSingleLine.title"
            :buttonText="newsletterSingleLine.buttonText"
            :placeholderInput="newsletterSingleLine.placeholderInput"
            :onSubmit="newsletterSingleLine.onSubmit"
          />
          <CategoriesList title="CATEGORIES" :categories="categories.categories"/>
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
import PostHero from "../templates/article/hero/index.vue"
import ReadableContent from "../templates/article/readable-content/index.vue"
import NewsletterCard from "../templates/newsletter/card/small.vue"
import PostVerticalList from "../templates/article/title-grid-list/vertical.vue"
import CategoriesList from "../templates/categories/index.vue"
import Footer from '../templates/footer/index.vue';

////////////////////////
// MOCKING PARAMETERS /
///////////////////////

import footerData from '../mock/footer.js';
import categories from '../mock/categories.js';
import featuredPostList from "../mock/verticalListData"
import newsletterSingleLine from "../mock/newsletterSingleLine"
import hero from "../mock/articleHero"
</script>
