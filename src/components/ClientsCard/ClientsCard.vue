<template>
  <a :href="link" class="flex cursor-pointer">
    <div class="p-1 border group relative hover:bg-neutral-900 duration-150 transition-colors border-neutral-900 flex before:content-[''] before:bg-white before:w-1 before:h-1 before:absolute before:top-0 before:left-0 after:content-[''] after:bg-white after:w-1 after:h-1 after:absolute after:bottom-0 after:left-0">
      <div class="internal w-full before:content-[''] before:bg-white before:w-1 before:h-1 before:absolute before:bottom-0 before:right-0 after:content-[''] after:bg-white after:w-1 after:h-1 after:absolute after:top-0 after:right-0">
        <div class="flex justify-between w-full">
          <span class="label py-1 absolute left-1 top-1 px-3 bg-neutral-900 font-proto-mono duration-150  group-hover:bg-neutral-100 group-hover:text-neutral-900 text-neutral-100">{{ text }}</span>
          <span class="label py-1 absolute right-1 top-1 px-3 bg-neutral-900 transition duration-150 font-proto-mono group-hover:bg-neutral-100 group-hover:text-neutral-900 opacity-0 group-hover:opacity-100">+</span>
        </div>
        <div class="flex justify-between gap-9 p-8 pt-16 h-full">
          <slot />
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