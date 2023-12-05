<template>
  <footer class="flex py-12 surface-ground justify-center">
    <div class="container">
      <div class="flex flex-col gap-9 lg:gap-8">
        <div class="flex flex-col lg:flex-row gap-9 lg:gap-12">
          <div class="w-full lg:w-1/4">
            <a :href="`/${lang}/`" title="Azion Technologies" class="mb-4 block">
              <AzionLogo class="h-[26px]" />
            </a>
            <p>
              {{ cta.text }}
              <br>
              <span class="text-[#F3652B]">{{ cta.phone }}</span>
            </p>
          </div>
          <div class="w-full lg:w-3/4 grid grid-cols-1 gap-8 md:grid-cols-5">
            <div :key="index" v-for="({ title, list }, index) in listData" :class="indicesListsLargerThanFive.includes(index) ? 'col-span-2' : 'col-span-1'">
              <p class="mb-4 w-full mt-0 text-xs text-color-secondary px-4">
                {{ title }}
              </p>
              <ul class="grid list-none p-0 m-0 gap-3"
                :class="indicesListsLargerThanFive.includes(index) ? 'grid grid-cols-2' : 'grid-cols-1'">
                <li v-for="({ link, title }, index) in list" :key="index">
                  <LinkButton :link="`${link}`" class="p-button-text px-4 whitespace-nowrap" :label="title" />
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div class="sm:hidden md:block">
          <Divider />
        </div>
        <div class="flex justify-between md:items-center sm:flex-col-reverse md:flex-row gap-8">
          <p class="text-xs">
            {{ copyright }}
          </p>
          <div class="flex gap-3">
            <Dropdown v-if="i18nPages" :options="i18nPages" :autoOptionFocus="false" optionLabel="lang"
              :pt="{ item: { class: 'p-0' } }" :placeholder="modelValue.lang">
              <template #option="slotProps">
                <a :href="slotProps.option.slug" target="_self" class="w-full px-2 py-3">
                  {{ slotProps.option.lang }}
                </a>
              </template>
            </Dropdown>
            <ButtonThemeToggle />
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import AzionLogo from "../../assets/icons/azion-logo-default.vue";
import Divider from 'primevue/divider';
import ButtonThemeToggle from '../button-toggle/theme/index.vue';
import LinkButton from '../button/link.vue'
import Dropdown from 'primevue/dropdown';

// interface List {
//   link: string,
//   title: string,
//   target: "_blank" | null
// }

// interface ListData {
//   title: string,
//   list: Array<List>
// }

// interface props {
//   copyright: string
//   lang: string,
//   listData: Array<ListData>
// }

// interface cta {
//   text: String,
//   phone: String
// }

const props = defineProps({
  lang: {
    type: String,
    required: true
  },
  listData: {
    type: Array,
    required: true
  },
  copyright: {
    type: String,
    required: true
  },
  cta: {
    type: Object,
    required: true
  },
  i18nPages: {
    type: Array,
    required: false
  }
})

const modelValue = props.i18nPages ? props.i18nPages.find(p => p.lang.toLowerCase() === props.lang.toLowerCase()) : null

const indicesListsLargerThanFive = (props.listData || []).map((item, index) => {
  if (item.list.length <= 5) return -1;
  return index;
}).filter(index => index !== -1);
</script>
