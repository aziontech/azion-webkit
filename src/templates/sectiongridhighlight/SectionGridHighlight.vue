<template>
  <ContentSection
    :overline="overline"
    :title="title"
    :description="description"
    position="center"
    isContentCentralized
    titleTag="h2"
  >
    <template #main>
      <GridHighlight :cards="cards" />
    </template>
  </ContentSection>
</template>

<script setup>
  import ContentSection from '../contentsection/ContentSection'
  import GridHighlight from '../gridhighlight/GridHighlight'
  defineProps({
    overline: {
      type: String,
      required: false
    },
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: false
    },
    button: {
      type: Object,
      required: false
    },
    cards: {
      type: Array,
      required: true
    }
  })
</script>
