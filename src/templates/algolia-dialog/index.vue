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

    <AlgoliaSarch
      :algoliaAppId="algoliaAppId"
      :algoliaApiKey="algoliaApiKey"
      :algoliaIndex="algoliaIndex"
      :algoliaModel="algoliaModel" />
  </Dialog>
</template>

<script setup>
import { ref, onUpdated } from 'vue';
import Dialog from 'primevue/dialog';
import AlgoliaSarch from '../algolia/index.vue';

const props = defineProps({
  isDialogActive: Boolean,
  algoliaAppId: String,
  algoliaApiKey: String,
  algoliaIndex: Array,
  algoliaModel: Array
});

const emit = defineEmits(['close']);

const { algoliaAppId, algoliaApiKey, algoliaIndex, algoliaModel } = props;
const isDialogActive = ref(props.isDialogActive);
// const isMobile = /iPhone|iPad|Android/i.test(window.navigator.userAgent);
// const isMac = /(Mac)/i.test(window.navigator.userAgent);

onUpdated(() => {
  isDialogActive.value = isDialogActive.value === props.isDialogActive ? isDialogActive.value : props.isDialogActive;
});

function openDialog() {
  isDialogActive.value = true;
  emit('close');
};

function closeDialog() {
  isDialogActive.value = alse;
  emit('close');
};

// function keydownCode(e) {
//   return (e.metaKey ? e.metaKey : e.ctrlKey) && e.keyCode;
// }
</script>
