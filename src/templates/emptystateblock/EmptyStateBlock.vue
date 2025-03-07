<template>
  <div class="flex flex-col h-full">
    <div class="flex flex-col h-full gap-5 justify-center items-center rounded-md p-8 max-w-xl">
      <slot name="illustration" />
      <div class="flex flex-col gap-8">
        <div class="flex flex-col gap-2">
          <p class="text-center text-color text-xl font-bold leading-6">
            {{ title }}
          </p>
          <p class="text-center text-color-secondary leading-6">
            {{ description }}
          </p>
        </div>
        <slot name="actions" />
      </div>
    </div>
  </div>
</template>

<script setup>
  defineOptions({ name: 'empty-results-block' })

  defineProps({
    title: { type: String, required: true },
    description: { type: String, required: true }
  })
</script>
