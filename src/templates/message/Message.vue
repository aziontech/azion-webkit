<template>
  <Message
    :size="size"
    :severity="severity"
    :closable="closable"
    :sticky="sticky"
    :life="life"
    :icon="icon"
    :class="customClass"
    @close="handleClose"
  >
    <template
      #default
      v-if="$slots.default"
    >
      <slot name="default" />
    </template>
  </Message>
</template>

<script setup>
  import Message from 'primevue/message'

  const props = defineProps({
    size: {
      type: String,
      default: null,
      options: ['small', 'large']
    },
    severity: {
      type: String,
      default: 'info',
      options: ['success', 'info', 'warn', 'error', 'secondary', 'contrast']
    },
    closable: {
      type: Boolean,
      default: false
    },
    sticky: {
      type: Boolean,
      default: true
    },
    life: {
      type: Number,
      default: 3000
    },
    icon: {
      type: String,
      default: null
    },
    customClass: {
      type: String,
      default: ''
    }
  })

  const emit = defineEmits(['close'])

  const handleClose = (event) => {
    emit('close', event)
  }
</script>
