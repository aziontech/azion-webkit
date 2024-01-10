<template>
  <Dialog
    modal
    header=" "
    position="top"
    v-model:visible="isDialogActive"
    class="w-[95vw] md:w-[85vw] lg:w-[75vw] xl:w-[65vw]"
    @hide="closeSearch">

    <AlgoliaSarch
      :algoliaAppId="algoliaAppId"
      :algoliaApiKey="algoliaApiKey"
      :algoliaIndex="algoliaIndex" />
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
  algoliaIndex: Array
});

const emit = defineEmits(['close']);

const {
  algoliaAppId,
  algoliaApiKey,
  algoliaIndex
} = props;

const isDialogActive = ref(props.isDialogActive);

onUpdated(() => {
  isDialogActive.value = isDialogActive.value === props.isDialogActive ? isDialogActive.value : props.isDialogActive;
});

function closeSearch() {
  isDialogActive.value = false;
  emit('close');
};
</script>
