<template>
  <footer class="flex flex-col justify-center items-center">
    <Divider />
    <div class="px-container py-4">
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
