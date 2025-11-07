<template>
  <section
    :id="id"
    :class="`text-white relative max-w-xl xxxl:max-w-xxl mx-auto p-4 md:p-12 ${bottomSpacing}`"
  >
    <div class="flex md:flex-row justify-between items-start md:items-center mb-8 md:mb-12 gap-4">
      <h2
        v-if="title"
        class="display-3-mobile md:display-3 font-normal tracking-tight text-gray-200 font-sora"
      >
        {{ title }}
      </h2>

      <div class="flex items-center gap-3">
        <button
          ref="prevButton"
          class="swiper-button-prev-custom px-3 cursor-pointer flex items-center bg-neutral-900 justify-center rounded-lg border border-neutral-800 hover:border-orange-500 text-neutral-400 hover:text-orange-500 w-10 h-10 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
          aria-label="Previous slide"
        >
          <i class="pi pi-chevron-left text-[.5rem]" />
        </button>
        <button
          ref="nextButton"
          class="swiper-button-next-custom px-3 cursor-pointer flex items-center bg-neutral-900 justify-center rounded-lg border border-neutral-800 hover:border-orange-500 text-neutral-400 hover:text-orange-500 w-10 h-10 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
          aria-label="Next slide"
        >
          <i class="pi pi-chevron-right text-[.5rem]" />
        </button>
      </div>
    </div>

    <swiper
      :modules="modules"
      :slides-per-view="1.15"
      :space-between="16"
      :grab-cursor="true"
      :breakpoints="breakpoints"
      :navigation="{
        prevEl: prevButton,
        nextEl: nextButton
      }"
      @swiper="onSwiper"
      @slide-change="onSlideChange"
      class="w-full"
    >
      <swiper-slide
        v-for="(card, index) in cards"
        :key="index"
        class="h-auto"
      >
        <div
          class="p-1 border hover:bg-neutral-900 border-neutral-900 relative h-full before:content-[''] before:bg-neutral-400 before:w-1 before:h-1 before:absolute before:top-0 before:left-0 after:content-[''] after:bg-neutral-400 after:w-1 after:h-1 after:absolute after:top-0 after:right-0"
        >
          <div
            class="h-full w-full p-6 flex flex-col gap-4 before:content-[''] before:bg-neutral-400 before:w-1 before:h-1 before:absolute before:bottom-0 before:left-0 after:content-[''] after:bg-neutral-400 after:w-1 after:h-1 after:absolute after:bottom-0 after:right-0"
          >
            <div
              v-if="card.tag"
              class="flex items-center gap-2 bg-slate-950 text-neutral-100 px-3 py-1 rounded w-fit"
            >
              <i
                v-if="card.tagIcon"
                :class="card.tagIcon"
                class="text-sm"
              ></i>
              <span class="text-xs uppercase font-proto-mono">
                {{ card.tag }}
              </span>
            </div>

            <h3 class="display-5-mobile md:display-5 text-white font-sora">
              {{ card.title }}
            </h3>

            <div
              class="text-sm mb-12 text-neutral-400 leading-relaxed font-sora flex-grow"
              v-html="parseMarkdown(card.descriptionRawMarkdown)"
            ></div>

            <Button
              v-if="card.link"
              :href="card.link"
              :label="card.linkLabel || 'Learn more'"
              type="tertiary"
              size="small"
              theme="dark"
              icon="pi pi-chevron-right"
              customClass="px-0 py-0"
            />
          </div>
        </div>
      </swiper-slide>
    </swiper>
  </section>
</template>

<script setup lang="ts">
  import { Swiper, SwiperSlide } from 'swiper/vue'
  import { Navigation } from 'swiper/modules'
  import { ref } from 'vue'
  import Button from '../../components/Button/Button.vue'
  import 'swiper/css'
  import 'swiper/css/navigation'
  import { parseMarkdown } from '../../services/markdown/markdown-service'

  export interface CarouselCard {
    tag?: string
    tagIcon?: string
    title: string
    descriptionRawMarkdown: string
    link?: string
    linkLabel?: string
  }

  interface SectionCardCarouselProps {
    title?: string
    cards?: CarouselCard[]
    id?: string
    bottomSpacing?: 'mb-0' | 'mb-6' | 'mb-12' | 'mb-24' | 'mb-48'
  }

  const props = withDefaults(defineProps<SectionCardCarouselProps>(), {
    cards: () => [],
    bottomSpacing: 'mb-24'
  })

  const emit = defineEmits(['slide-change'])

  const modules = [Navigation]
  const swiperInstance = ref(null)
  const prevButton = ref(null)
  const nextButton = ref(null)

  const breakpoints = {
    320: {
      slidesPerView: 1.1,
      spaceBetween: 16
    },
    640: {
      slidesPerView: 1.5,
      spaceBetween: 20
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 24
    },
    1024: {
      slidesPerView: 2.5,
      spaceBetween: 24
    },
    1280: {
      slidesPerView: 3,
      spaceBetween: 24
    }
  }

  const onSwiper = (swiper: any) => {
    swiperInstance.value = swiper
  }

  const onSlideChange = (swiper: any) => {
    emit('slide-change', { index: swiper.activeIndex })
  }
</script>

<style scoped>
  .swiper-button-prev-custom:disabled,
  .swiper-button-next-custom:disabled {
    opacity: 0.3;
    cursor: not-allowed;
  }
</style>
