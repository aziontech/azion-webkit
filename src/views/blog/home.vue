<template>
  <Header />
  <main>
    <div class="flex justify-center py-12 px-4 md:px-8">
      <div class="flex flex-col gap-11 container">
        <FeaturedPost :imgSrc="featuredPostData.imgSrc" :imgAlt="featuredPostData.imgAlt"
          :tagList="featuredPostData.tagList" :title="featuredPostData.title" :description="featuredPostData.description"
          :link="featuredPostData.link" linkText="read more" linkTarget="_self" date="JUL, 13, 2020" readTime="10 minutes"
          :authors="featuredPostData.authors" />

        <NewsletterSingleLine :title="newsletterData.title" :buttonText="newsletterData.buttonText"
          :placeholderInput="newsletterData.placeholderInput" :onSubmit="newsletterData.onSubmit" :formData="{}" />

        <CardGridList :data="cardData" :categories="buttonBlockListData.dataList" />
      </div>
    </div>

    <NewsletterWide class="py-8" :overline="newsletterData.overline" :title="newsletterData.title"
      :buttonText="newsletterData.buttonText" :placeholderInput="newsletterData.placeholderInput" :formData="{}" />
  </main>

  <Footer lang="en" :listData="footerData.listData" :cta="footerData.cta" :copyright="footerData.copyright" />
</template>

<script setup>
//////////////////////////
// IMPORTING COMPONENTS //
//////////////////////////
import FeaturedPost from '../../templates/featured-post/index.vue';
import Header from '../../templates/header/index.vue';
import Footer from '../../templates/footer/index.vue';
import NewsletterSingleLine from '../../templates/newsletter/single-line/index.vue';
import NewsletterWide from '../../templates/newsletter/wide/index.vue';
import CardGridList from '../../templates/card-grid-list/withLoadMore.vue'

////////////////////////
// MOCKING PARAMETERS /
///////////////////////

import featuredPostData from '../../mock/featuredPost.js';
import buttonBlockListData from '../../mock/buttonBlockList.js';
import newsletterData from '../../mock/newsletterSingleLine.js';
import footerData from '../../mock/footer.js';
import cardData from '../../mock/cards.js';
</script>
