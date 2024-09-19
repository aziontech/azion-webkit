<template>
  <ContentSection :overline="overline" :title="title" :description="description" titleTag="h2">
    <template v-if="button" #main>
      <div class="w-full flex justify-end items-end">
        <LinkButton class="min-w-fit" v-bind="button" textLink icon="pi pi-arrow-right" iconPos="right" />
      </div>
    </template>
    <template #principal>
      <Carousel :value="cards" :numVisible="3" :numScroll="1" :circular="true" :autoplayInterval="5000"
        :responsiveOptions="responsiveOptions" :showIndicators="false">
        <template #item="slotProps">
          <div class="px-3 h-full">
            <CardBaseClickable backgroundColor="outlined" :link="slotProps.data.link" grid disableAction>
              <template #content>
                <div class="pb-5">
                  <Tag :value="slotProps.data.tag.label" :icon="slotProps.data.tag.icon" severity="info" />
                </div>
                <div class="flex flex-col gap-3">
                  <CardTitle> {{ slotProps.data.title }} </CardTitle>
                  <CardDescription> {{ slotProps.data.description }} </CardDescription>
                </div>
              </template>
            </CardBaseClickable>
          </div>
        </template>
      </Carousel>
    </template>
  </ContentSection>
</template>

<script setup>
import ContentSection from '../contentsection'
import LinkButton from '../linkbutton'
import CardBaseClickable from '../cardbaseclickable'
import CardTitle from '../cardtitle'
import CardDescription from '../carddescription'
import Carousel from 'primevue/carousel'
import Tag from 'primevue/tag'

defineProps({
  overline: {
    type: String,
    required: false
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: false
  },
  button: {
    type: Object,
    required: false
  },
  cards: {
    type: Array,
    required: true
  }
})

const responsiveOptions = [
  {
    breakpoint: '1400px',
    numVisible: 2,
    numScroll: 1
  },
  {
    breakpoint: '1199px',
    numVisible: 3,
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
]
</script>
