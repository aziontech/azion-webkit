<template>
  <HeroBlockBase
    isDisplay
    :isCentralized="true"
    :description="description"
    :bannerNews="bannerNews"
    class="[&_.flex.flex-col]:!gap-3 [&_.flex.flex-col]:md:!gap-4 [&_.flex.flex-col]:2xl:!gap-6"
  >
    <template #title>
      <h1
        class="font-medium text-heading-5 text-balance mb-3"
        v-html="title"
      />
    </template>
    <template #actions>
      <LinkButton
        v-for="button in buttons"
        v-bind="button"
      />
    </template>
  </HeroBlockBase>
</template>

<script setup>
  import HeroBlockBase from '../herobase'
  import LinkButton from '../linkbutton'

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
    buttons: {
      type: Array,
      required: false
    }
  })
</script> 