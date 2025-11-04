<template>
  <section
    :id="id"
    class="grid gap-2 relative max-w-xl xxxl:max-w-xxl mx-auto p-6 md:p-12 mb-40"
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
          v-html="parseMarkdown(content.descriptionRawMarkdown)"
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
    <a
      :href="cta.link"
      target="_blank"
      rel="noopener noreferrer"
      class="group/cta relative flex flex-col justify-between rounded-md p-6 md:p-12 overflow-hidden"
      :class="[ctaColor[type]]"
      :style="backgroundImageStyle"
    >
      <div
        class="flex gap-3"
        :class="type.includes('short') ? 'flex flex-col md:flex-row justify-between' : 'flex-col'"
      >
        <Overline :color="type.includes('short-black') ? 'primary' : 'black'">
          {{ cta.overline }}
        </Overline>
        <p
          class="max-w-sm text-balance font-sora text-xl"
          :class="[type.includes('short-black') ? 'text-neutral-200' : 'text-neutral-900', type.includes('2-col') ? 'text-start' : 'text-end']"
          v-html="parseMarkdown(cta.descriptionRawMarkdown)"
        ></p>
      </div>
      <div class="flex flex-col gap-3 md:flex-row justify-between md:items-end">
        <h2
          class="max-w-sm font-sora font-bold gap-2 text-4xl md:text-5xl"
          :class="type.includes('short-black') ? 'text-orange-500' : 'text-neutral-900'"
        >
          {{ cta.title }}
        </h2>
        <Button
          v-if="cta.linkLabel"
          :label="cta.linkLabel"
          :theme="type.includes('short-black') ? 'light' : 'dark'"
          icon="pi pi-angle-right"
          type="primary"
          size="small"
          custom-class="group-hover/cta:!bg-orange-600 group-hover/cta:!text-white"
        />
      </div>
    </a>
  </section>
</template>

<script setup lang="ts">
  import Button from '../../components/Button/Button.vue'
  import Overline from '../../components/overline/Overline.vue'
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
    type: '2-col-70-30' | '1-col' | '1-col-short' | '1-col-short-orange'
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
    '1-col-short': 'grid-cols-1',
    '1-col-short-orange': 'grid-cols-1',
    '1-col-short-black': 'grid-cols-1'
  }

  const ctaColor = {
    '2-col-70-30': 'bg-neutral-600 hover:bg-neutral-500 transition-colors gap-60 lg:col-span-7 ',
    '1-col': 'bg-neutral-600 hover:bg-neutral-500 transition-colors gap-60',
    '1-col-short': 'bg-neutral-600 hover:bg-neutral-500 transition-colors gap-16',
    '1-col-short-orange': 'bg-orange-500 hover:bg-orange-400 transition-colors gap-16',
    '1-col-short-black': 'bg-neutral-900 hover:bg-neutral-800 transition-colors gap-16'
  }

  const overlay = {
    '2-col-70-30': 'linear-gradient(to top, rgba(82,82,82, 0.5) 0%, rgba(82,82,82, 0.5) 100%)',
    '1-col': 'linear-gradient(to top, rgba(82,82,82, 0.5) 0%, rgba(82,82,82, 0.5) 100%)',
    '1-col-short': 'linear-gradient(to top, rgba(82,82,82, 0.5) 0%, rgba(82,82,82, 0.5) 100%)',
    '1-col-short-orange': 'linear-gradient(to top, transparent 0%, transparent 100%)',
    '1-col-short-black': 'linear-gradient(to top, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.5) 100%)'
  }

  const backgroundImageStyle = computed(() => {
    const opacityOverlay = overlay[props.type]

    if (props.backgroundStyle === 'dots') {
      return `
        background-image: 
          ${opacityOverlay},
          radial-gradient(circle, rgba(206, 201, 201, 0.2) 1px, #0000 0);
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
</script>
