<template>
  <!-- Desk -->
  <div
    class="!min-h-[56px] hidden lg:block"
    :class="[{ 'px-container': isContainer }]"
  >
    <Menubar
      class="w-full border-none hidden lg:flex gap-5"
      :model="mappedData"
      :pt="{
        root: {
          class: 'surface-ground'
        },
        submenu: {
          class: 'rounded-md w-max max-w-xs'
        }
      }"
    >
      <template #start>
        <p class="text-lg font-medium leading-relaxed !min-h-[56px] flex items-center">
          {{ menuTitle }}
        </p>
      </template>

      <template #item="{ item, hasSubmenu, root }">
        <template v-if="item.url">
          <a
            class="flex align-items-center p-3 leading-relaxed cursor-pointer !min-h-[44px]"
            :href="item.url"
          >
            <span class="text-sm">
              {{ item.label }}
            </span>
          </a>
        </template>
        <template v-else>
          <a class="flex align-items-center p-3 leading-relaxed cursor-pointer !min-h-[44px]">
            <span class="text-sm">
              {{ item.label }}
            </span>
            <i
              v-if="hasSubmenu"
              :class="[
                'pi pi-angle-down',
                { 'pi-angle-down ml-2': root, 'pi-angle-right ml-auto': !root }
              ]"
            >
            </i>
          </a>
        </template>
      </template>
    </Menubar>
  </div>

  <!-- Mobile -->
  <div class="block lg:hidden !min-h-[44px]">
    <PanelMenu
      class="block lg:hidden"
      :model="mobile"
      :pt="{
        root: {
          class: 'w-full'
        },
        headerContent: {
          class: 'w-full border-none py-1 flex items-center min-h-8 text-sm'
        },
        menuContent: {
          class: 'border-none text-sm'
        }
      }"
    >
      <template #item="{ item }">
        <template v-if="item.url">
          <a
            class="flex align-items-center cursor-pointer text-color px-3 py-2 w-full"
            :href="item.url"
            target="_self"
          >
            <span class="ml-2">
              {{ item.label }}
            </span>
          </a>
        </template>
        <template v-else>
          <a
            class="flex align-items-center cursor-pointer text-color px-3 py-2 w-full"
            target="_self"
          >
            <span class="ml-2">
              {{ item.label }}
            </span>
            <span
              v-if="item.items"
              class="pi pi-angle-down text-primary ml-auto"
            ></span>
          </a>
        </template>
      </template>
    </PanelMenu>
  </div>
</template>

<script setup>
  import { onBeforeMount, ref } from 'vue'
  import Menubar from 'primevue/menubar'
  import PanelMenu from 'primevue/panelmenu'

  const props = defineProps({
    menuTitle: {
      type: String,
      required: true
    },
    menuItems: {
      type: Array,
      required: true
    },
    mobileLabel: {
      type: String,
      required: false
    },
    isContainer: {
      type: Boolean,
      required: false
    }
  })

  const mappedData = ref()
  const mobile = ref()

  onBeforeMount(() => {
    mappedData.value = props.menuItems.map(({ label, url, items }) => {
      if (url) return { label, url }
      return { label, items }
    })

    mobile.value = [
      {
        label: props.mobileLabel,
        items: mappedData.value
      }
    ]
  })
</script>
