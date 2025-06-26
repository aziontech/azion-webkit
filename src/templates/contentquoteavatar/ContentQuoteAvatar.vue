<template>
  <div class="flex flex-col gap-10">
    <Carousel
      :value="carouselData"
      :showNavigators="false"
      :showIndicators="isToShowIndicators"
      :numVisible="1"
      :page="pageProp"
      :pt="{
        item: { class: 'flex justify-center ' },
        root: { class: 'border surface-border rounded degrade' }
      }"
    >
      <template #item="slotProps">
        <QuoteAvatar
          v-bind="slotProps.data"
          :border="false"
          disableDegrade
        />
      </template>
    </Carousel>
  </div>
</template>

<script setup>
  import { ref } from 'vue'
  import QuoteAvatar from '../quoteavatar'
  import Carousel from 'primevue/carousel'

  const props = defineProps({
    data: {
      type: Array,
      required: true,
      default: () => []
    }
  })
  const isToShowIndicators = props.data.length > 1 ? true : false

  const carouselData = props.data.slice(0, 3)
  const pageProp = ref(0)
  const handleCarouselEvent = (value) => (pageProp.value = value)

  setInterval(() => {
    const newIndex = pageProp.value > 1 ? 0 : pageProp.value + 1

    handleCarouselEvent(newIndex)
  }, 5000)
</script>

<style>
  .azion-light .invert-btn {
    filter: invert(100%);
  }

  .degrade {
    background: linear-gradient(
      255.8deg,
      rgba(var(--degrade-primary), 0.05) 10.09%,
      rgba(var(--degrade-primary), 0) 55.72%
    );
  }
</style>
