<template>
  <nav class="hidden lg:flex">
    <ul class="flex gap-4">
      <li v-for="(menuitem, index) in menuData.items" :key="index">
        <a
          v-if="!menuitem.items || !menuitem.items.length"
          :href="menuitem.href || ''"
          :title="menuitem.label || ''"
          class="p-button p-button-text p-button-primary p-button-sm whitespace-nowrap text-white bg-header hover:bg-header-button-hover">

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
            class="whitespace-nowrap text-white bg-header active:bg-header-button-hover hover:bg-header-button-hover"
            @click="(event) => { toggle(event, menuitem.ref); active = 0; }"
            :pt="{
              label: { class: 'text-white' },
              icon: { class: 'text-white' }
            }" />

          <OverlayPanel class="z-40" :ref="menuitem.ref" :pt="{ content: { class: 'p-0' }}">
            <div class="flex flex-row">
              <div class="flex flex-col gap-1 border-r surface-border p-3 surface-50">
                <Button
                  text
                  size="small"
                  v-for="(subitem, index) in menuitem.items"
                  :key="index"
                  :class="{ 'surface-hover': active === index }"
                  class="flex gap-2 justify-between w-full items-centerm min-w-[175px]"
                  @click="active = index">

                  <span class="flex gap-2 items-center">
                    <i :class="subitem.icon"></i>
                    {{ subitem.label }}
                  </span>
                  <i class="pi pi-angle-right"></i>
                </Button>
              </div>

              <div class="w-full max-w-[1090px]">
                <TabView v-model:activeIndex="active" :pt="{ navContainer: { class: 'hidden' } }">
                  <TabPanel v-for="(subitem, jIndex) in menuitem.items" :key="jIndex">
                    <div class="flex flex-row">
                      <ul class="grid grid-cols-2 m-0 p-3 min-h-52">
                        <li v-for="(link, index) in subitem.items" :key="index">
                          <a :href="link.href" :title="link.label" class="p-button p-button-text p-button-sm w-full">

                            <div class="flex gap-3">
                              <div v-if="link.icon">
                                <span class="py-1 px-1.5 flex rounded-md surface-200">
                                  <i :class="link.icon" class="text-xs"></i>
                                </span>
                              </div>
                              <div class="flex flex-col gap-1">
                                <p class="text-left">
                                  {{ link.label }}
                                </p>
                                <p v-if="link.description" class="text-xs text-color-secondary text-left">
                                  {{ link.description }}
                                </p>
                              </div>
                            </div>
                          </a>

                          <ul class="grid pl-[2.25rem] mt-2">
                            <li v-for="(sublink, subIndex) in link.items" :key="subIndex">
                              <a :href="sublink.href" :title="sublink.label" class="w-full p-button p-button-text p-button-sm text-xs mb-2">
                                <div class="flex gap-3">
                                  <div v-if="sublink.icon">
                                    <span class="py-1 px-1.5 flex rounded-md surface-200">
                                      <i :class="sublink.icon" class="text-xs"></i>
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

                      <div class="border-l surface-border p-3 surface-50 min-h-52">
                        <div v-if="index === 0">
                          <strong class="text-xs text-color-secondary mb-4 block">
                            {{ menuitem.rightBlock.label }}
                          </strong>
                          <div class="grid gap-4 p-3">
                            <article v-for="(block, idx) in menuitem.rightBlock.items" :key="idx" class="flex gap-4 w-96">
                              <figure class="w-[160px] h-[90px] overflow-hidden rounded border surface-border">
                                <img :src="`${block.img.src}`" :alt="block.img.alt" class="w-full" width="160" height="90" lazy />
                              </figure>
                              <div class="max-w-52">
                                <p class="text-sm">
                                 {{ block.description }}
                                </p>
                                <a :href="block.link.href" target="_blank" :title="block.link.label" class="p-button p-button-link p-button-sm p-0 mt-2">
                                  {{ block.link.label }}
                                  <i class="pi pi-angle-right"></i>
                                </a>
                              </div>
                            </article>
                          </div>
                        </div>

                        <div v-if="index === 3">
                          <strong class="text-xs text-color-secondary mb-6 block">
                            {{ menuitem.rightBlock.label }}
                          </strong>
                          <div class="grid gap-4 p-3">
                            <article v-for="(block, idx) in menuitem.rightBlock.items" :key="idx" class="w-96">
                              <figure class="w-[160px] h-[90px] mb-4 overflow-hidden rounded border surface-border">
                                <img :src="`${block.img.src}`" :alt="block.img.alt" class="w-full" width="160" height="90" lazy />
                              </figure>
                              <div class="w-full">
                                <p class="text-base mb-2">
                                  <strong>
                                    {{ block.title }}
                                  </strong>
                                </p>
                                <p class="text-sm">
                                  {{ block.description }}
                                </p>
                                <a :href="block.link.href" :title="block.link.label" class="p-button p-button-link p-button-sm p-0 mt-2">
                                  {{ block.link.label }}
                                  <i class="pi pi-angle-right"></i>
                                </a>
                              </div>
                            </article>
                          </div>
                        </div>
                      </div>
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
