<template>
  <div class="flex w-full">
    <TabMenu class="hidden md:block w-full" :pt="{
      label: 'whitespace-nowrap', menu: { class: 'flex-wrap' }
    }" v-model:activeIndex="activeIndex"
      :model="mappedData" @click="eventHandler(activeIndex)" @keyup.enter="eventHandler(activeIndex)" @keyup.space="eventHandler(activeIndex)" />
    <Dropdown class="md:hidden w-full md:w-fit min-w-56" @change="eventHandler" v-model="activeOption"
      :options="mappedData" optionLabel="label">
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
</template>

<script setup>
import TabMenu from 'primevue/tabmenu';
import Dropdown from 'primevue/dropdown';
import { ref, defineExpose } from "vue";

const props = defineProps({
  tabList: {
    type: Array,
    required: true
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

const eventHandler = (e) => {
  if (typeof e === 'string') {
    const index = mappedData.find(({ label }) => label.toLowerCase() == e.toLowerCase())
    activeIndex.value = index?.activeIndex ? index.activeIndex : 0
  }
  else if (typeof e === 'number') {
    activeOption.value = mappedData[activeIndex.value]
  } else {
    activeIndex.value = e.value.activeIndex
  }

  emit('indexChanged', tabList[activeIndex.value])
}

defineExpose({
  eventHandler
})

</script>
