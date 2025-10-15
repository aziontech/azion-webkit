<template>
  <header
    class="bg-neutral-950 w-full max-w-xxxl mx-auto flex items-center h-18 xl:h-19 text-white py-4 sticky top-0 z-50 font-sora px-6"
  >
    <div class="w-full h-8 flex justify-between items-center relative">
      <div class="flex gap-4 items-center">
        <slot name="logo" />
        <slot name="navigation" />
      </div>

      <div class="flex items-center gap-3">

        <div class="bg-transparent items-center rounded-md p-1 hidden xl:flex xl:gap-1 h-[2.625rem]">
          <a
            v-for="(menu, index) in menuSecondary"
            :key="index"
            :target="menu.target"
            :href="menu.link"
            :title="menu.title"
            :class="[
              'border-none py-1 px-4  rounded-md',
              menu.backgroundColor === 'dark' ? 'bg-neutral-200 text-neutral-900 hover:bg-neutral-300' : 'text-white hover:text-neutral-300'
            ]"
          >
            <span :class="['text-sm', 'font-sora']">
              {{ menu.text }}
            </span>
          </a>
        </div>
        <div
          v-if="$slots.dialog"
          class="min-w-8"n
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
</script>
