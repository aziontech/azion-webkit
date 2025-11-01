<template>
  <nav class="hidden xl:flex">
    <ul class="flex bg-transparent p-1 gap-1 rounded-md max-h-[2.5rem] items-center">
      <li
        v-for="(menuitem, index) in menuData.menu"
        :key="index"
        class="py-1 px-0 flex items-center transition duration-300 delay-75 rounded-md h-[2.5rem]"
      >
        <a
          v-if="!menuitem.subMenuColumns || !menuitem.subMenuColumns.length"
          :href="menuitem.href || ''"
          :title="menuitem.label || ''"
          class="shadow-none p-1 px-4 p-button-text p-button-primary p-button-sm whitespace-nowrap text-white"
          :class="getBreakpointClass(menuitem)"
        >
          <span class="text-white hover:text-neutral-300 font-sora text-sm font-normal">
            {{ menuitem.label }}
          </span>
        </a>

        <div
          class="flex items-center group"
          v-if="menuitem.subMenuColumns && menuitem.subMenuColumns.length"
        >
          <button
            tabindex="0"
            class="shadow-none p-3 px-4 p-button-text text-white hover:text-neutral-300 static p-button-primary p-button-sm whitespace-nowrap transition delay-75 duration-300 bottom-6"
          >
            <div class="flex flex-row gap-2 items-center">
              <span class="font-sora text-sm font-normal">
                {{ menuitem.label }}
              </span>
              <i
                class="pi pi-angle-down text-sm transition-transform duration-0 group-hover:rotate-180"
              />
            </div>
          </button>
          <Submenu
            :menuitem="menuitem"
            :communityData="communityData"
          />
        </div>
      </li>
    </ul>
  </nav>
</template>

<script setup>
  import Submenu from '../Submenu'

  const props = defineProps({
    menuData: {
      type: Object
    },
    communityData: {
      type: Object
    }
  })

  const { menuData, communityData } = props

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
