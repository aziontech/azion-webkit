<template>
  <ContentSection :overline="overline" :title="title">
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
      required: false
    },
    title: {
      type: String,
      required: true
    },
    items: {
      type: Array,
      required: true
    }
  })

</script>
