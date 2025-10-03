<template>
  <div>
    <swiper
      :modules="modules"
      :slides-per-view="2.5"
      :space-between="16"
      :centered-slides="false"
      :grab-cursor="true"
      :virtual="true"
      :scrollbar="{ draggable: true }"
      :breakpoints="breakpoints"
      class="p-10 pb-[42px] border-t-2 border-[#2B2B2B]"
    >
      <template
        v-for="item in items"
        :key="item.title"
      >
        <swiper-slide>
          <div class="flex gap-3 md:gap-5 w-fit items-center">
            <div
              class="rounded-full border-2 border-[#F3652B] h-16 w-16 flex items-center justify-center"
            >
              <i
                class="text-2xl text-[#EDE8E8]"
                :class="item.icon"
              />
            </div>
            <div class="flex gap-2 items-start">
              <p class="text-[80px] font-proto-mono text-[#EDE8E8] leading-tight flex-shrink-0">
                {{ item.title }}
              </p>
              <p
                class="mt-4 text-balanced font-proto-mono tracking-widest text-xs font-medium uppercase leading-tight text-[#EDE8E8] w-[calc(100%-65%)]"
              >
                {{ item.description }}
              </p>
            </div>
          </div>
        </swiper-slide>
      </template>
    </swiper>
  </div>
</template>

<script setup>
  import { Swiper, SwiperSlide } from 'swiper/vue'
  import { Controller, Scrollbar, Virtual } from 'swiper/modules'
  // Import Swiper styles
  import 'swiper/css'
  import 'swiper/css/navigation'
  import 'swiper/css/pagination'
  import 'swiper/css/scrollbar'

  const modules = [Controller, Scrollbar, Virtual]

  const breakpoints = {
    320: {
      slidesPerView: 1
    },
    768: {
      slidesPerView: 1
    }
  }

  defineProps({
    items: {
      type: Array,
      required: true
    },
    justify: {
      type: String,
      required: false,
      default: 'center',
      options: ['center', 'start']
    }
  })
</script>

<style scoped>
  :deep(.swiper-scrollbar) {
    bottom: 0;
    background-color: #2b2b2b;
    height: 2px;
    left: 0;
  }

  :deep(.swiper-scrollbar-drag) {
    background-color: #ede8e8;
  }
</style>
