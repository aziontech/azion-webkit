<template>
  <nav class="hidden xl:flex relative">
    <ul class="flex bg-neutral-200 p-1 rounded-md max-h-[3rem]">
      <li
        v-for="(menuitem, index) in menuData.menu"
        :key="index"
        class="py-1 px-4 flex items-center hover:bg-neutral-100 transition duration-300 delay-75 rounded-md h-[2.5rem]"
      >
        <a
          v-if="!menuitem.subMenuColumns || !menuitem.subMenuColumns.length"
          :href="menuitem.href || ''"
          :title="menuitem.label || ''"
          class="p-button shadow-none p-0 p-button-text p-button-primary p-button-sm whitespace-nowrap text-white active:bg-header-button-hover hover:surface-hover"
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
            class="p-button shadow-none p-button-text static p-button-primary p-button-sm whitespace-nowrap transition delay-75 duration-300 active:bg-header-button-hover hover:surface-hover p-0 bottom-6"
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
              :class="`flex flex-col p-4 ${menuitem.subMenuColor ?? 'bg-neutral-200'} text-black rounded-md shadow-xl transition-all duration-500 ease-out ${menuitem.subMenuColumns.length > 2 ? ' mr-[1.5rem]' : 'mr-[19.3rem]'}`"
            >
              <div
                v-if="menuitem.subMenuColumns && menuitem.subMenuColumns.length"
                class="flex gap-2"
              >
                <ul
                  v-for="(subItem, index) in menuitem.subMenuColumns"
                  :key="index"
                  :ref="`column-${menuitem.ref}-${index}`"
                  class="gap-2 w-80 ease-out"
                >
                  <template v-if="subItem.items && subItem.label && !subItem.communityComponent">
                    <span
                      class="font-proto-mono text-xs pb-3 pt-1 block border-b border-neutral-900"
                    >
                      {{ subItem.label }}</span
                    >
                    <li
                      class="flex flex-col text-sm gap-1 text-black mt-2 transition duration-300 delay-75"
                      v-for="(item, index) in subItem.items"
                      :key="index"
                    >
                      <a
                        :href="item.href"
                        :title="item.label"
                        class="px-2 py-1 rounded-md hover:bg-white/50"
                      >
                        <span class="font-sora text-sm font-semibold">
                          {{ item.label }}
                        </span>

                        <p class="text-sm block">{{ item.description }}</p>
                      </a>
                    </li>
                  </template>
                  <template v-if="subItem.length">
                    <div
                      v-for="(item, index) in subItem"
                      :key="index"
                      class="gap-3 min-w-72 first:pb-3"
                    >
                      <template v-if="item.items && item.label && !item.communityComponent">
                        <span
                          class="font-proto-mono text-xs pb-3 pt-1 block border-b border-neutral-900"
                        >
                          {{ item.label }}</span
                        >
                        <li
                          class="flex flex-col text-sm gap-1 text-black mt-2"
                          v-for="(item, index) in item.items"
                          :key="index"
                        >
                          <a
                            :href="item.href"
                            :title="item.label"
                            class="px-2 py-1 rounded-md hover:bg-white/50"
                          >
                            <span class="font-sora text-sm font-semibold">
                              {{ item.label }}
                            </span>

                            <p class="text-sm block">{{ item.description }}</p>
                          </a>                        </li>
                      </template>

                      <template v-if="item.communityComponent">
                        <span
                          class="font-proto-mono text-xs pb-3 pt-1 block border-b border-neutral-900"
                        >
                          {{ item.label }}</span
                        >
                        <div class="flex items-center gap-2 mt-2 p-1 ">
                          <svg xmlns="http://www.w3.org/2000/svg" width="35" height="37" viewBox="0 0 35 37" fill="none">
                            <path d="M31.128 30L20.112 22.224V15.312L31.128 7.536L34.368 13.152L24.936 17.256V20.28L34.368 24.384L31.128 30ZM19.968 0.911997L18.744 14.376L12.696 17.832L0.456 12.144L3.696 6.6L11.976 12.648L14.64 11.136L13.488 0.983996L19.968 0.911997ZM0.456 25.392L12.696 19.704L18.744 23.16L19.968 36.624L13.488 36.552L14.64 26.4L11.976 24.888L3.696 30.936L0.456 25.392Z" fill="#070707"/>
                          </svg>
                          <h3 class="font-sora text-sm ">{{ communityData.label }}</h3>
                          <a :href="communityData.href" class="pi pi-external-link text-black cursor-pointer hover:text-neutral-700">
                          </a>
                        </div>
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
    },
    communityData: {
      type: Object
    }
  })

  const { menuData, communityData } = props
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
