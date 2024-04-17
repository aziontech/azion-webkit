<template>
  <Menubar :model="menuItems" class="w-full border-none hidden lg:flex gap-5" :pt="{
    root: {
      class: 'surface-ground'
    }
  }">
    <template #start>
      <p class="text-lg font-medium leading-relaxed">{{ menuTitle }}</p>
    </template>
    <template #item="{ item, hasSubmenu, root }">
      <a class="flex align-items-center p-3 leading-relaxed" :href="item.url">
        <span class="text-sm">{{ item.label }}</span>
        <i v-if="hasSubmenu"
          :class="['pi pi-angle-down', { 'pi-angle-down ml-2': root, 'pi-angle-right ml-auto': !root }]"></i>
      </a>
    </template>
  </Menubar>
  <PanelMenu :model="mobile" class="block lg:hidden" :pt="{
    root: {
      class: 'w-full',
    },
    headerContent: {
      class: 'w-full border-none py-1 flex items-center min-h-8 text-sm',
    },
    menuContent: {
      class: 'border-none text-sm',
    }
  }">
    <template #item="{ item }">
      <a class="flex align-items-center cursor-pointer text-color px-3 py-2 w-full" :href="item.url"
        :target="item.target">
        <span class="ml-2">{{ item.label }}</span>
        <span v-if="item.items" class="pi pi-angle-down text-primary ml-auto" />
      </a>
    </template>
  </PanelMenu>
</template>

<script setup>
import Menubar from 'primevue/menubar';
import PanelMenu from 'primevue/panelmenu';
import { ref } from 'vue'

const props = defineProps({
  menuTitle: {
    type: String,
    required: true,
  },
  menuItems: {
    type: Array,
    required: true
  },
  mobileLabel: {
    type: String,
    required: false
  }
})

const mobile = ref([
  {
    label: props.mobileLabel,
    items: props.menuItems
  }
]);
</script>
