<template>
  <ul
    :class="[
      { 'flex flex-col gap-6': direction === 'vertical' },
      { 'grid m-0 md:grid-cols-3 gap-10 md:gap-20': direction === 'horizontal' }
    ]"
  >
    <template
      v-for="({ icon, title, description }, index) in data"
      v-bind:key="index"
    >
      <li class="flex gap-4">
        <div v-if="!icon" class="flex relative">
          <div class="h-full bg-[--surface-300] w-1 rounded" />
          <div class="h-4 mt-2 bg-[--text-color] w-1 blur-sm	left-0 absolute" />
          <div class="h-4 mt-2 bg-[--text-color] w-2 -left-0.5 absolute" />
        </div>
        <div  class="flex flex-col gap-4 justify-center">
          <template v-if="title || icon">
            <div
              class="flex"
              :class="[
                { 'flex-col gap-3': direction === 'horizontal' },
                { 'flex-row gap-2': direction === 'vertical' }
              ]"
            >
              <template v-if="icon">
                <Tile v-bind="{ severity }">
                  <i
                    class="text-xs"
                    :class="icon"
                  />
                </Tile>
              </template>
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
                <li v-key="index" class="flex flex-row gap-2">
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
      required: false,
      default: 'vertical',
      options: ['vertical', 'horizontal']
    },
    severity: {
      type: String,
      required: false,
      default: 'default',
      options: ['default', 'primary']
    }
  })
</script>
