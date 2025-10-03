<template>
  <div class="w-full md:hidden">
    <div class="mb-6">
      <Toggle 
        v-model="toggleValue"
        main-label="monthly"
        alternative-label="yearly"
        description="Save up to 20% with yearly billing"
        @change="handlePeriodChange"
      />
    </div>
    
    <div class="w-full overflow-hidden">
    <swiper
      :modules="modules"
      :slides-per-view="1.15"
      :space-between="16"
      :centered-slides="false"
      :grab-cursor="true"
      :breakpoints="breakpoints"
      class="w-full  pl-4 pr-4 sm:pl-4 sm:pr-2"
      @slide-change="onSlideChange"
      @swiper="onSwiper"
    >
      <swiper-slide
        v-for="(card, index) in cards"
        :key="index"
        class="h-auto "
      >
        <PricingCard
          :popular="card.popular"
          :title="card.title"
          :subtitle="card.subtitle"
          :features="card.features"
          :monthly-price="card.monthlyPrice"
          :annual-price="card.annualPrice"
          :current-period="currentPeriod"
          :price-label="card.priceLabel"
          :savings="card.savings"
          :button-label="card.buttonLabel"
          @button-click="handleCardClick(card, index)"
          :button-hidden="true"
        />
      </swiper-slide>
    </swiper>
    </div>
  </div>

  <div ref="stickyObserver" class="h-0 md:hidden"></div>
  
  <swiper
      :modules="modules"
      :slides-per-view="1.15"
      :space-between="16"
      :centered-slides="false"
      :grab-cursor="true"
      :breakpoints="breakpoints"
      class="w-full mb-11 pl-4 pr-4 sm:pl-4 sm:pr-2 sticky top-[64px]"
      @slide-change="onSlideChange"
      @swiper="onSwiper2"
    >
      <swiper-slide
        v-for="(card, index) in cards"
        :key="index"
        class="h-auto shadow-xl"
      >
      <div :class="[
        'z-10 rounded-b-lg bg-neutral-900 md:hidden transition-[margin, border-radius] duration-300 ease-in-out',
        isStickyActive ? 'mt-2 rounded-lg' : ''
      ]">
          <div class="p-4 flex items-center rounded-xl gap-4">
            <Button 
              :label="buttonLabel"
              icon="pi pi-chevron-right" 
              type="secondary" 
              class="flex-shrink-0"
              :size="!isStickyActive ? 'large' : 'small'"
            />
            <div class="flex-1">
              <Transition name="fade">
                <h3 v-if="isStickyActive" class="text-2xl text-neutral-800">
                  {{ activeCardTitle }}
                </h3>
              </Transition>
            </div>
          </div>
        </div>
      </swiper-slide>
  </swiper>
  


  <div class="grid px-5 md:hidden">
    <PricingTableContent :mobileTable="true" :table="filteredTable" />
  </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Controller } from 'swiper/modules'
