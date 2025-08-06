<template>
  <section
    :class="[
      'w-full flex flex-col gap-10 md:gap-20',
      { 'px-container': hasContainer },
      spacing[margin]
    ]"
    :id="id"
  >
    <div
      class="flex-col flex w-full gap-10 md:gap-20"
      :class="[
        { 'md:flex-row': position === 'left' },
        { 'md:flex-row-reverse': position == 'right' },
        { 'flex-col-reverse	': reverse },
        pt?.content || ''
      ]"
    >
      <div class="w-full">
        <div
          class="w-full flex gap-8"
          :class="[
            { 'flex-col': !reverse },
            { 'md:flex-row': position == 'full' },
            { 'items-center': isContentCentralized },
            { 'flex-col-reverse	': reverse },
            { 'md:top-20 md:sticky': isSticky }
          ]"
        >
          <div
            v-if="overline || title || $slots.title || $slots.actions"
            class="w-full flex flex-col gap-8 z-0"
            :class="[{ 'items-center': isContentCentralized }]"
          >
            <template v-if="overline && overline.length">
              <Overline :label="overline" />
            </template>

            <template v-if="title">
              <TitleSection
                :isContentCentralized="isContentCentralized"
                :tag="titleTag"
                :title="title"
              />
            </template>
            <template v-else-if="$slots.title">
              <div
                class="text-heading-2 font-medium text-balance"
                style="line-height: 125% !important"
              >
                <slot name="title" />
              </div>
            </template>

            <template v-if="descriptionRawHtml && descriptionRawHtml.trim().length">
              <div
                v-html="descriptionRawHtml"
                class="text-color-secondary text-base leading-relaxed text-balance prose max-w-none"
                :class="[{ 'text-center': isContentCentralized }]"
              ></div>
            </template>
            <template v-else-if="description && description.trim().length">
              <p
                class="text-color-secondary text-base leading-relaxed text-balance"
                :class="[{ 'text-center': isContentCentralized }]"
              >
                {{ description }}
              </p>
            </template>

            <div
              v-if="$slots.actions"
              class="flex flex-row gap-3"
              :class="{ 'justify-center items-center': isContentCentralized }"
            >
              <slot name="actions" />
            </div>
          </div>

          <template v-if="$slots.content">
            <slot name="content" />
          </template>
        </div>
      </div>

      <template v-if="$slots.main">
        <slot name="main" />
      </template>
    </div>
    <template v-if="$slots.principal">
      <div>
        <slot name="principal" />
      </div>
    </template>
  </section>
</template>

<script setup>
  import TitleSection from '../titlesection'
  import Overline from '../overline'

  defineProps({
    id: {
      type: String,
      default: () => ''
    },
    overline: {
      type: String,
      default: () => ''
    },
    title: {
      type: String,
      default: () => ''
    },
    titleTag: {
      type: String,
      default: () => 'h2',
      validator: (value) => ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].includes(value)
    },
    description: {
      type: String,
      default: () => ''
    },
    descriptionRawHtml: {
      type: String,
      default: () => ''
    },
    position: {
      type: String,
      options: ['left', 'right', 'center', 'full'],
      default: () => 'left'
    },
    isContentCentralized: {
      type: Boolean,
      default: () => false
    },
    textCenter: {
      type: Boolean,
      default: () => false
    },
    reverse: {
      type: Boolean,
      default: () => false
    },
    isSticky: {
      type: Boolean,
      default: () => false
    },
    pt: {
      type: Object,
      default: () => {}
    },
    margin: {
      type: String,
      options: ['none', 'small', 'default', 'large'],
      default: () => 'none'
    },
    hasContainer: {
      type: Boolean,
      default: () => true
    }
  })

  const spacing = {
    none: 'py-0',
    small: 'py-5 lg:py-10 xl:py-16 2xl:py-20',
    default: 'py-10 lg:py-20 xl:py-30 2xl:py-40',
    large: 'py-14 lg:py-30 xl:py-40 2xl:py-48'
  }
</script>
