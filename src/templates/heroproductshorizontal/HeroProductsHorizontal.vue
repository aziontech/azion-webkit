<template>
  <HeroBlockBase
    :overline="overline"
    :description="description"
    :descriptionRawHtml="descriptionRawHtml"
    :justify="justify"
    :position="position"
    :id="id"
    :margin="margin"
  >
    <template #title>
      <Titlegroup v-bind="hgroup" />
    </template>
    <template #actions>
      <template v-for="button in buttons">
        <LinkButton
          v-if="button.label"
          v-bind="button"
        />
      </template>
    </template>
    <template #main>
      <ImageSwitcher>
        <template #lightImage>
          <img
            width="auto"
            height="auto"
            :alt="images.alt"
            fetchPriority="high"
            :src="images.light"
          />
        </template>
        <template #darkImage>
          <img
            width="auto"
            height="auto"
            :alt="images.alt"
            fetchPriority="high"
            :src="images.dark"
          />
        </template>
      </ImageSwitcher>
    </template>
    <template #principal>
      <ListUnordered
        direction="horizontal"
        class="w-full"
        v-bind="list"
      />
    </template>
  </HeroBlockBase>
</template>

<script setup>
  import HeroBlockBase from '../herobase'
  import LinkButton from '../linkbutton'
  import ImageSwitcher from '../themeawareimageswitcher'
  import ListUnordered from '../listunordered'
  import Titlegroup from '../titlegroup'

  defineProps({
    id: {
      type: String,
      default: () => ''
    },
    justify: {
      type: String,
      options: ['center']
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
      default: () => []
    },
    hgroup: {
      title: {
        type: String,
        required: true
      },
      subtitle: {
        type: String,
        required: true
      }
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
    },
    list: {
      type: Object,
      required: true
    },
    position: {
      type: String,
      options: ['left', 'right'],
      default: () => 'left'
    },
    margin: {
      type: String,
      options: ['none', 'small', 'default', 'large'],
      default: () => 'none'
    }
  })
</script>
