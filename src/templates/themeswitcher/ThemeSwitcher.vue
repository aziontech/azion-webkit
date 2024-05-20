<template>
  <ToggleButton
    @click="onClick"
    v-model="status"
    onLabel=""
    offLabel=""
    onIcon="pi pi-sun"
    offIcon="pi pi-moon"
    outlined
    class="border-header"
    size="small"
    :pt="{
      icon: { class: '!text-white text-sm' },
      root: { class: '!bg-header hover:!bg-header-button-hover' }
    }" />
</template>

<script setup>
import { ref } from 'vue';
import ToggleButton from 'primevue/togglebutton';

const status = ref(false);
const theme = {
  light: 'azion-light',
  dark: 'azion-dark'
};

function getHTML() {
  return document.querySelector('html');
};

function getTheme() {
  return status.value ? theme.light : theme.dark;
};

function resetTheme() {
  const html = getHTML();

  html.classList.remove('azion-light');
  html.classList.remove('azion-dark');
};

function onClick(){
  resetTheme();
  getHTML().classList.add(getTheme());
};
</script>
