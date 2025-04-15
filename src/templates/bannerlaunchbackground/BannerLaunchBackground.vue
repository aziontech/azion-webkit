<template>
  <div class="px-container w-full">
    <CardBase
      grid
      class="overflow-hidden"
    >
      <template #content-raw>
        <div
          class="flex md:flex-row justify-between md:gap-8 items-center p-6 md:p-8 lg:p-16 min-h-[240px] md:min-h-[336px] lg:min-h-[426px]"
          :style="backgroundStyle"
        >
          <div class="flex flex-col gap-8">
            <h1
              v-if="titleTag === 'h1'"
              v-html="title"
              class="leading-loose text-heading-3 text-balance font-mono uppercase font-bold"
              style="line-height: 114% !important"
            ></h1>
            <h2
              v-if="titleTag === 'h2'"
              v-html="title"
              class="text-heading-3 leading-relaxed text-balance font-mono uppercase font-bold"
              style="line-height: 114% !important"
            ></h2>
            <h3
              v-if="titleTag === 'h3'"
              v-html="title"
              class="text-heading-3 leading-relaxed text-balance font-mono uppercase font-bold"
              style="line-height: 114% !important"
            ></h3>
            <h4
              v-if="titleTag === 'h4'"
              v-html="title"
              class="text-heading-3 leading-relaxed text-balance font-mono uppercase font-bold"
              style="line-height: 114% !important"
            ></h4>
            <h5
              v-if="titleTag === 'h5'"
              v-html="title"
              class="text-heading-3 leading-relaxed text-balance font-mono uppercase font-bold"
              style="line-height: 114% !important"
            ></h5>
            <h6
              v-if="titleTag === 'h6'"
              v-html="title"
              class="text-heading-3 leading-relaxed text-balance font-mono uppercase font-bold"
              style="line-height: 114% !important"
            ></h6>

            <p
              v-if="description"
              v-html="description"
              class="text-body-3 font-mono uppercase text-color-secondary"
              style="line-height: 150% !important; letter-spacing: 5%"
            ></p>
          </div>
        </div>
      </template>
    </CardBase>
  </div>
</template>

<script setup>
  import { ref, onMounted, watchEffect } from 'vue'
  import CardBase from '../cardbase'

  const props = defineProps({
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

  const currentBackgroundDark = ref('')
  const currentBackgroundLight = ref('')
  const backgroundStyle = ref({})

  const updateBackgroundImageBasedOnTheme = () => {
    const isDarkTheme = document.documentElement.classList.contains('azion-dark')
    console.log('isDarkTheme: ', isDarkTheme)

    currentBackgroundDark.value = isDarkTheme ? `url(${props.imageDark})` : ''
    currentBackgroundLight.value = !isDarkTheme ? `url(${props.imageLight})` : ''
  }

  onMounted(() => {
    updateBackgroundImageBasedOnTheme()
    updateBackgroundStyle()
  })

  // Watch for theme changes and update the background image
  watchEffect(() => {
    // updateBackgroundImageBasedOnTheme()
    // updateBackgroundStyle()
  })

  const updateBackgroundStyle = () => {
    backgroundStyle.value = {
      backgroundImage: document.documentElement.classList.contains('azion-dark')
        ? currentBackgroundDark.value
        : currentBackgroundLight.value,
      backgroundPosition: 'center center',
      backgroundSize: 'cover'
    }
  }
</script>
