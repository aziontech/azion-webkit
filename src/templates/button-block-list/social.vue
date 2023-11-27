<template>
  <div class="flex gap-3 flex-col font-medium">
    <h3> {{ title }}</h3>
    <div class="flex gap-2">
      <a :href="`https://www.facebook.com/sharer/sharer.php?u=${sharedURL}`" target="_blank" rel="noopener noreferrer"
        class="p-button p-component p-button-icon-only p-button-primary p-button-outlined">
        <span class="p-button-icon pi pi-facebook" data-pc-section="icon"></span>
      </a>
      <a :href="`https://x.com/intent/tweet?url=${sharedURL}&via=@aziontech`" target="_blank" rel="noopener noreferrer"
        class="p-button p-component p-button-icon-only p-button-primary p-button-outlined">
        <span class="p-button-icon ai ai-twitter" data-pc-section="icon"></span>
      </a>
      <a :href="`https://www.linkedin.com/sharing/share-offsite/?url=${sharedURL}`" target="_blank"
        rel="noopener noreferrer" class="p-button p-component p-button-icon-only p-button-primary p-button-outlined">
        <span class="p-button-icon pi pi-linkedin" data-pc-section="icon"></span>
      </a>
      <div id="sharedLink" tabindex="-1" v-tooltip.focus.top="{ value: tooltipText, showDelay: 200 }">
        <Button severity="primary" id="sharedLinkButton" icon="pi pi-link" @click="copyToClipboard" outlined />
      </div>
    </div>
  </div>
</template>
<script setup>
import Button from 'primevue/button';

const props = defineProps({
  sharedURL: {
    type: URL,
    required: true
  },
  tooltipText: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: false,
    default: "Share this post"
  }
});

const { sharedURL } = props;

const copyToClipboard = () => {
  navigator.clipboard.writeText(sharedURL)
    .then(() => {
      const tooltipElement = document.getElementById('sharedLink')
      tooltipElement.focus()

      setTimeout(() => {
        if (tooltipElement == document.activeElement) {
          document.getElementById('sharedLinkButton').focus()
        }
      }, 2000)
    })
}
</script>
