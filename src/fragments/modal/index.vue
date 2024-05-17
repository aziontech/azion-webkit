<template>
  <div @click="visible = true">
    <slot name="action"/>
  </div>
  <div class="px-container">
    <Dialog v-model:visible="visible" modal dismissableMask closeOnEscape :showHeader="showHeader" :style="customStyle">
      <template #header v-if="$slots.header">
        <slot name="header" />
      </template>
      <slot name="content" />
      <template #footer v-if="$slots.footer">
        <slot name="header" />
      </template>
    </Dialog>
  </div>
</template>

<script setup>
import Dialog from 'primevue/dialog';
import { ref } from "vue";

defineProps({
  customStyle: {
    type: String,
    required: false,
    default: ''
  },
  showHeader: {
    type: Boolean,
    required: false,
    default: true
  }
})

const visible = ref(false);
</script>
