<template>
  <section class="pt-16">
    <div class="px-container flex flex-col w-full gap-10" :class="[
      { 'lg:flex-row': !isCentralized },
      { 'items-center': isCentralized },
      { 'flex-col-reverse': isReverse }
    ]">
      <div class="w-full flex flex-col gap-10" :class="[
        { 'lg:max-w-xl': !isCentralized },
        { 'items-center': isCentralized },
        { 'justify-center': justify === 'center' }
      ]">
        <div class="flex flex-col gap-5" :class="[
          { 'max-w-3xl text-center': isCentralized },
          { 'max-w-2xl': !isCentralized}
        ]">
          <Overline v-if="overline && overline.length" :label="overline" />
          <h1 v-if="titleTag === 'h1'" class="text-4xl font-medium">{{ title }}</h1>
          <h2 v-if="titleTag === 'h2'" class="text-4xl font-medium">{{ title }}</h2>
          <h3 v-if="titleTag === 'h3'" class="text-4xl font-medium">{{ title }}</h3>
          <h4 v-if="titleTag === 'h4'" class="text-4xl font-medium">{{ title }}</h4>
          <h5 v-if="titleTag === 'h5'" class="text-4xl font-medium">{{ title }}</h5>
          <h6 v-if="titleTag === 'h6'" class="text-4xl font-medium">{{ title }}</h6>

          <p
            v-if="description"
            class="text-color-secondary text-base leading-relaxed text-balance">

            {{ description }}
          </p>
        </div>
        <div
          v-if="$slots.actions"
          class="flex flex-col sm:flex-row gap-3 w-full"
          :class="{ 'justify-center': isCentralized }">
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
  import Overline from "../../fragments/text/overline.vue"

  defineProps({
    overline: {
      type: String,
      required: false
    },
    isReverse: {
      type: Boolean,
      required: false,
      default: false
    },
    title: {
      type: String,
      required: true
    },
    titleTag: {
      type: String,
      required: false,
      default: 'h1'
    },
    description: {
      type: String,
      required: false
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
