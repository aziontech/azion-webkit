<template>
  <div class="flex flex-col gap-10">
    <div class="hidden md:flex items-center justify-center gap-x-32">
      <div :key="index" v-for="(item, index) in carouselData" class="flex justify-center max-h-10">
        <button @click="handleCarouselEvent(index)">
          <img class="max-h-10 invert-btn" :class="{'opacity-25': pageProp !== index}" width="auto" height="40" :src="item.button.image" />
        </button>
      </div>
    </div>
    <Carousel
      :value="carouselData"
      :showNavigators="false"
      :numVisible="1"
      :page="pageProp"
      :pt="{
        item: { class: 'flex justify-center '},
        root: { class: 'border surface-border rounded degrade'}
      }">
      <template #item="slotProps">
        <Quote v-bind="slotProps.data.quote" :border="false" disableDegrade />
      </template>
    </Carousel>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Quote from '../quote/Quote.vue';
import Carousel from 'primevue/carousel'

const props = defineProps({
  data: {
    type: Array,
    required: true
  }
})

const carouselData = props.data.slice(0, 3)
const pageProp = ref(0)
const handleCarouselEvent = (value) => pageProp.value = value

setInterval(() => {
  const newIndex = pageProp.value > 1 ? 0 : pageProp.value + 1

  handleCarouselEvent(newIndex)
}, 5000);
</script>

<style>
.azion-light .invert-btn {
  filter: invert(100%);
}

.degrade {
  background: linear-gradient(255.8deg, rgba(var(--degrade-primary), 0.05) 10.09%, rgba(var(--degrade-primary),  0) 55.72%);
}
</style>
