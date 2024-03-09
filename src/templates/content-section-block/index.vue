<template>
  <section>
    <div class="px-container flex flex-col w-full gap-10 md:gap-20" :class="[
      { 'lg:flex-row': position !== 'center' },
      { 'lg:flex-row-reverse': position == 'right'}
    ]">
      <div class=" w-full flex flex-col gap-8" :class="[
        { 'items-center' : isContentCentralized }
      ]">
        <div class="flex flex-col gap-5 max-w-2xl" :class="[
          { 'items-center text-center max-w-2xl' : isContentCentralized },
          { 'justify-center h-full': textCenter }
        ]">
          <template v-if="overline && overline.length">
            <Overline :label="overline" />
          </template>
          <template v-if="title">
            <h1 v-if="titleTag === 'h1'" class="text-3xl font-medium">{{ title }}</h1>
            <h2 v-if="titleTag === 'h2'" class="text-3xl font-medium">{{ title }}</h2>
            <h3 v-if="titleTag === 'h3'" class="text-3xl font-medium">{{ title }}</h3>
            <h4 v-if="titleTag === 'h4'" class="text-3xl font-medium">{{ title }}</h4>
            <h5 v-if="titleTag === 'h5'" class="text-3xl font-medium">{{ title }}</h5>
            <h6 v-if="titleTag === 'h6'" class="text-3xl font-medium">{{ title }}</h6>
          </template>
          <template v-if="description">
            <p class="text-color-secondary text-base leading-relaxed text-balance">
              {{ description }}
            </p>
          </template>
        </div>
        <template v-if="$slots.actions">
            <div
              class="flex flex-col sm:flex-row gap-3 w-full"
              :class="[
                { 'justify-center items-center text-center' : isContentCentralized }
              ]">
              <slot name="actions" />
            </div>
          </template>


        <template v-if="$slots.content">
          <slot name="content" />
        </template>
      </div>
      <template v-if="$slots.main">
        <slot name="main" />
      </template>
    </div>
  </section>
</template>

<script setup>
import Overline from "../../fragments/text/overline.vue";

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
  description: {
    type: String,
    required: false
  },
  position: {
    type: String,
    options: ['left', 'right', 'center'],
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
  }
});
</script>
