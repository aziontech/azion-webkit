<template>
  <footer class="pt-14 pb-6 px-2 xlg:p-0 surface-ground text-color">
    <div class="container mx-auto">
      <div class="flex flex-col lg:flex-row">
        <div class="w-full lg:w-1/4">
          <a :href="`/${lang}/`" title="Azion Technologies" class="azion-technologies mb-4 block">
            <AznTechLogo />
          </a>
          <p>
            {{ cta.text}}
            <br>
            <span class="text-[#F3652B]">{{ cta.phone }}</span>
          </p>
        </div>

        <div class="w-full lg:w-3/4 grid grid-cols-1 gap-8 md:gap-0 md:grid-cols-4 m-0 mt-12 lg:mt-0 lg:pl-[5%] leading-loose">
          <div class=" list-none p-0" :key="index" v-for="({ title, list }, index) in listData">
            <p class="mb-4 w-full mt-0 text-xs text-color-secondary">
              {{ title }}
            </p>
            <ul class="grid list-none leading-loose p-0 m-0" :class="indicesListsLargerThanFive.includes(index) ? 'grid grid-cols-2' : 'grid-cols-1'">
              <li v-for="({ route, desc, target }, index) in list" :key="index" class="mb-2 text-footer">
                <a :href="`${route}`" class="text-medium text-sm text-color no-underline" rel="noopener" :target="target ? target : '_self'">
                  {{ desc }}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="my-8">
        <Divider />
      </div>

      <div class="flex justify-end">
        <slot name="langSelector"></slot>
        <p class="text-xs">
          {{ copyright }}
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup>
  import AznTechLogo from "../../assets/icons/azion-logo.vue";
  import Divider from 'primevue/divider';


  // interface List {
  //   route: string,
  //   desc: string,
  //   target: "_blank" | null
  // }

  // interface ListData {
  //   title: string,
  //   list: Array<List>
  // }

  // interface props {
  //   copyright: string
  //   lang: string,
  //   listData: Array<ListData>
  // }

  // interface cta {
  //   text: String,
  //   phone: String
  // }

  const props = defineProps({
    lang: {
      type: String,
      required: true
    },
    listData: {
      type: Array,
      required: true
    },
    copyright: {
      type: String,
      required: true
    },
    cta: {
      type: Object,
      required: true
    }
  })

  const indicesListsLargerThanFive = (props.listData || []).map((item, index) => {
    if (item.list.length <= 5) return -1;
    return index;
  }).filter(index => index !== -1);
</script>
