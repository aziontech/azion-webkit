<template>
  <div class="flex justify-between gap-3">
    <div class="flex items-center">
      <TabMenu class="lg:block overflow-y-auto" :pt="{ label: 'whitespace-nowrap', menu: {
        class: 'flex-wrap'
      } }"
        :model="tabList" :url="tabList.url" :label="tabList.label" :activeIndex="activeIndex"
      />
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
import AlgoliaDialog from '../algolia-dialog/index.vue'
import Button from 'primevue/button';
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
