<template>
  <header class="w-full h-[56px] border-b surface-border bg-header text-white py-3 sticky top-0 z-50">
    <div class="px-shell h-8 flex justify-between items-center">
      <div class="flex gap-4 items-center">
        <slot name="visualid" />
        <slot name="navigation" />
      </div>

      <div class="flex gap-2">
        <a v-for="(menu, index) in menuSecondary" :key="index" target="_blank" :href="menu.link" :title="menu.title"
          :class="[menu.destak ?
            'p-button  whitespace-nowrap p-button-sm hidden lg:flex' :
            'p-button p-button-primary whitespace-nowrap p-button-text hover:surface-hover p-button-sm hidden lg:flex', { 'p-button-info' : menu.severity === 'info'}]">

          <span class="text-white">
            {{ menu.text }}
          </span>
        </a>

        <div v-if="$slots.dialog" class="min-w-8">
          <slot name="dialog" />
        </div>

        <slot name="mobile-right-sidebar" />
      </div>
    </div>
  </header>
</template>

<script setup>
  const props = defineProps({ menuSecondary: Object });
  const { menuSecondary } = props;
</script>
