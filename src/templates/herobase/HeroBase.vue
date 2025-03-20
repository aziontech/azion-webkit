<template>
  <section class="flex flex-col gap-10 md:gap-20 2xl:gap-40">
    <div
      class="px-container flex flex-col w-full"
      :class="[
        { 'lg:flex-row gap-10': !isCentralized },
        { 'items-center justify-center gap-12 md:gap-24': isCentralized },
        { 'flex-col-reverse': isReverse }
      ]"
    >
      <div
        class="w-full flex flex-col"
        :class="[
          { 'lg:max-w-3xl 2xl:max-w-4xl gap-10': !isCentralized },
          { 'items-center gap-12 md:gap-24': isCentralized },
          { 'items-center text-center lg:text-left': align === 'center' },
          { 'justify-center': justify === 'center' }
        ]"
      >
        <div
          class="flex flex-col gap-5 md:gap-8"
          :class="[
            { 'max-w-3xl 2xl:max-w-4xl text-center': isCentralized },
            { 'max-w-3xl 2xl:max-w-4xl': !isCentralized }
          ]"
        >
          <template v-if="bannerNews">
            <div
              class="flex"
              :class="[{ 'justify-center': isCentralized }]"
            >
              <Banner
                :description="bannerNews.description"
                :cta="bannerNews.cta.label"
                :link="bannerNews.cta.link"
              />
            </div>
          </template>
          <Overline
            v-if="overline && overline.length"
            :label="overline"
          />
          <template v-if="title">
            <h1
              v-if="titleTag === 'h1'"
              class="leading-loose font-medium text-3xl md:text-4xl 2xl:text-5xl text-balance"
              style="line-height: 125% !important"
              :class="[{ 'text-4xl md:text-5xl': isDisplay }]"
            >
              {{ title }}
            </h1>
            <h2
              v-if="titleTag === 'h2'"
              class="text-3xl md:text-4xl 2xl:text-5xl leading-relaxed font-medium text-balance"
            >
              {{ title }}
            </h2>
            <h3
              v-if="titleTag === 'h3'"
              class="text-3xl md:text-4xl 2xl:text-5xl leading-relaxed font-medium text-balance"
            >
              {{ title }}
            </h3>
            <h4
              v-if="titleTag === 'h4'"
              class="text-3xl md:text-4xl 2xl:text-5xl leading-relaxed font-medium text-balance"
            >
              {{ title }}
            </h4>
            <h5
              v-if="titleTag === 'h5'"
              class="text-3xl md:text-4xl 2xl:text-5xl leading-relaxed font-medium text-balance"
            >
              {{ title }}
            </h5>
            <h6
              v-if="titleTag === 'h6'"
              class="text-3xl md:text-4xl 2xl:text-5xl leading-relaxed font-medium text-balance"
            >
              {{ title }}
            </h6>
          </template>
          <template v-else>
            <slot name="title" />
          </template>
          <p
            v-if="description"
            class="text-color-secondary text-sm md:text-base 2xl:text-lg leading-relaxed text-balance"
          >
            {{ description }}
          </p>
          <div
            v-if="$slots.actions"
            class="flex flex-row gap-3"
            :class="{ 'justify-center items-center': isCentralized }"
          >
            <slot name="actions" />
          </div>
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
    <template v-if="$slots.principal">
      <div class="px-container w-full">
        <slot name="principal" />
      </div>
    </template>
  </section>
</template>

<script setup>
  import Overline from '../overline/Overline.vue'
  import Banner from '../banner/Banner.vue'

  defineProps({
    bannerNews: {
      type: Object
    },
    overline: {
      type: String
    },
    isReverse: {
      type: Boolean,
      default: false
    },
    title: {
      type: String
    },
    titleTag: {
      type: String,
      default: 'h1'
    },
    description: {
      type: String
    },
    justify: {
      type: String,
      options: ['center']
    },
    align: {
      type: String,
      options: ['center']
    },
    isCentralized: {
      type: Boolean,
      default: false
    },
    isDisplay: {
      type: Boolean
    }
  })
</script>
