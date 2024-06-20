<template>
  <div class="grid m-0 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-2 gap-5 lg:gap-10">
    <div class="flex justify-center gap-5 md:gap-10 w-full sm:col-span-2 2xl:col-span-3">
      <TabMenu
        class="hidden md:block"
        :pt="{
          label: 'whitespace-nowrap',
          menu: { class: 'flex-wrap' }
        }"
        v-model:activeIndex="activeIndex"
        :model="mappedData"
        @click="eventHandler(activeIndex)"
        @keyup.enter="eventHandler(activeIndex)"
        @keyup.space="eventHandler(activeIndex)"
      />
      <Dropdown
        class="md:hidden w-full"
        @change="eventHandler"
        v-model="activeOption"
        :options="mappedData"
        optionLabel="label"
      >
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
    <div class="w-full flex items-start sm:col-span-2 lg:col-span-1">
        <button @click="activeDialog" class="p-inputtext flex items-center gap-2 w-full text-color-secondary text-sm">
          <i class="p-button-icon pi pi-search" />
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
  import Dropdown from 'primevue/dropdown'
  import AlgoliaDialog from '../aisdialog/AlgoliaDialog.vue'
  import { ref, onMounted } from 'vue'

  const props = defineProps({
    tabList: {
      type: Array,
      required: true
    },
    inputPlaceholder: {
      type: String,
      required: false,
      default: 'Search articles...'
    },
    algoliaAppId: String,
    algoliaApiKey: String,
    algoliaIndex: Array,
    algoliaModel: Array
  })

  // interface Tablist {
  //   type: Array<String>
  // }

  const emit = defineEmits(['indexChanged'])

  const { tabList } = props

  const mappedData = tabList.map((item, index) => {
    return { label: item, activeIndex: index }
  })

  const activeIndex = ref(0)
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

    focusSearchInput()
    setHtmlOverflow('hidden')
  }

  function closeDialog() {
    isDialogActive.value = false
    setHtmlOverflow('auto')
  }
</script>
