<template>
  <HeroBlockBase
    :isCentralized="true"
    :overline="overline"
    :title="title"
    :description="description"
    :descriptionRawHtml="descriptionRawHtml"
    :id="id"
  >
    <template #actions>
      <LinkButton
        v-for="(button, index) in buttons"
        :key="index"
        v-bind="button"
      />
    </template>

    <template #main>
      <ImageSwitcher>
        <template #darkImage>
          <img
            fetchPriority="high"
            width="auto"
            height="655"
            :alt="images.alt"
            :src="images.dark"
          />
        </template>
        <template #lightImage>
          <img
            fetchPriority="high"
            width="auto"
            height="655"
            :alt="images.alt"
            :src="images.light"
          />
        </template>
      </ImageSwitcher>
    </template>
  </HeroBlockBase>
</template>

<script setup>
  import HeroBlockBase from '../herobase'
  import LinkButton from '../linkbutton'
  import ImageSwitcher from '../themeawareimageswitcher'

  defineProps({
    id: {
      type: String,
      default: () => ''
    },
    overline: {
      type: String,
      default: () => ''
    },
    description: {
      type: String,
      default: () => ''
    },
    descriptionRawHtml: {
      type: String,
      default: () => ''
    },
    buttons: {
      type: Array,
      required: true,
      default: () => []
    },
    images: {
      light: {
        type: String,
        required: true
      },
      dark: {
        type: String,
        required: true
      },
      alt: {
        type: String,
        required: true
      }
    }
  })
</script>
