<template>
  <ButtonPrime
    unstyled
    @click="visibleRight = true"
    class="xl:hidden flex justify-center rounded-md items-center border-1 text-white border-neutral-700 w-8 h-8 hover:bg-header-button-hover"
    icon="pi pi-bars"
    size="large"
    aria-label="Menu"
    :pt="{
      label: { class: 'text-white hover:bg-header-button-hover hidden' },
      icon: { class: 'text-white' }
    }"
  />

  <Sidebar
    v-model:visible="visibleRight"
    position="right"
    class="md:pt-3 pb-8 h-[100vh] border-l border-neutral-300 w-full transition-all duration-300 ease-in-out md:w-[26rem] text-sm bg-neutral-900"
    :show-close-icon="false"
    :pt="{
      header: { class: 'hidden' },
      content: { class: 'px-4' }
    }"
  >
    <div class="flex justify-end items-center mt-3">
      <ButtonPrime
        unstyled
        @click="visibleRight = false"
        class="w-8 h-8 rounded-md flex justify-center items-center text-white border-1 mr-4 mt-6 border-neutral-700"
        icon="pi pi-times"
        size="large"
        :pt="{
          label: { class: 'hidden' },
          icon: { class: 'text-white' }
        }"
      />
    </div>

    <PanelMenu
      :pt="{
        headerContent: {
          class: ['m-0 border-none p-0 hover:bg-transparent']
        },
        menuItem: {
          class: ['']
        },
        menuContent: {
          class: ['border-none']
        },
        panel: {
          class: ['border-none']
        },
        menu: {
          class: ['flex flex-col gap-1 hover:bg-transparent']
        },
        content: {
          class: ['m-0 text-sm font-medium hover:bg-transparent border-none']
        },
        submenu: {
          class: ['flex flex-col gap-1 p-3 border-none']
        }
      }"
      :model="menuItems"
      class="pb-6 mb-6 border-b border-neutral-700 mx-2 flex flex-col gap-1"
    >
      <template #item="{ item }">
        <!-- DROPDOWN -->
        <p
          v-if="!item.href"
          class="flex justify-between items-center cursor-pointer px-4 py-2 hover:surface-200 rounded-md"
        >
          <span class="flex flex-row">
            <span class="flex flex-col">
              <span class="font-sora text-white leading-relaxed font-medium text-sm">
                {{ item.label }}
              </span>
            </span>
          </span>
          <span v-if="item.items && item.items.length">
            <i class="pi pi-angle-down text-white"></i>
          </span>
        </p>

        <!-- LINK -->
        <a
          v-if="item.href"
          :href="item.href"
          class="flex justify-between items-center px-4 py-2 hover:surface-200 rounded-md"
        >
          <div class="flex flex-row gap-3">
            <div class="flex flex-col">
              <span class="font-sora text-white leading-relaxed font-medium text-sm">
                {{ item.label }}
              </span>
            </div>
          </div>
        </a>
      </template>
    </PanelMenu>
    <template v-if="menuSecondary">
      <Menu
        class="w-full border-none bg-transparent"
        :model="menuSecondary"
        :pt="{
          root: {
            class: 'p-0 pb-14 w-full border-none bg-transparent'
          }
        }"
      >
        <template #item="{ item, props }">
          <a
            v-if="item.url"
            v-bind="props.action"
            :target="item.target"
            :href="item.url"
            class="p-2 flex gap-2"
          >
            <span
              v-if="item.icon"
              :class="item.icon"
            ></span>
            <span class="ml-2 font-medium text-sm text-white font-sora">
              {{ item.label }}
            </span>
            <Tag
              v-for="tag in item.tags"
              :key="tag"
              :value="tag"
              class="text-orange-600 p-1 px-2 rounded-md"
            />
          </a>
        </template>
      </Menu>
    </template>

    <template v-if="bottomButtons">
      <div
        class="w-full fixed justify-center bottom-12 bg-neutral-900 py-2 flex gap-2 items-center self-end left-1/2 transform -translate-x-1/2"
      >
        <Button
          v-for="(button, index) in bottomButtons"
          :key="index"
          :href="button.url"
          type="secondary"
          size="small"
          class="whitespace-nowrap font-sm"
          :title="button.urlTitle"
          customClass="px-2 py-1 !h-[42px]"
          :label="button.label"
          :icon="button.icon"
        />
      </div>
    </template>
  </Sidebar>
</template>

<script setup>
  import { onUpdated, ref } from 'vue'
  import ButtonPrime from 'primevue/button'
  import Menu from 'primevue/menu'
  import Sidebar from 'primevue/sidebar'
  import Tag from 'primevue/tag'
  import PanelMenu from 'primevue/panelmenu'
  import Button from '../../components/Button'

  const props = defineProps({
    menuMobile: Object,
    menuSecondary: Array,
    bottomButtons: Array
  })

  const { menuSecondary, bottomButtons, menuMobile } = props
  const visibleRight = ref(false)

  const menuItems = menuMobile.menu.map((menuItem) => {
    if (menuItem.subMenuColumns) {
      menuItem.items = menuItem.subMenuColumns.map((subitem) => {
        return {
          ...subitem,
          items: subitem.items || undefined
        }
      })
      delete menuItem.subMenuColumns
    }

    return menuItem
  })

  function getHTMLElement() {
    return document.querySelector('html')
  }

  function pageScroll(action) {
    const overflow = action === 'stop' ? 'hidden' : 'auto'
    getHTMLElement().style.overflow = overflow

    return overflow
  }

  onUpdated(() => {
    visibleRight.value ? pageScroll('stop') : pageScroll('auto')
  })
</script>
