<template>
  <HeroBase
    isDisplay
    :isCentralized="true"
    :description="description"
    :descriptionRawHtml="descriptionRawHtml"
    :bannerNews="bannerNews"
    :id="id"
    :margin="margin"
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
        <ContentLogo
          size="small"
          :isCentralized="true"
          :title="logosTitle"
          :logos="logos"
        />
      </div>
    </template>
  </HeroBase>
</template>

<script setup>
  import HeroBase from '../herobase'
  import LinkButton from '../linkbutton'
  import ContentLogo from '../contentlogo'

  defineProps({
    id: {
      type: String,
      default: () => ''
    },
    bannerNews: {
      type: Object,
      default: () => {}
    },
    overline: {
      type: String,
      default: () => ''
    },
    titleTag: {
      required: true,
      type: String,
      default: () => 'h1',
      validator: (value) => ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].includes(value)
    },
    title: {
      type: String,
      default: () => ''
    },
    description: {
      type: String,
      default: () => ''
    },
    descriptionRawHtml: {
      type: String,
      default: () => ''
    },
    logosTitle: {
      type: String,
      default: () => ''
    },
    logos: {
      type: Array,
      required: true,
      default: () => []
    },
    buttons: {
      type: Array,
      default: () => []
    },
    margin: {
      type: String,
      options: ['none', 'small', 'default', 'large'],
      default: () => 'none'
    }
  })
</script>
