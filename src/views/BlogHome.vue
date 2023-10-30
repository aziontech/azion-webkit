<template>
  <main>
    <div class="my-8 mb-20">
      <FeaturedPost
        :imgSrc="featuredPostData.imgSrc"
        :imgAlt="featuredPostData.imgAlt"
        :tagList="featuredPostData.tagList"
        :title="featuredPostData.title"
        :description="featuredPostData.description"
        :link="featuredPostData.link"
        :linkText="featuredPostData.linkText"
        :linkTarget="featuredPostData.linkTarget" />
    </div>

    <div class="container mx-auto my-8">
      <TitleFlexList :dataList="titleFlexListData" />
    </div>

    <div class="my-20">
      <NewsletterSingleLine
        :title="newsletterSingleLineData.title"
        :textButton="newsletterSingleLineData.textButton"
        :placeholderInput="newsletterSingleLineData.placeholderInput"
        :onSubmit="newsletterSingleLineData.onSubmit" />
    </div>

    <div class="container mx-auto my-8">
      <ButtonBlockList :dataList="[
        'Newst',
        'Serveless',
        'Security',
        'Routing',
        'Orchestration', 
        'Observability',
        'Market Trends',
        'Company News',
        'Developers'
      ]"/>
    </div>

    <div class="my-8">
      <PostCardGridList />
    </div>

    <div class="my-8">
      <NewsletterWide />
    </div>
  </main>

  <Footer lang="en" :listData="footerData" />
</template>

<script setup>
  //////////////////////////
  // IMPORTING COMPONENTS //
  //////////////////////////

  import ButtonBlockList from '../templates/button-block-list/index.vue';
  import FeaturedPost from '../templates/article/featured-post/index.vue';
  import Footer from '../templates/footer/index.vue';
  import PostCardGridList from '../templates/article/card-grid-list/index.vue';
  import NewsletterSingleLine from '../templates/newsletter/single-line/index.vue';
  import NewsletterWide from '../templates/newsletter/wide/index.vue';
  import TitleFlexList from '../templates/article/title-grid-list/index.vue';

  ////////////////////////
  // MOCKING PARAMETERS /
  ///////////////////////

  import featuredPostData from '../mock/featuredPost.js';
  import titleFlexListData from '../mock/titleFlexListData.js';
  import newsletterSingleLineData from '../mock/newsletterSingleLine.js';
  import footerData from '../mock/footer.js';
</script>
