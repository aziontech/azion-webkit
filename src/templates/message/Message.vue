<template>
  <Message
    :severity="severity"
    :closable="closable"
    :sticky="sticky"
    :life="life"
    :icon="icon"
    :class="[customClass, sizeClass]"
    @close="handleClose"
  >
    <template
      #default
      v-if="$slots.default"
    >
      <slot name="default" />
    </template>

    <template
      #messageicon
      v-if="$slots.messageicon"
    >
      <slot name="messageicon" />
    </template>
  </Message>
</template>

<script setup>
  import Message from 'primevue/message'
  import { computed } from 'vue'

  const props = defineProps({
    size: {
      type: String,
      required: false,
      default: undefined,
      validator: (value) => !value || ['small', 'large'].includes(value)
    },
    severity: {
      type: String,
      required: false,
      default: 'info',
      options: ['success', 'info', 'warn', 'error', 'secondary', 'contrast']
    },
    closable: {
      type: Boolean,
      default: false
    },
    sticky: {
      type: Boolean,
      required: false,
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
      required: false,
      default: ''
    }
  })

  const emit = defineEmits(['close'])

  const sizeClass = computed(() => {
    if (!props.size) return ''
    const className = `azion-message-${props.size}`
    console.log('Size class applied:', className)
    return className
  })

  const handleClose = (event) => {
    emit('close', event)
  }
</script>

<style>
  .azion-message-small {
    font-size: 0.875rem !important;
  }

  .p-message-wrapper {
    padding: 0.5rem 0.75rem !important;
  }

  .azion-message-small .p-message-icon {
    font-size: 1rem !important;
  }

  .azion-message-small .p-message-text {
    font-size: 0.875rem !important;
  }

  .azion-message-large {
    font-size: 1.125rem !important;
  }

  .azion-message-large .p-message-icon {
    font-size: 1.5rem !important;
  }

  .azion-message-large .p-message-text {
    font-size: 1.125rem !important;
  }

  .azion-message-large .p-message-close {
    width: 1.5rem !important;
    height: 1.5rem !important;
  }
</style>
