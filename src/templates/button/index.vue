<template>
  <Button :label="label" :severity="severity" :outlined="outlined" />
</template>

<script setup>
import Button from 'primevue/button'

defineProps({
  label: {
    required: true,
    type: String,
  },
  severity: {
    required: false,
    type: String,
    default: 'primary'
  },
  outlined: {
    required: false,
    type: Boolean
  }
})
</script>
