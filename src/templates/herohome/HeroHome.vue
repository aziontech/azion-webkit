<template>
  <HeroBlockBase
    isDisplay
    :isCentralized="true"
    :description="description"
    :bannerNews="bannerNews"
  >
    <template #title>
      <h1
        class="font-medium text-heading-5 text-balance"
        v-html="title"
      />
    </template>
    <template #actions>
      <LinkButton
        v-for="button in buttons"
        v-bind="button"
      />
    </template>
    <template #content>
      <div class="flex flex-col gap-4 md:gap-8 items-center text-center">
        <ContentLogoBlock
          size="small"
          :isCentralized="true"
          :title="logos.title"
          :logos="logos.images"
        />
      </div>
    </template>
  </HeroBlockBase>
</template>

<script setup>
  import HeroBlockBase from '../herobase'
  import LinkButton from '../linkbutton'
  import ContentLogoBlock from '../contentlogo'

  defineProps({
    bannerNews: {
      type: Object,
      required: false
    },
    title: {
      type: String,
      required: false
    },
    description: {
      type: String,
      required: false
    },
    logos: {
      type: Object,
      required: true
    },
    buttons: {
      type: Array,
      required: false
    }
  })
</script>
