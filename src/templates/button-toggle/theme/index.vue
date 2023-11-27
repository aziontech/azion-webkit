<template>
  <ToggleButton
    @click="onClick"
    v-model="status"
    onLabel=""
    offLabel=""
    onIcon="pi pi-sun"
    offIcon="pi pi-moon"
    class="p-button p-button-secondary p-button-outlined p-[1.095rem]" />
</template>

<script setup>
import { ref } from 'vue';
import ToggleButton from 'primevue/togglebutton';

let status = ref(false);

function getHTML() {
  return document.querySelector('html');
}

function reset() {
  const html = getHTML();

  html.classList.remove('azion-light');
  html.classList.remove('azion-dark');
};

function onClick(){
  reset();
  getHTML().classList.add(status.value ? 'azion-light' : 'azion-dark');
}
</script>
