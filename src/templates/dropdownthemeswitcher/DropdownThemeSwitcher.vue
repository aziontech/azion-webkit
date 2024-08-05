<template>
  <Dropdown :options="themes" :modelValue="selectedTheme" :autoOptionFocus="false" @update:modelValue="handleThemeChange"
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

let systemColorScheme = ref();
let isWatchingSystemScheme = ref(false)

onMounted(() => {
  systemColorScheme.value = window.matchMedia('(prefers-color-scheme: dark)'); // Get system prefered color scheme
  const colorScheme = localStorage.getItem("prefers-color-scheme"); // Check if there is pre-defined site prefered color scheme

  if (colorScheme && colorScheme !== 'System') selectedTheme.value = themes.find(theme => theme.label === colorScheme); // update dropdown placeholder value
  else watchSystemColorSchemePreferences()
})

// Watch for changes on system color scheme changes
function watchSystemColorSchemePreferences() {
  isWatchingSystemScheme.value = true
  systemColorScheme.value.addEventListener('change', handlePreferColorSchemeChange);
}


function removeWatchSystemColorSchemePreferences() {
  isWatchingSystemScheme.value = false
  systemColorScheme.value.removeEventListener('change', handlePreferColorSchemeChange);
}

function getStystemDefaultTheme() {
  return systemColorScheme.value.matches ? 'Dark' : 'Light';
}

function toggleTheme(add, remove) {
  document.documentElement.classList.add(add)
  document.documentElement.classList.remove(remove)
}

function changeTheme(theme) {
  if (selectedTheme.value.label === theme.label && theme.label !== 'System') return

  selectedTheme.value = theme
  const themeLabel = theme.label === 'System' ? getStystemDefaultTheme() : theme.label

  if (themeLabel === 'Light') toggleTheme('azion-light', 'azion-dark')
  if (themeLabel === 'Dark') toggleTheme('azion-dark', 'azion-light')
}

function handlePreferColorSchemeChange() {
  const colorScheme = localStorage.getItem("prefers-color-scheme");
  if (colorScheme == 'System' || !colorScheme) changeTheme(themes[0]) // Select the 'System' in the themes array
}

function handleThemeChange(theme) {
  changeTheme(theme)

  if (!isWatchingSystemScheme.value && theme.label === 'System') watchSystemColorSchemePreferences()
  if (isWatchingSystemScheme.value && theme.label !== 'System') removeWatchSystemColorSchemePreferences()
  localStorage.setItem('prefers-color-scheme', theme.label)
};
</script>
