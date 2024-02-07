<template>
  <div class="flex max-[1360px]:justify-end items-center gap-2">
    <div class="flex min-[1360px]:max-w-[95%] w-full max-[1360px]:justify-end">
      <TabMenu class="max-[1360px]:hidden min-[1360px]:block w-full" :pt="{
        label: 'whitespace-nowrap'
      }" v-model:activeIndex="activeIndex" :model="mappedData" @click="eventHandler(activeIndex)" />
      <Dropdown class="min-[1360px]:hidden w-full md:w-fit min-w-56"
        @change="eventHandler" v-model="activeOption"
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
    <div class="w-8">
      <Button class="" @click="activeDialog" icon="pi pi-search" outlined />
      <AlgoliaDialog
        :isDialogActive="isDialogActive" @close="closeDialog"
        :algoliaAppId="algoliaAppId" :algoliaApiKey="algoliaApiKey" :algoliaIndex="algoliaIndex" :algoliaModel="algoliaModel"
      />
    </div>
  </div>
</template>

<script setup>
import TabMenu from 'primevue/tabmenu';
import Dropdown from 'primevue/dropdown';
import Button from 'primevue/button'
import AlgoliaDialog from '../algolia-dialog/index.vue'
import { ref, onMounted } from "vue";

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
  algoliaAppId: String,
  algoliaApiKey: String,
  algoliaIndex: Array,
  algoliaModel: Array
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
  if (typeof e === 'number') {
    activeOption.value = mappedData[activeIndex.value]
  } else {
    activeIndex.value = e.value.activeIndex
  }

  emit('indexChanged', tabList[activeIndex.value])
}

let HTML
onMounted(() => {
  HTML = document.querySelectorAll('html')[0]
})

let isDialogActive = ref(false)

function setHtmlOverflow(overflow) {
  HTML.style.overflow = overflow
}

function focusSearchInput() {
  setTimeout(function () {
    document.querySelectorAll('.ais-SearchBox-form input[type=search]')[0]?.focus()
  }, 800)
}

function activeDialog() {
  isDialogActive.value = true

  focusSearchInput();
  setHtmlOverflow('hidden')
}

function closeDialog() {
  isDialogActive.value = false
  setHtmlOverflow('auto')
}

</script>
