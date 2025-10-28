<template>
  <section
    :id="id"
    class="p-6 md:p-12 grid gap-2"
    :class="cardType[type]"
  >
    <div v-if="content && type === '2-col-70-30'" class="lg:col-span-3 w-full flex flex-col justify-between gap-6 bg-neutral-900 rounded-md p-6 md:p-12">
      <div class="flex flex-col gap-3">
        <Overline color="orange"> {{ content.overline }} </Overline>
        <h2 class="text-2xl font-sora">{{ content.title }}</h2>
        <p class="text-neutral-400 font-sora" v-html="parseMarkdown(content.descriptionRawMarkdown)"></p>
      </div>
      <Button v-bind="content.button" type="linkSecondary" />
    </div>
    <div class="flex flex-col justify-between rounded-md p-6 md:p-12" 
         :class="[ctaColor[type]]">
      <div class="flex gap-3" :class="type.includes('short') ? 'flex justify-between' : 'flex-col'">
        <Overline color="black"> {{ cta.overline }} </Overline>
        <p class="max-w-sm text-balance font-sora text-xl text-neutral-900" v-html="parseMarkdown(cta.descriptionRawMarkdown)"></p>
      </div>
      <div class="flex justify-between items-end">
        <h2 class="max-w-sm font-sora font-bold text-5xl text-neutral-900">{{ cta.title }}</h2>
        <Button v-bind="cta.button" icon="pi pi-angle-right" type="primary" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
  import Button from '../../components/Button/Button.vue'
  import Overline from '../../components/Overline/Overline.vue'
  import { parseMarkdown } from '../../services/markdown-service'

  interface CardProps {
    overline: string
    title: string
    descriptionRawMarkdown: string,
    button: ButtonProps
  }
  interface ButtonProps {
    label: string
    href: string
  }
  interface SectionCallToActionProps {
    type: '2-col-70-30' | '1-col' | '1-col-short' | '1-col-short-orange'
    id?: string
    cta: CardProps
    content: CardProps
  }

  withDefaults(defineProps<SectionCallToActionProps>(), {
    type: '2-col-70-30'
  })

  const cardType = {
    "2-col-70-30": 'lg:grid-cols-10 grid-cols-1',
    "1-col": 'grid-cols-1',
    "1-col-short": 'grid-cols-1',
    "1-col-short-orange": 'grid-cols-1'
  }

  const ctaColor = {
    "2-col-70-30": 'bg-neutral-600 gap-60 lg:col-span-7 ',
    "1-col": 'bg-neutral-600 gap-60',
    "1-col-short": 'bg-neutral-600 gap-16',
    "1-col-short-orange": 'bg-orange-500 gap-16'
  }
</script>
