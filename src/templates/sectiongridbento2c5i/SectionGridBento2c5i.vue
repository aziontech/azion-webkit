<template>
  <ContentSection
    :overline="overline"
    :titleTag="titleTag"
    :title="title"
    :description="description"
    :descriptionRawHtml="descriptionRawHtml"
  >
    <template v-slot:content>
      <GridBentoBlock :gridType="gridType">
        <template v-slot:item-1>
          <template v-if="cards[0]">
            <CardBase
              grid
              class="overflow-clip"
            >
              <template v-slot:content>
                <Overline
                  v-if="cards[0].overline"
                  :label="cards[0].overline"
                />
                <CardTitle v-if="cards[0].title">
                  {{ cards[0].title }}
                </CardTitle>
                <CardDescription v-if="cards[0].description">
                  {{ cards[0].description }}
                </CardDescription>
              </template>

              <template v-slot:actions>
                <template
                  v-for="(button, index) in cards[0].buttons"
                  :key="index"
                >
                  <LinkButton
                    v-if="button.label && button.link"
                    v-bind="button"
                  />
                </template>
              </template>

              <template v-slot:content-raw>
                <div
                  v-if="cards[0].image.imageDark"
                  class="pl-5 md:pl-8 -mr-3"
                >
                  <ImageSwitcher>
                    <template v-slot:darkImage>
                      <img
                        class="w-full"
                        loading="lazy"
                        :src="cards[0].image.imageDark"
                        :alt="cards[0].image.alt"
                      />
                    </template>
                    <template v-slot:lightImage>
                      <img
                        class="w-full"
                        loading="lazy"
                        :src="cards[0].image.imageLight"
                        :alt="cards[0].image.alt"
                      />
                    </template>
                  </ImageSwitcher>
                </div>
              </template>
            </CardBase>
          </template>
        </template>

        <template v-slot:item-2>
          <template v-if="cards[1]">
            <CardBase
              grid
              class="overflow-clip"
            >
              <template v-slot:content>
                <Overline
                  v-if="cards[1].overline"
                  :label="cards[1].overline"
                />
                <CardTitle v-if="cards[1].title">
                  {{ cards[1].title }}
                </CardTitle>
                <CardDescription v-if="cards[1].description">
                  {{ cards[1].description }}
                </CardDescription>
              </template>

              <template v-slot:actions>
                <template
                  v-for="(button, index) in cards[1].buttons"
                  :key="index"
                >
                  <LinkButton
                    v-if="button.label && button.link"
                    v-bind="button"
                  />
                </template>
              </template>
            </CardBase>
          </template>
        </template>

        <template v-slot:item-3>
          <template v-if="cards[2]">
            <CardBase
              grid
              class="overflow-clip"
            >
              <template v-slot:content>
                <Overline
                  v-if="cards[2].overline"
                  :label="cards[2].overline"
                />
                <CardTitle v-if="cards[2].title">
                  {{ cards[2].title }}
                </CardTitle>
                <CardDescription v-if="cards[2].description">
                  {{ cards[2].description }}
                </CardDescription>
              </template>

              <template v-slot:actions>
                <template
                  v-for="(button, index) in cards[2].buttons"
                  :key="index"
                >
                  <LinkButton
                    v-if="button.label && button.link"
                    v-bind="button"
                  />
                </template>
              </template>
            </CardBase>
          </template>
        </template>

        <template v-slot:item-4>
          <template v-if="cards[3]">
            <CardBase
              grid
              class="overflow-clip"
            >
              <template v-slot:content>
                <Overline
                  v-if="cards[3].overline"
                  :label="cards[3].overline"
                />
                <CardTitle v-if="cards[3].title">
                  {{ cards[3].title }}
                </CardTitle>
                <CardDescription v-if="cards[3].description">
                  {{ cards[3].description }}
                </CardDescription>
              </template>

              <template v-slot:actions>
                <template
                  v-for="(button, index) in cards[3].buttons"
                  :key="index"
                >
                  <LinkButton
                    v-if="button.label && button.link"
                    v-bind="button"
                  />
                </template>
              </template>
            </CardBase>
          </template>
        </template>

        <template v-slot:item-5>
          <template v-if="cards[4]">
            <CardBase
              grid
              class="overflow-clip"
            >
              <template v-slot:content>
                <Overline
                  v-if="cards[4].overline"
                  :label="cards[4].overline"
                />
                <CardTitle v-if="cards[4].title">
                  {{ cards[4].title }}
                </CardTitle>
                <CardDescription v-if="cards[4].description">
                  {{ cards[4].description }}
                </CardDescription>
              </template>

              <template v-slot:actions>
                <template
                  v-for="(button, index) in cards[4].buttons"
                  :key="index"
                >
                  <LinkButton
                    v-if="button.label && button.link"
                    v-bind="button"
                  />
                </template>
              </template>
            </CardBase>
          </template>
        </template>
      </GridBentoBlock>
    </template>
  </ContentSection>
</template>

<script setup>
  /** TECHNICAL DEBT: ASTRO BUG
   * WHY THIS?
  * Astro is facing a bug in the compiler that doesn't allow DYNAMIC SLOTS, you can see the issue here:
  * https://github.com/withastro/compiler/issues/868
  WHILE THIS we cant use loops to compile components */

  import ContentSection from '../contentsection'
  import CardBase from '../cardbase'
  import CardTitle from '../cardtitle'
  import CardDescription from '../carddescription'
  import GridBentoBlock from '../gridbento'
  import ImageSwitcher from '../themeawareimageswitcher'
  import LinkButton from '../linkbutton'
  import Overline from '../overline'

  const props = defineProps({
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
      type: String
    },
    description: {
      type: String,
      default: () => ''
    },
    descriptionRawHtml: {
      type: String,
      default: () => ''
    },
    gridType: {
      type: String,
      default: '2-columns-5-items',
      options: [
        '2-columns-3-items',
        '2-columns-4-items',
        '2-columns-5-items',
        '2-columns-6-items',
        '3-columns-4-items',
        '3-columns-7-items',
        '4-columns-5-items'
      ]
    },
    cards: {
      type: Array,
      required: true
    }
  })
</script>
