<template>
  <div
    class="min-w-[360px] rounded p-10 md:p-20 md:gap-10 flex flex-col-reverse flex-col md:flex-row w-full"
    :class="[
      { 'border surface-border': border },
      { degrade: !disableDegrade }
    ]"
  >
    <div class="md:max-w-md w-full flex flex-col sm:justify-center gap-4 pt-10 md:pt-0">
      <p class="text-xl leading-normal">
        {{ text }}
      </p>
      <p
        v-if="author"
        class="text-sm text-color-secondary text-medium"
      >
        {{ author }}
      </p>
      <div
        class="mt-3"
        v-if="button && button.label"
      >
        <LinkButton
          v-bind="button"
          outlined
        />
      </div>
    </div>
    <div class="w-full h-full flex md:justify-center">
      <picture class="rounded overflow-hidden">
        <img
          :src="`${image}`"
          loading="lazy"
          class="max-h-[128px] rounded"
          width="128"
          height="128"
          :alt="author"
        />
      </picture>
    </div>
  </div>
</template>

<script setup>
  import LinkButton from '../linkbutton'

  defineProps({
    border: {
      type: Boolean,
      default: true
    },
    disableDegrade: {
      default: false,
      type: Boolean
    },
    text: {
      type: String,
      required: true
    },
    author: {
      type: String
    },
    image: {
      type: String,
      required: false
    },
    button: {
      type: Object
    }
  })
</script>

<style>
  .degrade {
    background: linear-gradient(
      255.8deg,
      rgba(var(--degrade-primary), 0.05) 10.09%,
      rgba(var(--degrade-primary), 0) 55.72%
    );
  }
</style>
