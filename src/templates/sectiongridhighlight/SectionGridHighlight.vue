<template>
  <ContentSection
    position="center"
    :isContentCentralized="true"
    :overline="overline"
    :titleTag="titleTag"
    :title="title"
    :description="description"
    :descriptionRawHtml="descriptionRawHtml"
    :id="id"
    :margin="margin"
  >
    <template #main>
      <GridHighlight :cards="cards" />
    </template>
  </ContentSection>
</template>

<script setup>
  import ContentSection from '../contentsection'
  import GridHighlight from '../gridhighlight'
  defineProps({
    id: {
      type: String,
      default: () => ''
    },
    overline: {
      type: String,
      required: false
    },
    titleTag: {
      required: true,
      type: String,
      default: () => 'h2',
      validator: (value) => ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].includes(value)
    },
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      default: () => ''
    },
    descriptionRawHtml: {
      type: String,
      default: () => ''
    },
    button: {
      type: Object,
      required: false
    },
    cards: {
      type: Array,
      required: true
    },
    margin: {
      type: String,
      options: ['none', 'small', 'default', 'large'],
      default: () => 'none'
    }
  })
</script>
