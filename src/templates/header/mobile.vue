<template>
  <Button
    @click="visibleRight=true"
    class="lg:hidden flex text-white flex-none border-header w-8 h-8 bg-header hover:bg-header-button-hover"
    icon="pi pi-bars"
    size="small"
    aria-label="Menu"
    :pt="{
      label: { class: 'text-white hover:bg-header-button-hover' },
      icon: { class: 'text-white' }
    }" />

  <Sidebar
    v-model:visible="visibleRight"
    position="right"
    class="pr-4 pb-20 h-[100%] border-l surface-border w-full text-sm"
    :show-close-icon="false"
    :pt="{
      header: { class: 'hidden' }
    }">

    <div class="flex justify-end py-4">
      <Button outlined @click="visibleRight=false" class="flex-none w-8 h-8" icon="pi pi-times" size="small" />
    </div>

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
        <div v-if="item.href" class="flex gap-4 my-2">
          <a :href="item.href" :title="item.label" class="">
            <div class="p-menuitem-link !py-0 flex">
              <div class="flex gap-2">
                <div>
                  <span v-if="item.icon" class="py-1 px-1.5 flex rounded-md surface-200">
                    <i :class="item.icon" class="text-xs"></i>
                  </span>
                </div>
                <div>
                  <p class="text-color text-sm">
                    {{ item.label }}
                  </p>
                  <small class="text-xs">
                    {{ item.description }}
                  </small>
                </div>
              </div>
            </div>
          </a>

          <span
            v-if="item.items && item.items.length"
            class="pi pi-angle-down text-primary ml-auto pr-4"></span>
        </div>

        <div v-else class="flex gap-4">
          <a :href="item.url" :title="item.label" :target="item.target" class="">
            <div class="p-menuitem-link !py-0 flex">
              <div class="flex gap-2">
                <div>
                  <span v-if="item.icon" class="py-1 px-1.5 flex rounded-md surface-200">
                    <i :class="item.icon" class="text-xs"></i>
                  </span>
                </div>
                <div>
                  <p class="text-color text-sm">
                    <strong>{{ item.label }}</strong>
                  </p>
                  <small class="text-xs">
                    {{ item.description }}
                  </small>
                </div>
              </div>
            </div>
          </a>
          <span
            v-if="item.items && item.items.length"
            class="pi pi-angle-down text-primary ml-auto pr-4"></span>
        </div>
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
        :class="button.destak ?
          'flex gap-2 justify-between p-button p-button-primary p-button-sm whitespace-nowrap' :
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

