<template>
  <section class="py-16 surface-section">
    <div class="px-container flex flex-col w-full gap-10" :class="[
      { 'lg:flex-row': !isCentralized },
      { 'items-center': isCentralized },
    ]">
      <div class=" w-full flex flex-col gap-10" :class="[
        { 'lg:max-w-xl': !isCentralized },
        { 'items-center': isCentralized },
      ]">
        <div class="flex flex-col gap-4" :class="[
          { 'max-w-2xl text-center': isCentralized },
          { 'max-w-xl': !isCentralized}
        ]">
          <Overline :label="overline" />
          <h1 class="text-3xl">
            {{ title }}
          </h1>
          <p class="text-color-secondary text-sm"> {{ description }}</p>
          <div class="flex flex-row gap-3" :class="[
            { 'justify-center': isCentralized },
          ]">
          <div class="flex flex-col sm:flex-row gap-3 w-full"
          :class="{ 'justify-center': isCentralized }"
          >
            <slot name="actions" />
          </div>
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
  isCentralized: {
    type: Boolean,
    required: false,
    default: false
  }
})

</script>
