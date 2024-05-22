<template>
  <footer class="py-12 surface-ground border-t border-solid surface-border">
    <div class="flex flex-col gap-9 lg:gap-8 px-shell">
      <div class="flex flex-col md:flex-row justify-between w-full gap-9 lg:gap-12">
        <div class="w-full flex flex-col justify-between gap-4">
          <div class="flex flex-col gap-4">
            <a :href="`/${lang}/`" title="Azion Technologies" class="mb-4 block" aria-label="Azion logo">
              <AzionLogo class="h-[26px]" />
            </a>
            <slot name="system-status" />
            <p class="text-color-secondary text-sm">
              {{ cta.text }}
              <span class="text-color whitespace-nowrap">{{ cta.phone }}</span>
            </p>
          </div>
          <div class="flex gap-3" v-if="socialButtons">
            <LinkIcon v-for="({ icon, link, title }, index) in socialButtons" :aria-label="title" :key="index" :icon="icon" :link="link" :tooltipText="title"/>
          </div>
        </div>
        <div class="w-full flex flex-wrap md:flex-nowrap gap-16 md:justify-end -ml-[16px] md:ml-0">
          <div :key="index" v-for="({ title, list }, index) in listData" class="max-w-44 w-full">
            <Overline class="px-4" :label="title" />
            <ul class="list-none p-0 m-0 mt-4 gap-3">
              <li v-for="({ link, title }, i) in list" :key="i">
                <LinkButton :link="`${link}`" class="p-button-text px-4 whitespace-nowrap" :label="title" />
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="hidden md:block">
        <Divider />
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
import AzionLogo from '../../assets/icons/azion-icon-logo.vue';
import Divider from 'primevue/divider';
import Overline from '../overline/Overline.vue';
import LinkIcon from '../linkiconbutton/LinkIconButton.vue';
import LinkButton from '../linkbutton/LinkButton.vue';

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
