<template>
  <CardBaseClickable
    backgroundColor="shape"
    :grid="grid"
    :hover="hover"
    :link="card.link"
    :aria-label="card.ariaLabel"
    :action="card.action"
  >
    <template #content>
      <div class="flex flex-col justify-between gap-8 grow">
        <div class="flex flex-col gap-8">
          <div class="flex flex-row justify-between">
            <Tag
              :icon="tag.icon"
              :value="tag.label"
            />
          </div>

          <div class="flex flex-col gap-3">
            <p class="text-body-5 max-w-lg leading-normal">
              {{ title }}
            </p>
          </div>
        </div>

        <div class="flex flex-col gap-2">
          <ImageSwitcher>
            <template #darkImage>
              <img
                class="max-h-10 w-[auto]"
                loading="lazy"
                width="160"
                height="40"
                :alt="image.alt"
                :src="image.dark"
              />
            </template>
            <template #lightImage>
              <img
                class="max-h-10 w-[auto]"
                loading="lazy"
                width="160"
                height="40"
                :alt="image.alt"
                :src="image.light"
              />
            </template>
          </ImageSwitcher>

          <p class="text-body-1 text-color-secondary min-h-8">
            {{ image.description }}
          </p>
        </div>
      </div>
    </template>
  </CardBaseClickable>
</template>

<script setup>
  import Tag from 'primevue/tag'
  import CardBaseClickable from '../cardbaseclickable'
  import ImageSwitcher from '../themeawareimageswitcher'

  defineProps({
    title: {
      type: String,
      required: true
    },
    image: {
      type: Object,
      required: true
    },
    tag: {
      type: Object,
      required: true
    },
    card: {
      type: Object,
      required: true
    },
    grid: {
      type: Boolean,
      required: false,
      default: false
    },
    hover: {
      type: String,
      required: false,
      options: ['slide-up', 'outlined']
    }
  })
</script>
