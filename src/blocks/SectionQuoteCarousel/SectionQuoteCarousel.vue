<template>
  <LayoutContainer>
    <div
      :id="id"
      :class="`${bottomSpacing}`"
    >
    <swiper
      :modules="modules"
      :loop="true"
      :slides-per-view="1.15"
      :grab-cursor="true"
      :space-between="30"
      :breakpoints="breakpoints"
      :navigation="{
        prevEl: '.swiper-prev',
        nextEl: '.swiper-next'
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
      <div class="swiper-prev flex flex-row gap-2 mt-16 w-full">
        <div
          class="cursor-pointer flex items-center justify-center rounded-full border-2 text-orange-500 w-10 h-10 border-orange-500 custom-prev-btn"
        >
          <i class="pi pi-angle-left" />
        </div>
        <div
          class="cursor-pointer swiper-next flex items-center justify-center rounded-full border-2 border-orange-500 bg-orange-500 text-black w-10 h-10 custom-next-btn"
        >
          <i class="text-sm pi pi-angle-right" />
        </div>
      </div>
    </swiper>
    </div>
  </LayoutContainer>
</template>

<script setup>
  import { Swiper, SwiperSlide } from 'swiper/vue'
  import { Controller, Navigation } from 'swiper/modules'
  import { ref } from 'vue'
  import Quote from '../../components/Quote/Quote.vue'
  import LayoutContainer from '../LayoutContainer/LayoutContainer.vue'
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
    },
    bottomSpacing: {
      type: String,
      options: ['mb-0', 'mb-6', 'mb-12', 'mb-24', 'mb-48'],
      default: 'mb-24'
    },
    id: {
      type: String,
      default: ''
    }
  })
</script>
