<template>
  <AlgoliaDialog
    :algoliaAppId="algoliaAppId"
    :algoliaApiKey="algoliaApiKey"
    :algoliaIndex="algoliaIndex"
    :algoliaModel="algoliaModel"
    :isDialogActive="isDialogActive"
    @close="closeDialog"/>

    <Button
      outlined
      size="small"
      icon="pi pi-search"
      class="bg-header hover:bg-header-button-hover !text-white flex border-header"
      @click="activeDialog"
      :pt="{
        label: { class: 'text-white' },
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

function disableBodyScroll() {
  HTML.style.overflow = 'hidden'
}

function enableBodyScroll() {
  HTML.style.overflow = 'auto'
}

function focusSearchInput() {
  setTimeout(function() {
    document.querySelectorAll('.ais-SearchBox-form input[type=search]')[0]?.focus()
  }, 800)
}

function activeDialog() {
  isDialogActive.value = true

  focusSearchInput();
  disableBodyScroll()
}

function closeDialog() {
  isDialogActive.value = false
  enableBodyScroll()
}

/////////////////////////////////
// CAPTURE cmd + k or ctrl + k //
/////////////////////////////////


window.addEventListener('keydown', (event) => {
  if ((event.metaKey || event.ctrlKey) && event.key === 'k') {
    activeDialog();
  }
})
</script>
