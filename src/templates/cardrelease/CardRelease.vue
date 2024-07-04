<template>
  <CardBaseClickable backgroundColor="shape" :grid="grid" :hover="hover" :link="card.link" :aria-label="card.ariaLabel">
    <template #content>
      <div class="flex flex-col justify-between gap-8 grow">
        <div class="flex flex-col gap-8">
          <div class="flex flex-row justify-between">
            <Tag :icon="tag.icon" :value="tag.label" />
            <Button outlined size="small" :icon="card.icon == 'external' ? 'pi pi-external-link' : 'pi pi-arrow-up-right'" :aria-label="card.ariaLabel" />
          </div>
          <div class="flex flex-col gap-3">
            <p class="text-xl max-w-lg leading-normal"> {{ title }} </p>
          </div>
        </div>
        <div class="flex flex-col gap-2">
          <ImageSwitcher>
            <template #darkImage>
              <img loading="lazy" width="auto" height="40" :alt="image.alt" :src="`${image.dark}?ims=x40`">
            </template>
            <template #lightImage>
              <img loading="lazy" width="auto" height="40" :alt="image.alt" :src="`${image.light}?ims=x40`">
            </template>
          </ImageSwitcher>
          <p class="text-xs text-color-secondary min-h-8"> {{ image.description }} </p>
        </div>
      </div>
    </template>
  </CardBaseClickable>
</template>

<script setup>
import CardBaseClickable from "../cardbaseclickable"
import ImageSwitcher from "../themeawareimageswitcher";
import Tag from "primevue/tag"
import Button from "primevue/button"

defineProps({
  title: {
    type: String,
    required: true,
  },
  image: {
    type: Object,
    required: true,
  },
  tag: {
    type: Object,
    required: true,
  },
  card: {
    type: Object,
    required: true,
  },
  grid: {
    type: Boolean,
    required: false,
    default: false,
  },
  hover: {
    type: String,
    required: false,
    options: ['slide-up', 'outlined']
  }
})

</script>
