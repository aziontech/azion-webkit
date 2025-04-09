<template>
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

<script setup>
  import TabView from 'primevue/tabview'
  import TabPanel from 'primevue/tabpanel'
  import Badge from 'primevue/badge'

  defineProps({
    locations: {
      type: Array,
      required: true
    }
  })
</script>
