<template>
  <section class="py-16">
    <div class="px-container flex flex-col w-full gap-10" :class="[
      { 'lg:flex-row': !isCentralized },
      { 'items-center': isCentralized },
    ]">
      <div class=" w-full flex flex-col gap-10 z-10" :class="[
        { 'lg:max-w-xl': !isCentralized },
        { 'items-center': isCentralized },
        { 'justify-center': justify === 'center' }
      ]">
        <div class="flex flex-col gap-4" :class="[
          { 'max-w-3xl text-center gap-8': isCentralized },
          { 'max-w-2xl': !isCentralized}
        ]">
          <Overline v-if="overline && overline.length" :label="overline" />
          <h1 class="text-4xl font-medium">
            {{ title }}
          </h1>
          <p v-if="description" class="text-color-secondary text-base leading-relaxed text-balance">
            {{ description }}
          </p>
        </div>
        <div
          v-if="$slots.actions"
          class="flex flex-col sm:flex-row gap-3 w-full"
          :class="{ 'justify-center': isCentralized }"
        >
          <slot name="actions" />
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
      required: false
    },
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    justify: {
      type: String,
      required: false
    },
    isCentralized: {
      type: Boolean,
      required: false,
      default: false
    }
  });
</script>
