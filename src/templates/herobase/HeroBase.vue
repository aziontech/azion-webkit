<template>
  <section class="flex">
    <div class="px-container flex flex-col w-full gap-10 mt-0 lg:mt-10 xl:mt-16 2xl:my-24" :class="[
      { 'lg:flex-row': !isCentralized },
      { 'items-center justify-center': isCentralized },
      { 'flex-col-reverse': isReverse }
    ]">
      <div class="w-full flex flex-col gap-10" :class="[
        { 'lg:max-w-3xl': !isCentralized },
        { 'items-center': isCentralized },
        { 'items-center text-center lg:text-left': align === 'center' },
        { 'justify-center' : justify === 'center'}
      ]">
        <template v-if="bannerNews">
          <Banner
            :class="[
              { 'justify-center': isCentralized },
              ]"
            :description="bannerNews.description"
            :cta="bannerNews.cta.label"
            :link="bannerNews.cta.link"
          />
        </template>
        <div class="flex flex-col gap-5" :class="[
          { 'max-w-3xl text-center': isCentralized },
          { 'max-w-3xl': !isCentralized},
        ]">
          <Overline v-if="overline && overline.length" :label="overline" />
          <h1 v-if="titleTag === 'h1'" class="font-medium text-4xl text-pretty" :class="[
            { 'md:text-5xl' : isDisplay }
          ]">{{ title }}</h1>
          <h2 v-if="titleTag === 'h2'" class="text-4xl font-medium text-pretty">{{ title }}</h2>
          <h3 v-if="titleTag === 'h3'" class="text-4xl font-medium text-pretty">{{ title }}</h3>
          <h4 v-if="titleTag === 'h4'" class="text-4xl font-medium text-pretty">{{ title }}</h4>
          <h5 v-if="titleTag === 'h5'" class="text-4xl font-medium text-pretty">{{ title }}</h5>
          <h6 v-if="titleTag === 'h6'" class="text-4xl font-medium text-pretty">{{ title }}</h6>

          <p
            v-if="description"
            class="text-color-secondary text-base leading-relaxed text-balance">

            {{ description }}
          </p>
        </div>
        <div
          v-if="$slots.actions"
          class="flex flex-col sm:flex-row gap-3 w-full"
          :class="{ 'justify-center': isCentralized }">
          <slot name="actions" />
        </div>
        <template v-if="$slots.content">
          <slot name="content" />
        </template>

      </div>
      <template v-if="$slots.main">
        <div class="w-full">
          <slot name="main" />
        </div>
      </template>
    </div>
  </section>
</template>

<script setup>
  import Overline from "../overline/Overline.vue"
  import Banner from "../banner/Banner.vue"

  defineProps({
    bannerNews: {
      type: Object,
      required: false,
    },
    overline: {
      type: String,
      required: false
    },
    isReverse: {
      type: Boolean,
      required: false,
      default: false
    },
    title: {
      type: String,
      required: true
    },
    titleTag: {
      type: String,
      required: false,
      default: 'h1'
    },
    description: {
      type: String,
      required: false
    },
    justify: {
      type: String,
      required: false,
      options: ['center']
    },
    align: {
      type: String,
      required: false,
      options: ['center']
    },
    isCentralized: {
      type: Boolean,
      required: false,
      default: false
    },
    isDisplay: {
      type: Boolean,
      required: false,
    }
  });
</script>
