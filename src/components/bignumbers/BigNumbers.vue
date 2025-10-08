<template>
  <div>
    <swiper
      :modules="modules"
      :slides-per-view="1"
      :grab-cursor="true"
      :space-between="16"
      :scrollbar="{ draggable: true }"
      :breakpoints="breakpoints"
      class="md:pt-10 pb-3 md:pb-[42px] md:border-t-2 md:border-[#2B2B2B]"
      @swiper="onSwiper"
    >
        <swiper-slide v-for="(item, index) in items" :key="index">
          <div class="flex flex-col md:flex-row gap-3 w-fit md:gap-5 md:items-center"> 
            <div
              class="rounded-full h-14 w-14 md:h-16 md:w-16 min-w-14 md:min-w-16 border-2 border-[#F3652B] flex items-center justify-center"
            >
              <i
                class="md:text-2xl text-[#EDE8E8]"
                :class="item.icon"
              />
            </div>
            <div class="flex gap-2 items-start">
              <p class="text-6xl md:text-[80px] font-proto-mono text-[#EDE8E8] leading-tight flex-shrink-0">
                {{ item.title }}
              </p>
              <p
                class="mt-4 text-balanced font-proto-mono tracking-widest text-xs font-medium uppercase leading-tight text-[#EDE8E8] w-full md:w-[calc(100%-65%)]"
              >
                {{ item.description }}
              </p>
            </div>
          </div>
        </swiper-slide>
    </swiper>
  </div>
</template>

<script setup>
  import { Swiper, SwiperSlide } from 'swiper/vue'
  import { Controller, Scrollbar } from 'swiper/modules'
  import { ref } from 'vue'
  // Import Swiper styles
  import 'swiper/css'
  import 'swiper/css/scrollbar'

  const modules = [Controller, Scrollbar]

  const swiperInstance = ref(null)

  const onSwiper = (swiper) => {
    swiperInstance.value = swiper
  }

  const breakpoints = {
    768: {
      slidesPerView: 1.5
    },
    1280: {
      slidesPerView: 2.5
    },
    1440: {
      slidesPerView: 3.15
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
