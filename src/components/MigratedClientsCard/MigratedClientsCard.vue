<template>
  <a
    :href="link"
    class="flex cursor-pointer"
  >
    <div
      class="p-1 border group relative w-full hover:bg-neutral-900 duration-150 transition-colors border-neutral-900 flex before:content-[''] before:bg-white before:w-1 before:h-1 before:absolute before:top-0 before:left-0 after:content-[''] after:bg-white after:w-1 after:h-1 after:absolute after:bottom-0 after:left-0"
    >
      <div
        class="internal w-full before:content-[''] before:bg-white before:w-1 before:h-1 before:absolute before:bottom-0 before:right-0 after:content-[''] after:bg-white after:w-1 after:h-1 after:absolute after:top-0 after:right-0"
      >
        <div class="flex justify-between w-full">
          <span
            class="md:text-base text-sm label py-1 absolute left-1 top-1 px-3 bg-neutral-900 font-proto-mono duration-150 group-hover:bg-neutral-100 group-hover:text-neutral-900 text-neutral-100"
            >{{ text }}</span
          >
          <span
            class="label py-1 absolute right-1 top-1 px-3 bg-neutral-900 transition duration-150 font-proto-mono group-hover:bg-neutral-100 group-hover:text-neutral-900 opacity-0 group-hover:opacity-100"
            >+</span
          >
        </div>
        <div
          class="flex md:justify-center justify-between gap-3 md:gap-24 p-4 md:p-8 pt-12 md:pt-16 h-full w-full items-center"
        >
          <div
            v-for="(logo, index) in logos"
            :key="index"
            class="flex items-center justify-center"
          >
            <img
              v-if="logo.imageSrc"
              :src="`${logo.imageSrc}?ims=x60`"
              loading="lazy"
              class="h-8 brightness-0 invert"
              width="auto"
              height="auto"
              :alt="logo.alt || text"
            />
          </div>
        </div>
      </div>
    </div>
  </a>
</template>

<script setup>
  const props = defineProps({
    text: {
      type: String,
      default: ''
    },
    logos: {
      type: Array,
      required: true
    },
    link: {
      type: String,
      required: false
    }
  })
</script>
