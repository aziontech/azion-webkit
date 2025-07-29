<template>
  <div class="min-h-[calc(100vh-56px)] flex justify-center items-center relative py-10 md:py-0">
    <HeroBlockBase
      align="center"
      :title="title"
      :id="id"
      :margin="margin"
    >
      <template #actions>
        <div class="flex flex-col md:flex-row lg:justify-start justify-center gap-2 w-full">
          <LinkButton
            v-for="button in buttons"
            v-bind="button"
            class="w-full md:w-fit"
          />
        </div>
      </template>
      <template #content>
        <div class="w-full flex items-center justify-center lg:items-start lg:justify-start">
          <ContentLogoBlock
            :title="logos.title"
            :logos="logos.images"
          />
        </div>
      </template>
      <template #main>
        <div class="flex justify-center">
          <ImageSwitcher>
            <template #darkImage>
              <img
                :alt="images.alt"
                :src="images.dark"
              />
            </template>
            <template #lightImage>
              <img
                :alt="images.alt"
                :src="images.light"
              />
            </template>
          </ImageSwitcher>
        </div>
      </template>
    </HeroBlockBase>
  </div>
</template>

<script setup>
  import HeroBlockBase from '../herobase'
  import LinkButton from '../linkbutton'
  import ContentLogoBlock from '../contentlogo'
  import ImageSwitcher from '../themeawareimageswitcher'

  defineProps({
    id: {
      type: String,
      default: () => ''
    },
    title: {
      type: String,
      required: true
    },
    images: {
      type: Object,
      required: true
    },
    logos: {
      type: Object,
      required: true
    },
    buttons: {
      type: Array,
      required: false
    },
    margin: {
      type: String,
      options: ['none', 'small', 'default', 'large'],
      default: () => 'none'
    }
  })
</script>
