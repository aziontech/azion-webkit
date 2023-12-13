<template>
  <section class="py-16 surface-section">
    <div class="px-container flex flex-col w-full gap-10" :class="[
      { 'lg:flex-row': !centered },
      { 'items-center text-center': centered },
    ]">
      <div class=" w-full flex flex-col gap-8" :class="[
        { 'lg:max-w-xl': !centered },
        { 'items-center text-center': centered },
      ]">
        <div class="flex flex-col gap-4" :class="[
          { 'max-w-2xl': centered },
        ]">
          <Overline :label="overline" />
          <h1 class="text-3xl">
            {{ title }}
          </h1>
          <p class="text-color-secondary text-sm"> {{ description }}</p>
          <div class="flex flex-row gap-3" :class="[
            { 'justify-center': centered },
          ]">
          <slot name="buttons">

          </slot>
          </div>
        </div>
        <slot name="content" />
      </div>
      <div class="w-full">
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
    required: true
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  centered: {
    type: Boolean,
    required: false,
    default: false
  }
})

</script>
