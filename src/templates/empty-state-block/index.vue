<template>
  <div class="flex flex-col h-full">
    <div class="flex flex-col h-full border surface-border gap-7 justify-center items-center rounded-md">
      <slot name="illustration" />
      <div class="flex flex-col gap-2">
        <p class="text-center text-color text-lg font-bold leading-7">
          {{ title }}
        </p>
        <p class="text-center text-color-secondary text-sm font-normal leading-tight">
          {{ description }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
defineOptions({ name: 'empty-results-block' })

defineProps({
  title: { type: String, required: true },
  description: { type: String, required: true },
})

</script>
