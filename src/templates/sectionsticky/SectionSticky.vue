<template>
  <div class="flex flex-col gap-20 lg:gap-40">
    <div class="lg:sticky lg:top-12 surface-ground lg:pt-10 lg:-mt-10 z-10">
      <ContentSection
        :overline="overline"
        :titleTag="titleTag"
        :title="title"
      />
    </div>
    <div class="flex flex-col gap-20 lg:gap-40 xl:gap-60 2xl:gap-80">
      <template v-for="({ overline, titleTag, title, description, buttons, image }) in sections">
        <ContentSection
          reverse
          position="right"
          :titleTag="titleTag"
          :overline="overline"
          :title="title"
          :description="description"
          :descriptionRawHtml="descriptionRawHtml"
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
      </template>
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
    titleTag: {
      type: String,
      default: () => 'h2',
      validator: (value) => ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].includes(value)
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
