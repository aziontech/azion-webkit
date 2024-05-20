<template>
  <div class="flex md:justify-between gap-3">
    <div class="flex w-full items-center">
      <TabMenu class="hidden md:block w-full"
        :pt="{ label: 'whitespace-nowrap', menu: { class: 'flex-wrap'}}"
        :model="tabList" :url="tabList.url" :label="tabList.label" :activeIndex="activeIndex"
      />
      <Dropdown class="md:hidden w-full" :options="tabList" optionLabel="label" :modelValue="tabList[activeIndex]">
        <template #value="slotProps">
          <div v-if="slotProps.value">
            <div>{{ slotProps.value.label }}</div>
          </div>
        </template>
        <template #option="slotProps">
            <a :href="slotProps.option.url" target="_self" class="w-full px-2 py-3">
              {{ slotProps.option.label }}
            </a>
        </template>
      </Dropdown>
    </div>
    <div class="min-w-fit flex item-center md:items-start">
      <Button class="h-8" size="small" @click="activeDialog" outlined>
        <span class="p-button-icon md:mr-2 pi pi-search" />
        <span class="md:block hidden"> {{ inputPlaceholder }} </span>
      </Button>
      <AlgoliaDialog
        :isDialogActive="isDialogActive" @close="closeDialog" :inputPlaceholder="inputPlaceholder"
        :algoliaAppId="algoliaAppId" :algoliaApiKey="algoliaApiKey" :algoliaIndex="algoliaIndex" :algoliaModel="algoliaModel"
      />
    </div>
  </div>
</template>

<script setup>
import TabMenu from 'primevue/tabmenu';
import AlgoliaDialog from '@aziontech/webkit/aisdialog';
import Button from 'primevue/button';
import Dropdown from 'primevue/dropdown'
import { ref, onMounted } from "vue";

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
  },
  algoliaAppId: String,
  algoliaApiKey: String,
  algoliaIndex: Array,
  algoliaModel: Array
});

// interface Tablist {
//   type: Array<{
//   label: String
//   url: String || null
// }>
// }

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
