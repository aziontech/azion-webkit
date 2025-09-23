<template>
  <div class="w-full overflow-hidden md:hidden">
    <swiper
      :modules="modules"
      :slides-per-view="1.15"
      :space-between="16"
      :centered-slides="false"
      :grab-cursor="true"
      :breakpoints="breakpoints"
      class="w-full pl-4 pr-4 sm:pl-4 sm:pr-2"
      @slide-change="onSlideChange"
      @swiper="onSwiper"
    >
      <swiper-slide
        v-for="(card, index) in cards"
        :key="index"
        class="h-auto"
      >
        <PricingCard
          :popular="card.popular"
          :title="card.title"
          :subtitle="card.subtitle"
          :features="card.features"
          :monthly-price="card.monthlyPrice"
          :annual-price="card.annualPrice"
          :current-period="card.currentPeriod || 'monthly'"
          :savings="card.savings"
          :button-label="card.buttonLabel"
          @button-click="handleCardClick(card, index)"
        />
      </swiper-slide>
    </swiper>
  </div>
  
  <div class="mt-6 mx-4 mb-6 sticky top-[64px] z-10 bg-neutral-300 rounded-lg md:hidden">
    <div class="border p-2 flex items-center rounded-lg gap-4">
      <Button 
        :label="buttonLabel"
        icon="pi pi-chevron-right" 
        type="secondary" 
        class="flex-shrink-0"
      />
      <div class="flex-1">
        <h3 class="text-2xl text-neutral-800 transition-all duration-300">
          {{ activeCardTitle }}
        </h3>
      </div>
    </div>
  </div>

  <div class="grid px-5 md:hidden">
    <PricingTableContent :mobileTable="true" :table="filteredTable" />
  </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import PricingCard from '../../components/PricingCard/PricingCard.vue'
import PricingTableContent from '../../components/PricingTableContent/PricingTableContent.vue'
import Button from '../../components/Button/Button.vue'
import { ref, computed, onMounted, onUnmounted } from 'vue'
import 'swiper/css'

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

const emit = defineEmits(['card-click', 'slide-change'])

const swiperInstance = ref(null)
const activeCardIndex = ref(0)

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

const modules = []

const breakpoints = {
  320: {
    slidesPerView: 1.15,
    spaceBetween: -8
  },
  640: {
    slidesPerView: 1.5,
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
}

const onSlideChange = (swiper) => {
  activeCardIndex.value = swiper.activeIndex
  const activeCard = props.cards[swiper.activeIndex]
  emit('slide-change', { card: activeCard, index: swiper.activeIndex })
}

const handleCardClick = (card, index) => {
  emit('card-click', { card, index })
}

onMounted(() => {
  if (props.cards.length > 0) {
    activeCardIndex.value = 0
  }
  
  document.addEventListener('touchstart', handleTouchStart)
  document.addEventListener('touchend', handleTouchEnd)
})

onUnmounted(() => {
  document.removeEventListener('touchstart', handleTouchStart)
  document.removeEventListener('touchend', handleTouchEnd)
})
</script>

