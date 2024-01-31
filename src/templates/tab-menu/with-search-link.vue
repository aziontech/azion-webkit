<template>
  <div class="flex justify-between flex-col lg:flex-row">
    <div class="lg:w-2/3 w-full">
      <TabMenu class="lg:block overflow-y-auto" :pt="{ label: 'whitespace-nowrap' }"
        :model="tabList" :url="tabList.url" :label="tabList.label" :activeIndex="activeIndex"
      />
    </div>
    <div class="w-full lg:w-1/3 flex justify-end pt-4 lg:pt-0">
      <span class="p-input-icon-left w-full lg:max-w-xs">
        <i class="pi pi-search" />
        <button
            class="p-inputtext enabled:focus:shadow-none p-component w-full text-left"
            @click="activeDialog"
        >
          {{ inputPlaceholder }}
        </button>
      </span>
      <AlgoliaDialog
        :isDialogActive="isDialogActive" @close="closeDialog"
        :algoliaAppId="algoliaAppId" :algoliaApiKey="algoliaApiKey" :algoliaIndex="algoliaIndex" :algoliaModel="algoliaModel"
      />
    </div>
  </div>
</template>

<script setup>
import TabMenu from 'primevue/tabmenu';
import AlgoliaDialog from '../algolia-dialog/index.vue'
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
