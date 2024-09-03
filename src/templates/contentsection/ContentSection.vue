<template>
  <section class="px-container w-full">
    <div
      class="flex-col flex w-full gap-10 md:gap-20"
      :class="[
        { 'lg:flex-row': position === 'left' },
        { 'lg:flex-row-reverse': position == 'right' },
        pt?.content || ''
      ]"
    >
    <div class="w-full"
        v-if="overline || title || description || $slots.content">
      <div
        class="w-full flex gap-8"
        :class="[
          { 'flex-col': !reverse },
          { 'md:flex-row': position == 'full'},
          { 'items-center': isContentCentralized },
          { 'flex-col-reverse	': reverse},
          { 'md:top-20 md:sticky': isSticky }
        ]"
      >
        <div
          class="w-full flex flex-col gap-8"
          :class="[
           { 'items-center': isContentCentralized },
          ]"
        >
          <div
            class="flex flex-col gap-5 max-w-3xl"
            :class="[
              { 'items-center text-center': isContentCentralized },
              { 'justify-center h-full': textCenter }
            ]"
          >
            <template v-if="overline && overline.length">
              <Overline :label="overline" />
            </template>
            <template v-if="title">
              <h1 v-if="titleTag === 'h1'" class="text-3xl font-medium text-balance">{{ title }}</h1>
              <h2 v-if="titleTag === 'h2'" class="text-3xl font-medium text-balance">{{ title }}</h2>
              <h3 v-if="titleTag === 'h3'" class="text-3xl font-medium text-balance">{{ title }}</h3>
              <h4 v-if="titleTag === 'h4'" class="text-3xl font-medium text-balance">{{ title }}</h4>
              <h5 v-if="titleTag === 'h5'" class="text-3xl font-medium text-balance">{{ title }}</h5>
              <h6 v-if="titleTag === 'h6'" class="text-3xl font-medium text-balance">{{ title }}</h6>
            </template>
            <template v-else-if="$slots.title">
              <div class="text-3xl lg:text-4xl font-medium text-balance">
                <slot name="title" />
              </div>
            </template>
            <template v-if="description">
              <p class="text-color-secondary text-sm md:text-base leading-relaxed text-balance">
                {{ description }}
              </p>
            </template>
          </div>

          <template v-if="$slots.actions">
            <div
              class="flex flex-col sm:flex-row gap-3 w-full"
              :class="[
                { 'justify-center items-center text-center': isContentCentralized }
              ]"
            >
              <slot name="actions" />
            </div>
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
  </section>
</template>

<script setup>
import Overline from "../overline/Overline.vue";

const props = defineProps({
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
    required: false,
  }
});

console.log(props.pt)
</script>
