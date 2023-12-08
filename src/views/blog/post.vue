<template>
  <main>
    <PostHero class="lg:py-20"
    :date="hero.date"
    :title="hero.title"
    :tagList="hero.tagList"
    :authors="hero.authors"
    />
    <div class="md:px-container mx-auto px-1 lg:px-16">
      <div class="lg:flex">
        <ReadableContent class="lg:w-2/3" />
        <div class="lg:w-1/3 lg:pl-20">
          <TitleVerticalList :data="featuredPostList" />
          <NewsletterCard class="hidden lg:inline-block"
            :title="newsletterSingleLine.title"
            :buttonText="newsletterSingleLine.buttonText"
            :placeholderInput="newsletterSingleLine.placeholderInput"
            :onSubmit="newsletterSingleLine.onSubmit"
          />
          <div>
            <h4> CATEGORIES </h4>
            <ButtonBlockList :dataList="buttonBlockList.dataList" rounded size="small" />
          </div>
        </div>
      </div>
      <Newsletter />
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
  import TitleVerticalList from "../../templates/title-grid-list/vertical.vue"
  import NewsletterCard from "../../templates/newsletter/card/index.vue"
  import ButtonBlockList from "../../templates/button-block-list/index.vue"
  import Footer from '../../templates/footer/index.vue'

  ////////////////////////
  // MOCKING PARAMETERS /
  ///////////////////////

  import footerData from '../../mock/footer.js';
  import buttonBlockList from "../../mock/buttonBlockList"
  import featuredPostList from "../../mock/verticalListData"
  import newsletterSingleLine from "../../mock/newsletterSingleLine"
  import hero from "../../mock/articleHero"
</script>
