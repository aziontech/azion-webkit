<template>
  <section>
    <div class="px-container flex flex-col w-full gap-20" :class="[
      { 'lg:flex-row': position !== 'center' },
      { 'lg:flex-row-reverse': position == 'right'}
    ]">
      <div class=" w-full flex flex-col gap-8" :class="[
        { 'items-center' : isContentCentralized }
      ]">
        <div class="flex flex-col gap-4" :class="[
          { 'max-w-2xl': position == 'center' },
          { 'max-w-xl': position !== 'center' },
          { 'items-center text-center' : isContentCentralized }
        ]">
          <Overline :label="overline" />
          <h1 class="text-3xl font-medium">
            {{ title }}
          </h1>
          <p class="text-color-secondary text-base leading-relaxed text-balance"> {{ description }}</p>
        </div>
            <div v-if="$slots.actions" class="flex flex-col sm:flex-row gap-3 w-full justify-center">
              <slot name="actions" />
            </div>
        <slot name="content" />
      </div>
      <div class="w-full" :class="[
        { 'flex flex-col justify-center': position !== 'center'}
      ]">
        <slot name="main" />
      </div>
    </div>
  </section>
</template>

<script setup>
import Overline from "../../templates/overline/index.vue"

defineProps({
  overline: {
    type: String,
    required: false
  },
  title: {
    type: String,
    required: true
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
})
</script>
