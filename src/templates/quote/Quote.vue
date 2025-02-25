<template>
  <div
    class="rounded px-10 md:px-20 md:gap-10 md:pt-10 pb-10 flex flex-col md:flex-row w-full items-center"
    :class="[{ 'border surface-border': border }, { degrade: !disableDegrade }]"
  >
    <div class="max-w-md w-full flex flex-col gap-4 py-10 min-h-60 justify-center">
      <p class="text-xl leading-normal">
        {{ text }}
      </p>
      <p
        v-if="author"
        class="text-sm text-color-secondary text-medium"
      >
        {{ author }}
      </p>
      <div
        class="mt-3"
        v-if="button"
      >
        <LinkButton
          v-bind="button"
          outlined
        />
      </div>
    </div>
    <div class="h-full flex items-center justify-center w-full">
      <ImageSwitcher>
        <template
          #lightImage
          v-if="imageLight"
        >
          <img
            :src="`${imageLight}?ims=x60`"
            loading="lazy"
            class="max-h-[60px]"
            width="auto"
            height="60"
            :alt="alt"
          />
        </template>
        <template #darkImage>
          <img
            :src="`${imageDark}?ims=x60`"
            loading="lazy"
            class="max-h-[60px]"
            width="auto"
            height="60"
            :alt="alt"
          />
        </template>
      </ImageSwitcher>
    </div>
  </div>
</template>

<script setup>
  import ImageSwitcher from '../themeawareimageswitcher/ImageSwitcher.vue'
  import LinkButton from '../linkbutton'

  defineProps({
    text: {
      type: String,
      required: true
    },
    border: {
      type: Boolean,
      default: true,
      required: false
    },
    author: {
      type: String,
      required: false
    },
    imageLight: {
      type: String,
      required: false
    },
    imageDark: {
      type: String,
      required: true
    },
    button: {
      type: Object,
      required: false
    },
    alt: {
      type: String,
      required: false
    },
    disableDegrade: {
      required: false,
      default: false,
      type: Boolean
    }
  })
</script>

<style>
  .degrade {
    background: linear-gradient(
      255.8deg,
      rgba(var(--degrade-primary), 0.05) 10.09%,
      rgba(var(--degrade-primary), 0) 55.72%
    );
  }
</style>
