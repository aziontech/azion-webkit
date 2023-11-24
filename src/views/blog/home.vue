<template>
  <Header />
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

    <div class="my-20">
      <NewsletterSingleLine
        :title="newsletterData.title"
        :buttonText="newsletterData.buttonText"
        :placeholderInput="newsletterData.placeholderInput"
        :onSubmit="newsletterData.onSubmit" />
    </div>

    <section>
      <div class="container mx-auto py-8">
        <ButtonBlockList
          :dataList="buttonBlockListData.dataList"
          :onClick="buttonBlockListData.onclick" />
      </div>

      <div class="py-8">
        <PostCardGridList :data="cardData" />
      </div>
    </section>
      <NewsletterWide
        class="py-8"
        :overline="newsletterData.overline"
        :title="newsletterData.title"
        :buttonText="newsletterData.buttonText"
        :placeholderInput="newsletterData.placeholderInput"
        />
  </main>

  <Footer lang="en" :listData="footerData.listData" :cta="footerData.cta" :copyright="footerData.copyright" />
</template>

<script setup>
  //////////////////////////
  // IMPORTING COMPONENTS //
  //////////////////////////
  import ButtonBlockList from '../../templates/button-block-list/index.vue';
  import FeaturedPost from '../../templates/featured-post/index.vue';
  import Header from '../../templates/header/index.vue';
  import Footer from '../../templates/footer/index.vue';
  import PostCardGridList from '../../templates/card-grid-list/index.vue';
  import NewsletterSingleLine from '../../templates/newsletter/single-line/index.vue';
  import NewsletterWide from '../../templates/newsletter/wide/index.vue';

  ////////////////////////
  // MOCKING PARAMETERS /
  ///////////////////////

  import featuredPostData from '../../mock/featuredPost.js';
  import buttonBlockListData from '../../mock/buttonBlockList.js';
  import newsletterData from '../../mock/newsletterSingleLine.js';
  import footerData from '../../mock/footer.js';
  import cardData from '../../mock/cards.js';
</script>
