<template>
  <div class="p-4 space-y-4 px-continer">
    <h1 class="text-2xl font-bold mb-6">Message Component Examples</h1>

    <!-- Success Message -->
    <div class="space-y-2">
      <h2 class="text-lg font-semibold">Success Message</h2>
      <Message severity="success">
        Operation completed successfully <a href="https://www.azion.com/" class="text-link">https://www.azion.com/</a>!
      </Message>
    </div>

    <!-- Info Message -->
    <div class="space-y-2">
      <h2 class="text-lg font-semibold">Info Message</h2>
      <Message severity="info">
        Here's some useful information for you.
      </Message>
    </div>

    <!-- Warning Message -->
    <div class="space-y-2">
      <h2 class="text-lg font-semibold">Warning Message</h2>
      <Message severity="warn">
        Please be careful with this action.
      </Message>
    </div>

    <!-- Error Message -->
    <div class="space-y-2">
      <h2 class="text-lg font-semibold">Error Message</h2>
      <Message severity="error">
        An error occurred while processing your request.
      </Message>
    </div>

    <!-- Secondary Message -->
    <div class="space-y-2">
      <h2 class="text-lg font-semibold">Secondary Message</h2>
      <Message severity="secondary">
        This is a secondary message with neutral styling.
      </Message>
    </div>

    <!-- Contrast Message -->
    <div class="space-y-2">
      <h2 class="text-lg font-semibold">Contrast Message</h2>
      <Message severity="contrast">
        High contrast message for better visibility.
      </Message>
    </div>

    <!-- Closable Message -->
    <div class="space-y-2">
      <h2 class="text-lg font-semibold">Closable Message</h2>
      <Message
        severity="info"
        :closable="true"
        @close="handleMessageClose"
      >
        This message can be closed by clicking the X button.
      </Message>
    </div>

    <!-- Non-sticky Message -->
    <div class="space-y-2">
      <h2 class="text-lg font-semibold">Auto-close Message</h2>
      <Message
        severity="success"
        :sticky="false"
        :life="2000"
      >
        This message will disappear after 2 seconds.
      </Message>
    </div>

    <!-- Custom Icon Message -->
    <div class="space-y-2">
      <h2 class="text-lg font-semibold">Custom Icon Message</h2>
      <Message
        severity="info"
        icon="pi pi-star"
      >
        Message with a custom star icon.
      </Message>
    </div>

    <!-- Custom Class Message -->
    <div class="space-y-2">
      <h2 class="text-lg font-semibold">Custom Styled Message</h2>
      <Message
        severity="info"
        custom-class="custom-message-style"
      >
        This message has custom styling applied.
      </Message>
    </div>

    <!-- Size Examples -->
    <div class="space-y-2">
      <h2 class="text-lg font-semibold">Message Sizes</h2>
      <Message size="small" severity="info" icon="pi pi-send">
        Small message with icon
      </Message>
      <Message severity="success" icon="pi pi-user">
        Normal message with icon
      </Message>
      <Message size="large" severity="warn" icon="pi pi-check">
        Large message with icon
      </Message>
    </div>
  </div>
</template>

<script setup>
  import Message from './templates/message'

  const handleMessageClose = (event) => {
    console.log('Message closed:', event)
  }
</script>

<style scoped>
  .space-y-4 > * + * {
    margin-top: 1rem;
  }

  .space-y-2 > * + * {
    margin-top: 0.5rem;
  }

  :deep(.custom-message-style) {
    border: 2px dashed #f3652b;
    background: linear-gradient(45deg, #f0f9ff, #eff6ff);
  }
</style>
