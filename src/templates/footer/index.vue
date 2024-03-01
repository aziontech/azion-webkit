<template>
  <footer class="py-12 surface-ground border-t border-solid surface-border">
    <div class="flex flex-col gap-9 lg:gap-8 px-shell">
      <div class="flex flex-col lg:flex-row gap-9 lg:gap-12">
        <div class="w-full lg:w-1/4">
          <a :href="`/${lang}/`" title="Azion Technologies" class="mb-4 block" aria-label="Azion logo">
            <AzionLogo class="h-[26px]" />
          </a>
          <p class="flex lg:flex-col">
            {{ cta.text }}&nbsp;
            <span class="text-color-secondary">{{ cta.phone }}</span>
          </p>
        </div>
        <div class="w-full lg:w-3/4 grid grid-cols-2 gap-8 md:grid-cols-5">
          <div
            :key="index"
            v-for="({ title, list }, index) in listData"
            :class="listData.length - 1 === index ? 'md:col-span-2' : 'col-span-1'">
            <!-- <p class="mb-4 w-full mt-0 text-xs text-color-secondary px-4"></p> -->
            <Overline class="px-4" :label="title" />
            <ul class="grid list-none p-0 m-0 mt-4 gap-3"
              :class="listData.length - 1 === index ? 'md:grid md:grid-cols-2' : 'grid-cols-1'">
              <li v-for="({ link, title }, i) in list" :key="i"
                :class="listData.length - 1 == index ? [0, 1].includes(i) ? 'block' : 'hidden md:block' : 'block'">
                <LinkButton :link="`${link}`" class="p-button-text px-4 whitespace-nowrap" :label="title" />
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="hidden md:block">
        <Divider />
      </div>
      <div class="md:hidden flex gap-3" v-if="socialButtons">
        <LinkIcon v-for="({ icon, link, title }, index) in socialButtons" :aria-label="title" :key="index" :icon="icon" :link="link" :tooltipText="title"/>
      </div>
      <div class="flex justify-between md:items-center flex-col md:flex-row gap-8">
        <div class="flex gap-3">
          <slot name="action" />
          <slot name="theme-switch"/>
        </div>
        <div class="md:hidden">
          <Divider />
        </div>
        <p class="text-xs">
          {{ copyright }}
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import AzionLogo from '../../assets/icons/azion-logo-default.vue';
import Divider from 'primevue/divider';
import Overline from '../../fragments/text/overline.vue';
import LinkIcon from '../button/link-icon.vue';
import LinkButton from '../button/link.vue';

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
defineProps({
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
  socialButtons: {
    type: Array,
    required: false
  }
})
</script>
