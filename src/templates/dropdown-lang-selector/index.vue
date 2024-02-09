<template>
  <Dropdown class="w-full" v-if="i18nPages" :options="i18nPages" :autoOptionFocus="false" optionLabel="lang"
    :pt="{ item: { class: 'p-0' } }" :modelValue="activeLang.lang">
    <template #value="slotProps">
      <div v-if="slotProps.value">
        <div>{{ slotProps.value }}</div>
      </div>
    </template>
    <template #option="slotProps">
      <a :href="slotProps.option.slug" target="_self" class="w-full px-2 py-3">
        {{ slotProps.option.lang }}
      </a>
    </template>
  </Dropdown>
</template>

<script setup>
import Dropdown from 'primevue/dropdown';

const props = defineProps({
  i18nPages: {
    type: Array,
    required: false
  },
  lang: {
    type: String,
    required: true,
    default: 'en'
  },
})

// interface i18nPages {
//   lang: String,
//   slug: String
// }

const activeLang = props.i18nPages ? props.i18nPages.find(p => p.langPrefix === props.lang.toLowerCase()) : null
</script>
