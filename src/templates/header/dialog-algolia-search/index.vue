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

function activeDialog() {
  isDialogActive.value = true
}

function closeDialog() {
  isDialogActive.value = false
}
</script>
