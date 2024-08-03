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
import { ref, onMounted } from 'vue';
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

let systemColorScheme; /** onMounted variables, needed for Astro to use browser api */
let colorScheme;

onMounted(() => {
  systemColorScheme = window.matchMedia('(prefers-color-scheme: dark)');
  colorScheme = localStorage.getItem("prefers-color-scheme");

  if (colorScheme && colorScheme !== 'System') {
    selectedTheme.value = themes.find(theme => theme.label === colorScheme);
  }
})

function resetTheme() {
  const currentTheme = document.documentElement.getAttribute('Light');
  if (currentTheme) document.documentElement.removeAttribute('light')

};

function getStystemDefaultTheme() {
  return systemColorScheme.matches ? 'Dark' : 'Light';
}

function changeTheme(theme) {
  selectedTheme.value = theme
  const themeLabel = theme.label === 'System' ? getStystemDefaultTheme() : theme.label

  resetTheme();
  if (themeLabel === 'Light') document.documentElement.setAttribute('light', 'true')
}

function onClick(theme) {
  changeTheme(theme)
  localStorage.setItem('prefers-color-scheme', theme.label)
};

</script>
