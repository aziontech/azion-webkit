<template>
  <LayoutContainer>
    <div
      :id="id"
      :class="cardType[type]"
      class="grid gap-1 m-0"
    >
      <div
        v-if="content && type === '2-col-70-30'"
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
          type="linkSecondary"
          size="small"
        />
      </div>
      <GridPattern
        class="relative flex flex-col md:flex-row justify-between rounded-md p-6 md:p-12 overflow-hidden gap-2 md:gap-12"
        :class="[ctaColor[type], type.includes('short') ? 'pb-2 md:pb-8' : '']"
        :pattern="backgroundPattern.style"
        :color="type.includes('short-orange') ? 'dark-gray' : 'light-gray'"
        :size="backgroundPattern.size"
        :opacity="type.includes('short-orange') ? 0.3 : 0.1"
      >
        <div
          class="flex"
          :class="
            type.includes('short')
              ? 'flex flex-col-reverse justify-between gap-20'
              : 'flex-col gap-20 lg:gap-60'
          "
        >
          <div class="flex flex-col">
            <Overline
              v-if="cta.overline && !type.includes('short')"
              :color="type.includes('short-orange') ? 'black' : 'primary'"
              class="mb-3"
            >
              {{ cta.overline }}
            </Overline>
            <div
              class="font-sora text-xl"
              :class="[type.includes('short-orange') ? 'text-white' : 'text-neutral-200']"
              v-html="parsedCtaMarkdown"
            ></div>
          </div>
          <h2
            class="font-sora font-bold gap-4 display-2-mobile md:display-2"
            :class="type.includes('short-orange') ? 'text-neutral-900' : 'text-orange-500'"
          >
            {{ cta.title }}
          </h2>
        </div>
        <div
          class="flex items-end"
          :class="type.includes('short') ? 'mb-4' : 'mb-0'"
        >
          <div class="md:w-fit w-full">
            <Button
              v-if="cta.linkLabel"
              :label="cta.linkLabel"
              :href="cta.link"
              :theme="type.includes('short-orange') ? 'dark' : 'light'"
              icon="pi pi-angle-right"
              :type="type.includes('short-orange') ? 'secondary' : 'primary'"
              :target="cta.linkTarget || '_self'"
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
    linkTarget?: string
  }
  interface SectionCallToActionProps {
    type: '2-col-70-30' | '1-col' | '1-col-short-orange' | '1-col-short-black'
    id?: string
    cta: CardProps
    content: CardProps
    backgroundPattern: {
      style: 'dots' | 'square'
      size: '12px' | '24px' | '48px'
    }
  }

  const props = withDefaults(defineProps<SectionCallToActionProps>(), {
    type: '2-col-70-30',
    backgroundPattern: () => ({
      style: 'dots',
      size: '12px'
    })
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

  const parsedContentMarkdown = computed(() => {
    return props.content?.descriptionRawMarkdown
      ? parseMarkdown(props.content.descriptionRawMarkdown)
      : ''
  })

  const parsedCtaMarkdown = computed(() => {
    return props.cta?.descriptionRawMarkdown ? parseMarkdown(props.cta.descriptionRawMarkdown) : ''
  })
</script>
