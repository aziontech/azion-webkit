<template>
  <ContentSection
    position="center"
    :overline="overline"
    :titleTag="titleTag"
    :title="title"
    :description="description"
    :descriptionRawHtml="descriptionRawHtml"
    :isContentCentralized="true"
  >
    <template #main>
      <Carousel
        :value="cards"
        :numVisible="4"
        :numScroll="1"
        :circular="true"
        :autoplayInterval="5000"
        :responsiveOptions="responsiveOptions"
        :showIndicators="false"
      >
        <template #item="slotProps">
          <div class="px-3 h-full">
            <CardBaseClickable
              grid
              :spacing="spacing"
              :link="slotProps.data.link"
              :action="slotProps.data.action"
            >
              <template #content>
                <CardTitle>
                  {{ slotProps.data.title }}
                </CardTitle>
                <template v-if="slotProps.data.description">
                  <CardDescription>
                    {{ slotProps.data.description }}
                  </CardDescription>
                </template>
              </template>
            </CardBaseClickable>
          </div>
        </template>
      </Carousel>
    </template>
  </ContentSection>
</template>

<script setup>
  import Carousel from 'primevue/carousel'
  import ContentSection from '../contentsection'
  import CardBaseClickable from '../cardbaseclickable'
  import CardTitle from '../cardtitle'
  import CardDescription from '../carddescription'

  defineProps({
    overline: {
      type: String,
      default: () => ''
    },
    titleTag: {
      required: true,
      type: String,
      default: () => 'h2',
      validator: (value) => ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].includes(value)
    },
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      default: () => ''
    },
    descriptionRawHtml: {
      type: String,
      default: () => ''
    },
    cards: {
      type: Array
    },
    responsiveOptions: {
      type: Array,
      default: () => [
        {
          breakpoint: '1400px',
          numVisible: '3',
          numScroll: '1'
        },
        {
          breakpoint: '1199px',
          numVisible: '3',
          numScroll: '1'
        },
        {
          breakpoint: '767px',
          numVisible: '2',
          numScroll: '1'
        },
        {
          breakpoint: '575px',
          numVisible: '3',
          numScroll: '1'
        }
      ]
    }
  })
</script>