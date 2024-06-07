<template>
  <ul :class="[
    {'flex flex-col gap-6' : direction === 'vertical'},
    {'grid grid-cols-3 gap-20' : direction === 'horizontal'}
  ]">
    <template v-for="({ icon, title, description }, index) in data" v-bind:key="index">
      <li class="flex flex-col gap-4 justify-center">
        <template v-if="title || icon">
          <div class="flex" :class="[
            {'flex-col gap-3' : direction === 'horizontal'},
            {'flex-row gap-2' : direction === 'vertical'}
          ]">
            <template v-if="icon">
              <Tile v-bind="{ severity }">
                <i class="text-xs" :class="icon"/>
              </Tile>
            </template>
            <template v-if="title">
              <p class="font-medium text-base"> {{ title }} </p>
            </template>
          </div>
        </template>
        <template v-if="Array.isArray(description) && description.length > 0">
          <ul class="flex flex-col gap-3">
            <template v-for="({ label, icon }, index) in description" :key="index">
              <li class="flex flex-row gap-2">
                <Tile v-bind="{ severity }" v-if="icon">
                  <i class="text-xs" :class="icon"/>
                </Tile>
                <p class="text-color-secondary text-sm"> {{ label }} </p>
              </li>
            </template>
          </ul>
        </template>
        <template v-else>
          <p class="text-color-secondary text-sm"> {{ description }} </p>
        </template>
      </li>
    </template>
  </ul>
</template>

<script setup>
import Tile from "../tile"

defineProps({
  data: {
    type: Array,
    required: true,
    default: () => []
  },
  direction: {
    type: String,
    required: false,
    default: 'vertical'
  },
  severity: {
    type: String,
    required: false,
    default: 'default',
    options: ['default', 'primary']
  }
})
</script>
