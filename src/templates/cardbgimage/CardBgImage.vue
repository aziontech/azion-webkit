<template>
  <div class="relative p-6 lg:p-10 h-[440px] flex flex-col justify-end rounded">
    <div class="absolute w-full h-full top-0 left-0 overflow-hidden rounded">
      <img :alt="alt" :src="image" class="w-full h-full object-cover" />
    </div>
    <div class="absolute w-full h-full top-0 left-0 overflow-hidden rounded" :class="[
      { 'gradient' : !customGradient },
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
.gradient {
    background: linear-gradient(to bottom, var(--surface-200) 0%, transparent 80%),
                linear-gradient(to top, var(--surface-200) 30%, transparent 100%);
}
</style>
