<template>
  <div class="px-container w-full">
    <CardBase
      grid
      backgroundColor="shape"
    >
      <template #content-raw>
        <div
          class="flex flex-col surface-border overflow-hidden border gap-5 md:gap-0 rounded-lg md:flex-row justify-between items-end md:items-center pl-6 md:pl-8 lg:pl-16"
        >
          <div class="flex flex-col gap-4 md:gap-8 py-6 md:py-0 w-full">
            <h1
              v-if="titleTag === 'h1'"
              v-html="title"
              class="leading-loose text-heading-2 text-balance font-mono uppercase font-bold"
              style="line-height: 114% !important"
            ></h1>
            <h2
              v-if="titleTag === 'h2'"
              v-html="title"
              class="text-heading-2 leading-relaxed text-balance font-mono uppercase font-bold"
              style="line-height: 114% !important"
            ></h2>
            <h3
              v-if="titleTag === 'h3'"
              v-html="title"
              class="text-heading-2 leading-relaxed text-balance font-mono uppercase font-bold"
              style="line-height: 114% !important"
            ></h3>
            <h4
              v-if="titleTag === 'h4'"
              v-html="title"
              class="text-heading-2 leading-relaxed text-balance font-mono uppercase font-bold"
              style="line-height: 114% !important"
            ></h4>
            <h5
              v-if="titleTag === 'h5'"
              v-html="title"
              class="text-heading-2 leading-relaxed text-balance font-mono uppercase font-bold"
              style="line-height: 114% !important"
            ></h5>
            <h6
              v-if="titleTag === 'h6'"
              v-html="title"
              class="text-heading-2 leading-relaxed text-balance font-mono uppercase font-bold"
              style="line-height: 114% !important"
            ></h6>

            <p
              v-html="description"
              class="text-body-2 font-mono uppercase text-color-secondary"
              style="line-height: 150% !important; letter-spacing: 5%"
            />
          </div>
          <ImageSwitcher>
            <template #darkImage>
              <img
                :alt="alt"
                :src="imageDark"
              />
            </template>
            <template #lightImage>
              <img
                :alt="alt"
                :src="imageLight"
              />
            </template>
          </ImageSwitcher>
        </div>
      </template>
    </CardBase>
  </div>
</template>

<script setup>
  import CardBase from '../cardbase'
  import ImageSwitcher from '../themeawareimageswitcher'

  defineProps({
    titleTag: {
      type: String,
      default: () => 'h1',
      validator: (value) => ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].includes(value)
    },
    title: {
      type: String,
      required: true
    },
    description: {
      type: String
    },
    imageDark: {
      type: String
    },
    imageLight: {
      type: String
    },
    alt: {
      type: String
    }
  })

  // bg-gradient-to-r from-orange-500 to-orange-400
  // To prevent Tailwind from purging classes in JSON,
  // add a comment in your HTML with those classes to ensure they're recognized.
</script>
