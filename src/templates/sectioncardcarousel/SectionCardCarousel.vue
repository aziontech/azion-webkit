<template>
  <ContentSection
    :title="title"
    :overline="overline"
    position="center"
    titleTag="h2"
    isContentCentralized
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
      type: String
    },
    title: {
      type: String,
      required: true
    },
    cards: {
      type: Array
    },
    responsiveOptions: {
      type: Array
    }
  })
</script>
