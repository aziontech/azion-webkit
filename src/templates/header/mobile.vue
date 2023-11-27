<template>
  <Button outlined @click="visibleRight = true">
    <i class="pi pi-bars"></i>
  </Button>
  <Sidebar v-model:visible="visibleRight" header="Right Sidebar" position="right">
    <p>Azion 123</p>
  </Sidebar>
</template>

<script setup>
import { ref } from "vue";
import Sidebar from 'primevue/sidebar';

const visibleRight = ref(false);
</script>
