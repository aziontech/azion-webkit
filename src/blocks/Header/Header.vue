<template>
    <header
      class="w-full flex items-center h-20 bg-transparent text-white py-3 sticky top-0 z-50 font-sora"
    >
      <div class="w-full px-shell h-8 flex justify-between items-center">
        <div class="flex gap-4 items-center">
          <slot name="logo" />
        </div>
  
        <div class="flex items-center gap-7">
          <slot name="navigation" />
          <div class=" bg-white rounded-md p-2 hidden xl:flex">
            <a
            v-for="(menu, index) in menuSecondary"
            :key="index"
            :target="menu.target"
            :href="menu.link"
            :title="menu.title"
            :class="[
              { 'p-button-info': menu.severity === 'info' },
              { 'p-button-outlined border-header': menu.outlined === true },
              menu.minBreakpoint && menu.minBreakpoint === 'sm' && 'hidden',
              menu.minBreakpoint && menu.minBreakpoint === 'md' && 'hidden',
              menu.minBreakpoint && menu.minBreakpoint === 'lg' && 'hidden lg:block',
              menu.minBreakpoint && menu.minBreakpoint === 'xl' && 'hidden xl:block',
              menu.minBreakpoint && menu.minBreakpoint === '2xl' && 'hidden 2xl:block',
              'border-none py-2 px-4 hover:bg-neutral-100'
            ]"
          >
            <span :class="['text-sm', 'text-black', 'font-sora']">
              {{ menu.text }}
            </span>
          </a>
          </div>
          <div
            v-if="$slots.dialog"
            class="min-w-8"
          >
            <slot name="dialog" />
          </div>
          <Button type="primary" v-if="callToAction.href"  icon="pi pi-chevron-right"  :label="callToAction.label"/>
          
          <slot name="mobile-right-sidebar" />
        </div>

      </div>
    </header>
</template> 
  
<script setup>
  import Button from '../../components/Button'
  const props = defineProps({ menuSecondary: Object })
  const { menuSecondary } = props;
  
  const callToAction = {
    label: 'Sign Up Free',
    href: 'https://www.azion.com/sign-up'
  }

</script>
