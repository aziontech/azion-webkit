<template>
  <div class="hidden md:flex justify-center gap-10">
    <div
      class="w-[356px] relative group cursor-pointer"
      v-for="(card, index) in cards"
      :key="index"
    >
      <a
        :href="card.link"
        class="no-underline flex border-radius cursor-pointer h-full"
      >
        <Card class="p-0 mt-0 shadow-none overflow-hidden" :pt="{ root: { class: 'bg-neutral-950' } }">
          <template #header>
            <div class="relative h-[412px] overflow-hidden rounded-md">
              <img
                :alt="`${card.image.alt}`"
                :src="`${card.image.src}?ims=726x412`"
                class="h-full w-full object-cover object-center group-hover:scale-[1.10] transition-all duration-300"
              />

              <div class="h-24 absolute inset-0 z-10 degrade-to-bottom"></div>

              <div
                v-html="card.logo.imageSrc"
                :alt="card.logo.alt"
                class="absolute top-4 left-4 h-6 z-10"
              />

              <Tag
                class="z-10 absolute top-4 right-4"
                severity="info"
                :value="card.tag"
              ></Tag>
            </div>
          </template>

          <template #content>
            <div class="mt-4">
              <h2 class="text-xl font-medium text-color mb-4 line-clamp-4">
                {{ card.description }}
              </h2>
              <Button
                link
                aria-label="Read Story - azion init"
                :label="card.button.label"
                iconPos="right"
                class="p-0 text-sm"
                icon="pi pi-arrow-right"
              />
            </div>
          </template>
        </Card>
      </a>
    </div>
  </div>

  <Carousel
    class="block md:hidden mx-3"
    :value="cards"
    :numVisible="1"
    :numScroll="1"
    :showNavigators="false"
    indicatorsContentClass="mt-5"
  >
    <template #item="slotProps">
      <a
        :href="slotProps.data.link"
        class="no-underline flex border-radius cursor-pointer h-full"
      >
        <Card class="p-0 mt-0 shadow-none overflow-hidden" :pt="{ root: { class: 'bg-transparent' } }">
          <template #header>
            <div class="relative h-[412px] overflow-hidden rounded-md">
              <img
                :alt="`${slotProps.data.image.alt}`"
                :src="`${slotProps.data.image.src}?ims=726x412`"
                class="h-full w-full object-cover object-center group-hover:scale-[1.10] transition-all duration-300"
              />

              <div class="h-24 absolute inset-0 z-10 degrade-to-bottom"></div>

              <div
                v-html="slotProps.data.logo.imageSrc"
                :alt="slotProps.data.logo.alt"
                class="absolute top-4 left-4 h-6 z-10"
              />

              <Tag
                class="z-10 absolute top-4 right-4"
                severity="info"
                :value="slotProps.data.tag"
              ></Tag>
            </div>
          </template>

          <template #content>
            <div class="mt-4">
              <h2 class="text-xl font-medium text-color mb-4">
                {{ slotProps.data.description }}
              </h2>
              <Button
                link
                aria-label="Read Story - azion init"
                :label="slotProps.data.button.label"
                iconPos="right"
                class="p-0 text-sm"
                icon="pi pi-arrow-right"
              />
            </div>
          </template>
        </Card>
      </a>
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

<style scoped>
  .degrade-to-bottom {
    background: linear-gradient(to bottom, rgba(var(--degrade-secondary), 0.88), transparent);
  }
</style>
