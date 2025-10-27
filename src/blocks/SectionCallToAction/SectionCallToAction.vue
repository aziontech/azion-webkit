<template>
  <section
    :id="id"
    class="flex flex-wrap md:flex-nowrap relative max-w-xl xxxl:max-w-xxl mx-auto gap-2 md:p-12 p-6 mb-40"
  >
    <div class="flex w-full md:w-1/3 md:flex-wrap items-start flex-col bg-neutral-900 rounded-md justify-between text-left">
      <div class="p-12 ">
        <div class="flex flex-col">
          <span v-if="cta.overline" class="text-xs font-proto-mono uppercase text-balance text-orange-500 w-full pb-3">{{ cta.overline }}</span>
          <h2 v-if="cta.title" class="display-3 font-normal tracking-tight text-neutral-100">
            {{ cta.title }}
          </h2>
          <div v-html="parseMarkdown(cta.descriptionRawMarkdown)" class="text-balance text-neutral-400 text-base mt-3 font-sora"></div>
        </div>

        <div v-if="cta.link && cta.linkLabel" class="flex flex-row gap-4 mt-44">
          <Button
            :href="cta.link"
            :label="cta.linkLabel"
            :type="'linkSecondary'"
            size="small"
            theme="dark"
            customClass="px-0 py-0"
          />
        </div>
      </div>
    </div>
    <div class="flex w-full md:w-2/3 p-12 flex-col justify-between bg-orange-500 md:bg-neutral-800 hover:bg-orange-500 transition-colors duration-150 rounded-md flex-wrap">
      <div class="w-full flex-col gap-3 flex">
        <span v-if="content.overline" class="text-xs font-proto-mono uppercase text-balance text-neutral-950 w-full">{{ content.overline }}</span>
        <div v-html="parseMarkdown(content.descriptionRawMarkdown)" class="text-balance text-neutral-950 font-sora mb-12 md:mb-0"></div>
      </div>
      <h3 v-if="content.title" class="text-neutral-950 font-bold font-sora display-1">{{ content.title }}</h3>
    </div>
  </section>
</template>

<script setup lang="ts">
  import Button from '../../components/Button'
  import { parseMarkdown } from '../../src/services/markdown-service'

  export interface CallToActionButton {
    label: string
    href: string
    type?: 'primary' | 'secondary' | 'link' | 'tertiary' | 'linkExternal' | 'linkSecondary'
    theme?: 'dark' | 'light'
  }

  interface SectionCallToActionProps {
    id?: string,
    cta?: {
      overline?: string,
      title?: string,
      descriptionRawMarkdown?: string,
      linkLabel?: string,
      link?: string
    },
    content?: {
      overline?: string,
      descriptionRawMarkdown?: string,
      title?: string
    }
  }

  const props = withDefaults(defineProps<SectionCallToActionProps>(), {
    cta: () => ({}),
    content: () => ({})
  })
</script>
