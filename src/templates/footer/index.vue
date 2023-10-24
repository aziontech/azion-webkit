<template>
  <footer class="pt-14 pb-6 px-2 xlg:p-0">
    <div class="container mx-auto">
      <div class="flex flex-col lg:flex-row">
        <div class="w-full lg:w-1/4">
          <a
            :href="`/${lang}/`"
            title="Azion Technologies"
            class="azion-technologies">
            
            <AznTechLogo />
          </a>
          <p>Para vendas e suporte, entre em contato no <span class="font-bold">0800 883 6313</span></p>
        </div>
        
        <div class="w-full lg:w-3/4 grid grid-cols-1 gap-8 md:gap-0 md:grid-cols-4 m-0 mt-12 lg:mt-0 lg:pl-[5%] leading-loose">
          <div
            class=" list-none p-0"
            v-for="({ title, list }, index) in listData">
            <p class="font-bold mb-4 w-full mt-0">
              {{ title }}
            </p>
            <ul
              class="grid list-none leading-loose p-0 m-0"
              :class="indicesListsLargerThanFive.includes(index) ? 'grid grid-cols-2' : 'grid-cols-1'">
              <li v-for="({ route, desc }) in list" class="mb-2">
                <a
                  :href="`${route}`"
                  class="no-underline text-current"
                  rel="noopener"
                  target="_blank">
                  
                  {{ desc }}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <hr class="bg-slate-100 h-px my-8" />
      
      <div class="flex justify-end">
        <slot name="langSelector"></slot>
        <p class="text-xs">
          Copyright © 2023, Azion Technologies, Inc. or its affiliates. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
  import AznTechLogo from "../../assets/icons/azion-logo.vue"

  const props = defineProps({
    lang: String,
    listData: Array<{
      title: String,
      list: Array<{
        route: String,
        desc: String,
      }>
    }>
  })

  const indicesListsLargerThanFive = (props.listData || []).map((item, index) => {
    if (item.list.length <= 5) return -1;
    return index;
  }).filter(index => index !== -1);
</script>
