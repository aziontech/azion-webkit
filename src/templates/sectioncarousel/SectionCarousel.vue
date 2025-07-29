<template>
  <ContentSection
    titleTag="h2"
    :overline="overline"
    :title="title"
    :description="description"
    :id="id"
    :margin="props.margin"
  >
    <template
      v-if="button"
      #main
    >
      <div class="w-full flex justify-end items-end">
        <LinkButton
          class="min-w-fit"
          v-bind="button"
          textLink
          icon="pi pi-arrow-right"
          iconPos="right"
        />
      </div>
    </template>
    <template #principal>
      <Carousel
        :value="cards"
        :numVisible="DEFAULT_NUMVISIBLE"
        :numScroll="1"
        :circular="isCircularEnabled"
        :autoplayInterval="5000"
        :responsiveOptions="responsiveOptions"
        :showNavigators="isLargeScreen && isCircularEnabled"
        :showIndicators="!isLargeScreen && isCircularEnabled"
      >
        <template #item="slotProps">
          <div class="px-3 h-full">
            <CardBaseClickable
              grid
              backgroundColor="outlined"
              :link="slotProps.data.link"
              :action="slotProps.data.action"
            >
              <template #content>
                <div class="pb-5">
                  <Tag
                    :value="slotProps.data.tag.label"
                    :icon="slotProps.data.tag.icon"
                    severity="info"
                  />
                </div>
                <div class="flex flex-col gap-3">
                  <CardTitle>
                    {{ slotProps.data.title }}
                  </CardTitle>
                  <CardDescription>
                    {{ slotProps.data.description }}
                  </CardDescription>
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
  import { onBeforeMount, ref } from 'vue'

  import ContentSection from '../contentsection'
  import LinkButton from '../linkbutton'
  import CardBaseClickable from '../cardbaseclickable'
  import CardTitle from '../cardtitle'
  import CardDescription from '../carddescription'
  import Carousel from 'primevue/carousel'
  import Tag from 'primevue/tag'

  const props = defineProps({
    id: {
      type: String,
      default: () => ''
    },
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
    },
    margin: {
      type: String,
      options: ['none', 'small', 'default', 'large'],
      default: () => 'none'
    }
  })

  const responsiveOptions = [
    {
      breakpoint: '1400px',
      numVisible: 3,
      numScroll: 1
    },
    {
      breakpoint: '1199px',
      numVisible: 2,
      numScroll: 1
    },
    {
      breakpoint: '767px',
      numVisible: 1,
      numScroll: 1
    }
  ]

  const reversedResponsiveOptions = [...responsiveOptions].reverse()

  const isCircularEnabled = ref(true)
  const isLargeScreen = ref(true)
  const DEFAULT_NUMVISIBLE = 3

  const checkScreenSize = () => {
    const screenSize = window.innerWidth
    isLargeScreen.value = screenSize >= 767

    const breakpoint = reversedResponsiveOptions.find(({ breakpoint }) => {
      const breakpointValue = parseInt(breakpoint)
      return screenSize < breakpointValue
    })

    let numVisible = DEFAULT_NUMVISIBLE
    if (breakpoint) numVisible = breakpoint.numVisible
    isCircularEnabled.value = props.cards.length > numVisible
  }

  onBeforeMount(() => {
    checkScreenSize()
    window.addEventListener('resize', checkScreenSize)
  })
</script>
