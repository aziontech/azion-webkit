<template>
  <footer>
    <div class="bg-neutral-900 ">
      <div class="py-8 max-w-[1600px] gap-14 flex items-center px-6 mx-auto justify-between lg:flex-nowrap flex-wrap">
        <div class="w-full lg:w-1/2">
            <slot name="status" ></slot>
          </div>

          <div class="w-full lg:w-1/2 flex justify-between items-center flex-wrap">
            <h3 class="text-white font-proto-mono text-xs font-medium">{{ securityInformation.title }}</h3>
            <div class="flex gap-3 mt-4 lg:mt-0">
              <Tag 
                v-for="tag in securityInformation.tags" 
                :key="tag.title"
                :label="tag.title" 
                :icon="tag.icon"
              />
            </div>
          </div>
      </div>
    </div>
    <div class="bg-[#CEC9C9]">
      <div class="py-3 flex flex-col gap-9 px-6 max-w-[1600px] mx-auto">
      <div class="flex flex-col box-border gap-1 lg:flex-row justify-between w-full pt-10">
        <div class="flex justify-start w-full lg:w-1/3 flex-col ">
          <span class="text-black font-proto-mono text-xs border-b border-black pb-2 mb-4">
            {{ content.title }}
          </span>
          <h3 class="text-3xl text-black leading-none font-sora tracking-tight">
            Our Mission is to <strong class="font-sora">Power</strong> the <br /> Hyper-Connected Economy
          </h3>
        </div>
        <div class="flex lg:gap-y-6 lg:gap-x-1 justify-between w-full lg:w-2/3 flex-wrap lg:flex-nowrap">
          <div
            :key="index"
            v-for="({ title, list }, index) in listData"
            class="w-1/2 lg:w-1/4 mt-6 lg:mt-0 text-black"
          >
            <slot name="list-data" />
            <span class="font-proto-mono text-xs pb-2 mb-4 border-b border-black w-full block">{{
              title
            }}</span>
            <ul class="list-none p-0 m-0 mt-4 flex flex-col gap-2">
              <li
                v-for="({ link, title }, i) in list"
                :key="i"
                class="text-sm"
              >
                <a
                  :href="link"
                  target="_self"
                  class="font-sora relative inline-block transition-colors duration-300 hover:text-gray-700 after:content-[''] after:absolute after:w-0 after:h-[1px] after:bottom-0 after:left-0 after:bg-current after:transition-all after:duration-300 hover:after:w-full"
                >
                  {{ title }}
                </a>
              </li>
            </ul>
          </div>
   
        </div>
      </div>
    </div>
    <div class="pt-20 pb-8 px-6 max-w-[1600px] mx-auto">
      <slot name="tagline"></slot>
    </div>
    </div>
    <div class="bg-neutral-100">
      <div class="py-6 px-6 max-w-[1600px] mx-auto flex justify-between flex-wrap">
        <div class="flex gap-2 items-center">
          <slot name="lang"></slot>
          <div class="flex gap-4">
            <a v-for="social in socialButtons" target="_blank" :key="social.title" :href="social.link">
              <span :class="social.icon" class="text-neutral-800"></span>
            </a>
          </div>
        </div>
        <span class="text-neutral-800 text-xs font-proto-mono tracking-tight leading-relaxed w-full  md:w-1/2 mt-4  md:mt-0 text-right">{{ copyright }}</span>
      </div>
    </div>
  </footer>
</template>

<script setup>
  import Tag from '../../components/Tag'

  defineProps({
    lang: {
      type: String,
      default: 'en'
    },
    listData: Array,
    cta: Object,
    copyright: String,
    securityInformation: Object,
    socialButtons: Array,
    content: Object
  })
</script>
