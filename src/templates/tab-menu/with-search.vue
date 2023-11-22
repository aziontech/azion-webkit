<template>
  <div class="container flex justify-between">
    <TabMenu class="w-2/3" v-model:activeIndex="active" :model="tabList" />
    <div class="w-1/3 flex justify-end">
      <span class="p-input-icon-left w-full max-w-xs">
        <i class="pi pi-search" />
        <InputText class="w-full " v-model="searchInput" placeholder="Search articles..." />
      </span>
    </div>
  </div>
</template>

<script setup>
import TabMenu from 'primevue/tabmenu';
import InputText from 'primevue/inputtext';
import { ref } from "vue";

const active = ref(0);

defineProps({
  tabList: {
    type: Array,
    required: true
  }
});

const searchInput = ref('')
</script>
