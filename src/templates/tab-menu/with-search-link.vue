<template>
  <div class="container flex justify-between flex-col lg:flex-row">
    <div class="lg:w-2/3 w-full">
      <TabMenu class="lg:block overflow-y-auto" :pt="{ label: 'whitespace-nowrap' }"
        :model="tabList" :url="tabList.url" :label="tabList.label" :activeIndex="activeIndex"
      />
    </div>
    <div class="w-full lg:w-1/3 flex justify-end pt-4 lg:pt-0">
      <span class="p-input-icon-left w-full lg:max-w-xs">
        <i class="pi pi-search" />
        <InputText class="w-full " v-model="searchInput" :placeholder="inputPlaceholder" />
      </span>
    </div>
  </div>
</template>

<script setup>
import TabMenu from 'primevue/tabmenu';
import InputText from 'primevue/inputtext';
import { ref } from "vue";

defineProps({
  tabList: {
    type: Array,
    required: true
  },
  inputPlaceholder: {
    type: String,
    required: false,
    default: "Search articles..."
  },
  activeIndex: {
    type: Number,
    required: false
  }
});

// interface Tablist {
//   type: Array<{
//   label: String
//   url: String || null
// }>
// }

const searchInput = ref('')

</script>
