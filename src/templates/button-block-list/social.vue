<template>
  <div class="flex gap-2">
    <a :href="`https://www.facebook.com/sharer/sharer.php?u=${sharedURL}`" target="_blank" rel="noopener noreferrer"
      class="p-button p-component p-button-icon-only p-button-text p-button-sm no-underline">
      <span class="p-button-icon pi pi-facebook" data-pc-section="icon"></span>
    </a>
    <a :href="`https://x.com/intent/tweet?url=${sharedURL}&via=@aziontech`" target="_blank" rel="noopener noreferrer"
      class="p-button p-component p-button-icon-only p-button-text p-button-sm no-underline">
      <span class="p-button-icon pi pi-twitter" data-pc-section="icon"></span>
    </a>
    <a :href="`https://www.linkedin.com/sharing/share-offsite/?url=${sharedURL}`" target="_blank" rel="noopener noreferrer"
      class="p-button p-component p-button-icon-only p-button-text p-button-sm no-underline">
      <span class="p-button-icon pi pi-linkedin" data-pc-section="icon"></span>
    </a>
    <!-- <a href="https://discord.com/invite/Yp9N7RMVZy" target="_blank" rel="noopener noreferrer"
      class="p-button p-component p-button-icon-only p-button-text p-button-sm no-underline">
      <span class="p-button-icon pi pi-discord" data-pc-section="icon"></span>
    </a>
    <a href="https://www.instagram.com/aziontech/" target="_blank" rel="noopener noreferrer"
      class="p-button p-component p-button-icon-only p-button-text p-button-sm no-underline">
      <span class="p-button-icon pi pi-instagram" data-pc-section="icon"></span>
    </a> -->
    <div id="sharedLink" tabindex="-1" v-tooltip.focus.top="{ value: tooltipText, showDelay: 200 }">
      <Button id="sharedLinkButton" size="sm" icon="pi pi-link" text @click="copyToClipboard" />
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
