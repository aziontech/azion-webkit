<template>
  <div class="relative p-6 lg:p-10 h-[440px] flex flex-col justify-end rounded">
    <div class="absolute w-full h-full top-0 left-0 overflow-hidden rounded">
      <img :alt="alt" :src="image" class="w-full h-full object-cover object-top" />
    </div>
    <div class="absolute w-full h-full top-0 left-0 overflow-hidden rounded" :class="[
      { 'gradient-to-bottom opacity-70' : !customGradient },
    ]" />
    <div class="absolute w-full h-full top-0 left-0 overflow-hidden rounded" :class="[
      { 'gradient-to-top' : !customGradient },
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

<style scoped>
.gradient-to-bottom {
    background: linear-gradient(to bottom, var(--surface-200) 0%, transparent 80%);
}
.gradient-to-top {
  background: linear-gradient(to top, var(--surface-200) 40%, transparent 100%);
}
</style>
