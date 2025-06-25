<template>
  <div class="px-container w-full">
    <QuoteAvatar v-bind="props" />
  </div>
</template>

<script setup>
  import QuoteAvatar from '../quoteavatar'

  const props = defineProps({
    border: {
      type: Boolean,
      default: () => true
    },
    disableDegrade: {
      type: Boolean,
      default: () => false
    },
    text: {
      type: String,
      required: true
    },
    author: {
      type: String
    },
    image: {
      type: String,
      required: true
    },
    button: {
      type: Object
    }
  })
</script>
