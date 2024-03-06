<template>
  <div
    :class="classColor"
    class="p-4 flex rounded-md gap-4 items-center">

      <i
        v-if="icon"
        :class="icon">
      </i>
      <div class="flex flex-col gap-0.5">
        <span class="font-medium text-color">
          {{ title }}
        </span>
        <p class="text-color-secondary text-sm">
          {{ description }}
        </p>
      </div>
  </div>
</template>

<script setup>
  defineProps({
    classColor: {
      type: String,
      required: false,
      default: 'bg-[#16A34A20]'
    },
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
      required: true
    }
  });
</script>
