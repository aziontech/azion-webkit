<template>
  <section>
    <Carousel :value="cards" :numVisible="3" :numScroll="2" :responsiveOptions="responsiveOptions" :circular="true"
      :autoplayInterval="autoplayInterval">
      <template #item="slotProps">
        <div class="h-full border-1 rounded-md surface-border flex flex-col gap-4 mx-6 p-6">
          <template v-if="slotProps.data.isCompany">
            <div>
              <ImageSwitcher>
                <template #darkImage>
                  <img loading="lazy" width="auto" height="36" :alt="slotProps.data.name"
                    :src="`${slotProps.data.logoDark}?ims=x36`">
                </template>
                <template #lightImage>
                  <img loading="lazy" width="auto" height="36" :alt="slotProps.data.name"
                    :src="`${slotProps.data.logoLight}?ims=x36`">
                </template>
              </ImageSwitcher>
            </div>
          </template>
          <template v-else>
            <div class="flex gap-3">
              <template v-if="slotProps.data.avatar">
                <Avatar :image="`${avatar}?ims=40x40`" class="h-9" />
              </template>
              <template v-else>
                <Avatar :label="slotProps.data.name.charAt(0)" class="h-9 surface-border" />
              </template>
              <div>
                <p class="text-sm"> {{ slotProps.data.name }}</p>
                <p class="text-xs text-color-secondary"> {{ slotProps.data.role }}</p>
              </div>
            </div>
          </template>
          <p class="text-color-secondary">
            {{ slotProps.data.text }}
          </p>
        </div>
      </template>
    </Carousel>
  </section>
</template>

<script setup>
import Carousel from 'primevue/carousel';
import Avatar from 'primevue/avatar';
import ImageSwitcher from "../theme-aware-image-switcher/index.vue"
import { ref } from 'vue';

defineProps({
  autoplayInterval: {
    type: Number,
    required: false,
    default: 3000
  },
  cards: {
    type: Array,
    required: true,
    default: () => [],
  }
})

const responsiveOptions = ref([
  {
    breakpoint: '1400px',
    numVisible: 3,
    numScroll: 2
  },
  {
    breakpoint: '1199px',
    numVisible: 2,
    numScroll: 1
  },
  {
    breakpoint: '767px',
    numVisible: 2,
    numScroll: 1
  },
  {
    breakpoint: '575px',
    numVisible: 1,
    numScroll: 1
  }
]);

</script>
