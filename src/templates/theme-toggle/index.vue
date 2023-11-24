<template>
  <ToggleButton v-model="buttonThemeCheck" onIcon="pi pi-sun" offIcon="pi pi-moon"
    class="p-button p-button-icon-only p-button-secondary p-button-outlined p-[1.095rem]" />
</template>

<script setup>
import ToggleButton from 'primevue/togglebutton';

const buttonThemeCheck = false
</script>
