<template>
  <footer class="py-12 surface-ground">
    <div class="flex flex-col gap-9 lg:gap-8 px-4 md:px-8">
      <div class="flex flex-col lg:flex-row gap-9 lg:gap-12">
        <div class="w-full lg:w-1/4">
          <a :href="`/${lang}/`" title="Azion Technologies" class="mb-4 block">
            <AznTechLogo />
          </a>
          <p>
            {{ cta.text }}
            <br>
            <span class="text-[#F3652B]">{{ cta.phone }}</span>
          </p>
        </div>

        <div class="w-full lg:w-3/4 grid grid-cols-1 gap-8 md:grid-cols-4">
          <div :key="index" v-for="({ title, list }, index) in listData">
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
          <Dropdown v-if="i18nPages" :modelValue="selectedLanguague" v-model="selectedLanguague" :options="i18nPages"
            optionLabel="lang" />
          <ButtonThemeToggle />
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import AznTechLogo from "../../assets/icons/azion-logo.vue";
import Divider from 'primevue/divider';
import ButtonThemeToggle from '../button-toggle/theme/index.vue';
import LinkButton from '../button/link.vue'
import Dropdown from 'primevue/dropdown';
import { ref } from 'vue'

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

const selectedLanguague = ref('English')

const indicesListsLargerThanFive = (props.listData || []).map((item, index) => {
  if (item.list.length <= 5) return -1;
  return index;
}).filter(index => index !== -1);
</script>
