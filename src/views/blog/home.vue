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
        :buttonText="newsletterSingleLineData.buttonText"
        :placeholderInput="newsletterSingleLineData.placeholderInput"
        :onSubmit="newsletterSingleLineData.onSubmit" />
    </div>

    <section>
      <div class="container mx-auto my-8">
        <ButtonBlockList
          :dataList="buttonBlockListData.dataList"
          :onClick="buttonBlockListData.onclick" />
      </div>

      <div class="my-8">
        <PostCardGridList />
      </div>
    </section>

    <div class="my-8">
      <NewsletterWide
        :overline="newsletterWideData.overline"
        :title="newsletterWideData.title"
        :buttonText="newsletterWideData.buttonText"
        :placeholderInput="newsletterWideData.placeholderInput"
        :onSubmit="newsletterWideData.onSubmit"
        />
    </div>
  </main>

  <Footer lang="en" :listData="footerData.listData" :cta="footerData.cta" :copyright="footerData.copyright" />
</template>

<script setup>
  //////////////////////////
  // IMPORTING COMPONENTS //
  //////////////////////////
  import ButtonBlockList from '../../templates/button-block-list/index.vue';
  import FeaturedPost from '../../templates/featured-post/index.vue';
  import Footer from '../../templates/footer/index.vue';
  import PostCardGridList from '../../templates/card-grid-list/index.vue';
  import NewsletterSingleLine from '../../templates/newsletter/single-line/index.vue';
  import NewsletterWide from '../../templates/newsletter/wide/index.vue';
  import TitleFlexList from '../../templates/title-grid-list/index.vue';

  ////////////////////////
  // MOCKING PARAMETERS /
  ///////////////////////

  import featuredPostData from '../../mock/featuredPost.js';
  import titleFlexListData from '../../mock/titleFlexListData.js';
  import buttonBlockListData from '../../mock/buttonBlockList.js';
  import newsletterSingleLineData from '../../mock/newsletterSingleLine.js';
  import newsletterWideData from '../../mock/newsletterWide.js';
  import footerData from '../../mock/footer.js';
</script>
