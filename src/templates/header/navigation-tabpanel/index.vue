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

          <OverlayPanel
            class="z-40"
            :ref="menuitem.ref"
            :pt="{ content: { class: 'p-0' }}">

            <div class="flex flex-row">
              <div class="flex flex-col gap-1 border-r surface-border p-3 surface-50">
                <Button
                  text
                  size="small"
                  v-for="(subitem, index) in menuitem.items"
                  :key="index"
                  :class="{ 'surface-hover': active === index }"
                  class="flex gap-2 justify-between w-full items-centerm min-w-44"
                  @click="active = index">

                  <span class="flex gap-2 items-center">
                    <i :class="subitem.icon"></i>
                    {{ subitem.label }}
                  </span>
                  <i class="pi pi-angle-right"></i>
                </Button>
              </div>

              <div class="w-full max-w-[1090px] p-3">
                <TabView
                  v-model:activeIndex="active"
                  :pt="{ navContainer: { class: 'hidden' } }">

                  <TabPanel
                    :key="index"
                    v-for="(subitem, index) in menuitem.items">

                    <div>
                      <ul class="grid grid-cols-2 m-0 p-0">
                        <li
                          class="block"
                          :key="index"
                          v-for="(link, index) in subitem.items">
                          <a
                            href="#"
                            class="p-button p-button-text p-button-sm w-full">

                            <div class="flex gap-3">
                              <div v-if="link.icon">
                                <span class="py-1 px-1.5 flex rounded-md surface-200">
                                  <i
                                    :class="link.icon"
                                    class="text-xs">
                                  </i>
                                </span>
                              </div>
                              <div class="flex flex-col gap-1">
                                <p class="text-left">
                                  {{ link.label }}
                                </p>
                                <p
                                  v-if="link.description"
                                  class="text-xs text-color-secondary text-left">

                                  {{ link.description }}
                                </p>
                              </div>
                            </div>
                          </a>

                          <ul class="block pl-[2.25rem] mt-2">
                            <li
                              class="block"
                              :key="i"
                              v-for="(sublink, i) in link.items">

                              <a
                                href="#"
                                class="w-full p-button p-button-text p-button-sm text-xs mb-2">

                                <div class="flex gap-3">
                                  <div v-if="sublink.icon">
                                    <span class="py-1 px-1.5 flex rounded-md surface-200">
                                      <i
                                        :class="sublink.icon"
                                        class="text-xs">
                                      </i>
                                    </span>
                                  </div>
                                  <div>
                                    <p class="text-left">
                                      {{ sublink.label }}
                                    </p>
                                  </div>
                                </div>
                              </a>
                            </li>
                          </ul>
                        </li>
                      </ul>
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
