<template>
  <Message
    :size="size"
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
    size: {
      type: String,
      required: false,
      default: '',
      options: ['small', 'large']
    },
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
