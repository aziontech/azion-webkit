<template>
  <div class="md:pt-[80px]">
    <HeroBlockBase
      :title="title"
      :description="description"
      justify="center"
    >
      <template #content>
        <ContentLogoBlock
          :title="logos.title"
          :logos="logos.images"
        />
      </template>
      <template #main>
        <div class="md:flex justify-center hidden">
          <ImageSwitcher>
            <template #darkImage>
              <img
                class="w-[17.7569rem]"
                :alt="imagesRight.alt"
                :src="imagesRight.dark"
              />
            </template>
            <template #lightImage>
              <img
                class="w-[17.7569rem]"
                :alt="imagesRight.alt"
                :src="imagesRight.light"
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
  import ContentLogoBlock from '../contentlogo'
  import ImageSwitcher from '../themeawareimageswitcher'

  defineProps({
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    imagesRight: {
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
    }
  })
</script>
