<template>
  <nav class="hidden xl:flex relative">
    <ul class="flex bg-neutral-200 p-2 rounded-md max-h-[3.5rem]">
      <li
        v-for="(menuitem, index) in menuData.menu"
        :key="index"
        class="py-2 px-4 flex items-center hover:bg-neutral-100 transition duration-300 delay-75 rounded-md h-[40px]"
      >
        <a
          v-if="!menuitem.subMenuColumns || !menuitem.subMenuColumns.length"
          :href="menuitem.href || ''"
          :title="menuitem.label || ''"
          class="p-button p-0 p-button-text p-button-primary p-button-sm whitespace-nowrap text-white active:bg-header-button-hover hover:surface-hover"
          :class="getBreakpointClass(menuitem)"
        >
          <span class="text-black font-sora text-sm font-normal">
            {{ menuitem.label }}
          </span>
        </a>

        <div
          class="flex items-center"
          v-if="menuitem.subMenuColumns && menuitem.subMenuColumns.length"
        >
          <button
            @click="
              (event) => {
                toggle(event, menuitem.ref)
              }
            "
            tabindex="0"
            class="p-button p-button-text static p-button-primary p-button-sm whitespace-nowrap transition delay-75 duration-300 active:bg-header-button-hover hover:surface-hover p-0 bottom-6"
            :class="activeMenu == menuitem.ref && 'surface-hover bottom-0'"
          >
            <div class="flex flex-row gap-2 text-black items-center">
              <span class="font-sora text-sm font-normal">
                {{ menuitem.label }}
              </span>
              <i
                class="pi pi-angle-down text-sm duration-25 transition"
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
                class: `left-0 fixed top-[5rem] w-full hidden lg:flex flex-row rounded-md right-0 justify-end max-w-[1600px] mx-auto 3xl:max-w-[1600px] 3xl:left-1/2 transform 3xl:-translate-x-1/2`
              }
            }"
          >
            <div
              :ref="`popoverContent-${menuitem.ref}`"
              :class="`flex flex-col p-4 bg-neutral-200 text-black rounded-md shadow-xl transition-all duration-500 ease-out ${menuitem.subMenuColumns.length > 2 ? ' mr-[1.5rem]' : 'mr-[19.3rem]'}`"
            >
              <div
                v-if="menuitem.subMenuColumns && menuitem.subMenuColumns.length"
                class="flex gap-2"
              >
                <ul
                  v-for="(subItem, index) in menuitem.subMenuColumns"
                  :key="index"
                  :ref="`column-${menuitem.ref}-${index}`"
                  class="gap-2 min-w-72 translate-y-2 transition-all duration-700 ease-out"
                >
                  <template v-if="subItem.items && subItem.label">
                    <span
                      class="font-proto-mono text-xs pb-3 pt-1 block border-b border-neutral-900"
                    >
                      {{ subItem.label }}</span
                    >
                    <li
                      class="flex flex-col text-sm gap-1 text-black mt-2 hover:bg-neutral-100 transition duration-300 delay-75 p-1 rounded-md"
                      v-for="(item, index) in subItem.items"
                      :key="index"
                    >
                      <a
                        :href="item.href"
                        :title="item.label"
                      >
                        <span class="font-sora text-sm font-semibold">
                          {{ item.label }}
                        </span>
                      </a>
                      <p class="text-sm block">{{ item.description }}</p>
                    </li>
                  </template>
                  <template v-if="subItem.length">
                    <div
                      v-for="(item, index) in subItem"
                      :key="index"
                      class="gap-3 min-w-72 first:pb-3"
                    >
                      <template v-if="item.items && item.label">
                        <span
                          class="font-proto-mono text-xs pb-3 pt-1 block border-b border-neutral-900"
                        >
                          {{ item.label }}</span
                        >
                        <li
                          class="flex flex-col text-sm gap-1 text-black mt-2 hover:bg-neutral-100 transition duration-300 delay-75 p-1 rounded-md"
                          v-for="(item, index) in item.items"
                          :key="index"
                        >
                          <a
                            :href="item.href"
                            :title="item.label"
                          >
                            <span class="font-sora text-sm font-semibold">
                              {{ item.label }}
                            </span>
                          </a>
                          <p class="text-sm block">{{ item.description }}</p>
                        </li>
                      </template>
                    </div>
                  </template>
                </ul>
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
