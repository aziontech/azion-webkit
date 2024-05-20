<template>
  <section class="flex flex-col gap-20 pt-12 pb-28">
      <div class="flex flex-col gap-10 items-center">
        <slot name="illustration"></slot>
        <div class="text-center flex flex-col gap-6 max-w-4xl	items-center">
          <h1 class="text-5xl	font-medium">
            {{ title }}
          </h1>
          <p class="text-lg	text-color-secondary max-w-xl">
            {{ description }}
          </p>
        </div>
        <div class="flex gap-3">
          <slot name="actions"></slot>
        </div>
      </div>
      <slot name="main"></slot>
  </section>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: false
  },
})
</script>
