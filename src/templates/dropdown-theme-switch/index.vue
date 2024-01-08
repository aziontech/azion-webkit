<template>
  <Dropdown :options="themes" :modelValue="selectedTheme" :autoOptionFocus="false" @update:modelValue="onClick"
    optionLabel="label">
    <template #value="slotProps">
      <div v-if="slotProps.value" class="flex gap-2 align-items-center">
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

const theme = {
  light: 'azion-light',
  dark: 'azion-dark'
};


const selectedTheme = ref({
    label: 'System',
    icon: 'pi pi-desktop'
  });

const themes = [
  {
    label: 'System',
    icon: 'pi pi-desktop'
  },
  {
    label: 'Dark',
    icon: 'pi pi-moon'
  },
  {
    label: 'Light',
    icon: 'pi pi-sun'
  },
]
const systemColorScheme = window.matchMedia('(prefers-color-scheme: dark)');

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

function getStystemDefaultTheme() {
  return systemColorScheme.matches ? 'Dark' : 'Light';
}

function changeTheme(theme) {
  selectedTheme.value = theme
  const themeLabel = theme.label === 'System' ? getStystemDefaultTheme() : theme.label

  resetTheme();
  getHTML().classList.add(getTheme(themeLabel));
}

function onClick(theme) {
  changeTheme(theme)
  localStorage.setItem('prefers-color-scheme', theme.label)
};

const colorScheme = localStorage.getItem("prefers-color-scheme");

if (colorScheme && colorScheme !== 'System') {
  selectedTheme.value = themes.find(theme => theme.label === colorScheme);
}

</script>
