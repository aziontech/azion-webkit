<template>
  <BigNumbers :items="items" />
</template>

<script setup>
import BigNumbers from './templates/bignumbers/BigNumbers.vue';

const items = [
{
        "icon": "pi pi-verified",
        "title": "80%",
        "description": "Melhor TCO"
      },
      {
        "icon": "pi pi-upload",
        "title": "20%",
        "description": "Implantações mais rápidas"
      },
      {
        "icon": "pi pi-shield",
        "title": "100%",
        "description": "De disponibilidade, garantida por SLA"
      },
      {
        "icon": "pi pi-code",
        "title": "10x",
        "description": "Aplicações mais rápidas"
      },
      {
        "icon": "pi pi-stopwatch",
        "title": "15ms",
        "description": "Tempo de resposta"
      }
];
</script>
