<template>
  <div
    class="flex"
    :class="{'justify-center': isCentralized}">

    <div class="flex flex-col gap-4 max-w-md">
      <p
        v-if="title"
        class="text-color-secondary text-xs"
        :class="{ 'text-center': isCentralized }">

        {{ title }}
      </p>



      <div
        class="flex flex-wrap m-0 gap-y-6 gap-x-8"
        :class="{ 'justify-center': isCentralized }">

        <div
          :key="logo.imageSrc"
          v-for="logo in logos">

          <span class="flex h-6 w-full *:h-full *:w-auto" v-html="logo.imageSrc"></span>
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
})
</script>
