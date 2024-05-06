<template>
  <div class="surface-section py-20 px-container">
    <BigNumbers :items="items" :border="false" :centralized="false" />
  </div>
</template>

<script setup>
import BigNumbers from './templates/big-numbers/index.vue';

const items = [
  { titleup:'Até', title: '1,6x', description: 'mais rápido que o Macbook Air (M1)' },
  { titleup:'Até', title: '13x', description: 'mais rápido que o melhor Macbook Air com Intel' },
  { titleup:'Até', title: '18h', description: 'de bateria' }
];
</script>
