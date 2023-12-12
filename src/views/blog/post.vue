<template>
  <main>
    <div class="flex justify-center py-12 px-4 md:px-8">
      <div class="px-container">
        <div class="flex flex-col lg:flex-row gap-6 lg:gap-20 w-full">
          <div class="lg:w-2/3 flex flex-col gap-4 md:gap-10">
            <PostHero :date="hero.date" :title="hero.title" :tagList="hero.tagList" :authors="hero.authors" />
            <ReadableContent />
          </div>
          <div class="lg:w-1/3 gap-4 lg:gap-11 flex flex-col">
            <SocialBlockList sharedUrl="w" tooltipText="Copied to clipboard" title="Share this post" />
            <div class="flex flex-col gap-2">
              <h3 class="font-medium">Related Posts</h3>
              <TitleVerticalList :data="featuredPostList" buttonText="View all posts" link='.' />
            </div>
            <NewsletterCard class="hidden lg:inline-block" :title="newsletterSingleLine.title"
              :buttonText="newsletterSingleLine.buttonText" :placeholderInput="newsletterSingleLine.placeholderInput"
              :onSubmit="newsletterSingleLine.onSubmit" />
              <div class="flex flex-col gap-2">
                <h3 class="font-medium"> Categorias </h3>
                <TitleVerticalList :data="categories" />
              </div>
          </div>
        </div>
        <Newsletter />
      </div>
    </div>
  </main>


  <Footer lang="en" :listData="footerData.listData" :cta="footerData.cta" :copyright="footerData.copyright" />
</template>

<script setup>
//////////////////////////
// IMPORTING COMPONENTS //
//////////////////////////
import PostHero from "../../templates/post/hero/index.vue";
import ReadableContent from "../../templates/post/readable-content/index.vue"
import TitleVerticalList from "../../templates/title-list/index.vue"
import NewsletterCard from "../../templates/newsletter/card/index.vue"
import Footer from '../../templates/footer/index.vue'
import SocialBlockList from "../../templates/sharer-block/index.vue"

////////////////////////
// MOCKING PARAMETERS /
///////////////////////

import footerData from '../../mock/footer.js';
import featuredPostList from "../../mock/verticalListData"
import newsletterSingleLine from "../../mock/newsletterSingleLine"
import hero from "../../mock/articleHero"
import categories from "../../mock/categories"
</script>
