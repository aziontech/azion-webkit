<template>
  <section class="px-container w-full flex flex-col gap-10 md:gap-20">
    <div
      class="flex-col flex w-full gap-10 md:gap-20"
      :class="[
        { 'md:flex-row': position === 'left' },
        { 'md:flex-row-reverse': position == 'right' },
        { 'flex-col-reverse	': reverse },
        pt?.content || ''
      ]"
    >
      <div
        class="w-full"
        v-if="overline || title || description || $slots.content"
      >
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
            class="w-full flex flex-col gap-8 z-0"
            :class="[{ 'items-center': isContentCentralized }]"
          >
            <template v-if="overline && overline.length">
              <Overline :label="overline" />
            </template>
            <template v-if="title">
              <h1
                v-if="titleTag === 'h1'"
                :class="[{ 'text-center': isContentCentralized }]"
                class="text-heading-2 font-medium text-balance prose"
                style="line-height: 125% !important"
              >
                {{ title }}
              </h1>
              <h2
                v-if="titleTag === 'h2'"
                :class="[{ 'text-center': isContentCentralized }]"
                class="text-heading-2 font-medium text-balance prose"
                style="line-height: 125% !important"
              >
                {{ title }}
              </h2>
              <h3
                v-if="titleTag === 'h3'"
                :class="[{ 'text-center': isContentCentralized }]"
                class="text-heading-2 font-medium text-balance prose"
                style="line-height: 125% !important"
              >
                {{ title }}
              </h3>
              <h4
                v-if="titleTag === 'h4'"
                :class="[{ 'text-center': isContentCentralized }]"
                class="text-heading-2 font-medium text-balance prose"
                style="line-height: 125% !important"
              >
                {{ title }}
              </h4>
              <h5
                v-if="titleTag === 'h5'"
                :class="[{ 'text-center': isContentCentralized }]"
                class="text-heading-2 font-medium text-balance prose"
                style="line-height: 125% !important"
              >
                {{ title }}
              </h5>
              <h6
                v-if="titleTag === 'h6'"
                :class="[{ 'text-center': isContentCentralized }]"
                class="text-heading-2 font-medium text-balance prose"
                style="line-height: 125% !important"
              >
                {{ title }}
              </h6>
            </template>
            <template v-else-if="$slots.title">
              <div
                class="text-heading-2 font-medium text-balance prose"
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
  import Overline from '../overline/Overline.vue'

  defineProps({
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
      default: 'h2'
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
    }
  })
</script>
