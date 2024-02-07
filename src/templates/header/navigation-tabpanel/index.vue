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
            @click="(event) => { toggle(event, menuitem.ref); active = 0; }"
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
                  :class="{ 'surface-hover': active === index }"
                  class="flex gap-2 justify-between w-full items-center"
                  @click="active = index">

                  <span class="flex gap-2 items-center">
                    <i :class="subitem.icon"></i>
                    {{ subitem.label }}
                  </span>
                  <i class="pi pi-angle-right"></i>
                </Button>
              </div>

              <div class="w-full max-w-[500px]">
                <TabView
                  v-model:activeIndex="active"
                  :pt="{ navContainer: { class: 'hidden' } }">

                  <TabPanel
                    :key="index"
                    v-for="(subitem, index) in menuitem.items">

                    <div class="m-0 p-0">
                      <a
                        href="#"
                        :key="index"
                        v-for="(link, index) in subitem.items"
                        class="w-full p-button p-button-text p-button-sm">

                        <div class="flex gap-3">
                          <div v-if="link.icon">
                            <span class="py-1 px-1.5 flex rounded-md surface-200">
                              <i :class="link.icon" class="text-xs"></i>
                            </span>
                          </div>
                          <div class="flex flex-col gap-2">
                            <p class="text-left">
                              {{ link.label }}
                            </p>
                            <p class="text-xs text-color-secondary text-left">
                              {{ link.description }}
                            </p>
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
  import { ref } from 'vue';
  import Button from 'primevue/button';
  import OverlayPanel from 'primevue/overlaypanel';
  import TabView from 'primevue/tabview';
  import TabPanel from 'primevue/tabpanel';

  const props = defineProps({
    menuData: {
      type: Object
    }
  });

  const { menuData } = props;
  const active = ref(0);

  let productsPanel = ref(); // should pass like string name inside ref attr inside menudata
  let resourcesPanel = ref(); // should pass like string name inside ref attr inside menudata

  const toggle = (event, refattr) => {
    try {
      if (refattr === 'productsPanel') productsPanel.value[0].toggle(event);
      if (refattr === 'resourcesPanel') resourcesPanel.value[0].toggle(event);
    } catch (error) {
      console.error('Error in toggle method:', error);
    };
  };
</script>
