<template>
  <div
    class="max-w-5xl flex flex-wrap px-0"
    :class="{
      'm-auto': justify == 'center',
      'justify-start': justify == 'start'
    }"
  >
    <div
      :class="{
        'justify-center': justify == 'center',
        'justify-start': justify == 'start'
      }"
      class="flex-grow-0 flex py-4 lg:py-0 flex- shrink-0 basis-1/2 lg:basis-1/4"
      v-for="item in items"
      :key="item.title"
    >
      <div class="flex flex-col gap-3 md:gap-5 w-fit min-w-32 md:min-w-36 sm:min-w-none">
        <Tile
          v-if="item.icon"
          severity="primary"
          size="large"
        >
          <i
            :class="item.icon"
            class="text-base md:text-lg"
          ></i>
        </Tile>
        <div class="flex flex-col gap-2 justify-evenly w-fit">
          <p
            v-if="item.titleup"
            class="text-xs md:text-sm text-color-secondary"
          >
            {{ item.titleup }}
          </p>
          <strong class="md:text-7xl text-5xl font-semibold w-fit leading-tight text-nowrap">
            {{ item.title }}
          </strong>
          <p
            v-if="item.description"
            v-html="item.description"
            class="text-sm md:text-base text-color-secondary md:min-h-10 text-wrap w-full max-w-36 md:max-w-52"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  import Tile from '../tile'

  defineProps({
    items: {
      type: Array,
      required: true
    },
    justify: {
      type: String,
      required: false,
      default: 'center',
      options: ['center', 'start']
    }
  })
</script>
