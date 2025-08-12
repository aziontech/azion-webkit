<template>
    <div class="flex flex-col bg-neutral-900 p-10 rounded-md max-w-lg">
        <p class="text-overline font-proto-mono text-neutral-600 mb-3 text-xs">{{ overline }}</p>
        <h2 class="font-sora mb-8 text-3xl text-white">{{ title }}</h2>
        <p class="text-neutral-500 mb-3 text-sm text-balance">{{ description }}</p>
        <Button v-if="linkText" type="link" size="small" :label="linkText" icon="pi pi-chevron-right"/>
    </div>
</template>
  
<script lang="ts">
import { defineComponent } from 'vue'
import Button from '../Button'

export default defineComponent({
  name: 'Card',
  components: {
    Button
  },
  props: {
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
    link: {
      type: String,
      required: false
    },
    linkText: {
      type: String,
      required: false
    }
  }
})
</script>
