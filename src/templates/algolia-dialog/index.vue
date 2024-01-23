<template>
  <Dialog
    modal
    :showHeader="false"
    :blockScroll="true"
    position="top"
    v-model:visible="isDialogActive"
    class="w-[95vw] md:w-[85vw] lg:w-[75vw] xl:w-[65vw]"
    @hide="closeDialog"
    :pt="{
      content: {
        class: 'p-0'
      }
    }">

    <KeyboardKey
      v-if="!hasInputValue"
      keyname="esc"
      class="absolute z-50 right-2 top-2"
      @clicked="toggleDialog(false)" />

    <AlgoliaSarch
      :algoliaAppId="algoliaAppId"
      :algoliaApiKey="algoliaApiKey"
      :algoliaIndex="algoliaIndex"
      :algoliaModel="algoliaModel"
      @keyup="pressKeyboardKey"
      @keydown="pressKeyboardKey" />
  </Dialog>
</template>

<script setup>
import { ref, onUpdated } from 'vue'
import Dialog from 'primevue/dialog'
import AlgoliaSarch from '../algolia/index.vue'
import KeyboardKey from '../keyboard-key/index.vue'

const hasInputValue = ref(false)
const props = defineProps({
  isDialogActive: Boolean,
  algoliaAppId: String,
  algoliaApiKey: String,
  algoliaIndex: Array,
  algoliaModel: Array
});

const emit = defineEmits(['close'])

const { algoliaAppId, algoliaApiKey, algoliaIndex, algoliaModel } = props
const isDialogActive = ref(props.isDialogActive)

onUpdated(() => {
  isDialogActive.value = isDialogActive.value === props.isDialogActive ? isDialogActive.value : props.isDialogActive
})

function toggleDialog(action) {
  if(!action) {
    isDialogActive.value = false
    emit('close')

    return
  }

  isDialogActive.value = true
  emit('open')
}

function pressKeyboardKey() {
  let algoliaSearchInput = document.querySelectorAll('.ais-SearchBox-form input[type=search]')[0]
  algoliaSearchInput.value?.length ? hasInputValue.value = true : hasInputValue.value = false
}
</script>
