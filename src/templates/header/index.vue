<template>
  <header class="surface-section py-3">
    <div class="container mx-auto">
      <div class="flex items-center justify-between">
        <div class="flex items-center">
          <a href="/" title="Home | Azion Technologies" class="block mr-6">
            <AzionLogoDefault class="w-[90px]" />
          </a>
          <nav>
            <Menubar :model="items" class="border-0 surface-section">
              <template #item="{ item, props, hasSubmenu, root }">
                <a v-ripple class="flex align-items-center" v-bind="props.action">
                  <span :class="item.icon" />
                  <span class="ml-2">
                    {{ item.label }}
                  </span>
                  <!-- <Badge v-if="item.badge" :class="{ 'ml-auto': !root, 'ml-2': root }" :value="item.badge" /> -->
                  <span v-if="item.shortcut" class="ml-auto border-1 surface-border border-round surface-100 text-xs p-1">
                    {{ item.shortcut }}
                  </span>
                  <i v-if="hasSubmenu" :class="['pi pi-angle-down text-primary', { 'pi-angle-down ml-2': root, 'pi-angle-right ml-auto': !root }]"></i>
                </a>
              </template>
            </Menubar>
          </nav>
        </div>
        <div class="flex gap-2">
          <a href="" title="Signin | Azion Technologies" class="p-button p-button-secondary p-button-text">
            Sign in
          </a>
          <a href="" title="Contact | Azion Technologies" class="p-button p-button-secondary p-button-text">
            Contact
          </a>
          <a href="" title="Free account | Azion Technologies" class="p-button p-button-secondary p-button-outlined">
            Free account
          </a>

          <ToggleButton
            v-model="buttonThemeCheck"
            onLabel=""
            offLabel=""
            onIcon="pi pi-sun"
            offIcon="pi pi-moon"
            class="p-button p-button-secondary p-button-outlined p-[1.095rem]" />

          <Button outlined severity="secondary" @click="">
            <i class="pi pi-search"></i>
          </Button>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
// https://primevue.org/menubar/#template

import { ref } from 'vue';
import Button from 'primevue/button';
import Menubar from 'primevue/menubar';
import ToggleButton from 'primevue/togglebutton';
// import Badge from 'primevue/badge';
import AzionLogoDefault from '../../assets/icons/azion-logo-default.vue';

const props = defineProps({
  menubar: {
    type: Array
  }
});

const buttonThemeCheck = ref(false);
const items = ref(props.menubar);
</script>
