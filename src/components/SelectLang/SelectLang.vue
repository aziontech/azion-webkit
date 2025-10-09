<template>
  <div
    v-if="i18nPages"
    @mouseenter="onMouseEnter"
    @mouseleave="onMouseLeave"
    class="relative mr-5"
  >
    <Dropdown
      ref="dropdown"
      :options="i18nPages"
      :aria-label="activeLang.lang"
      :autoOptionFocus="false"
      optionLabel="lang"
      :pt="{
        root: {
          class: 'flex flex-row justify-between items-center rounded-lg'
        },
        panel: { class: 'bg-[#EDE8E8] rounded-lg p-2 w-full min-w-full' },
        trigger: { class: 'text-neutral-900' }
      }"
      :appendTo="'self'"
      :modelValue="activeLang.lang"
      :unstyled="true"
      @show="onDropdownShow"
      @hide="onDropdownHide"
    >
      <template #value="slotProps">
        <div
          v-if="slotProps.value"
          class="flex items-center gap-2 pr-2"
        >
          <span class="pi pi-globe text-neutral-900 text-xs"></span>
          <span class="text-xs font-medium text-neutral-900">
            {{ slotProps.value }}
          </span>
        </div>
      </template>
      <template #option="slotProps">
        <a
          :href="slotProps.option.slug"
          target="_self"
          class="block w-max-fit w-full rounded-sm p-2 text-xs text-neutral-900 hover:bg-[#F5F5F5]"
        >
          {{ slotProps.option.lang }}
        </a>
      </template>
    </Dropdown>
  </div>
</template>

<script setup>
  import { ref } from 'vue'
  import Dropdown from 'primevue/dropdown'

  const props = defineProps({
    i18nPages: {
      type: Array,
      required: false
    },
    lang: {
      type: String,
      required: true,
      default: 'en'
    }
  })

  const dropdown = ref(null)
  let hoverTimeout = null

  const activeLang = props.i18nPages
    ? props.i18nPages.find((p) => p.langPrefix === props.lang.toLowerCase())
    : null

  const onMouseEnter = () => {
    if (hoverTimeout) {
      clearTimeout(hoverTimeout)
    }
    hoverTimeout = setTimeout(() => {
      if (dropdown.value && dropdown.value.show) {
        dropdown.value.show()
      }
    }, 150)
  }

  const onMouseLeave = () => {
    if (hoverTimeout) {
      clearTimeout(hoverTimeout)
    }

    hoverTimeout = setTimeout(() => {
      if (dropdown.value && dropdown.value.hide) {
        dropdown.value.hide()
      }
    }, 200)
  }
</script>

<style scoped>
  :deep(.p-icon) {
    width: 12px;
    height: 12px;
  }
</style>
