<template>
  <LayoutContainer>
    <div
      :id="id"
      :class="`${bottomSpacing}`"
    >
      <div class="flex md:flex-row justify-between items-start md:items-center mb-6 gap-4">
        <h2
          v-if="title"
          class="display-3-mobile md:display-3 font-normal tracking-tight text-gray-200 font-sora"
        >
          {{ title }}
        </h2>

        <div class="flex items-center gap-3">
          <button
            ref="prevButton"
            class="swiper-button-prev-custom px-3 cursor-pointer flex items-center bg-neutral-900 justify-center rounded-lg border border-neutral-800 text-neutral-400 w-10 h-10 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            :class="
              disabledNavigation
                ? ''
                : 'hover:border-orange-500 hover:text-orange-500 disabled:hover:border-inherit disabled:hover:text-inherit'
            "
            aria-label="Previous slide"
            :disabled="disabledNavigation"
          >
            <i class="pi pi-chevron-left text-[.5rem]" />
          </button>
          <button
            ref="nextButton"
            class="swiper-button-next-custom px-3 cursor-pointer flex items-center bg-neutral-900 justify-center rounded-lg border border-neutral-800 text-neutral-400 w-10 h-10 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            :class="
              disabledNavigation
                ? ''
                : 'hover:border-orange-500 hover:text-orange-500 disabled:hover:border-inherit disabled:hover:text-inherit'
            "
            aria-label="Next slide"
            :disabled="disabledNavigation"
          >
            <i class="pi pi-chevron-right text-[.5rem]" />
          </button>
        </div>
      </div>

      <swiper
        :modules="modules"
        :slides-per-view="1.15"
        :grab-cursor="true"
        :breakpoints="breakpoints"
        :navigation="{
          prevEl: prevButton,
          nextEl: nextButton
        }"
        @swiper="onSwiper"
        @slide-change="onSlideChange"
        @breakpoint="onBreakpoint"
        class="w-full"
      >
        <swiper-slide
          v-for="(card, index) in cards"
          :key="index"
          class="h-auto"
        >
          <a
            :href="card.link"
            :target="card.target ?? '_blank'"
            class="group cursor-pointer"
          >
            <div
              :id="`swiper-card-dot-top-${index}`"
              class="p-1 border hover:bg-neutral-900 border-neutral-900 relative h-full before:content-[''] before:bg-neutral-400 before:w-1 before:h-1 before:absolute before:top-0 before:left-0 after:content-[''] after:bg-neutral-400 after:w-1 after:h-1 after:absolute after:top-0 after:right-0 after:hidden"
            >
              <div
                :id="`swiper-card-dot-bottom-${index}`"
                class="h-full w-full p-6 flex flex-col gap-4 before:content-[''] before:bg-neutral-400 before:w-1 before:h-1 before:absolute before:bottom-0 before:left-0 after:content-[''] after:bg-neutral-400 after:w-1 after:h-1 after:absolute after:bottom-0 after:right-0 after:hidden"
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
                  :label="card.linkLabel || 'Learn more'"
                  :target="card.target ?? '_blank'"
                  type="linkSecondary"
                  size="small"
                  theme="dark"
                  customClass="w-fit"
                />
              </div>
            </div>
          </a>
        </swiper-slide>
      </swiper>
    </div>
  </LayoutContainer>
</template>

<script setup lang="ts">
  import { Swiper, SwiperSlide } from 'swiper/vue'
  import { Navigation } from 'swiper/modules'
  import { ref, computed, onMounted } from 'vue'
  import Button from '../../components/Button/Button.vue'
  import LayoutContainer from '../LayoutContainer/LayoutContainer.vue'
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
    target?: '_blank' | '_self'
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
  const slidesPerView = ref(0)
  const prevDotBottom = ref<HTMLElement | null>(null)
  const prevDotTop = ref<HTMLElement | null>(null)

  const breakpoints = {
    320: {
      slidesPerView: 1.1
    },
    640: {
      slidesPerView: 1.5
    },
    768: {
      slidesPerView: 2
    },
    1024: {
      slidesPerView: 2.5
    },
    1280: {
      slidesPerView: 3
    }
  }

  const onSwiper = (swiper: any) => {
    swiperInstance.value = swiper
  }

  const onBreakpoint = (swiper: any, breakpointParams: any) => {
    slidesPerView.value = breakpointParams.slidesPerView
    handleDotsOnSlideChange(swiper.activeIndex)
  }

  const disabledNavigation = computed(() => {
    return props.cards.length <= slidesPerView.value
  })

  const handleDotsOnSlideChange = (index: number) => {
    const targetIndex = Math.ceil(slidesPerView.value) - 1 + index
    const dotTop: HTMLElement | null = document.getElementById(`swiper-card-dot-top-${targetIndex}`)
    const dotBottom: HTMLElement | null = document.getElementById(
      `swiper-card-dot-bottom-${targetIndex}`
    )

    if (!dotTop && !dotBottom) return

    if (prevDotTop.value) {
      prevDotTop.value.classList.add('after:hidden')
      prevDotTop.value.classList.remove('after:block')
    }

    if (prevDotBottom.value) {
      prevDotBottom.value.classList.add('after:hidden')
      prevDotBottom.value.classList.remove('after:block')
    }

    dotTop?.classList.add('after:block')
    dotTop?.classList.remove('after:hidden')
    dotBottom?.classList.add('after:block')
    dotBottom?.classList.remove('after:hidden')

    prevDotTop.value = dotTop
    prevDotBottom.value = dotBottom
  }

  const onSlideChange = (swiper: any) => {
    handleDotsOnSlideChange(swiper.activeIndex)
    emit('slide-change', { index: swiper.activeIndex })
  }

  onMounted(() => {
    const INITAL_INDEX = 0
    handleDotsOnSlideChange(INITAL_INDEX)
  })
</script>

<style scoped>
  .swiper-button-prev-custom:disabled,
  .swiper-button-next-custom:disabled {
    opacity: 0.3;
    cursor: not-allowed;
  }
</style>
