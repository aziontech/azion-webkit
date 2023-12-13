<template>
  <div class="flex" :class="{'justify-center': centered}">
  <div class="flex flex-col gap-4 max-w-md">
    <p v-if="title" class="text-color-secondary text-xs" :class="{ 'text-center': centered }"> {{ title }} </p>
    <div class="grid grid-cols-4 m-0 gap-2" :class="{ 'place-items-center': centered }">
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
  centered: {
    type: Boolean,
    required: false,
    default: true
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
