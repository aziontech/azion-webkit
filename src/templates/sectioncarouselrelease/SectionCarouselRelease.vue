<template>
  <ContentSection
    :overline="overline"
    :titleTag="titleTag"
    :title="title"
    :description="description"
    isContentCentralized
  >
    <template #principal>
      <div class="relative">
        <ReleaseCarousel :data="items" />
      </div>
    </template>
  </ContentSection>
</template>

<script setup>
  import ContentSection from '../contentsection'
  import ReleaseCarousel from '../releasecarousel'

  defineProps({
    overline: {
      type: String,
      default: () => ''
    },
    titleTag: {
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
    items: {
      type: Array,
      required: true
    }
  })
</script>
