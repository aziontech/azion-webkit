<template>
  <HeroBlockBase
    isCentralized
    :overline="overline"
    :title="title"
    :description="description"
  >
    <template #actions>
      <LinkButton
        v-for="button in buttons"
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
    overline: {
      type: String,
      required: false
    },
    description: {
      type: String,
      required: false
    },
    buttons: {
      type: Array,
      required: true
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
