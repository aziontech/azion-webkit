<template>
  <ContentSection
    :title="props.title"
    :overline="props.overline"
    :wysisyg="props.wysisyg"
    :description="props.description"
    :titleTag="props.titleTag"
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
          <template #darkImage>
            <img
              width="540"
              height="auto"
              :src="props.imageDark"
            />
          </template>
          <template #lightImage>
            <img
              width="540"
              height="auto"
              :src="props.image"
            />
          </template>
        </ImageSwitcher>
      </div>
    </template>
  </ContentSection>
</template>

<script setup>
  import ContentSection from '../contentsection'
  import LinkButton from '../linkbutton'
  import ImageSwitcher from '../themeawareimageswitcher'

  const props = defineProps({
    overline: {
      type: String
    },
    title: {
      type: String,
      required: true
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
    wysisyg: {
      type: Boolean,
      default() {
        return false
      }
    },
    description: {
      type: String,
      required: true
    },
    buttons: {
      type: Array
    },
    image: {
      type: String,
      required: true,
      default() {
        return 'https://www.azion.com/assets/pages/products/images/light/edge-network/network-ilustrationEN.png'
      }
    },
    imageDark: {
      type: String,
      required: true,
      default() {
        return 'https://www.azion.com/assets/pages/products/images/dark/edge-network/network-ilustrationEN.png'
      }
    }
  })
</script>