import PricingCard from '../../components/PricingCard/PricingCard.vue'
import PricingTableContent from '../../components/PricingTableContent/PricingTableContent.vue'
import Button from '../../components/Button/Button.vue'
import Toggle from '../Toggle/Toggle.vue'
import { ref, computed, onMounted, onUnmounted } from 'vue'
import 'swiper/css  
const props = defineProps({
  table: {
    type: Array,
    default: () => [
      {
        overline: 'AZION WEB PLATFORM',
        title: 'Platform',
        description: 'Ultra-fast, secure by default global application delivery',
        features: [
          {
            name: 'Workspaces',
            nested: true,
            values: ['1 Workspace', '1 Workspace', '1 Workspace', 'Custom']
          },
          {
            name: 'Workloads',
            nested: true, 
            values: ['10 Workloads', '100 Workloads', '200 Workloads', 'Custom']
          },
          {
            name: 'Users',
            values: ['50 seats included', '50 seats included', '50 seats included', 'Custom']
          },
          {
            name: 'Custom Domains',
            values: ['50 per workload', '50 per workload', '50 per workload', '50 per workload']
          },
          {
            name: 'Dev Tools (CLI, API, GraphQL API, Terraform)',
            values: [true, true, true, true]
          },
          {
            name: 'SAML Single Sign-on (SSO)',
            values: [false, false, false, true]
          },
          {
            name: 'Directory Sync (SCIM)',
            values: ['1 Workspace', '1 Workspace', '1 Workspace', '1 Workspace']
          },
          {
            name: 'Custom Network Map',
            values: ['1 Workspace', '1 Workspace', '1 Workspace', '1 Workspace']
          },
          {
            name: 'Mutual TLS',
            values: ['1 Workspace', '1 Workspace', '1 Workspace', '1 Workspace']
          }
        ]
      },
      {
        overline: 'AZION WEB PLATFORM',
        title: 'Platform',
        description: 'Ultra-fast, secure by default global application delivery',
        features: [
          {
            name: 'Workspaces',
            nested: true,
            values: ['1 Workspace', '1 Workspace', '1 Workspace', 'Custom']
          },
          {
            name: 'Workloads',
            nested: true, 
            values: ['10 Workloads', '100 Workloads', '200 Workloads', 'Custom']
          },
          {
            name: 'Users',
            values: ['50 seats included', '50 seats included', '50 seats included', 'Custom']
          },
          {
            name: 'Custom Domains',
            values: ['50 per workload', '50 per workload', '50 per workload', '50 per workload']
          },
          {
            name: 'Dev Tools (CLI, API, GraphQL API, Terraform)',
            values: [true, true, true, true]
          },
          {
            name: 'SAML Single Sign-on (SSO)',
            values: [false, false, false, true]
          },
          {
            name: 'Directory Sync (SCIM)',
            values: ['1 Workspace', '1 Workspace', '1 Workspace', '1 Workspace']
          },
          {
            name: 'Custom Network Map',
            values: ['1 Workspace', '1 Workspace', '1 Workspace', '1 Workspace']
          },
          {
            name: 'Mutual TLS',
            values: ['1 Workspace', '1 Workspace', '1 Workspace', '1 Workspace']
          }
        ]
      },
      {
        overline: 'AZION WEB PLATFORM',
        title: 'Platform',
        description: 'Ultra-fast, secure by default global application delivery',
        features: [
          {
            name: 'Workspaces',
            nested: true,
            values: ['1 Workspace', '1 Workspace', '1 Workspace', 'Custom']
          },
          {
            name: 'Workloads',
            nested: true, 
            values: ['10 Workloads', '100 Workloads', '200 Workloads', 'Custom']
          },
          {
            name: 'Users',
            values: ['50 seats included', '50 seats included', '50 seats included', 'Custom']
          },
          {
            name: 'Custom Domains',
            values: ['50 per workload', '50 per workload', '50 per workload', '50 per workload']
          },
          {
            name: 'Dev Tools (CLI, API, GraphQL API, Terraform)',
            values: [true, true, true, true]
          },
          {
            name: 'SAML Single Sign-on (SSO)',
            values: [false, false, false, true]
          },
          {
            name: 'Directory Sync (SCIM)',
            values: ['1 Workspace', '1 Workspace', '1 Workspace', '1 Workspace']
          },
          {
            name: 'Custom Network Map',
            values: ['1 Workspace', '1 Workspace', '1 Workspace', '1 Workspace']
          },
          {
            name: 'Mutual TLS',
            values: ['1 Workspace', '1 Workspace', '1 Workspace', '1 Workspace']
          }
        ]
      }
    ]
  },
  cards: {
    type: Array,
    required: true,
    default: () => []
  },
  buttonLabel: {
    type: String,
    default: 'START NOW'
  }
})

const emit = defineEmits(['card-click', 'slide-change', 'period-change'])

