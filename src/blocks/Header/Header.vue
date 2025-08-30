<template>
  <header
    class="bg-neutral-900 w-full max-w-[1600px] mx-auto flex items-center h-18 xl:h-20 text-white py-3 sticky top-0 z-50 font-sora px-6"
  >
    <div class="w-full h-8 flex justify-between items-center">
      <div class="flex gap-4 items-center">
        <slot name="logo" />
      </div>

      <div class="flex items-center gap-7">
        <slot name="navigation" />
        <div class="bg-neutral-200 rounded-md p-2 hidden xl:flex h-[3.5rem]">
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
              'border-none py-2 px-4  rounded-md',
              menu.backgroundColor === 'dark' ? 'bg-neutral-800 text-neutral-200 hover:bg-neutral-900' : 'hover:bg-white/50 text-black'
            ]"
          >
            <span :class="['text-sm', 'font-sora']">
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

        <slot name="menu-mobile" />
      </div>
    </div>
  </header>
</template>

<script setup>
  const props = defineProps({ menuSecondary: Object })
  const { menuSecondary } = props

  const callToAction = {
    label: 'Sign Up Free',
    href: 'https://www.azion.com/sign-up'
  }
</script>
