<template>
  <div class="rounded h-6 w-6 flex justify-center items-center" :class="[
    { 'bg-[--surface-400] text-color-secondary': severity == 'default' },
    { 'p-tag' : severity == 'primary' }
  ]">
    <p class="text-sm flex justify-center items-center">
      <slot />
    </p>
  </div>
</template>

<script setup>
defineProps({
  severity: {
    type: String,
    required: false,
    default: 'default',
    options: ['default', 'primary']
  }
})
</script>
