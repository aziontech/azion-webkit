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
        <div
          class="bg-transparent items-center rounded-md p-1 hidden xl:flex xl:gap-1 h-[2.625rem]"
        >
          <template
            v-for="(menu, index) in menuSecondary"
            :key="index"
          >
            <Button
              v-if="menu.backgroundColor === 'dark'"
              :label="menu.text"
              :href="menu.link"
              :target="menu.target || '_self'"
              type="primary"
              theme="light"
              size="small"
              custom-class="!py-2"
            />
            <a
              v-else
              :target="menu.target"
              :href="menu.link"
              :title="menu.title"
              :class="['border-none py-1 px-4  rounded-md text-white hover:text-neutral-300']"
            >
              <span :class="['text-sm', 'font-sora']">
                {{ menu.text }}
              </span>
            </a>
          </template>
        </div>
        <div
          v-if="$slots.dialog"
          class="min-w-8"
          n
        >
          <slot name="dialog" />
        </div>

        <slot name="menu-mobile" />
      </div>
    </div>
  </header>
</template>

<script setup>
  import Button from '../../components/Button/Button.vue'

  const props = defineProps({ menuSecondary: Object })
  const { menuSecondary } = props
</script>
