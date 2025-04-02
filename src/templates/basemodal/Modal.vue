<template>
  <div
    @click="setVisibility(true)"
    class="cursor-pointer"
  >
    <slot name="action" />
  </div>

  <div class="px-container">
    <Dialog
      v-model:visible="visible"
      dismissableMask
      closeOnEscape
      modal
      :showHeader="showHeader"
    >
      <template
        #header
        v-if="$slots.header"
      >
        <slot name="header" />
      </template>
      <div :class="{ 'border surface-border rounded': backgroundColor == 'outlined' }">
        <slot name="content" />
      </div>
      <template
        #footer
        v-if="$slots.footer"
      >
        <slot name="footer" />
      </template>
    </Dialog>
  </div>
</template>

<script setup>
  import Dialog from 'primevue/dialog'
  import { ref } from 'vue'

  const props = defineProps({
    backgroundColor: {
      type: String,
      required: false,
      default: 'default',
      options: ['outlined', 'default']
    },
    showHeader: {
      type: Boolean,
      required: false,
      default: true
    }
  })

  const visible = ref(false)

  const setVisibility = function (visibility = true) {
    visible.value = visibility
  }

  const getPTOptions = () => {
    if (props.backgroundColor == 'outlined') {
      return {
        content: 'bg-transparent p-0',
        root: 'shadow-transparent shadow-none',
        header: 'bg-transparent border-none p-0 pb-4 ml-auto',
        closeButton: 'border-none hover:bg-[--surface-400] hover:text-color-secondary text-color'
      }
    }
  }
</script>
