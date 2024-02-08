<template>
  <Button
    @click="visibleRight=true"
    class="lg:hidden text-white flex-none border-header w-8 h-8 bg-header hover:bg-header-button-hover"
    icon="pi pi-bars"
    size="small"
    :pt="{
      label: { class: 'text-white hover:bg-header-button-hover' },
      icon: { class: 'text-white' }
    }" />

  <Sidebar
    v-model:visible="visibleRight"
    position="right"
    class="py-5 pb-20 h-[calc(100%-56px)] top-[28px] border-l surface-border w-full"
    :show-close-icon="false"
    :pt="{
      header: { class: 'hidden' }
    }">

    <PanelMenu
      :model="menuData.items"
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
          <a v-if="item.href" :href="href">
            <div class="p-menuitem- link !py-0">
              <div class="flex gap-2">
                <span v-if="item.icon" class="py-1 px-1.5 flex rounded-md surface-200">
                  <i :class="item.icon" class="text-xs"></i>
                </span>
                <p class="text-color">
                  {{ item.label }}
                </p>
              </div>
              <p v-if="item.description" class="pl-5">
                <small>
                  {{ item.description }}
                </small>
              </p>
            </div>
          </a>
          <a v-else :href="item.url" :target="item.target">
            <div class="p-menuitem-link !py-0">
              <span v-if="item.icon" class="mr-2" :class="item.icon"></span>
              <span>
                {{ item.label }}
              </span>
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
        v-for="(button, index) in bottomButtons"
        :key="index"
        :href="button.url"
        :title="button.urlTitle"
        :class="button.icon ?
          'flex gap-2 justify-between p-button p-button-primary p-button-outlined p-button-sm border-white text-white hover:bg-header-button-hover whitespace-nowrap' :
          'flex gap-2 p-button p-button-primary p-button-outlined p-button-sm  text-white hover:bg-header-button-hover whitespace-nowrap'">

        {{ button.label }}
        <i v-if="button.icon" :class="button.icon"></i>
      </a>
    </div>
  </Sidebar>
</template>

<script setup>
import { onUpdated, ref } from 'vue';
import Button from 'primevue/button';
import Divider from 'primevue/divider';
import Menu from 'primevue/menu';
import PanelMenu from 'primevue/panelmenu';
import Sidebar from 'primevue/sidebar';
import Tag from 'primevue/tag';

let props = defineProps({
  menuData: Object,
  menuSecondary: Array,
  bottomButtons: Array
});

const { menuData, menuSecondary, bottomButtons } = props;
const visibleRight = ref(false);

function getHTMLElement() {
  return document.querySelector('html');
};

function pageScroll(action) {
  const overflow = action === 'stop' ? 'hidden' : 'auto';
  getHTMLElement().style.overflow = overflow;

  return overflow;
};

onUpdated(() => {
  visibleRight.value ? pageScroll('stop') : pageScroll('auto');
});
</script>

