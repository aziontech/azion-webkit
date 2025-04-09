<template>
  <ContentSection
    :overline="overline"
    :titleTag="titleTag"
    :title="title"
    :description="description"
    position="center"
    isContentCentralized
    textCenter
  >
    <template #content>
      <MapEdgeNetwork
        :cities="cities"
        :tags="tags"
        class="-mt-14 sm:-mt-20 md:-mt-28"
      />

      <div class="flex gap-3 mt-4 mb-16">
        <template v-for="(tag, index) in tags" :key="index">
          <Tag severity="info">
            <div class="flex align-items-center gap-2 px-1">
              <i :class="[
                'text-xs',
                'pi',
                'pi-circle-fill',
                index === 0 ? 'text-orange-500' : 'text-gray-600'
              ]"></i>
              <span class="text-color-secondary">
                {{ tag }}
              </span>
            </div>
          </Tag>
        </template>
      </div>

      <TabView
        :pt="{
          root: {
            class: 'w-full max-w-4xl'
          },
          nav: {
            class: 'flex flex-wrap gap-10 max-w-4xl justify-center'
          }
        }"
      >
        <TabPanel
          v-for="({ title, points }, index) in locations"
          :key="index"
          :header="title"
          :pt="{
            content: {
              class: 'w-full max-w-4xl'
            }
          }"
        >
          <div class="m-0 mt-4 flex flex-wrap gap-x-7 w-full">
            <template
              v-for="({ country, cities }, i) in points"
              :key="index"
            >
              <div class="m-0 md:my-6 my-4 w-fit">
                <span class="text-base font-medium">
                  {{ country }}
                </span>
                <ul
                  class="m-0 mt-4 gap-x-7 w-fit"
                  :class="[
                    { 'grid grid-cols-2  md:grid-cols-[repeat(4,_144px)]': index === 0 && i === 0 },
                    {
                      'grid lg:grid-cols-[repeat(5,_144px)] md:grid-cols-[repeat(4,_144px)] grid-cols-2':
                        index === 1 && i === 0
                    }
                  ]"
                >
                  <li
                    class="text-color-secondary leading-relaxed flex items-center gap-2 w-36"
                    v-for="({ name, number }, index) in cities"
                    :key="index"
                  >
                    {{ name }}
                    <Badge
                      v-if="number"
                      :value="number"
                    />
                  </li>
                </ul>
              </div>
            </template>
          </div>
        </TabPanel>
      </TabView>
    </template>
  </ContentSection>
</template>

<script setup>
  import ContentSection from '../contentsection'
  import MapEdgeNetwork from '../mapedgenetwork'
  import Tag from 'primevue/tag'
  import TabView from 'primevue/tabview'
  import TabPanel from 'primevue/tabpanel'
  import Badge from 'primevue/badge'

  defineProps({
    overline: {
      type: String
    },
    titleTag: {
      type: String,
      default() {
        return 'h2'
      },
      validator(value) {
        return ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].includes(value)
      }
    },
    title: {
      type: String,
      required: true
    },
    description: {
      type: String
    },
    locations: {
      type: Array
    },
    cities: {
      type: Object
    },
    tags: {
      type: Array
    },
  })
</script>

<!--
<script>
  import tippy from "tippy.js"

  tippy(".az-map-primary", {
    theme: 'az-map',
    delay: 0,
    offset: [0, 24],
    duration: 0,
    placement: "top",
    arrow: `<svg width="2" height="32" viewBox="0 0 1 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="background: linear-gradient(180deg, rgba(243, 101, 43, 0) 0%, #F3652B 100%);"></svg>`,
  })

  tippy(".az-map-secondary-dark", {
    theme: "az-map",
    delay: 0,
    placement: "top",
    duration: 0,
    offset: [0, 24],
    arrow: `<svg width="2" height="32" viewBox="0 0 1 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="background: linear-gradient(180deg, rgba(102, 102, 102, 0) 0%, #666666 100%);"></svg>`,
   });

   tippy(".az-map-secondary-light", {
    theme: "az-map",
    delay: 0,
    placement: "top",
    duration: 0,
    offset: [0, 26],
    arrow: `<svg width="2" height="32" viewBox="0 0 1 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="background: linear-gradient(180deg, rgba(102, 102, 102, 0) 0%, #C9C9C9 100%);"></svg>`,
   });
</script>
-->
