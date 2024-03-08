<template>
  <div
    class="bg-[#16A34A33] p-4 flex rounded-md gap-4 items-center">
      <i
        v-if="icon"
        class="text-[#4CD07D]" :class="icon">
      </i>
      <div class="flex flex-col gap-0.5">
        <span class="font-medium text-color">
          {{ title }}
        </span>
        <p v-if="description" class="text-color-secondary text-sm">
          {{ description }}
        </p>
      </div>
  </div>
</template>

<script setup>
  defineProps({
    icon: {
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
    }
  });
</script>
