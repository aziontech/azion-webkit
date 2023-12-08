<template>
  <Dropdown
    :options="themes"
    :modelValue="status"
    :autoOptionFocus="false"
    :placeholder="activeItem"
    @update:modelValue="onClick"
    optionLabel="label"
    optionValue="value">
  </Dropdown>
</template>

<script setup>
import { ref } from 'vue';
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

function getTheme(selectedTheme) {
  return selectedTheme === theme.light ? theme.light : theme.dark;
};

function resetTheme() {
  const html = getHTML();

  html.classList.remove('azion-light');
  html.classList.remove('azion-dark');
};

function onClick(theme) {
  resetTheme();
  status.value = theme
  getHTML().classList.add(getTheme(theme));

};
</script>
