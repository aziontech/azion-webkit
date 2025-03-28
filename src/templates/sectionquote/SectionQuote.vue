<template>
  <div class="px-container w-full">
    <Quote v-bind="props" />
  </div>
</template>

<script setup>
  import Quote from '../quote'

  const props = defineProps({
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
