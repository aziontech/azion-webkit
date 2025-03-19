<template>
  <div class="hidden md:flex justify-center gap-10">
    <div
      class="w-[356px] relative group cursor-pointer"
      v-for="(card, index) in cards"
      :key="index"
    >
      <Card class="p-0 mt-0 shadow-none overflow-hidden rounded-md">
        <template #header>
          <div class="relative h-[412px] overflow-hidden">
            <img
              :alt="`${card.image.alt}`"
              :src="`${card.image.src}?ims=372x209`"
              class="h-full w-full object-cover object-center group-hover:scale-[1.10] transition-all duration-300"
            />

            <div
              class="h-24 absolute inset-0 z-10 bg-gradient-to-b from-[#171717e0] to-transparent"
            ></div>

            <img
              :src="card.logo.src"
              :alt="card.logo.alt"
              class="absolute top-4 left-4 h-6 z-10"
            />

            <Tag class="z-10 absolute top-4 right-4" severity="info" :value="card.tag"></Tag>
          </div>
        </template>

        <template #content>
          <div class="mt-4">
            <h2 class="text-xl font-medium text-color mb-1">
              {{ card.description }}
            </h2>
            <Button
              link
              aria-label="Read Story - azion init"
              :label="card.button.label"
              iconPos="right"
              class="p-0 text-sm"
              icon="pi pi-arrow-right"
              @click="card.button.click"
            />
          </div>
        </template>
      </Card>
    </div>
  </div>

  <Carousel
    class="block md:hidden"
    :value="cards"
    :numVisible="1"
    :numScroll="1"
    :showNavigators="false"
    indicatorsContentClass="mt-5"
  >
    <template #item="slotProps">
      <Card class="p-0 mt-0 shadow-none overflow-hidden rounded-md">
        <template #header>
          <div class="relative h-[412px] overflow-hidden">
            <img
              :alt="`${slotProps.data.image.alt}`"
              :src="`${slotProps.data.image.src}?ims=372x209`"
              class="h-full w-full object-cover object-center group-hover:scale-[1.10] transition-all duration-300"
            />

            <div
              class="h-24 absolute inset-0 z-10 bg-gradient-to-b from-[#171717e0] to-transparent"
            ></div>

            <img
              :src="slotProps.data.logo.src"
              :alt="slotProps.data.logo.alt"
              class="absolute top-4 left-4 h-6 z-10"
            />
            <span class="z-10 absolute top-4 right-4 bg-black text-white text-xs px-2 py-1 rounded">
              {{ slotProps.data.tag }}
            </span>
          </div>
        </template>

        <template #content>
          <div class="mt-4">
            <h2 class="text-xl font-medium text-color mb-1">
              {{ slotProps.data.description }}
            </h2>
            <Button
              link
              aria-label="Read Story - azion init"
              :label="slotProps.data.button.label"
              iconPos="right"
              class="p-0 text-sm"
              icon="pi pi-arrow-right"
              @click="slotProps.data.button.click"
            />
          </div>
        </template>
      </Card>
    </template>
  </Carousel>
</template>

<script setup>
  import Card from 'primevue/card'
  import Carousel from 'primevue/carousel'
  import Button from 'primevue/button'
  import Tag from 'primevue/tag'
  import { defineProps } from 'vue'

  defineProps({
    cards: {
      type: Array,
      required: true,
      validator: (value) => {
        return value.every((card) => {
          return ['image', 'tag', 'description', 'button', 'logo'].every((key) => key in card)
        })
      }
    }
  })
</script>
