<template>
  <ContentSection :margin="margin">
    <template #content>
      <Quote v-bind="props" />
    </template>
  </ContentSection>
</template>

<script setup>
  import ContentSection from '../contentsection'
  import Quote from '../quote'

  const props = defineProps({
    margin: {
      type: String,
      options: ['none', 'small', 'default', 'large'],
      default: () => 'none'
    },
    text: {
      type: String,
      required: true
    },
    border: {
      type: Boolean,
      default: true
    },
    author: {
      type: String
    },
    imageLight: {
      type: String,
      required: false
    },
    imageDark: {
      type: String,
      required: true
    },
    button: {
      type: Object
    },
    alt: {
      type: String
    },
    disableDegrade: {
      default: false,
      type: Boolean
    }
  })
</script>
