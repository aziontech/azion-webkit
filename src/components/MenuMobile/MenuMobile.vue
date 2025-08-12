<template>
    <!-- open sidebar button -->
    <ButtonPrime
      @click="visibleRight = true"
      class="lg:hidden flex items-center text-black flex-none border-neutral-100 w-8 h-8  hover:bg-header-button-hover"
      icon="pi pi-bars"
      size="large"
      aria-label="Menu"
      :pt="{
        label: { class: 'text-black hover:bg-header-button-hover' },
        icon: { class: 'text-black' }
      }"
    />
  
    <Drawer
      v-model:visible="visibleRight"
      position="right"
      class="md:pt-3 pb-20 h-[100%] border-l border-neutral-300 w-full transition-all duration-300 ease-in-out md:w-[26rem] text-sm bg-[#EDE8E8]"
      :show-close-icon="false"
      :pt="{
        header: { class: 'hidden' }
      }"
    >
        <div class="flex justify-between items-center pb-6 pt-2 px-4 ">
            <slot name="logo" />
            <ButtonPrime
            @click="visibleRight = false"
            class="w-8 h-14 flex justify-center items-center text-black"
            icon="pi pi-times"
            size="large"
            />
        </div>

        <PanelMenu
            :model="menuData.items"
            class="pb-6 mb-6 border-b border-neutral-300 mx-2"
        >
            <template #item="{ item }">
            <!-- DROPDOWN -->
            <p
                v-if="!item.href"
                class="flex justify-between items-center cursor-pointer px-4 py-2 hover:surface-200 rounded-md"
            >
                <span class="flex flex-row">
                <span class="flex flex-col">
                    <span class="font-sora text-black leading-relaxed font-medium text-base">
                    {{ item.label }}
                    </span>
                </span>
                </span>
                <span v-if="item.items && item.items.length">
                    <i class="pi pi-angle-down text-color"></i>
                </span>
            </p>
            <!-- LINK -->
            <a
                v-if="item.href"
                :href="item.href"
                class="flex justify-between items-center px-4 py-2 hover:surface-200 rounded-md"
            >
                <div class="flex flex-row gap-3">
                <div v-if="item.icon">
                    <Tile>
                    <i :class="`${item.icon}`"></i>
                    </Tile>
                </div>

                <div class="flex flex-col">
                    <span class="font-sora text-black leading-relaxed font-medium text-base">
                    {{ item.label }}
                    </span>
                    <p
                    v-if="item.description"
                    class="text-xs font-sora text-black font-normal text-color-secondary"
                    >
                    {{ item.description }}
                    </p>
                </div>
                </div>
            </a>

            <!-- ADDON -->
            <div
                v-if="item.overline && item.type !== 'solutions'"
                class="pt-4 pb-2 px-4 ml-9"
            >
                <Overline :label="item.overline" />
            </div>

            <ul v-if="item.subitems">
                <li
                v-for="(subitem, index) in item.subitems"
                :key="index"
                >
                <a
                    class="flex cursor-pointer px-4 py-2.5 ml-9 hover:surface-200 rounded-md"
                    :href="subitem.href"
                    v-if="!subitem.isLink"
                >
                    <span class="font-medium text-base">
                    {{ subitem.label }}
                    </span>
                </a>
                </li>
            </ul>
            </template>
        </PanelMenu>
        <template v-if="menuSecondary">
            <Menu
                class="w-full border-none bg-transparent"
                :model="menuSecondary"
                :pt="{
                root: {
                    class: 'p-0 w-full border-none bg-transparent'
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
                    <span class="ml-2 font-medium text-base text-black font-sora">
                    {{ item.label }}
                    </span>
                    <Tag
                    v-for="tag in item.tags"
                    :key="tag"
                    :value="tag"
                    class="text-orange-600"
                    />
                </a>
                </template>
            </Menu>
        </template>

        <template v-if="bottomButtons">
            <div class="fixed ml-4 bottom-6 flex gap-2 items-center ">
                <Button v-for="(button, index) in bottomButtons" :key="index" :href="button.url" type="primary" size="small" :title="button.urlTitle" :label="button.label" :icon="button.icon" />
            </div>
        </template>
    </Drawer>
  </template>
  
  <script setup>
    import { onUpdated, ref } from 'vue'
    import ButtonPrime from 'primevue/button'
    import Divider from 'primevue/divider'
    import Menu from 'primevue/menu'
    import Drawer from 'primevue/drawer'
    import Tag from 'primevue/tag'
    import PanelMenu from 'primevue/panelmenu'
    import Tile from '../../templates/tile'
    import Overline from '../../templates/overline'
    import Button from '../../components/Button'
  
    const props = defineProps({
      menuData: Object,
      menuSecondary: Array,
      bottomButtons: Array
    })
  
    const { menuSecondary, bottomButtons, menuData } = props
    const visibleRight = ref(false)
  
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
  