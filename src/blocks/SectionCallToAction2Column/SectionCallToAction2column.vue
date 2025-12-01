<template>
  <LayoutContainer>
    <div
      :id="id"
      :class="cardType[type]"
      class="grid gap-1 m-0"
    >
      <div
        v-if="content && type === '70-30'"
        class="lg:col-span-3 w-full flex flex-col justify-between gap-6 bg-neutral-900 rounded-md p-6 md:p-12"
      >
        <div class="flex flex-col gap-3">
          <Overline color="orange">{{ content.overline }}</Overline>
          <h2 class="text-2xl text-neutral-200 font-sora">{{ content.title }}</h2>
          <div
            class="text-neutral-400 font-sora"
            v-html="parsedContentMarkdown"
          ></div>
        </div>
        <Button
          v-if="content.linkLabel"
          :label="content.linkLabel"
          :href="content.link"
          :target="content.target || '_self'"
          type="linkSecondary"
          size="small"
        />
      </div>
      <GridPattern
        class="relative flex flex-col md:flex-row justify-between rounded-md p-6 md:p-12 overflow-hidden gap-2 md:gap-12"
        :class="[ctaColor[type]]"
        :pattern="backgroundPattern.style"
        color="light-gray"
        :size="backgroundPattern.size"
        :opacity="0.1"
      >
        <div class="flex flex-col gap-20 lg:gap-60">
          <div class="flex flex-col">
            <Overline
              v-if="cta.overline"
              color="orange"
              class="mb-3"
            >
              {{ cta.overline }}
            </Overline>
            <h2 class="font-sora font-bold gap-4 display-2-mobile md:display-2 text-white">
              {{ cta.title }}
            </h2>
          </div>
          <div
            class="font-sora text-xl text-neutral-400"
            v-html="parsedCtaMarkdown"
          ></div>
        </div>
        <div class="flex items-end mb-4">
          <div class="md:w-fit w-full">
            <Button
              v-if="cta.linkLabel"
              :label="cta.linkLabel"
              :href="cta.link"
              theme="light"
              icon="pi pi-angle-right"
              type="primary"
              :target="cta.target || '_self'"
              size="small"
              class="w-full"
            />
          </div>
        </div>
      </GridPattern>
    </div>
  </LayoutContainer>
</template>

<script setup lang="ts">
  import Button from '../../components/Button/Button.vue'
  import Overline from '../../components/overline/Overline.vue'
  import LayoutContainer from '../LayoutContainer/LayoutContainer.vue'
  import GridPattern from '../../components/GridPattern/GridPattern.vue'
  import { parseMarkdown } from '../../services/markdown/markdown-service'
  import { computed } from 'vue'

  interface CardProps {
    overline: string
    title: string
    descriptionRawMarkdown: string
    linkLabel: string
    link: string
    target?: string
  }
  interface SectionCallToActionProps {
    type: '70-30'
    id?: string
    cta: CardProps
    content: CardProps
    backgroundPattern: {
      style: 'dots' | 'square'
      size: '12px' | '24px' | '48px'
    }
  }

  const props = withDefaults(defineProps<SectionCallToActionProps>(), {
    type: '70-30',
    backgroundPattern: () => ({
      style: 'dots',
      size: '12px'
    })
  })

  const cardType = {
    '70-30': 'lg:grid-cols-10 grid-cols-1'
  }

  const ctaColor = {
    '70-30': 'bg-neutral-900 transition-colors lg:col-span-7 '
  }

  const parsedContentMarkdown = computed(() => {
    return props.content?.descriptionRawMarkdown
      ? parseMarkdown(props.content.descriptionRawMarkdown)
      : ''
  })

  const parsedCtaMarkdown = computed(() => {
    return props.cta?.descriptionRawMarkdown ? parseMarkdown(props.cta.descriptionRawMarkdown) : ''
  })
</script>
