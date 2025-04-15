<template>
  <div class="px-container w-full">
    <CardBase
      grid
      backgroundColor="shape"
      class="md:min-h-[550px] overflow-hidden"
    >
      <template #content-raw>
        <div
          class="flex flex-col md:flex-row justify-between md:gap-8 items-center md:pl-10 md:pl-20 md:lg:pl-40 md:min-h-[550px]"
          :style="backgroundStyle"
        >
          <div class="flex flex-col gap-8 py-10 md:py-0">
            <h1
              v-if="props.titleTag === 'h1'"
              v-html="props.title"
              class="leading-loose font-medium text-heading-3 text-balance"
              style="line-height: 114% !important"
            ></h1>
            <h2
              v-if="props.titleTag === 'h2'"
              v-html="props.title"
              class="text-heading-3 leading-relaxed font-medium text-balance"
              style="line-height: 114% !important"
            ></h2>
            <h3
              v-if="props.titleTag === 'h3'"
              v-html="props.title"
              class="text-heading-3 leading-relaxed font-medium text-balance"
              style="line-height: 114% !important"
            ></h3>
            <h4
              v-if="props.titleTag === 'h4'"
              v-html="props.title"
              class="text-heading-3 leading-relaxed font-medium text-balance"
              style="line-height: 114% !important"
            ></h4>
            <h5
              v-if="props.titleTag === 'h5'"
              v-html="props.title"
              class="text-heading-3 leading-relaxed font-medium text-balance"
              style="line-height: 114% !important"
            ></h5>
            <h6
              v-if="props.titleTag === 'h6'"
              v-html="props.title"
              class="text-heading-3 leading-relaxed font-medium text-balance"
              style="line-height: 114% !important"
            ></h6>

            <p
              v-html="props.description"
              class="text-overline text-color-secondary text-sm lg:text-base"
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

  // Reactive variables to store the correct background images
  const currentBackgroundDark = ref('')
  const currentBackgroundLight = ref('')

  // Function to check the theme and set the corresponding background image
  const updateBackgroundImageBasedOnTheme = () => {
    const isDarkTheme = document.documentElement.classList.contains('azion-dark')
    console.log('isDarkTheme: ', isDarkTheme)

    currentBackgroundDark.value = isDarkTheme ? `background-url(${imageDark})` : ''
    currentBackgroundLight.value = !isDarkTheme ? `background-url(${imageLight})` : ''
  }

  // Apply the correct background image based on the theme
  const backgroundStyle = ref({})

  // Update background images on mount and whenever the theme changes
  onMounted(() => {
    updateBackgroundImageBasedOnTheme()
    updateBackgroundStyle()
  })

  // Watch for theme changes and update the background image
  watchEffect(() => {
    // updateBackgroundImageBasedOnTheme()
    // updateBackgroundStyle()
  })

  // Update the background style for the div
  const updateBackgroundStyle = () => {
    console.log('props.imageDark: ', props.imageDark)

    backgroundStyle.value = {
      backgroundImage: document.documentElement.classList.contains('azion-dark') ? currentBackgroundDark.value : currentBackgroundLight.value,
      backgroundSize: 'cover',
      backgroundPosition: 'center center'
    }
  }
</script>
