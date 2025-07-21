<template>
  <div class="flex flex-col gap-20 lg:gap-40">
    <template v-if="title || overline">
      <ContentSection
        position="center"
        :isContentCentralized="true"
        :overline="overline"
        :titleTag="titleTag"
        :title="title"
        :id="id"
      />
    </template>

    <template
      :key="item.title"
      v-for="item in items"
    >
      <ContentSection
        textCenter
        :overline="item.overline"
        :titleTag="item.titleTag"
        :title="item.title"
        :descriptionRawHtml="item.descriptionRawHtml"
        :position="item.position || 'left'"
        :id="id"
      >
        <template v-slot:main>
          <div class="w-full flex justify-center">
            <ImageSwitcher>
              <template v-slot:darkImage>
                <img
                  height="382"
                  width="492"
                  :src="item.imageDark"
                  :alt="item.alt"
                  loading="lazy"
                />
              </template>
              <template v-slot:lightImage>
                <img
                  height="382"
                  width="492"
                  :src="item.imageLight"
                  :alt="item.alt"
                  loading="lazy"
                />
              </template>
            </ImageSwitcher>
          </div>
        </template>
      </ContentSection>
    </template>
  </div>
</template>

<script setup>
  import ContentSection from '../contentsection'
  import ImageSwitcher from '../themeawareimageswitcher'

  const props = defineProps({
    id: {
      type: String,
      default: () => ''
    },
    overline: {
      type: String
    },
    titleTag: {
      type: String,
      default() {
        return 'h2'
      },
      validator(value) {
        return ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].includes(value)
      }
    },
    title: {
      type: String
    },
    items: {
      type: Array,
      required: true
    }
  })
</script>
