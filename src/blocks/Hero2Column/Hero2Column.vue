<template>
  <section
    :id="id"
    :class="`text-white relative overflow-hidden w-full mx-auto md:py-24 ${bottomSpacing}`"
    style="
      background-image: radial-gradient(circle, #cec9c940 1.5px, #0000 0);
      background-size: 3rem 3rem;
      background-position: 0 0;
    "
  >
    <div
      class="flex flex-col md:flex-row items-center max-w-xl xxxl:max-w-xxl mx-auto relative z-10 p-6 md:p-0"
    >
      <div
        class="flex w-full md:w-1/2 pb-6 md:p-12 flex-col gap-3 md:gap-4 lg:gap-5 text-center lg:text-left"
      >
        <div class="flex flex-col gap-2 md:gap-3">
          <p
            v-if="overline"
            class="text-orange-500 font-proto-mono text-sm md:text-base tracking-tight uppercase"
          >
            {{ overline }}
          </p>
          <h1 class="font-sora md:leading-tight text-pretty display-1-mobile md:display-1">
            {{ title }}
          </h1>
          <div
            v-if="descriptionRawMarkdown"
            class="text-sm text-pretty md:text-balance lg:text-base max-w-sm md:max-w-7xl text-neutral-200 font-sora mx-auto lg:mx-0"
            v-html="parsedSubtitle"
          />
        </div>

        <div
          v-if="buttons && buttons.length > 0"
          class="flex flex-col md:flex-row gap-4 md:gap-5 mt-4 md:mt-0 items-center justify-center lg:justify-start"
        >
          <Button
            v-for="(button, index) in limitedButtons"
            :key="index"
            size="small"
            icon="pi pi-chevron-right"
            type="primary"
            theme="light"
            v-bind="button"
          />
        </div>
      </div>
      <div class="relative flex w-full md:w-1/2 md:p-12 items-center justify-center">
        <div
          v-if="image"
          class="p-1 w-full max-w-md mx-auto"
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
    </div>
  </section>
</template>

<script setup lang="ts">
  import { computed } from 'vue'
  import Button from '../../components/Button'
  import { parseMarkdown } from '../../services/markdown/markdown-service'

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
  }

  const props = withDefaults(defineProps<Hero2ColumnProps>(), {
    buttons: () => [],
    bottomSpacing: 'mb-24'
  })

  const limitedButtons = computed(() => {
    return props.buttons?.slice(0, 3) || []
  })

  const parsedSubtitle = computed(() => {
    return parseMarkdown(props.descriptionRawMarkdown || '')
  })
</script>
