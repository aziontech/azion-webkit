<template>
  <div
    class="rounded flex justify-center items-center"
    :class="[
      { 'h-sm w-sm': size == 'small' },
      { 'h-8 w-8': size == 'default' },
      { 'bg-[--surface-400] text-color-secondary': severity == 'default' },
      { 'p-tag': severity == 'primary' },
      { 'p-tag p-tag-warning': severity == 'warning' },
      { 'p-tag p-tag-success': severity == 'success' },
      { 'p-tag p-tag-info': severity == 'info' },
      { 'bg-[#508bc229] text-blue-500': severity == 'secondary' }
    ]"
  >
    <p class="text-sm flex justify-center items-center">
      <slot />
    </p>
  </div>
</template>

<script setup>
  defineProps({
    severity: {
      type: String,
      default: 'default',
      options: [
        'default',
        'primary',
        'secondary',
        'warning',
        'success',
        'info'
      ]
    },
    size: {
      type: String,
      default: 'default',
      options: [
        'small',
        'default'
      ]
    }
  })
</script>
