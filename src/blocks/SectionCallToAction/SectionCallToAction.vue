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
        <p class="text-orange-500 text-xs font-proto-mono uppercase tracking-wide">
          {{ content.overline }}
        </p>
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
    <div
      class="relative flex flex-col justify-between rounded-md p-6 md:p-12 overflow-hidden"
      :class="[ctaColor[type]]"
      :style="backgroundImageStyle"
    >
      <div
        class="flex gap-3"
        :class="type.includes('short') ? 'flex flex-col md:flex-row justify-between' : 'flex-col'"
      >
        <p class="text-neutral-900 text-xs font-proto-mono uppercase tracking-wide">
          {{ cta.overline }}
        </p>
        <p
          class="max-w-sm text-balance font-sora text-xl text-neutral-900"
          v-html="parseMarkdown(cta.descriptionRawMarkdown)"
        ></p>
      </div>
      <div class="flex flex-col gap-3 md:flex-row justify-between md:items-end">
        <h2 class="max-w-sm font-sora font-bold gap-2 text-4xl md:text-5xl text-neutral-900">
          {{ cta.title }}
        </h2>
        <Button
          v-if="cta.linkLabel"
          :label="cta.linkLabel"
          :href="cta.link"
          icon="pi pi-angle-right"
          type="primary"
          size="small"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
  import Button from '../../components/Button/Button.vue'
  import { parseMarkdown } from '@services'
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
    '1-col-short-orange': 'grid-cols-1'
  }

  const ctaColor = {
    '2-col-70-30': 'bg-neutral-600 gap-60 lg:col-span-7 ',
    '1-col': 'bg-neutral-600 gap-60',
    '1-col-short': 'bg-neutral-600 gap-16',
    '1-col-short-orange': 'bg-orange-500 gap-16'
  }

  const backgroundImageStyle = computed(() => {
    if (props.backgroundStyle === 'dots') {
      return `
        background-image: 
          linear-gradient(to top, transparent 0%, transparent 100%),
          radial-gradient(circle, rgba(206, 201, 201, 0.2) 1px, #0000 0);
        background-size: 100% 100%, 12px 12px;
        background-repeat: no-repeat, repeat;
        background-position: 0 0, 0 0;
      `
    } else {
      return `
        background-image: 
          linear-gradient(to top, #0A0A0A 0%, rgba(23,23,23,0) 100%),
          linear-gradient(90deg, transparent 47px, rgba(64, 64, 64, 0.3) 47px, rgba(64, 64, 64, 0.3) 48px, transparent 48px),
          linear-gradient(180deg, transparent 47px, rgba(64, 64, 64, 0.3) 47px, rgba(64, 64, 64, 0.3) 48px, transparent 48px);
        background-size: 100% 100%, 48px 48px, 48px 48px;
        background-repeat: no-repeat, repeat, repeat;
      `
    }
  })
</script>
