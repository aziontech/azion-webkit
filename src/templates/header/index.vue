<template>
  <!-- slotDialog -->
  <AlgoliaDialog
    :algoliaAppId="algoliaAppId"
    :algoliaApiKey="algoliaApiKey"
    :algoliaIndex="algoliaIndex"
    :algoliaModel="algoliaModel"
    :isDialogActive="isDialogActive"
    @close="closeDialog"/>

  <header class="py-3 bg-header !text-white border-b surface-border h-[56px] w-full sticky top-0 z-40">
    <div class="flex justify-between items-center px-shell">
      <div class="flex items-center">
        <a
          href="/"
          title="Home | Azion Technologies"
          class="block mr-6">
          <AzionLogoDefault class="w-[90px]" />
        </a>
        <slot name="navigation" />
        <!--
        <nav>
          <ul class="flex gap-4">
            <li v-for="(menuitem, index) in menuData.items" :key="index">
              <a
                v-if="!menuitem.items || !menuitem.items.length"
                :href="menuitem.href || ''"
                class="p-button p-button-text p-button-primary p-button-sm whitespace-nowrap hover:bg-header-button-hover hidden lg:flex">
                <span class="text-white">{{ menuitem.label }}</span>
              </a>
              <div v-if="menuitem.items && menuitem.items.length">
                <Button
                  text
                  size="small"
                  :label="menuitem.label"
                  icon-pos="right"
                  icon="pi pi-angle-down"
                  class="hidden lg:flex hover:bg-header-button-hover whitespace-nowrap"
                  @click="(event) => { toggle(event, menuitem.ref); menuData.active = 0; }"
                  :pt="{
                    label: { class: 'text-white' },
                    icon: { class: 'text-white' }
                  }" />
                <OverlayPanel :ref="menuitem.ref">
                  <div class="flex flex-row p-2 gap-4">
                    <div class="flex flex-col gap-2">
                      <Button
                        text
                        size="small"
                        v-for="(subitem, index) in menuitem.items"
                        :key="index"
                        :class="{ 'surface-hover': menuData.active === index }"
                        class="flex gap-2 justify-between w-full items-center"
                        @click="menuData.active = index">
                        <span class="flex gap-2 items-center">
                          <i :class="subitem.icon"></i>
                          {{ subitem.label }}
                        </span>
                        <i class="pi pi-angle-right"></i>
                      </Button>
                    </div>
                    <div class="flex w-full max-w-[500px]">
                      <TabView v-model:activeIndex="menuData.active" :pt="{ navContainer: { class: 'hidden' } }">
                        <TabPanel v-for="(subitem, index) in menuitem.items" :key="index">
                          <div class="grid grid-cols-2 gap-2 m-0 p-0 w-[500px]">
                            <a
                              v-for="(link, index) in subitem.items" :key="index"
                              class="flex gap-2 w-full items-center p-button p-button-text p-button-sm">
                              <div class="flex flex-row gap-4 items-center">
                                <i v-if="link.icon" :class="link.icon"></i>
                                <div class="flex flex-col items-start">
                                  <span class="flex gap-2 items-center">{{ link.label }}</span>
                                  <span class="text-xs text-color-secondary">{{ link.description }}</span>
                                </div>
                              </div>
                            </a>
                          </div>
                        </TabPanel>
                      </TabView>
                    </div>
                  </div>
                </OverlayPanel>
              </div>
            </li>
          </ul>
        </nav>
      -->
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

        <Button
          outlined
          size="small"
          icon="pi pi-search"
          class="bg-header hover:bg-header-button-hover !text-white flex border-header"
          @click="activeDialog"
          :pt="{
            label: { class: 'text-white' },
            icon: { class: 'text-white' }
          }" />

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

import Button from 'primevue/button';
import OverlayPanel from 'primevue/overlaypanel';
import TabView from 'primevue/tabview';
import TabPanel from 'primevue/tabpanel';

import AlgoliaDialog from '../algolia-dialog/index.vue';
import MobileSidebar from './mobile.vue';
import AzionLogoDefault from '../../assets/icons/azion-logo-default.vue';

let isDialogActive = ref(false);
let activeDialog = () => { isDialogActive.value = true; };
let closeDialog = () => { isDialogActive.value = false; };

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

let productsPanel = ref(); // should pass like string name inside ref attr inside menudata
let resourcesPanel = ref(); // should pass like string name inside ref attr inside menudata

const {
  menuData,
  menuSecondary,
  menuSecondaryMobile,
  bottomButtonsMobile,
  algoliaAppId,
  algoliaApiKey,
  algoliaIndex,
  algoliaModel
} = props;

const toggle = (event, refattr) => {
  try {
    if (refattr === 'productsPanel') productsPanel.value[0].toggle(event);
    if (refattr === 'resourcesPanel') resourcesPanel.value[0].toggle(event);
  } catch (error) {
    console.error('Error in toggle method:', error);
  }
};
</script>
