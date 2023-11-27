<template>
  <Button 
    outlined 
    @click="visibleRight = true"
    size="small"
    class="text-white flex-none border-header flex lg:hidden"
    icon="pi pi-bars"
    :pt="{
      label: { class: 'text-white hover:bg-header-button-hover' },
      icon: { class: 'text-white' }
    }"
    :class="{
      'bg-header-button-enabled': visibleRight,
      'bg-header hover:bg-header-button-hover': !visibleRight
    }"
  />
  <Sidebar v-model:visible="visibleRight" header="Right Sidebar" position="right">
    <p>Azion 123</p>
  </Sidebar>
</template>

<script setup>
import { ref } from "vue";
import Button from "primevue/button";
import Sidebar from 'primevue/sidebar';

const visibleRight = ref(false);
</script>
