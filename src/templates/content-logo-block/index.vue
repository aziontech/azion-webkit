<template>
  <div class="flex" :class="{'justify-center': isCentralized}">
  <div class="flex flex-col gap-4 max-w-md">
    <p v-if="title" class="text-color-secondary text-xs" :class="{ 'text-center': isCentralized }"> {{ title }} </p>
    <div class="flex flex-wrap m-0 gap-y-6 gap-x-8" :class="{ 'justify-center': isCentralized }">
      <img v-for="({imageSrc, alt}) in logos" :key="alt" :src="`${imageSrc}?ims=x24`" :alt="alt"
        class="h-6">
    </div>
  </div>
</div>
</template>

<script setup>

// interface logo {
//   imageSrc: string;
//   alt: string;
// }

defineProps({
  isCentralized: {
    type: Boolean,
    required: false,
    default: false
  },
  title: {
    type: String,
    required: false
  },
  logos: {
    type: Array,
    required: true,
  },
})
</script>
