<template>
  <!-- <ToggleButton @click="onClick" v-model="status" onLabel="" offLabel="" onIcon="pi pi-sun" offIcon="pi pi-moon"
    class="border-header bg-header" size="small" :pt="{
      icon: { class: 'text-white text-sm' },
      root: { class: 'bg-header hover:bg-header-button-hover' }
    }" /> -->
  <Dropdown :options="themes" :modelValue="status" optionValue="value" :autoOptionFocus="false"
    optionLabel="label" :placeholder="activeItem">
  </Dropdown>
</template>

<script setup>
import { ref, watch } from 'vue';
import Dropdown from 'primevue/dropdown';

const status = ref(false);
const activeItem = ref('Dark')
const theme = {
  light: 'azion-light',
  dark: 'azion-dark'
};

const themes = [
  {
    label: 'Dark',
    value: 'azion-dark',
    icon: 'pi pi-moon'
  },
  {
    label: 'Light',
    value: 'azion-light',
    icon: 'pi pi-sun'
  },
]

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

function onClick() {
  resetTheme();
  getHTML().classList.add(getTheme());
};

watch(status, () => console.log(status.value))

</script>
