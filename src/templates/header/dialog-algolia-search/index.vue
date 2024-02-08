<template>
  <AlgoliaDialog
    :algoliaAppId="algoliaAppId"
    :algoliaApiKey="algoliaApiKey"
    :algoliaIndex="algoliaIndex"
    :algoliaModel="algoliaModel"
    :isDialogActive="isDialogActive"
    @close="closeDialog"/>

    <Button
      size="small"
      icon="pi pi-search"
      class="text-white flex-none border-header w-8 h-8 bg-header hover:bg-header-button-hover"
      @click="activeDialog"
      :pt="{
        label: { class: 'text-white hover:bg-header-button-hover' },
        icon: { class: 'text-white' }
      }" />
</template>

<script setup>
import { ref } from 'vue'
import Button from 'primevue/button'
import AlgoliaDialog from '../../algolia-dialog/index.vue'

const props = defineProps({
  algoliaAppId: {
    type: String
  },
  algoliaApiKey: {
    type: String
  },
  algoliaIndex: {
    type: Array
  },
  algoliaModel: {
    type: Array
  }
})

const {
  algoliaAppId,
  algoliaApiKey,
  algoliaIndex,
  algoliaModel
} = props;

let isDialogActive = ref(false)
const HTML = document.querySelectorAll('html')[0]

function setHtmlOverflow(overflow) {
  HTML.style.overflow = overflow
}

function focusSearchInput() {
  setTimeout(function() {
    document.querySelectorAll('.ais-SearchBox-form input[type=search]')[0]?.focus()
  }, 800)
}

function activeDialog() {
  isDialogActive.value = true

  focusSearchInput();
  setHtmlOverflow('hidden')
}

function closeDialog() {
  isDialogActive.value = false
  setHtmlOverflow('auto')
}

/////////////////////////////////
// CAPTURE cmd + k or ctrl + k //
/////////////////////////////////

window.addEventListener('keydown', (event) => {
  if ((event.metaKey || event.ctrlKey) && event.key === 'k') activeDialog()
})
</script>
