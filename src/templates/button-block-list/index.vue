<template>
  <div class="flex gap-4 overflow-x-auto py-4">
    <Button class="min-w-fit" v-for="(btn, index) in props.dataList" :key="index" outlined rounded>
      {{ btn }}
    </Button>
  </div>
</template>

<script setup>
import Button from 'primevue/button';

const props = defineProps({
  dataList: {
    type: Array,
    required: true
  }
});
</script>
