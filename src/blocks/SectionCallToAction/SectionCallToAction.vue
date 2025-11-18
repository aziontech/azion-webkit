<template>
  <LayoutContainer>
    <div
      :id="id"
      class="grid gap-2 mb-40"
      :class="cardType[type]"
    >
    <div
      v-if="content && type === '2-col-70-30'"
      class="lg:col-span-3 w-full flex flex-col justify-between gap-6 bg-neutral-900 rounded-md p-6 md:p-12"
    >
      <div class="flex flex-col gap-3">
        <Overline color="orange">{{ content.overline }}</Overline>
        <h2 class="text-2xl text-neutral-200 font-sora">{{ content.title }}</h2>
        <p
          class="text-neutral-400 font-sora"
          v-html="parsedContentMarkdown"
        ></p>
      </div>
      <Button
        v-if="content.linkLabel"
        :label="content.linkLabel"
        :href="content.link"
        type="linkSecondary"
        size="small"
      />
    </div>
    <div
      class="relative flex flex-col md:flex-row justify-between rounded-md p-6 md:p-12 overflow-hidden gap-2 md:gap-12"
      :class="[ctaColor[type], type.includes('short') ? 'pb-2 md:pb-8' : '']"
      :style="backgroundImageStyle"
    >
      <div
        class="flex"
        :class="type.includes('short') ? 'flex flex-col-reverse justify-between gap-20' : 'flex-col gap-60'"
      >
        <div class="flex flex-col gap-3">
          <Overline v-if="cta.overline && !type.includes('short')" :color="type.includes('short-orange') ? 'black' : 'primary'">
            {{ cta.overline }}
          </Overline>
          <p
              class="font-sora text-xl"
              :class="[type.includes('short-orange') ? 'text-white' : 'text-neutral-200']"
              v-html="parsedCtaMarkdown"
            >
          </p>
        </div>
        <h2
          class="font-sora font-bold gap-4 display-2-mobile md:display-2"
          :class="type.includes('short-orange') ? 'text-neutral-900' : 'text-orange-500'"
        >
          {{ cta.title }}
        </h2>
      </div>
      <div class="flex mb-4 items-end" :class="type.includes('short') ? 'mb-4' : 'mb-0'">
        <div class="md:w-fit w-full">
          <Button
            v-if="cta.linkLabel"
            :label="cta.linkLabel"
            :href="cta.link"
            :theme="type.includes('short-orange') ? 'dark' : 'light'"
            icon="pi pi-angle-right"
            :type="type.includes('short-orange') ? 'secondary' : 'primary'"
            size="small"
            class="w-full"
          />
        </div>
      </div>
    </div>
    </div>
  </LayoutContainer>
</template>

<script setup lang="ts">
  import Button from '../../components/Button/Button.vue'
  import Overline from '../../components/overline/Overline.vue'
  import LayoutContainer from '../LayoutContainer/LayoutContainer.vue'
  import { parseMarkdown } from '../../services/markdown/markdown-service'
  import { computed } from 'vue'

  interface CardProps {
    overline: string
    title: string
    descriptionRawMarkdown: string
    linkLabel: string
    link: string
  }
  interface SectionCallToActionProps {
    type: '2-col-70-30' | '1-col' | '1-col-short-orange' | '1-col-short-black'
    id?: string
    backgroundStyle: 'dots' | 'square'
    cta: CardProps
    content: CardProps
  }

  const props = withDefaults(defineProps<SectionCallToActionProps>(), {
    type: '2-col-70-30',
    backgroundStyle: 'dots'
  })

  const cardType = {
    '2-col-70-30': 'lg:grid-cols-10 grid-cols-1',
    '1-col': 'grid-cols-1',
    '1-col-short-orange': 'grid-cols-1',
    '1-col-short-black': 'grid-cols-1'
  }

  const ctaColor = {
    '2-col-70-30': 'bg-neutral-900 transition-colors lg:col-span-7 ',
    '1-col': 'bg-neutral-900 transition-colors',
    '1-col-short-orange': 'bg-orange-500 transition-colors',
    '1-col-short-black': 'bg-neutral-900 transition-colors'
  }

  const overlay = {
    '2-col-70-30': 'linear-gradient(to top, transparent 0%, transparent 100%)',
    '1-col': 'linear-gradient(to top, transparent 0%, transparent 100%)',
    '1-col-short-orange': 'linear-gradient(to top, transparent 0%, transparent 100%)',
    '1-col-short-black': 'linear-gradient(to top, transparent 0%, transparent 100%)'
  }

  const dotsStyle = {
    darkGray: `radial-gradient(circle, rgba(23, 23, 23, 0.3) 1px, #0000 0);`,
    lightGray: `radial-gradient(circle, rgba(206, 201, 201, 0.1) 1px, #0000 0);`
  }

  const backgroundImageStyle = computed(() => {
    const opacityOverlay = overlay[props.type]
    const dotsOverlay = dotsStyle[props.type.includes('orange') ? 'darkGray' : 'lightGray']

    if (props.backgroundStyle === 'dots') {
      return `
        background-image: 
          ${opacityOverlay},
          ${dotsOverlay};
        background-size: 100% 100%, 12px 12px;
        background-repeat: no-repeat, repeat;
        background-position: 0 0, 0 0;
      `
    } else {
      return `
        background-image: 
          ${opacityOverlay},
          linear-gradient(90deg, transparent 47px, rgba(64, 64, 64, 0.3) 47px, rgba(64, 64, 64, 0.3) 48px, transparent 48px),
          linear-gradient(180deg, transparent 47px, rgba(64, 64, 64, 0.3) 47px, rgba(64, 64, 64, 0.3) 48px, transparent 48px);
        background-size: 100% 100%, 48px 48px, 48px 48px;
        background-repeat: no-repeat, repeat, repeat;
      `
    }
  })

  const parsedContentMarkdown = computed(() => {
    return props.content?.descriptionRawMarkdown
      ? parseMarkdown(props.content.descriptionRawMarkdown)
      : ''
  })

  const parsedCtaMarkdown = computed(() => {
    return props.cta?.descriptionRawMarkdown ? parseMarkdown(props.cta.descriptionRawMarkdown) : ''
  })
</script>
