<template>
  <div class="flex flex-col gap-10 bg-black">
    <div class="flex md:justify-between items-center justify-center gap-2">
      <p class="uppercase text-gray-200 tracking-widest font-proto-mono"> {{ title }} </p>
      <Button class="items-center hidden md:flex" label="button" v-bind="button" type="linkSecondary" theme="dark" />
    </div>
    <div class="relative">
       <div class="hidden md:block absolute left-0 top-0 bottom-0 w-1/3 bg-gradient-to-r from-black/90 to-black/10 z-10 pointer-events-none"></div>
       <div class="hidden md:block absolute right-0 top-0 bottom-0 w-1/3 bg-gradient-to-l from-black/90 to-black/10 z-10 pointer-events-none"></div>
      
      <swiper
        :modules="modules"
        :loop="true"
        :slides-per-view="2"
        :grab-cursor="true"
        :space-between="30"
        :breakpoints="breakpoints"
        @swiper="onSwiper"
        :autoplay="{
          delay: 3000,
          disableOnInteraction: false,
        }"
        class="swiper-container"
      >
        <swiper-slide v-for="(item, index) in items" :key="index">
          <div class="flex justify-center items-center h-24 w-24 rounded-lg bg-neutral-900">
            <img :src="item.src" :alt="item.alt" class="max-w-12 max-h-12 w-full h-full" />
          </div>
        </swiper-slide>
      </swiper>
    </div>

  </div>
</template>

<script setup>
  import { Swiper, SwiperSlide } from 'swiper/vue'
  import { Controller, Autoplay } from 'swiper/modules'
  import Button from '../Button/Button.vue'
  import { ref } from 'vue'
  // Import Swiper styles
  import 'swiper/css'
  import 'swiper/css/scrollbar'

  const modules = [Controller, Autoplay]

  const swiperInstance = ref(null)

  const onSwiper = (swiper) => {
    swiperInstance.value = swiper
  }

  const breakpoints = {
    480: {
      slidesPerView: 4
    },
    960: { 
      slidesPerView: 6
    },
    1280: {
      slidesPerView: 8
    },
    1440: {
      slidesPerView: 10
    }
  }

  defineProps({
    items: {
      type: Array,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    button: {
      type: Object,
      required: true
    }
  })
</script>

<style scoped>

/* Ensure the gradient overlays are properly positioned */
.absolute {
  transition: opacity 0.3s ease;
}

/* Optional: Add a subtle animation to the gradients */
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.absolute {
  animation: fadeIn 0.5s ease-in-out;
}

/* Responsive gradient widths */
@media (max-width: 768px) {
  .absolute {
    width: 2rem; /* w-8 */
  }
}

@media (min-width: 768px) {
  .absolute {
    width: 4rem; /* w-16 */
  }
}

@media (min-width: 1280px) {
  .absolute {
    width: 5rem; /* w-20 */
  }
}
</style>
