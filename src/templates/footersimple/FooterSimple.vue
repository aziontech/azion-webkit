<template>
  <footer class="flex flex-col justify-center items-center">
    <Divider />
    <div class="px-container py-4" 
    :class="{ 'w-full flex gap-3 flex-col md:flex-row justify-between md:items-center': $slots['theme-switch'] }">
      <div v-if="$slots['theme-switch']">
        <slot name="theme-switch" />
      </div>

      <p class="text-color-secondary text-xs">
        {{ text }}
      </p>
    </div>
  </footer>
</template>

<script setup>
  import Divider from 'primevue/divider'

  defineProps({
    text: {
      type: String,
      required: true
    }
  })
</script>
