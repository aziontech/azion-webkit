<template>
  <section class="flex gap-12 items-start px-12 relative w-full max-w-xxl mx-auto mb-40">
    <div
      v-if="title || bullets.length > 0"
      class="flex flex-col gap-5 sticky top-0 shrink-0"
      :class="[
        variant === 'titleBulletsImage' ? 'w-[335px] pb-0' : 'w-[509px] pb-0',
        bullets.length > 0 && variant === 'titleBulletsImage' ? 'h-auto' : 'h-[305px]'
      ]"
    >
      <h2
        v-if="title"
        class="display-2 font-normal tracking-tight text-gray-200 w-full"
      >
        {{ title }}
      </h2>

      <div
        v-if="bullets.length > 0 && variant === 'titleBulletsImage'"
        class="flex flex-col gap-3 w-full max-w-[392px] py-3 pr-3"
      >
        <template
          v-for="(bullet, index) in bullets"
          :key="index"
        >
          <p
            class="display-3 font-sora font-normal leading-[1.4] tracking-tight text-neutral-400"
            v-html="bullet"
          />
          <div
            v-if="index < bullets.length - 1"
            class="h-px w-full bg-neutral-700"
          />
        </template>
      </div>
    </div>

    <div
      class="flex flex-col gap-6 shrink-0 relative"
      :class="[
        fullWidthImage ? 'w-full' : 'flex-1 pl-12',
        bullets.length > 0 && variant === 'titleImage' ? 'gap-16' : 'gap-6'
      ]"
    >
      <div
        v-if="bullets.length > 0 && variant === 'titleImage'"
        class="flex flex-col gap-3 w-full"
      >
        <template
          v-for="(bullet, index) in bullets"
          :key="index"
        >
          <p
            class="display-3 font-sora font-normal leading-[1.4] tracking-tight text-neutral-400"
            v-html="bullet"
          />
          <div
            v-if="index < bullets.length - 1"
            class="h-px w-full bg-neutral-700"
          />
        </template>
      </div>

      <div
        class="border-2 border-neutral-900 relative w-full"
        :class="height === 'large' ? 'h-[726px]' : 'h-[378px]'"
      >
        <div class="overflow-hidden relative w-full h-full">
          <div class="absolute bottom-0 left-0 w-full flex justify-between h-1 z-10">
            <div class="w-1 h-1 bg-neutral-300" />
            <div class="w-1 h-1 bg-neutral-300" />
          </div>

          <div class="absolute inset-0 flex items-start justify-center overflow-hidden">
            <div class="flex-1 relative h-full min-h-0 min-w-0">
              <div class="absolute -left-0.5 -top-0.5 w-full overflow-hidden flex flex-col items-center">
                <div class="h-[2000px] w-full relative bg-black">
                  <div
                    v-for="i in 53"
                    :key="`h-${i}`"
                    class="absolute left-0 w-[1976px] h-0.5 bg-neutral-900"
                    :style="{ top: `${(i - 1) * 38}px` }"
                  />
                  <div
                    v-for="i in 53"
                    :key="`v-${i}`"
                    class="absolute top-0 w-0.5 h-[1976px] bg-neutral-900"
                    :style="{ left: `${(i - 1) * 38}px` }"
                  />
                </div>
              </div>

              <div v-if="image"
                class="absolute left-1/2 -translate-x-1/2 -top-1 border border-neutral-800 rounded-lg overflow-hidden"
                :class="height === 'large' ? 'h-[379px] w-[641px]' : 'h-[379px] w-[641px]'"
                :style="{
                  backgroundImage: 'linear-gradient(90deg, rgba(243, 101, 43, 0.16) 6.82%, rgba(241, 141, 85, 0.6) 47.72%, rgba(66, 74, 82, 1) 81.19%), linear-gradient(90deg, rgba(17, 17, 17, 1) 0%, rgba(17, 17, 17, 1) 100%)'
                }"
              >
                <img
                  :src="image"
                  :alt="alt"
                  class="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          <div class="absolute top-0 left-0 w-full flex justify-between h-1 z-10">
            <div class="w-1 h-1 bg-neutral-300" />
            <div class="w-1 h-1 bg-neutral-300" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
  import { computed } from 'vue'

  const props = defineProps({
    title: {
      type: String,
      default: ''
    },
    bullets: {
      type: Array,
      default: () => []
    },
    image: {
      type: String,
      required: true
    },
    alt: {
      type: String,
      default: ''
    },
    height: {
      type: String,
      default: 'default',
      validator: (value) => ['default', 'large'].includes(value)
    },
    variant: {
      type: String,
      default: 'titleBulletsImage',
      validator: (value) => ['titleBulletsImage', 'titleImage', 'imageOnly'].includes(value)
    }
  })
</script>
