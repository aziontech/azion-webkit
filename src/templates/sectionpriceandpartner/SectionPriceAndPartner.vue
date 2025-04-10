<template>
  <ContentSection
    :titleTag="titleTag"
    :title="title"
    :overline="overline"
    :description="description"
    :isSticky="isSticky"
    position="center"
    isContentCentralized
  >
    <template #main>
      <div class="flex justify-center">
        <PriceAndPartner :lang="lang" />
      </div>
    </template>
  </ContentSection>
</template>

<script setup>
  import PriceAndPartner from '../priceandpartner'
  import ContentSection from '../contentsection'

  defineProps({
    isSticky: {
      type: Boolean,
      default() {
        return true
      }
    },
    overline: {
      type: String
    },
    titleTag: {
      type: String,
      default() {
        return 'h2'
      },
      validator(value) {
        return ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].includes(value)
      }
    },
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    lang: {
      type: String,
      required: true
    }
  })
</script>