const swiperInstance = ref(null)
const swiperInstance2 = ref(null)
const activeCardIndex = ref(0)
const isStickyActive = ref(false)
const stickyObserver = ref(null)
const currentPeriod = ref('monthly') // 'monthly' or 'yearly' for pricing display

// Computed property to convert between Toggle values and pricing periods
const toggleValue = computed({
  get() {
    return currentPeriod.value === 'monthly' ? 'main' : 'alternative'
  },
  set(value) {
    currentPeriod.value = value === 'main' ? 'monthly' : 'yearly'
  }
})

const activeCardTitle = computed(() => {
  if (props.cards.length > 0 && activeCardIndex.value < props.cards.length) {
    return props.cards[activeCardIndex.value].title
  }
  return ''
})

const startX = ref(0)
const endX = ref(0)

const handleTouchStart = (e) => {
  startX.value = e.touches[0].clientX
}

const handleTouchEnd = (e) => {
  endX.value = e.changedTouches[0].clientX

  if (startX.value > endX.value + 50) {
    if (swiperInstance.value) {
      swiperInstance.value.slideNext()
    }
  } else if (startX.value < endX.value - 50) {
    if (swiperInstance.value) {
      swiperInstance.value.slidePrev()
    }
  }
}

const filteredTable = computed(() => {
  if (!props.table || props.table.length === 0) return []
  
  return props.table.map(section => ({
    ...section,
    features: section.features.map(feature => ({
      ...feature,
      values: [feature.values[activeCardIndex.value] || feature.values[0]]
    }))
  }))
})

const modules = [Controller]

const breakpoints = {
  320: {
    slidesPerView: 1.10,
    spaceBetween: 16
  },
  640: {
    slidesPerView: 1.15,
    spaceBetween: 20
  },
  768: {
    slidesPerView: 2.5,
    spaceBetween: 24
  },
  1024: {
    slidesPerView: 3,
    spaceBetween: 32
  }
}

const onSwiper = (swiper) => {
  swiperInstance.value = swiper
  if (swiperInstance2.value) {
    swiperInstance.value.controller.control = swiperInstance2.value
    swiperInstance2.value.controller.control = swiperInstance.value
  }
}

const onSwiper2 = (swiper) => {
  swiperInstance2.value = swiper
  if (swiperInstance.value) {
    swiperInstance.value.controller.control = swiperInstance2.value
    swiperInstance2.value.controller.control = swiperInstance.value
  }
}

const onSlideChange = (swiper) => {
  activeCardIndex.value = swiper.activeIndex
  const activeCard = props.cards[swiper.activeIndex]
  emit('slide-change', { card: activeCard, index: swiper.activeIndex })
}

const handleCardClick = (card, index) => {
  emit('card-click', { card, index })
}

const handlePeriodChange = (period) => {
  // The toggleValue computed property already handles the conversion
  // Just emit the current pricing period
  emit('period-change', currentPeriod.value)
}

const checkStickyStatus = () => {
  if (stickyObserver.value) {
    const rect = stickyObserver.value.getBoundingClientRect()
    isStickyActive.value = rect.top < 0
  }
}

onMounted(() => {
  if (props.cards.length > 0) {
    activeCardIndex.value = 0
  }
  
  window.addEventListener('scroll', checkStickyStatus)
  
  checkStickyStatus()
  
  document.addEventListener('touchstart', handleTouchStart)
  document.addEventListener('touchend', handleTouchEnd)
})

onUnmounted(() => {
  window.removeEventListener('scroll', checkStickyStatus)
  document.removeEventListener('touchstart', handleTouchStart)
  document.removeEventListener('touchend', handleTouchEnd)
})
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.fade-enter-from {
  opacity: 0;
  transform: translateX(-10px);
}

.fade-leave-to {
  opacity: 0;
  transform: translateX(10px);
}

.fade-enter-to,
.fade-leave-from {
  opacity: 1;
  transform: translateX(0);
}
</style>

