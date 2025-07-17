<template>
  <ContentSection
    :overline="overline"
    :titleTag="titleTag"
    :title="title"
    :description="description"
    :descriptionRawHtml="descriptionRawHtml"
  >
    <template #content>
      <div class="m-0 grid grid-cols-1 md:grid-cols-2 gap-10 md:pt-32">
        <div
          v-for="({ label, title, image, alt }, index) in cards"
          :class="[index % 2 !== 0 && 'md:-mt-32']"
        >
          <CardBase>
            <template #content-raw>
              <CardBgImage
                :alt="alt"
                :image="image"
              >
                <template #content>
                  <div class="flex flex-col gap-5 z-20">
                    <Overline :label="label" />
                    <CardTitle>
                      {{ title }}
                    </CardTitle>
                  </div>
                </template>
              </CardBgImage>
            </template>
          </CardBase>
        </div>
      </div>
    </template>
  </ContentSection>
</template>

<script setup>
  import ContentSection from '../contentsection'
  import Overline from '../overline'
  import CardBase from '../cardbase'
  import CardTitle from '../cardtitle'
  import CardBgImage from '../cardbgimage'

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
    }
  })
</script>
