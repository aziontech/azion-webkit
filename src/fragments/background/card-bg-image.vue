<template>
  <div class="relative p-6 lg:p-10 h-[440px] flex flex-col justify-end rounded">
    <div class="absolute w-full h-full top-0 left-0 overflow-hidden rounded">
      <img :alt="alt" :src="image" class="w-full h-full object-cover" />
    </div>
    <div class="absolute w-full h-full top-0 left-0 overflow-hidden rounded" :class="[
      { 'bg-gradient-to-t from-[--surface-100] from-30% to-[rgba(23,_23,_23,_0.4)] to-100%' : !customGradient },
      { customGradient : customGradient }
    ]" />
    <slot name="content" />
  </div>
</template>

<script setup>

defineProps({
  image: {
    type: String,
    required: true,
  },
  alt: {
    type: String,
    required: true,
  },
  customGradient: {
    type: String,
    required: false
  }
})

</script>
