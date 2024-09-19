<template>
<HeroBlockBase :overline="overline" :description="description">
    <template #title>
      <Titlegroup v-bind="hgroup" />
    </template>
    <template #actions>
      <LinkButton v-for="button in buttons" v-bind="button" />
    </template>
    <template #main>
      <ImageSwitcher>
        <template #lightImage>
          <img width="auto" height="auto" :alt="images.alt" fetchPriority="high" :src="images.light" />
        </template>
        <template #darkImage>
          <img width="auto" height="auto" :alt="images.alt" fetchPriority="high" :src="images.dark" />
        </template>
      </ImageSwitcher>
    </template>
    <template #principal>
        <ListUnordered direction="horizontal" class="w-full" v-bind="list"/>
    </template>
  </HeroBlockBase>
</template>

<script setup>
  import HeroBlockBase from '../herobase'
  import LinkButton from '../linkbutton'
  import ContentLogoBlock from '../contentlogo'
  import ImageSwitcher from '../themeawareimageswitcher'
  import ListUnordered from "../listunordered"
  import Titlegroup from '../titlegroup'
  import Container from '../container'

  defineProps({
    overline: {
      type: String,
      required: false,
    },
    description: {
      type: String,
      required: false,
    },
    buttons: {
      type: Array,
      required: true
    },
    hgroup: {
      title: {
        type: String,
        required: true,
      },
      subtitle: {
        type: String,
        required: true,
      }
    },
    images: {
      light: {
        type: String,
        required: true,
      },
      dark: {
        type: String,
        required: true,
      },
      alt: {
        type: String,
        required: true,
      }
    },
    list: {
      type: Object,
      required: true,
    }
  });
</script>
