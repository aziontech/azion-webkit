<template>
  <div class="px-container w-full">
    <ContentQuoteAvatar v-bind="props" />
  </div>
</template>

<script setup>
  import ContentQuoteAvatar from '../contentquoteavatar'

  const props = defineProps({
    data: {
      type: Array,
      default: () => []
    }
    // border: {
    //   type: Boolean,
    //   default: () => true
    // },
    // disableDegrade: {
    //   type: Boolean,
    //   default: () => false
    // },
    // text: {
    //   type: String,
    //   required: true
    // },
    // author: {
    //   type: String
    // },
    // image: {
    //   type: String,
    //   required: true
    // },
    // button: {
    //   type: Object
    // }
  })
</script>
