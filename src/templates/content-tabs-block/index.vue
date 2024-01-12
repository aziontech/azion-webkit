<template>
  <div class="flex justify-center">

  <section class="container">
    <div class="flex flex-col gap-8 w-full">
      <h2 class="text-3xl font-medium"> {{ title }}</h2>
      <div class="flex flex-col-reverse lg:flex-row w-full gap-10">
        <template :key="index" v-for="(tab, index) in content">
          <template v-if="activeIndex === index">
            <div class="lg:w-1/2 min-w-[50%]">
              <slot :name="`main-${index}`"/>
            </div>
          </template>
        </template>
          <TabView :pt="{ root: 'lg:max-w-md xl:max-w-2xl'}" v-model:active-index="activeIndex" :scrollable="false" :lazy="true">
          <TabPanel v-for="(tab, index) in content" :key="tab.tabName" :header="tab.tabName">
            <div class="flex flex-col gap-8 pt-8">
              <div class="flex flex-col gap-2">
                <p class=" font-medium text-lg"> {{ tab.title }}</p>
                <p class="text-color-secondary">{{ tab.description }}</p>
              </div>
              <div class="flex gap-3" v-if="$slots[`actions-${index}`]">
                <slot :name="`actions-${index}`" />
              </div>
              <slot :name="`content-${index}`" />
            </div>
          </TabPanel>
        </TabView>

      </div>
    </div>
  </section>
</div>

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
