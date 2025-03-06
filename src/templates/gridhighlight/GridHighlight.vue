<template>
  <div class="grid grid-cards grid-flow-row-dense auto-cols-max gap-4">
    <template
      v-for="(item, index) in cards"
      :key="index"
    >
      <div
        v-if="isTwoCardsColumn(index)"
        class="flex flex-col gap-4"
      >
        <CardBaseClickable
          :link="item.link"
          disableAction
        >
          <template v-slot:content>
            <div>
              <img
                :src="item.image"
                alt="Image"
              />
            </div>
          </template>
        </CardBaseClickable>
        <CardBaseClickable
          :link="cards[index + 1].link"
          v-if="cards[index + 1]"
          disableAction
        >
          <template v-slot:content>
            <div>
              <img
                :src="cards[index + 1].image"
                alt="Image"
              />
            </div>
          </template>
        </CardBaseClickable>
      </div>
      <div
        v-if="isSingleCardColumn(index)"
        class="row-span-2"
      >
        <CardBaseClickable
          :link="item.link"
          disableAction
        >
          <template v-slot:header>
            <div>
              <img
                :src="item.image"
                alt="Image"
              />
            </div>
          </template>
          <template v-slot:content>
            <div>
              <p class="text-color-secondary">{{ item.description }}</p>
            </div>
          </template>
        </CardBaseClickable>
      </div>
    </template>
  </div>
</template>

<script setup>
  import CardBaseClickable from '../cardbaseclickable'

  const props = defineProps({
    cards: {
      type: Array,
      required: true
    }
  })

  const { cards } = props

  const isTwoCardsColumn = (index) => index % 3 === 0
  const isSingleCardColumn = (index) => index % 3 === 2
</script>

<style scoped>
  .grid {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }
</style>
