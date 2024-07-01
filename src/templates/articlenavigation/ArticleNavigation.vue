<template>
  <div class="flex flex-col lg:flex-row gap-5 md:gap-10 items-stretch">
    <div
      :class="Object.keys(cards).length > 1 && 'basis-1/2'"
      v-for="item in Object.keys(cards)"
      :key="item"
    >
      <CardBaseClickable
        v-if="cards[item]"
        grid
        :rel="item"
        spacing="compact"
        hover="outlined"
        v-bind="cards[item]"
        class="w-full"
        :class="item === 'next' ? 'text-right items-end' : 'text-left'"
      >
        <template #content>
          <div
            class="flex gap-4 md:gap-8"
            :class="item === 'next' && 'justify-end w-full'"
          >
            <div
              v-if="item === 'prev'"
              class="min-w-fit"
            >
              <Tile>
                <i class="text-xs pi pi-arrow-left" />
              </Tile>
            </div>
            <div class="flex flex-col gap-3">
              <Overline :label="overline[item]" />
              <CardTitle>
                {{ cards[item].text }}
              </CardTitle>
            </div>
            <div
              v-if="item === 'next'"
              class="min-w-fit"
            >
              <Tile>
                <i class="text-xs pi pi-arrow-right"></i>
              </Tile>
            </div>
          </div>
        </template>
      </CardBaseClickable>
    </div>
  </div>
</template>

<script setup>
  import CardBaseClickable from '../cardbaseclickable'
  import Overline from '../overline'
  import CardTitle from '../cardtitle'
  import Tile from '../tile'

  defineProps({
    cards: {
      type: Object,
      required: true
    },
    overline: {
      type: Object,
      required: false,
      default: () => ({
        prev: 'Previous article',
        next: 'Next article'
      })
    }
  })
</script>
