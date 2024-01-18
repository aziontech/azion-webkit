<template>
  <nav>
    <ul class="flex gap-4">
      <li v-for="(menuitem, index) in menuData.items" :key="index">
        <a
          v-if="!menuitem.items || !menuitem.items.length"
          :href="menuitem.href || ''"
          class="p-button p-button-text p-button-primary p-button-sm whitespace-nowrap hover:bg-header-button-hover hidden lg:flex">
          <span class="text-white">
            {{ menuitem.label }}
          </span>
        </a>

        <div v-if="menuitem.items && menuitem.items.length">
          <Button
            text
            size="small"
            :label="menuitem.label"
            icon-pos="right"
            icon="pi pi-angle-down"
            class="hidden lg:flex hover:bg-header-button-hover whitespace-nowrap"
            @click="(event) => { toggle(event, menuitem.ref); menuData.active = 0; }"
            :pt="{
              label: { class: 'text-white' },
              icon: { class: 'text-white' }
            }" />

          <OverlayPanel :ref="menuitem.ref">
            <div class="flex flex-row p-2 gap-4">
              <div class="flex flex-col gap-2">
                <Button
                  text
                  size="small"
                  v-for="(subitem, index) in menuitem.items"
                  :key="index"
                  :class="{ 'surface-hover': menuData.active === index }"
                  class="flex gap-2 justify-between w-full items-center"
                  @click="menuData.active=index">

                  <span class="flex gap-2 items-center">
                    <i :class="subitem.icon"></i>
                    {{ subitem.label }}
                  </span>
                  <i class="pi pi-angle-right"></i>
                </Button>
              </div>

              <div class="flex w-full max-w-[500px]">
                <TabView v-model:activeIndex="menuData.active" :pt="{ navContainer: { class: 'hidden' } }">
                  <TabPanel v-for="(subitem, index) in menuitem.items" :key="index">
                    <div class="grid grid-cols-2 gap-2 m-0 p-0 w-[500px]">
                      <a
                        v-for="(link, index) in subitem.items" :key="index"
                        class="flex gap-2 w-full items-center p-button p-button-text p-button-sm">
                        <div class="flex flex-row gap-4 items-center">
                          <i v-if="link.icon" :class="link.icon"></i>
                          <div class="flex flex-col items-start">
                            <span class="flex gap-2 items-center">{{ link.label }}</span>
                            <span class="text-xs text-color-secondary">{{ link.description }}</span>
                          </div>
                        </div>
                      </a>
                    </div>
                  </TabPanel>
                </TabView>
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
  import Button from 'primevue/button'
  import OverlayPanel from 'primevue/overlaypanel'
  import TabView from 'primevue/tabview'
  import TabPanel from 'primevue/tabpanel'

  const props = defineProps({
    menuData: {
      type: Object
    }
  })

  console.log(props.menuData)

  const { menuData } = props
  let productsPanel = ref() // should pass like string name inside ref attr inside menudata
  let resourcesPanel = ref() // should pass like string name inside ref attr inside menudata

  const toggle = (event, refattr) => {
    try {
      if (refattr === 'productsPanel') productsPanel.value[0].toggle(event)
      if (refattr === 'resourcesPanel') resourcesPanel.value[0].toggle(event)
    } catch (error) {
      console.error('Error in toggle method:', error)
    }
  }
</script>
