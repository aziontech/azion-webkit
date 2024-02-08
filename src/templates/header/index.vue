<template>
  <header class="py-3 bg-header text-white h-[56px] w-full sticky top-0 z-50  border-b surface-border">
    <div class="flex justify-between items-center px-shell">
      <div class="flex items-center">
        <slot name="visualid" />
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
        <slot name="mobile-right-sidebar" />
      </div>
    </div>
  </header>
</template>

<script setup>
const props = defineProps({
  menuSecondary: Array
});

const { menuSecondary } = props;
</script>
