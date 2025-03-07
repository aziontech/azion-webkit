<template>
  <footer class="flex flex-col gap-8 justify-center items-center pb-12">
    <Divider />
    <div class="px-container">
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
