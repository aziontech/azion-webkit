<template>
  <Button
    icon="pi pi-bars"
    outlined
    @click="visibleRight = true"
    class="flex lg:hidden"/>

  <Sidebar
    v-model:visible="visibleRight"
    position="right"
    class="py-5 pb-20 h-[calc(100%-56px)] top-[28px] border-l surface-border w-64 md:w-80"
    :show-close-icon="false"
    :pt="{
      header: { class: 'hidden' }
    }">

    <PanelMenu
      :model="menuData"
      :pt="{
        headerContent: {
          class: ['hover:surface-hover rounded-md md:px-4 px-2 py-2 border-none']
        },
        menuContent: {
          class: ['border-none']
        },
        content: {
          class: ['p-0 m-0 py-2 md:px-2']
        }
      }">
      <template #item="{ item }">
          <a
            v-if="item.href"
            :href="href"
            @click="navigate">
            <div class="p-menuitem-link !py-0">
              <span :class="item.icon"></span>
              <span class="text-color">{{ item.label }}</span>
            </div>
          </a>
          <a
            v-else
            :href="item.url"
            :target="item.target">
            <div class="p-menuitem-link !py-0">
              <span v-if="item.icon" class="mr-2" :class="item.icon"></span>
              <span>{{ item.label }}</span>
              <span v-if="item.items" class="pi pi-angle-down text-primary ml-auto"></span>
            </div>
          </a>
      </template>
    </PanelMenu>

    <Divider class="my-8" />

    <Menu
      class="w-full border-none bg-transparent"
      :model="menuSecondary"
      :pt="{
        root: {
          class: 'p-0 w-full border-none bg-transparent'
        }
      }">

      <template #item="{ item, props }">
        <a
          v-if="item.url"
          v-bind="props.action"
          :target="item.target"
          :href="item.url"
          @click="navigate"
          class="p-2 flex gap-2">

            <span v-if="item.icon" :class="item.icon"></span>
            <span class="ml-2">
              {{ item.label }}
            </span>
            <Tag v-for="tag in item.tags" :key='tag' :value="tag" severity="info"/>
        </a>
      </template>
    </Menu>

    <div class="fixed bottom-6 flex gap-2 items-center">
      <a
        href=""
        class="flex gap-2 justify-between p-button p-button-primary p-button-outlined p-button-sm border-white text-white hover:bg-header-button-hover whitespace-nowrap">
        Contact
        <i class="pi pi-chevron-right text-xs"></i>
      </a>
      <a
        target="_blank"
        href="https://sso.azion.com/login"
        class="flex gap-2 p-button p-button-primary p-button-outlined p-button-sm  text-white hover:bg-header-button-hover whitespace-nowrap">
        Sign in
      </a>
      <!-- <ButtonThemeToggle /> -->
    </div>
  </Sidebar>
</template>

<script setup>
import { onUpdated, ref } from "vue";
import Button from 'primevue/button';
import Divider from 'primevue/divider';
import Menu from 'primevue/menu';
import PanelMenu from 'primevue/panelmenu';
import Sidebar from 'primevue/sidebar';
import Tag from 'primevue/tag';
// import ButtonThemeToggle from '../button-toggle/theme/index.vue';

let props = defineProps({
  menuData: Object,
  menuSecondary: Array,
  bottomButtons: Array
});

const {
  menuData,
  menuSecondary,
  bottomButtons
} = props;

const visibleRight = ref(false);

function getHTMLElement() {
  return document.querySelector('html');
}

function pageScroll(action) {
  const overflow = action === 'stop' ? 'hidden' : 'auto';
  getHTMLElement().style.overflow = overflow;

  return overflow;
}

onUpdated(() => {
  visibleRight.value ? pageScroll('stop') : pageScroll('auto');
})
</script>

