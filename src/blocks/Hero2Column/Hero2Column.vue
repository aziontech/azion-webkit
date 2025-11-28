<template>
  <GridPattern
    :id="id"
    :class="`text-white relative overflow-hidden w-full mx-auto ${bottomSpacing}`"
    pattern="dots"
    color="light-gray"
    size="48px"
    htmlTag="section"
  >
    <LayoutContainer class="flex flex-col gap-4 lg:gap-24 lg:flex-row items-center z-10">
      <div
        class="flex w-full lg:w-1/2 pb-6 flex-col gap-3 md:gap-4 lg:gap-5 text-center lg:text-left"
      >
        <div class="flex flex-col gap-2 lg:gap-3">
          <p
            v-if="overline"
            class="text-orange-500 font-proto-mono text-sm lg:text-base tracking-tight uppercase"
          >
            {{ overline }}
          </p>
          <h1 class="font-sora lg:leading-tight text-pretty display-1-mobile lg:display-1">
            {{ title }}
          </h1>
          <div
            v-if="descriptionRawMarkdown"
            class="text-sm text-pretty lg:text-balance lg:text-base max-w-sm lg:max-w-7xl text-neutral-200 font-sora mx-auto lg:mx-0"
            v-html="parsedSubtitle"
          />
        </div>

        <div
          v-if="buttons && buttons.length > 0"
          class="flex flex-col lg:flex-row gap-4 lg:gap-5 mt-4 lg:mt-0 items-center justify-center lg:justify-start"
        >
          <Button
            v-for="(button, index) in limitedButtons"
            :key="index"
            size="small"
            icon="pi pi-chevron-right"
            type="primary"
            customClass="px-3 py-3"
            theme="light"
            v-bind="button"
          />
        </div>
      </div>
      <div class="relative flex w-full lg:w-1/2 lg:py-24 items-center justify-center">
        <div
          v-if="image"
          class="py-1 w-full max-w-md mx-auto"
        >
          <div class="w-full">
            <img
              :src="image"
              :alt="title"
              class="w-full h-auto"
            />
          </div>
        </div>
        <div
          v-else
          class="w-full aspect-square bg-neutral-900 rounded-lg flex items-center justify-center"
        >
          <i class="pi pi-image text-6xl text-neutral-600" />
        </div>
      </div>
    </LayoutContainer>
  </GridPattern>
</template>

<script setup lang="ts">
  import { computed } from 'vue'
  import Button from '../../components/Button'
  import { parseMarkdown } from '../../services/markdown/markdown-service'
  import GridPattern from '../../components/GridPattern/GridPattern.vue'
  import LayoutContainer from '../LayoutContainer/LayoutContainer.vue'

  export interface Hero2ColumnButtonProps {
    label: string
    size?: 'small' | 'large'
    type?: 'primary' | 'secondary' | 'link' | 'tertiary' | 'linkExternal'
    href: string
    icon?: string
    theme?: string
    customClass?: string
  }

  interface Hero2ColumnProps {
    overline?: string
    title: string
    descriptionRawMarkdown?: string
    buttons?: Hero2ColumnButtonProps[]
    image?: string
    id?: string
    bottomSpacing?: 'mb-0' | 'mb-6' | 'mb-12' | 'mb-24' | 'mb-48'
    backgroundPattern: {
      style: 'dots' | 'square'
      size: '12px' | '24px' | '48px'
    }
  }

  const props = withDefaults(defineProps<Hero2ColumnProps>(), {
    buttons: () => [],
    bottomSpacing: 'mb-24',
    backgroundPattern: () => ({
      style: 'dots',
      size: '48px'
    })
  })

  const limitedButtons = computed(() => {
    return props.buttons?.slice(0, 3) || []
  })

  const parsedSubtitle = computed(() => {
    return parseMarkdown(props.descriptionRawMarkdown || '')
  })
</script>
