<template>
  <Dialog
    modal
    v-model:visible="isDialogActive"
    class="w-[95vw] md:w-[40vw]"
    header="Search"
    @hide="closeSearch">
    <AlgoliaSarch />
  </Dialog>
</template>

<script setup>
import { ref, onUpdated } from 'vue';
import Dialog from 'primevue/dialog';
import AlgoliaSarch from '../algolia/index.vue';

const emit = defineEmits(['close']);

const props = defineProps({isDialogActive: Boolean});
const isDialogActive = ref(props.isDialogActive);

onUpdated(() => {
  isDialogActive.value = isDialogActive.value === props.isDialogActive ? isDialogActive.value : props.isDialogActive;
});

function closeSearch() {
  isDialogActive.value = false;
  emit('close');
};
</script>
