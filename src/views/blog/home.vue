<template>
  <Header :menubar="menubarData.data"/>
  <main>
    <div class="py-8 mb-20 surface-ground">
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
    <div class="container mx-auto py-8">
      <TitleFlexList :dataList="titleFlexListData" />
    </div>
    <div class="my-20">
      <NewsletterSingleLine
        :title="newsletterSingleLineData.title"
        :buttonText="newsletterSingleLineData.buttonText"
        :placeholderInput="newsletterSingleLineData.placeholderInput" />
    </div>
    <section>
      <div class="container mx-auto py-8">
        <ButtonBlockList :dataList="buttonBlockListData.dataList" />
      </div>
      <div class="py-8">
        <PostCardGridList :data="cardData" />
      </div>
    </section>
    <NewsletterWide
      class="py-8"
      :overline="newsletterWideData.overline"
      :title="newsletterWideData.title"
      :buttonText="newsletterWideData.buttonText"
      :placeholderInput="newsletterWideData.placeholderInput" />
  </main>
  <Footer
    lang="en"
    :listData="footerData.listData"
    :cta="footerData.cta"
    :copyright="footerData.copyright" />
</template>

<script setup>
  //////////////////////////
  // IMPORTING COMPONENTS //
  //////////////////////////
  import ButtonBlockList from '../../templates/button-block-list/index.vue';
  import FeaturedPost from '../../templates/featured-post/index.vue';
  import Footer from '../../templates/footer/index.vue';
  import Header from '../../templates/header/index.vue';
  import PostCardGridList from '../../templates/card-grid-list/index.vue';
  import NewsletterSingleLine from '../../templates/newsletter/single-line/index.vue';
  import NewsletterWide from '../../templates/newsletter/wide/index.vue';

  ////////////////////////
  // MOCKING PARAMETERS /
  ///////////////////////
  import menubarData from '../../mock/menubar.js';
  import featuredPostData from '../../mock/featuredPost.js';
  import buttonBlockListData from '../../mock/buttonBlockList.js';
  import newsletterData from '../../mock/newsletterSingleLine.js';
  import footerData from '../../mock/footer.js';
  import cardData from '../../mock/cards.js';
</script>
