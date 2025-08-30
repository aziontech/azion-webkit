<template>
  <Dialog
    modal
    v-model:visible="isDialogActive"
    @hide="toggleDialog(false)"
    :showHeader="false"
    :blockScroll="true"
    position="top"
    class="w-[95vw] md:w-[85vw] lg:w-[75vw] xl:w-[65vw]"
    dismissableMask
    :pt="{
      content: {
        class: 'p-0'
      }
    }"
  >
    <KeyboardKey
      v-if="!hasInputValue"
      keyname="esc"
      class="absolute z-50 right-2 top-2"
      @clicked="toggleDialog(false)"
    />

    <AlgoliaInstantSearch
      :algoliaAppId="algoliaAppId"
      :algoliaApiKey="algoliaApiKey"
      :algoliaIndex="algoliaIndex"
      :algoliaModel="algoliaModel"
      :inputPlaceholder="inputPlaceholder"
      @keyup="pressKeyboardKey"
      @keydown="pressKeyboardKey"
    />
  </Dialog>
</template>

<script setup>
  import { ref, onUpdated } from 'vue'
  import Dialog from 'primevue/dialog'
  import AlgoliaInstantSearch from '../ais/AlgoliaInstantSearch.vue'
  import KeyboardKey from '../keyboardkey/KeyboardKey.vue'

  const emit = defineEmits(['close'])
  const hasInputValue = ref(false)
  const props = defineProps({
    isDialogActive: Boolean,
    algoliaAppId: String,
    algoliaApiKey: String,
    algoliaIndex: Array,
    algoliaModel: Array,
    inputPlaceholder: {
      type: String,
      required: false,
    }
  })

  const { algoliaAppId, algoliaApiKey, algoliaIndex, algoliaModel } = props
  const isDialogActive = ref(props.isDialogActive)

  onUpdated(() => {
    isDialogActive.value =
      isDialogActive.value === props.isDialogActive ? isDialogActive.value : props.isDialogActive
  })

  function toggleDialog(action) {
    if (!action) {
      isDialogActive.value = false
      emit('close')

      return
    }

    isDialogActive.value = true
    emit('open')
  }

  function pressKeyboardKey() {
    let algoliaSearchInput = document.querySelectorAll('.ais-SearchBox-form input[type=search]')[0]
    algoliaSearchInput.value?.length ? (hasInputValue.value = true) : (hasInputValue.value = false)
  }
</script>