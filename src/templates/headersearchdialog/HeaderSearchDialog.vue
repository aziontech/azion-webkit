<template>
  <AlgoliaDialog
    :algoliaAppId="algoliaAppId"
    :algoliaApiKey="algoliaApiKey"
    :algoliaIndex="algoliaIndex"
    :algoliaModel="algoliaModel"
    :isDialogActive="isDialogActive"
    @close="closeDialog"
    :inputPlaceholder="inputPlaceholder"
  />

  <Button
    icon="pi pi-search"
    aria-label="Search"
    class="text-neutral-900 flex-none border-header p-2 bg-transparent xl:border-hidden"
    @click="activeDialog"
    :pt="{
      root: { class: 'xl:p-6' },
      label: { class: 'text-neutral-200' },
      icon: { class: 'xl:text-neutral-200' }
    }"
  />
</template>

<script setup>
  import { ref } from 'vue'
  import Button from 'primevue/button'
  import AlgoliaDialog from '../aisdialog/AlgoliaDialog.vue'

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
    },
    inputPlaceholder: {
      type: String,
      required: false,
      default: 'Search Azion'
    }
  })

  const { algoliaAppId, algoliaApiKey, algoliaIndex, algoliaModel } = props

  let isDialogActive = ref(false)
  const HTML = document.querySelectorAll('html')[0]

  function setHtmlOverflow(overflow) {
    HTML.style.overflow = overflow
  }

  function focusSearchInput() {
    setTimeout(function () {
      document.querySelectorAll('.ais-SearchBox-form input[type=search]')[0]?.focus()
    }, 800)
  }

  function activeDialog() {
    isDialogActive.value = true

    focusSearchInput()
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
