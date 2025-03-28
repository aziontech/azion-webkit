<template>
  <div class="flex flex-col gap-20 lg:gap-40">
    <template v-if="title || overline">
      <ContentSection
        :overline="overline"
        :title="title"
        position="center"
        titleTag="h2"
        isContentCentralized
      />
    </template>

    <template
      :key="item.title"
      v-for="item in items"
    >
      <ContentSection
        textCenter
        titleTag="h3"
        :title="item.title"
        :description="item.description"
        :position="item.position || 'left'"
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
    overline: {
      type: String
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
