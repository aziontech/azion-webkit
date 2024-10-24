<template>
  <ContentSection
    titleTag="h2"
    position="center"
    isContentCentralized
    textCenter
    :title="title"
    :overline="overline"
  >
    <template #content>
      <div class="flex items-center flex-col md:flex-row justify-center gap-8">
        <div
          v-for="(logo, index) in logos"
          :key="index"
          v-html="logo"
          class="h-10 w-auto text-color-secondary"
        ></div>
      </div>
    </template>
  </ContentSection>
</template>

<script setup>
  import ContentSection from '../contentsection'

  defineProps({
    overline: {
      type: String,
      required: false
    },
    title: {
      type: String,
      required: true
    },
    logos: {
      type: Array,
      required: true
    }
  })
</script>
