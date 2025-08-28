<template>
    <Dropdown
      class="w-full"
      v-if="i18nPages"
      :options="i18nPages"
      :aria-label="activeLang.lang"
      :autoOptionFocus="false"
      optionLabel="lang"
      :pt="{ item: { class: 'p-0' }, list: { class: 'bg-neutral-200 rounded-md' }, dropdown: { class: 'rounded-md' }, root: { class: 'bg-neutral-100' }, trigger: { class: 'text-neutral-900' } }"
      :modelValue="activeLang.lang"
    >
      <template #value="slotProps">
        <div v-if="slotProps.value" class="flex gap-2 items-center">
            <span class="pi pi-globe text-neutral-800"></span>
            <div class="text-sm text-neutral-900">{{ slotProps.value }}</div>
        </div>
      </template>
      <template #option="slotProps">
        <div class="flex gap-2">
            <a
          :href="slotProps.option.slug"
          target="_self"
          class="w-full px-2 py-3"
        >
          <div class="text-sm text-neutral-900">{{ slotProps.option.lang }}</div>
        </a>
        </div>
      </template>
    </Dropdown>
  </template>
  
  <script setup>
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
  
    const activeLang = props.i18nPages
      ? props.i18nPages.find((p) => p.langPrefix === props.lang.toLowerCase())
      : null
  </script>
  