<template>
  <div class="flex flex-col gap-20 lg:gap-40">
    <div class="lg:sticky lg:top-12 surface-ground lg:pt-10 lg:-mt-10 z-10">
      <ContentSection
        :overline="overline"
        :title="title"
        titleTag="h2"
      />
    </div>
    <div class="flex flex-col gap-20 lg:gap-40 xl:gap-60 2xl:gap-80">
      <ContentSection
        v-for="({ overline, title, description, buttons, image }, index) in sections"
        :key="index"
        position="right"
        titleTag="h3"
        reverse
        :overline="overline"
        :title="title"
        :description="description"
      >
        <template #actions>
          <template
            v-for="(button, index) in buttons"
            :key="index"
          >
            <LinkButton
              v-if="button.link"
              v-bind="button"
            />
          </template>
        </template>
        <template #main>
          <div class="w-full">
            <ImageSwitcher>
              <template #lightImage>
                <img
                  height="655"
                  width="auto"
                  loading="lazy"
                  :src="image.light"
                  :alt="image.alt"
                />
              </template>
              <template #darkImage>
                <img
                  height="655"
                  width="auto"
                  loading="lazy"
                  :src="image.dark"
                  :alt="image.alt"
                />
              </template>
            </ImageSwitcher>
          </div>
        </template>
      </ContentSection>
    </div>
  </div>
</template>

<script setup>
  import ContentSection from '../contentsection'
  import LinkButton from '../linkbutton'
  import ImageSwitcher from '../themeawareimageswitcher'

  defineProps({
    overline: {
      type: String,
      required: false
    },
    title: {
      type: String,
      required: true
    },
    sections: {
      type: Array,
      required: true
    }
  })
</script>
