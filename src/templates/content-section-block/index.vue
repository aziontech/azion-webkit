<template>
  <section>
    <div class="px-container flex flex-col w-full gap-10 md:gap-20" :class="[
      { 'lg:flex-row': position !== 'center' },
      { 'lg:flex-row-reverse': position == 'right'}
    ]">
      <div class=" w-full flex flex-col gap-8" :class="[
        { 'items-center' : isContentCentralized }
      ]">
        <div class="flex flex-col gap-5" :class="[
          { 'max-w-2xl': position == 'center' },
          { 'max-w-xl': position !== 'center' },
          { 'items-center text-center' : isContentCentralized }
        ]">
          <Overline v-if="overline && overline.length" :label="overline" />
          <h1 v-if="titleTag === 'h1'" class="text-3xl font-medium">{{ title }}</h1>
          <h2 v-if="titleTag === 'h2'" class="text-3xl font-medium">{{ title }}</h2>
          <h3 v-if="titleTag === 'h3'" class="text-3xl font-medium">{{ title }}</h3>
          <h4 v-if="titleTag === 'h4'" class="text-3xl font-medium">{{ title }}</h4>
          <h5 v-if="titleTag === 'h5'" class="text-3xl font-medium">{{ title }}</h5>
          <h6 v-if="titleTag === 'h6'" class="text-3xl font-medium">{{ title }}</h6>

          <p
            v-if="description"
            class="text-color-secondary text-base leading-relaxed text-balance"> {{ description }}</p>
        </div>
        <div
          v-if="$slots.actions"
          class="flex flex-col sm:flex-row gap-3 w-full"
          :class="[
            { 'items-center text-center' : isContentCentralized }
          ]">
          <slot name="actions" />
        </div>
        <slot name="content" />
      </div>
      <div class="w-full" :class="[{ 'flex flex-col justify-center': position !== 'center'}]">
        <slot name="main" />
      </div>
    </div>
  </section>
</template>

<script setup>
import Overline from "../../templates/overline/index.vue";

defineProps({
  overline: {
    type: String,
    required: false
  },
  title: {
    type: String,
    required: true
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
  }
});
</script>
