<template>
  <div class="min-h-screen p-6">
    <template class="hidden lg:block">
      <div class="grid gap-4 m-0 grid-cols-[repeat(auto-fit,_minmax(220px,_1fr))] grid-rows-2">
        <template
          v-for="(item, index) in cards"
          :key="index"
        >
          <div
            v-if="isTwoCardsColumn(index)"
            class="flex flex-col gap-4 row-span-2"
          >
            <CardBaseClickable
              :link="item.link"
              disableAction
            >
              <template v-slot:content>
                <div class="flex justify-center">
                  <div
                    class="w-[7rem]"
                    v-if="isSvgContent(item.image)"
                    v-html="item.image"
                  ></div>
                  <img
                    v-else
                    :src="item.image"
                    :alt="item.alt"
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
                  <div
                    class="w-[7rem]"
                    v-if="isSvgContent(item.image)"
                    v-html="item.image"
                  ></div>
                  <img
                    v-else
                    :src="item.image"
                    :alt="item.alt"
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
              <template v-slot:content>
                <div class="mb-6">
                  <div
                    class="w-[7rem]"
                    v-if="isSvgContent(item.image)"
                    v-html="item.image"
                  ></div>
                  <img
                    v-else
                    :src="item.image"
                    :alt="item.alt"
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
    </template>

    <!-- Mobile Grid -->
    <template class="block lg:hidden">
      <div class="grid gap-4 m-0 grid-cols-2">
        <template
          v-for="(item, index) in cards"
          :key="index"
        >
          <div
            v-if="isLargeMobileCard(index)"
            class="col-span-2 w-full"
          >
            <CardBaseClickable
              :link="item.link"
              disableAction
            >
              <template v-slot:content>
                <div class="mb-6">
                  <div
                    class="w-[7rem]"
                    v-if="isSvgContent(item.image)"
                    v-html="item.image"
                  ></div>
                  <img
                    v-else
                    :src="item.image"
                    :alt="item.alt"
                    class="w-[7rem]"
                  />
                </div>
                <div>
                  <p class="text-color-secondary text-sm">
                    {{ item.description }}
                  </p>
                </div>
              </template>
            </CardBaseClickable>
          </div>

          <div
            v-else
            class="w-full"
          >
            <CardBaseClickable
              :link="item.link"
              disableAction
            >
              <template v-slot:content>
                <div class="flex justify-center">
                  <div
                    class="w-[7rem]"
                    v-if="isSvgContent(item.image)"
                    v-html="item.image"
                  ></div>
                  <img
                    v-else
                    :src="item.image"
                    :alt="item.alt"
                    class="w-[7rem]"
                  />
                </div>
              </template>
            </CardBaseClickable>
          </div>
        </template>
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

  const isSvgContent = (image) => image.trim().startsWith('<svg')

  const isTwoCardsColumn = (index) => index % 3 === 0
  const isSingleCardColumn = (index) => index % 3 === 2
  const isLargeMobileCard = (index) => (index + 1) % 3 === 0
</script>
