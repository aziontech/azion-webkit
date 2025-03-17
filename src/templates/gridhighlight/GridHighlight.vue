<template>
  <div class="min-h-screen p-6">
    <div class="grid gap-4 m-0 grid-cols-[repeat(auto-fill,_220px_278px)] grid-rows-2">
      <template
        v-for="(item, index) in cards"
        :key="index"
      >
        <div
          v-if="isTwoCardsColumn(index)"
          class="flex flex-col gap-4 w-100%"
        >
          <CardBaseClickable
            :link="item.link"
            disableAction
          >
            <template v-slot:content>
              <div class="flex justify-center">
                <img
                  :src="item.image"
                  alt="Image"
                  class="w-[7rem]"
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
              <div class="flex justify-center">
                <img
                  :src="item.image"
                  alt="Image"
                  class="w-[7rem]"
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
            class=""
          >
            <!-- <template v-slot:header>
              <div>
                <img
                  :src="item.image"
                  alt="Image"
                  class="w-[7rem]"
                />
              </div>
            </template> -->
            <template v-slot:content>
              <div class="mb-6">
                <img
                  :src="item.image"
                  alt="Image"
                  class="w-[7rem]"
                />
              </div>
              <div>
                <p class="text-color-secondary text-sm">{{ item.description }}</p>
              </div>
            </template>
          </CardBaseClickable>
        </div>
      </template>
    </div>
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
