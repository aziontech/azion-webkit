<template>
    <nav class="hidden lg:flex">
      <ul class="flex bg-white p-2 rounded-md">
        <li
          v-for="(menuitem, index) in menuData.items"
          :key="index"
          class="py-2 px-4 hover:bg-neutral-100 transition duration-300 delay-75 rounded-md"
        >
          <a
            v-if="!menuitem.items || !menuitem.items.length"
            :href="menuitem.href || ''"
            :title="menuitem.label || ''"
            class="p-button p-0 p-button-text  p-button-primary p-button-sm whitespace-nowrap text-white active:bg-header-button-hover hover:surface-hover"
            :class="getBreakpointClass(menuitem)"
          >
            <span class="text-black font-sora text-sm font-normal">
              {{ menuitem.label }}
            </span>
          </a>
  
          <div v-if="menuitem.items && menuitem.items.length">
            <button
              @click="
                (event) => {
                  toggle(event, menuitem.ref)
                }
              "
              tabindex="0" 
              class="p-button p-button-text p-button-primary p-button-sm whitespace-nowrap transition delay-75 duration-300 active:bg-header-button-hover hover:surface-hover p-0 bottom-6"
              :class="activeMenu == menuitem.ref && 'surface-hover bottom-0'"
            >
              <div class="flex flex-row gap-2 text-black items-center">
                <span class="font-sora text-sm font-normal">
                  {{ menuitem.label }}
                </span>
                <i
                  class="pi pi-angle-down text-sm"
                  :class="activeMenu == menuitem.ref && 'rotate-180'"
                />
              </div>
            </button>
            <OverlayPanel
              unstyled
              :id="menuitem.ref"
              @hide="hideOverlayPanel(menuitem.ref)"
              ref="itemRefs"
              :pt="{
                content: {
                  class:
                    'top-6 left-1/2 -translate-x-1/3 absolute p-0 hidden lg:flex flex-row rounded-md max-w-[calc(100%-8.5rem)] xl:max-w-6xl 2xl:max-w-screen-xl'
                },
              }"
            >
              <div
                class="flex flex-col gap-2 p-4 bg-white text-black rounded-md shadow-xl"
              >
                <div v-if="menuitem.items && menuitem.items.length" class="flex gap-2">
                  <div v-for="(subItem, index) in menuitem.items" :key="index" class="gap-2 min-w-72">
                    <template v-if="subItem.items">
                      <span class="font-proto-mono text-xs pb-4 mx-2 pt-2 block border-b border-neutral-900"> {{ subItem.label }}</span>
                      <ul class="flex flex-col gap-4 text-black mt-4" v-for="(item, index) in subItem.items" :key="index">
                        <li class="hover:bg-neutral-100 transition duration-300 delay-75 p-2 rounded-md">
                          <a
                          :href="item.href"
                          :title="item.label"
                        >
                          <span class="font-sora text-base font-semibold">
                            {{ item.label }}
                          </span>
                        </a>
                        <p class="text-sm mt-1 block">{{ item.description }}</p>
                      </li>
                    </ul>
                    </template>
                    <template v-else>
                      <span class="text-base pb-4 text-center"> {{ subItem.label }}</span>
                    </template>
                  </div>
                </div>
              </div>
            </OverlayPanel>
          </div>
        </li>
      </ul>
    </nav>
  </template>
  
  <script setup>
    import { ref } from 'vue'
    import OverlayPanel from 'primevue/overlaypanel'
  
    const props = defineProps({
      menuData: {
        type: Object
      }
    })
  
    const { menuData } = props
    const active = ref(0)
    const activeMenu = ref(null)
    let itemRefs = ref([])
  
    const hideOverlayPanel = (refAttr) => {
      if (refAttr === activeMenu.value) setMenuState(refAttr)
    }
  
    const setMenuState = (refAttr) => {
      activeMenu.value = activeMenu.value == refAttr ? null : refAttr
    }
  
    const toggle = (event, refAttr) => {
      try {
        if (refAttr) {
          active.value = 0
          const activeTab = itemRefs.value.find((i) => i.$params.attrs.id === refAttr)
          activeTab.toggle(event)
  
          setMenuState(refAttr)
        }
      } catch (error) {
        console.error('Error in toggle method:', error)
      }
    }
  
    const getBreakpointClass = (menu) => {
      const breakpoint = menu?.minBreakpoint
      if (!breakpoint) return ''
  
      const breakpoints = {
        sm: 'block',
        md: 'hidden',
        lg: 'hidden lg:block',
        xl: 'hidden xl:block',
        '2xl': 'hidden 2xl:block'
      }
  
      return breakpoints[breakpoint] || ''
    }
  </script>
  