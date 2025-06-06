<template>
  <section class="px-container w-full">
    <div class="border surface-border surface-50 w-full">
      <div class="flex flex-col lg:flex-row gap-10">
        <div
          class="lg:py-16 lg:px-12 px-6 py-8 flex flex-col gap-8 justify-center md:min-w-[420px] max-w-[420px]"
        >
          <div class="flex flex-col gap-4">
            <Overline
              v-if="overline"
              :label="overline"
            />
            <h2 class="text-heading-2 font-medium text-balance">
              {{ title }}
            </h2>
          </div>
          <LinkButton
            v-if="button?.label"
            v-bind="button"
            class="w-fit"
          />
        </div>
        <div class="flex justify-center w-full max-width-[872px]">
          <ImageSwitcher>
            <template #darkImage>
              <img
                class="object-cover w-full md:min-h-[334px]"
                loading="lazy"
                width="auto"
                height="auto"
                :alt="images.alt"
                :src="images.dark"
              />
            </template>
            <template #lightImage>
              <img
                class="object-cover w-full md:min-h-[334px]"
                loading="lazy"
                width="auto"
                height="auto"
                :alt="images.alt"
                :src="images.light"
              />
            </template>
          </ImageSwitcher>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
  import LinkButton from '../linkbutton'
  import Overline from '../overline'
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
    button: {
      type: Object,
      required: false
    },
    images: {
      type: Object,
      required: true
    }
  })
</script>
