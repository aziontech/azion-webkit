<template>
  <HeroBlockBase
    :overline="overline"
    :titleTag="titleTag"
    :title="title"
    :description="description"
    :descriptionRawHtml="descriptionRawHtml"
  >
    <template #content>
      <ContentLogoBlock
        :title="logos.title"
        :logos="logos.images"
      />
    </template>
  </HeroBlockBase>
</template>

<script setup>
  import HeroBlockBase from '../herobase'
  import ContentLogoBlock from '../contentlogo'

  defineProps({
    overline: {
      type: String,
      default: () => ''
    },
    titleTag: {
      type: String,
      default: () => 'h1',
      validator: (value) => ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].includes(value)
    },
    title: {
      rquired: true,
      type: String
    },
    description: {
      type: String,
      default: () => ''
    },
    descriptionRawHtml: {
      type: String,
      default: () => ''
    },
    logos: {
      type: Object,
      default: () => {}
    }
  })
</script>
