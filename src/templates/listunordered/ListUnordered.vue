<template>
  <ul
    :class="[
      { 'flex flex-col gap-4': direction === 'vertical' && gap === 'small' },
      { 'flex flex-col gap-8': direction === 'vertical' && gap === 'default' },
      { 'grid m-0 md:grid-cols-3 gap-10 md:gap-20': direction === 'horizontal' }
    ]"
  >
    <template
      v-for="({ icon, title, description }, index) in data"
      :key="index"
    >
      <li
        class="flex"
        :class="[icon ? 'gap-3' : 'gap-4 lg:gap-8', { 'flex-col': direction == 'horizontal' }]"
      >
        <template v-if="icon">
          <div>
            <Tile
              class="mt-0.5 min-w-6"
              v-bind="{ severity }"
            >
              <i
                class="text-xs"
                :class="icon"
              />
            </Tile>
          </div>
        </template>
        <div
          v-if="!icon && direction !== 'horizontal'"
          class="flex relative"
        >
          <div class="h-full bg-[--surface-300] w-[2px]" />
          <div class="h-4 mt-2 bg-white w-[2px] blur-sm left-0 absolute" />
          <div class="h-4 mt-2 bg-[--text-color] w-[3px] -left-[0.5px] absolute" />
        </div>
        <div
          class="flex flex-col justify-center"
          :class="title ? 'mt-0.5 gap-3' : 'mt-0 gap-0'"
        >
          <template v-if="title || icon">
            <div
              class="flex"
              :class="[
                { 'flex-col gap-3': direction === 'horizontal' },
                { 'flex-row gap-2': direction === 'vertical' }
              ]"
            >
              <template v-if="title">
                <p class="font-medium text-lg leading-7">{{ title }}</p>
              </template>
            </div>
          </template>
          <template v-if="Array.isArray(description) && description.length > 0">
            <ul class="flex flex-col gap-3">
              <template
                v-for="({ label }, index) in description"
                :key="index"
              >
                <li class="flex flex-row gap-2">
                  <p class="text-color-secondary text-sm">{{ label }}</p>
                </li>
              </template>
            </ul>
          </template>
          <template v-else-if="description">
            <p class="text-color-secondary text-sm">{{ description }}</p>
          </template>
        </div>
      </li>
    </template>
  </ul>
</template>

<script setup>
  import Tile from '../tile'

  defineProps({
    data: {
      type: Array,
      required: true,
      default: () => []
    },
    direction: {
      type: String,
      default: () => 'vertical',
      options: ['vertical', 'horizontal']
    },
    severity: {
      type: String,
      default: () => 'default',
      options: ['default', 'primary', 'secondary', 'warning', 'success', 'info']
    },
    gap: {
      type: String,
      default: () => 'default',
      options: ['small', 'default']
    }
  })
</script>
