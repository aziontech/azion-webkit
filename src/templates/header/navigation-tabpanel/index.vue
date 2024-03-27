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

          <OverlayPanel
            unstyled
            :ref="menuitem.ref"
            :pt="{
              content: { class: 'fixed p-0 hidden lg:flex flex-row border surface-border rounded-md surface-100 w-full max-w-[calc(100%-4rem)] lg:max-w-[calc(100%-11rem)] xl:max-w-[1052px]' },
              root: { class: 'left-8 lg:left-36 top-12 z-50'}
            }"
          >
            <div class="flex flex-col gap-1 border-r surface-border p-3 surface-50 rounded-l-md">
              <template v-for="(subitem, index) in menuitem.items" v-bind:key="index">
                <template v-if="subitem.items">
                  <Button
                    text
                    size="small"
                    :class="{ 'surface-hover': active === index }"
                    class="flex gap-2 justify-between w-full items-centerm min-w-52"
                    @click="active = index">
                    <span class="flex gap-2 items-center">
                      <i :class="subitem.icon"></i>
                      {{ subitem.label }}
                    </span>
                    <i class="pi pi-angle-right"></i>
                  </Button>
                </template>
                <template v-else>
                  <a class="p-button p-component p-button-text p-button-sm flex gap-2 hover:surface-hover justify-between w-full items-centerm min-w-52"
                     :href="subitem.href"
                  >
                    <span class="flex gap-2 items-center">
                      <i :class="subitem.icon"></i>
                        {{ subitem.label }}
                    </span>
                 </a>
                </template>
              </template>
            </div>

              <TabView v-model:activeIndex="active" :pt="{ navContainer: { class: 'hidden' }, root: { class: 'w-full'} }">
                <TabPanel v-for="(subitem, jIndex) in menuitem.items" :key="jIndex">
                  <div class="flex flex-row">
                    <ul class="grid grid-cols-1 xl:grid-cols-2 m-0 p-3 h-fit min-h-20 max-w-[627px] w-full">
                      <li v-for="(link, index) in subitem.items" :key="index" class="flex flex-col gap-2">
                        <a :href="link.href" :title="link.label" class="p-button p-button-text p-button-sm w-full hover:surface-hover">
                          <div class="flex gap-3">
                            <div v-if="link.icon">
                              <span class="py-1 px-1.5 flex rounded-md surface-200">
                                <i :class="link.icon" class="text-xs"></i>
                              </span>
                            </div>
                            <div class="flex flex-col gap-1">
                              <div class="flex gap-2 items-center">
                                <p class="text-left">
                                  {{ link.label }}
                                </p>
                                <template v-if="link.tag">
                                  <Tag :value="link.tag" severity="info" />
                                </template>
                              </div>
                              <p v-if="link.description" class="text-xs text-color-secondary text-left">
                                {{ link.description }}
                              </p>
                            </div>
                          </div>
                        </a>
                        <div class="pl-9 flex flex-col gap-2" v-if="link.items">
                          <template v-if="link.overline">
                            <Overline :label="link.overline" class="px-[10.5px]" />
                          </template>
                          <ul>
                            <li v-for="(sublink, subIndex) in link.items" :key="subIndex" class="flex- flex-col gap-2">
                              <a :href="sublink.href" :title="sublink.label" class="w-full p-button p-button-text p-button-sm text-xs hover:surface-hover">
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
                        </div>
                      </li>
                    </ul>

                    <div class="border-l surface-border p-6 gap-3 flex-col min-h-52 hidden lg:flex w-full max-w-[340px] surface-50 rounded-r-md">
                      <div v-if="index === 0">
                        <Overline :label="menuitem.rightBlock.label" class="mb-6 flex"/>
                        <div class="flex flex-col gap-4 m-0 w-full">
                          <article v-for="(block, idx) in menuitem.rightBlock.items" :key="idx" class="flex gap-4 w-full">
                            <figure class="mb-4 overflow-hidden rounded border surface-border h-fit w-[280px]">
                              <img :src="`${block.img.src}`" :alt="block.img.alt" class="w-full" lazy />
                            </figure>
                            <div class="w-full flex flex-col">
                              <p class="text-xs leading-relaxed text-color-secondary">
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
                        <Overline :label="menuitem.rightBlock.label" class="mb-6 flex" />
                        <div class="grid gap-4 m-0 w-full">
                          <article v-for="(block, idx) in menuitem.rightBlock.items" :key="idx" class="w-full">
                            <figure class="w-[160px] h-[90px] mb-4 overflow-hidden rounded border surface-border">
                              <img :src="`${block.img.src}`" :alt="block.img.alt" class="w-full" width="160" height="90" lazy />
                            </figure>
                            <div class="w-full flex flex-col gap-1">
                              <p class="text-base font-medium text-color mb-2 leading-normal">
                                  {{ block.title }}
                              </p>
                              <p class="text-xs text-color-secondary leading-relaxed">
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
  import Tag from 'primevue/tag';
  import Overline from '../../../fragments/text/overline.vue';

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
