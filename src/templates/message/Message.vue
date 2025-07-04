<template>
  <Message
    :severity="severity"
    :closable="closable"
    :sticky="sticky"
    :life="life"
    :icon="icon"
    :class="customClass"
    :pt="ptOptions"
    @close="handleClose"
  >
    <template
      #default
      v-if="$slots.default"
    >
      <slot name="default" />
    </template>

    <template
      #icon
      v-if="$slots.icon"
    >
      <slot name="icon" />
    </template>

    <template
      #container
      v-if="$slots.container"
    >
      <slot name="container" />
    </template>

    <template
      #closeicon
      v-if="$slots.closeicon"
    >
      <slot name="closeicon" />
    </template>
  </Message>
</template>

<script setup>
  import Message from 'primevue/message'

  const props = defineProps({
    severity: {
      type: String,
      required: false,
      default: 'info',
      options: ['success', 'info', 'warn', 'error', 'secondary', 'contrast']
    },
    closable: {
      type: Boolean,
      required: false,
      default: false
    },
    sticky: {
      type: Boolean,
      required: false,
      default: true
    },
    life: {
      type: Number,
      required: false,
      default: 3000
    },
    icon: {
      type: String,
      required: false,
      default: null
    },
    customClass: {
      type: String,
      required: false,
      default: ''
    }
  })

  const emit = defineEmits(['close'])

  const ptOptions = {
    root: ({ props }) => ({
      class: [
        'azion-message',
        `azion-message-${props.severity}`,
        props.customClass
      ]
    }),
    wrapper: {
      class: 'azion-message-wrapper'
    },
    icon: {
      class: 'azion-message-icon'
    },
    text: {
      class: 'azion-message-text'
    },
    closeButton: {
      class: 'azion-message-close-button'
    },
    closeIcon: {
      class: 'azion-message-close-icon'
    }
  }

  const handleClose = (event) => {
    emit('close', event)
  }
</script>

<style scoped>
  :deep(.azion-message) {
    border-radius: 6px;
    margin: 0.5rem 0;
    display: flex;
    align-items: center;
    padding: 0.75rem 1rem;
    border: 1px solid;
  }

  :deep(.azion-message-wrapper) {
    display: flex;
    align-items: center;
    flex: 1;
  }

  :deep(.azion-message-icon) {
    margin-right: 0.5rem;
    font-size: 1.125rem;
  }

  :deep(.azion-message-text) {
    flex: 1;
    font-size: 0.875rem;
    line-height: 1.25rem;
  }

  :deep(.azion-message-close-button) {
    background: transparent;
    border: none;
    cursor: pointer;
    margin-left: 0.5rem;
    padding: 0.25rem;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  :deep(.azion-message-close-icon) {
    font-size: 1rem;
  }

  /* Success variant */
  :deep(.azion-message-success) {
    background-color: #f0f9ff;
    border-color: #10b981;
    color: #065f46;
  }

  /* Info variant */
  :deep(.azion-message-info) {
    background-color: #eff6ff;
    border-color: #3b82f6;
    color: #1e40af;
  }

  /* Warning variant */
  :deep(.azion-message-warn) {
    background-color: #fffbeb;
    border-color: #f59e0b;
    color: #92400e;
  }

  /* Error variant */
  :deep(.azion-message-error) {
    background-color: #fef2f2;
    border-color: #ef4444;
    color: #b91c1c;
  }

  /* Secondary variant */
  :deep(.azion-message-secondary) {
    background-color: #f8fafc;
    border-color: #64748b;
    color: #475569;
  }

  /* Contrast variant */
  :deep(.azion-message-contrast) {
    background-color: #1f2937;
    border-color: #374151;
    color: #f9fafb;
  }

  /* Dark theme adjustments */
  .azion-dark {
    :deep(.azion-message-success) {
      background-color: #064e3b;
      border-color: #10b981;
      color: #6ee7b7;
    }

    :deep(.azion-message-info) {
      background-color: #1e3a8a;
      border-color: #3b82f6;
      color: #93c5fd;
    }

    :deep(.azion-message-warn) {
      background-color: #78350f;
      border-color: #f59e0b;
      color: #fbbf24;
    }

    :deep(.azion-message-error) {
      background-color: #7f1d1d;
      border-color: #ef4444;
      color: #fca5a5;
    }

    :deep(.azion-message-secondary) {
      background-color: #334155;
      border-color: #64748b;
      color: #cbd5e1;
    }

    :deep(.azion-message-contrast) {
      background-color: #f9fafb;
      border-color: #d1d5db;
      color: #1f2937;
    }
  }

  :deep(.azion-message-close-button:hover) {
    background-color: rgba(0, 0, 0, 0.1);
  }

  .azion-dark :deep(.azion-message-close-button:hover) {
    background-color: rgba(255, 255, 255, 0.1);
  }
</style>
