<template>
  <section class="flex">
    <div class="flex flex-col gap-8 w-full">
      <h2 class="text-3xl"> {{ title }}</h2>
      <div class="flex w-full gap-10">
        <template :key="index" v-for="(tab, index) in content">
          <template v-if="activeIndex === index">
            <slot :name="`main-${index}`"/>
          </template>
        </template>
        <TabView :pt="{ root: 'max-w-2xl' }" v-model:active-index="activeIndex">
          <TabPanel v-for="(tab, index) in content" :key="tab.tabName" :header="tab.tabName">
            <div class="flex flex-col gap-8 pt-8 max-w-2xl">
              <hgroup class="flex flex-col gap-2">
                <h3> {{ tab.title }}</h3>
                <p class="m-0">{{ tab.description }}</p>
              </hgroup>
              <slot :name="`actions-${index}`" />
              <slot :name="`content-${index}`" />
            </div>
          </TabPanel>
        </TabView>
      </div>
    </div>
  </section>
</template>

<script setup>
import TabView from 'primevue/tabview';
import TabPanel from 'primevue/tabpanel';
import { ref } from 'vue';

defineProps({
  content: {
    type: Array,
    required: true,
  },
  title: {
    type: String,
    required: false,
  }
})

const activeIndex = ref(0)

</script>
