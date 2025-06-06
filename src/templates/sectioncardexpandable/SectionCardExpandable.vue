<template>
  <ContentSection
    position="center"
    textCenter
    isContentCentralized
    :titleTag="titleTag"
    :title="title"
    :overline="overline"
    :description="description"
    :descriptionRawHtml="descriptionRawHtml"
  >
    <template #main>
      <CardPanelExpandable
        :cards="cards"
        maxHeight="xl:h-[484px]"
      >
        <template #content="slotProps">
          <div class="relative flex flex-col justify-end rounded w-full">
            <div class="flex justify-center w-full h-full top-0 left-0 overflow-hidden rounded">
              <ImageSwitcher>
                <template #darkImage>
                  <img
                    v-if="slotProps.data.img?.src"
                    v-bind="{
                      ...slotProps.data.img,
                      src: slotProps.data.img.src
                    }"
                    class="object-cover object-top w-full xl:max-h-44"
                    loading="lazy"
                    height="140"
                    width="auto"
                  />
                </template>
                <template #lightImage>
                  <img
                    v-if="slotProps.data.imgLight?.src"
                    v-bind="{
                      ...slotProps.data.imgLight,
                      src: slotProps.data.imgLight.src
                    }"
                    class="object-cover object-top w-full xl:max-h-44"
                    loading="lazy"
                    height="140"
                    width="auto"
                  />
                </template>
              </ImageSwitcher>
            </div>
            <div
              class="hide-on-light absolute w-full h-full top-0 left-0 overflow-hidden rounded gradient-to-top"
            ></div>
          </div>
        </template>
        <template #actions="slotProps">
          <LinkButton
            v-if="slotProps.data.button?.link && slotProps.data.button?.label"
            v-bind="slotProps.data.button"
          />
        </template>

        <template #disabledContent="slotProps">
          <div class="relative min-h-40 h-full flex flex-col justify-end rounded">
            <div class="absolute w-full h-full top-0 left-0 overflow-hidden rounded">
              <img
                v-if="slotProps.data.img?.src"
                v-bind="{
                  ...slotProps.data.img,
                  src: slotProps.data.img.src
                }"
                class="hide-on-light w-full h-full object-cover grayscale"
                loading="lazy"
                height="288"
                width="auto"
              />
              <img
                v-if="slotProps.data.imgLight?.src"
                v-bind="{
                  ...slotProps.data.imgLight,
                  src: slotProps.data.imgLight.src
                }"
                class="hide-on-dark w-full h-full object-cover grayscale"
                loading="lazy"
                height="288"
                width="auto"
              />
            </div>
            <div
              class="absolute w-full h-full top-0 left-0 overflow-hidden rounded gradient-to-bottom"
            />
          </div>
        </template>
      </CardPanelExpandable>
    </template>
  </ContentSection>
</template>

<script setup>
  import ContentSection from '../contentsection'
  import CardPanelExpandable from '../cardpanelexpandable'
  import ImageSwitcher from '../themeawareimageswitcher'
  import LinkButton from '../linkbutton'

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
      type: Array,
      required: true
    }
  })
</script>
