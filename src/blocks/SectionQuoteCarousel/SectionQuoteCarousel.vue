<template>
  <section class="max-w-xxl mx-auto">
    <swiper
      :modules="modules"
      :loop="true"
      :slides-per-view="1.15"
      :grab-cursor="true"
      :space-between="30"
      :breakpoints="breakpoints"
      :navigation="{
        nextEl: '.swiper-next',
        prevEl: '.swiper-prev'
      }"
      @swiper="onSwiper"
      class="swiper-container"
    >
      <swiper-slide
        v-for="(item, index) in items"
        :key="index"
      >
        <Quote
          :logo="item.logo"
          :testimonial="item.testimonial"
          :source="item.source"
        />
      </swiper-slide>
      <div class="flex flex-row gap-2 mt-16 w-full">
        <div
          class="swiper-prev cursor-pointer flex items-center justify-center rounded-full bg-neutral-200 hover:bg-orange-500 transition-colors w-10 h-10"
        >
          <i class="pi pi-angle-left" />
        </div>
        <div
          class="swiper-next cursor-pointer flex items-center justify-center rounded-full bg-neutral-200 hover:bg-orange-500 transition-colors w-10 h-10"
        >
          <i class="pi pi-angle-right" />
        </div>
      </div>
    </swiper>
  </section>
</template>

<script setup>
  import { Swiper, SwiperSlide } from 'swiper/vue'
  import { Controller, Navigation } from 'swiper/modules'
  import Quote from '../../components/Quote/Quote.vue'
  import { ref } from 'vue'
  import 'swiper/css'

  const modules = [Controller, Navigation]
  const swiperInstance = ref(null)
  const onSwiper = (swiper) => {
    swiperInstance.value = swiper
  }
  const breakpoints = {
    768: {
      slidesPerView: 2
    },
    1280: {
      slidesPerView: 2.5
    },
    1440: {
      slidesPerView: 3
    }
  }
  defineProps({
    items: {
      type: Array,
      required: true
    }
  })
</script>
