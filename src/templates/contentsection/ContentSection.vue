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
                class="text-heading-2 font-medium text-balance"
                style="line-height: 125% !important"
              >
                {{ title }}
              </h1>
              <h2
                v-if="titleTag === 'h2'"
                :class="[{ 'text-center': isContentCentralized }]"
                class="text-heading-2 font-medium text-balance"
                style="line-height: 125% !important"
              >
                {{ title }}
              </h2>
              <h3
                v-if="titleTag === 'h3'"
                :class="[{ 'text-center': isContentCentralized }]"
                class="text-heading-2 font-medium text-balance"
                style="line-height: 125% !important"
              >
                {{ title }}
              </h3>
              <h4
                v-if="titleTag === 'h4'"
                :class="[{ 'text-center': isContentCentralized }]"
                class="text-heading-2 font-medium text-balance"
                style="line-height: 125% !important"
              >
                {{ title }}
              </h4>
              <h5
                v-if="titleTag === 'h5'"
                :class="[{ 'text-center': isContentCentralized }]"
                class="text-heading-2 font-medium text-balance"
                style="line-height: 125% !important"
              >
                {{ title }}
              </h5>
              <h6
                v-if="titleTag === 'h6'"
                :class="[{ 'text-center': isContentCentralized }]"
                class="text-heading-2 font-medium text-balance"
                style="line-height: 125% !important"
              >
                {{ title }}
              </h6>
            </template>
            <template v-else-if="$slots.title">
              <div
                class="text-heading-2 font-medium text-balance"
                style="line-height: 125% !important"
              >
                <slot name="title" />
              </div>
            </template>
            <template v-if="description">
              <p
                v-if="!wysisyg"
                class="text-color-secondary text-base leading-relaxed text-balance"
                :class="[{ 'text-center': isContentCentralized }]"
              >
                {{ description }}
              </p>
              <div
                v-else
                v-html="description"
                class="text-color-secondary text-base leading-relaxed text-balance"
              ></div>
            </template>
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
      required: false
    },
    title: {
      type: String,
      required: false
    },
    titleTag: {
      type: String,
      required: false,
      default: 'h2'
    },
    wysisyg: {
      type: Boolean,
      required: true,
      default() {
        return false
      }
    },
    description: {
      type: String,
      required: false
    },
    position: {
      type: String,
      options: ['left', 'right', 'center', 'full'],
      required: false,
      default: 'left'
    },
    isContentCentralized: {
      type: Boolean,
      required: false,
      default: false
    },
    textCenter: {
      type: Boolean,
      required: false,
      default: false
    },
    reverse: {
      type: Boolean,
      required: false,
      default: false
    },
    isSticky: {
      type: Boolean,
      required: false,
      default: false
    },
    pt: {
      type: Object,
      required: false
    }
  })
</script>
