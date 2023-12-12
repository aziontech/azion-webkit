<template>
  <Dropdown
    :options="themes"
    :modelValue="status"
    :autoOptionFocus="false"
    @update:modelValue="onClick"
    optionLabel="label">
    <template #value="slotProps">
      <div
        v-if="slotProps.value"
        class="flex gap-2 align-items-center">
        <i :class="slotProps.value.icon"></i>
        <div>{{ slotProps.value.label }}</div>
      </div>
    </template>
    <template #option="slotProps">
      <div class="flex gap-2 align-items-center">
        <i :class="slotProps.option.icon"></i>
        <div>{{ slotProps.option.label }}</div>
      </div>
    </template>
  </Dropdown>
</template>

<script setup>
import { ref } from 'vue';
import Dropdown from 'primevue/dropdown';

const status = ref({
    label: 'Dark',
    icon: 'pi pi-moon'
  });
const theme = {
  light: 'azion-light',
  dark: 'azion-dark'
};

const themes = [
  {
    label: 'Dark',
    icon: 'pi pi-moon'
  },
  {
    label: 'Light',
    icon: 'pi pi-sun'
  },
]

function getHTML() {
  return document.querySelector('html');
};

function getTheme(selectedTheme) {
  return selectedTheme === "Dark" ? theme.dark : theme.light;
};

function resetTheme() {
  const html = getHTML();

  html.classList.remove('azion-light');
  html.classList.remove('azion-dark');
};

function onClick(theme) {
  status.value = theme

  resetTheme();
  getHTML().classList.add(getTheme(theme.label));
};
</script>
