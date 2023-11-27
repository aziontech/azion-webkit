<template>
  <!-- <Button icon="pi pi-arrow-right" @click="visible = true" /> -->
  <div class="card flex justify-content-center">
    <Sidebar v-model:visible="visibleRight" header="Right Sidebar" position="right">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
    </Sidebar>
    <Button icon="pi pi-arrow-left" @click="visibleRight = true" />
  </div>
</template>

<script setup>
import { ref } from "vue";
import Sidebar from 'primevue/sidebar';

const visibleRight = ref(false);
</script>
