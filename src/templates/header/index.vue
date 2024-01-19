<template>
  <header class="py-3 bg-header !text-white border-b surface-border h-[56px] w-full sticky top-0 z-40">
    <div class="flex justify-between items-center px-shell">
      <div class="flex items-center">

        <a
          href="/"
          title="Home | Azion Technologies"
          class="block mr-6">
          <AzionLogoDefault class="w-[90px]" />
        </a>
        <!-- <slot name="logo"> -->

        <slot name="navigation" />
      </div>

      <div class="flex gap-2">
        <a
          v-for="(menu, index) in menuSecondary"
          :key="index"
          target="_blank"
          :href="menu.link"
          :title="menu.title"
          :class="menu.destak ?
            'p-button p-button-secondary whitespace-nowrap p-button-outlined p-button-sm border-white text-white hover:bg-header-button-hover hidden lg:flex' :
            'p-button p-button-primary whitespace-nowrap p-button-text hover:bg-header-button-hover p-button-sm hidden lg:flex'">

          <span class="text-white">
            {{ menu.text }}
          </span>
        </a>

        <slot name="dialog" />

        <MobileSidebar
          :menuData="menuData.items"
          :menuSecondary="menuSecondaryMobile"
          :bottomButtons="bottomButtonsMobile" />
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue';
import MobileSidebar from './mobile.vue'
import AzionLogoDefault from '../../assets/icons/azion-logo-default.vue'

const props = defineProps({
  menuData: Object,
  menuSecondary: Array,
  menuSecondaryMobile: Object,
  bottomButtonsMobile: Array,
  algoliaAppId: String,
  algoliaApiKey: String,
  algoliaIndex: Array,
  algoliaModel: Array
});

let productsPanel = ref() // should pass like string name inside ref attr inside menudata
let resourcesPanel = ref() // should pass like string name inside ref attr inside menudata

const {
  menuData,
  menuSecondary,
  menuSecondaryMobile,
  bottomButtonsMobile,
} = props;

const toggle = (event, refattr) => {
  try {
    if (refattr === 'productsPanel') productsPanel.value[0].toggle(event)
    if (refattr === 'resourcesPanel') resourcesPanel.value[0].toggle(event)
  } catch (error) {
    console.error('Error in toggle method:', error)
  }
};
</script>
