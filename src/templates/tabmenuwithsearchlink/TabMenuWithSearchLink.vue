<template>
  <div class="grid sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-2 gap-5 lg:gap-10">
    <div class="flex justify-center gap-5 md:gap-10 w-full sm:col-span-2 2xl:col-span-3">
      <TabMenu
        class="hidden md:block w-full"
        :pt="{ label: 'whitespace-nowrap', menu: { class: 'flex-wrap' } }"
        :model="tabList"
        :url="tabList.url"
        :label="tabList.label"
        :activeIndex="activeIndex"
      />
      <Dropdown
        class="md:hidden w-full"
        :options="tabList"
        optionLabel="label"
        :modelValue="tabList[activeIndex]"
      >
        <template #value="slotProps">
          <div v-if="slotProps.value">
            <div>{{ slotProps.value.label }}</div>
          </div>
        </template>
        <template #option="slotProps">
          <a
            :href="slotProps.option.url"
            target="_self"
            class="w-full px-2 py-3"
          >
            {{ slotProps.option.label }}
          </a>
        </template>
      </Dropdown>
    </div>
    <div class="w-full flex items-start sm:col-span-2 lg:col-span-1">
      <button
        @click="activeDialog"
        class="p-inputtext flex items-center gap-2 w-full text-color-secondary text-sm"
      >
        <i class="p-button-icon pi pi-search"></i>
        <span>{{ inputPlaceholder }}</span>
      </button>
      <AlgoliaDialog
        :isDialogActive="isDialogActive"
        @close="closeDialog"
        :inputPlaceholder="inputPlaceholder"
        :algoliaAppId="algoliaAppId"
        :algoliaApiKey="algoliaApiKey"
        :algoliaIndex="algoliaIndex"
        :algoliaModel="algoliaModel"
      />
    </div>
  </div>
</template>

<script setup>
  import TabMenu from 'primevue/tabmenu'
  import AlgoliaDialog from '../aisdialog/AlgoliaDialog.vue'
  import Dropdown from 'primevue/dropdown'
  import { ref, onMounted } from 'vue'

  defineProps({
    tabList: {
      type: Array,
      required: true
    },
    inputPlaceholder: {
      type: String,
      required: false,
      default: 'Search articles...'
    },
    activeIndex: {
      type: Number,
      required: false
    },
    algoliaAppId: String,
    algoliaApiKey: String,
    algoliaIndex: Array,
    algoliaModel: Array
  })

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

    focusSearchInput()
    setHtmlOverflow('hidden')
  }

  function closeDialog() {
    isDialogActive.value = false
    setHtmlOverflow('auto')
  }
</script>
