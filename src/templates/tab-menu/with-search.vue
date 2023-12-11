<template>
  <div class="flex justify-between flex-col lg:flex-row">
    <div class="lg:w-2/3 w-ful">
      <TabMenu class="hidden lg:block overflow-y-auto"
      :pt="{
        label: 'whitespace-nowrap'
      }"
      v-model:activeIndex="active" :model="mappedDataTabMenu" @click="$emit('categorieChanged', tabList[active]);
"/>
      <Dropdown class="lg:hidden w-full" v-model="active" :options="tabList" />
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
import Dropdown from 'primevue/dropdown';
import { ref } from "vue";

const active = ref(0);

const props = defineProps({
  tabList: {
    type: Array,
    required: true
  },
  inputPlaceholder: {
    type: String,
    required: false,
    default: "Search articles..."
  },
});

// interface Tablist {
//   type: Array<{
//   label: String
// }>
// }

const searchInput = ref('')
const { tabList } = props

const mappedDataTabMenu = tabList.map(item => {
  return { label: item }
})

</script>
