<template>
  <div
    class="flex"
    :class="{'justify-center': isCentralized}">

    <div class="flex flex-col gap-4 max-w-2xl">
      <p
        v-if="title"
        class="text-color-secondary text-xs"
        :class="{ 'text-center': isCentralized }">

        {{ title }}
      </p>
      <div
        class="flex flex-wrap m-0 gap-y-6 gap-x-8 text-color-secondary"
        :class="{ 'justify-center': isCentralized }">
        <div
          :key="logo.imageSrc"
          v-for="logo in logos">
          <span class="block  *:h-auto  *:w-full *:aspect-[9/6] " :class="[
            { '*:max-h-8 max-h-8 w-20 *:max-w-20' : size === 'small'},
            { '*:max-h-12 max-h-12 w-24 *:max-w-24' : size === 'default'},
            { '*:max-h-16 max-h-16 w-28 *:max-w-28' : size === 'large'}
          ]" v-html="logo.imageSrc"></span>
        </div>
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
  size: {
    type: String,
    required: false,
    options: ["small", "default", "large"],
    default: "default"
  }
})
</script>
