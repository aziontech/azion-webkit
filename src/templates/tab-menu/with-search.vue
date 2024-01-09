<template>
  <div class="flex justify-between flex-col lg:flex-row">
    <div class="lg:w-2/3 w-ful">
      <TabMenu class="hidden lg:block overflow-y-auto" :pt="{
        label: 'whitespace-nowrap'
      }" v-model:activeIndex="activeIndex" :model="mappedData" @click="eventHandler(activeIndex)" />
      <Dropdown class="lg:hidden w-full" @change="eventHandler" v-model="activeOption" :options="mappedData" optionLabel="label">
        <template #value="slotProps">
          <div v-if="slotProps.value">
            <div>{{ slotProps.value.label }}</div>
          </div>
        </template>
        <template #option="slotProps">
          <div class="w-full p-0">
            {{ slotProps.option.label }}
          </div>
        </template>
      </Dropdown>
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
//   type: Array<String>
// }

const emit = defineEmits(['indexChanged']);


const { tabList } = props

const mappedData = tabList.map((item, index) => {
  return { label: item, activeIndex: index }
})

const activeIndex = ref(0);
const activeOption = ref(mappedData[activeIndex.value])
const searchInput = ref('');

const eventHandler = (e) => {
  if (typeof e === 'number') {
    activeOption.value = mappedData[activeIndex.value]
  } else {
    activeIndex.value = e.value.activeIndex
  }

  emit('indexChanged', tabList[activeIndex.value])
}

</script>
