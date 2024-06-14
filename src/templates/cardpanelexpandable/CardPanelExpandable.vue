<template>
  <div
    class="flex flex-col xl:flex-row justify-center gap-6 xl:gap-3 w-full max-w-3xl xl:max-w-full"
    :class="maxHeight"
    id="cardExpandable"
  >
    <template
      v-for="(card, index) in cards"
      :key="index"
    >
      <CardBase
        :pt="{ prime: { body: 'h-full', content: 'h-full' }, content: 'h-full' }"
        :class="[
          `transition-all duration-[400ms] ease-in-out overflow-hidden xl:min-w-44 cursor-pointer`,
          { 'w-movable': activeIndex !== index }
        ]"
        @mouseover="activeIndex = index"
        @click="activeIndex = index"
        :style="dynamicWidth"
        :backgroundColor="activeIndex === index ? 'outlined' : 'default'"
      >
        <template #content-raw>
          <div class="flex flex-col h-full">
            <div class="flex flex-col gap-8 grow">
              <div
                class="flex flex-col gap-4 md:gap-8 justify-between p-4 md:p-8"
                :class="activeIndex === index && 'grow'"
              >
                <div class="flex flex-col gap-8">
                  <div class="flex justify-between gap-4">
                    <div class="flex flex-col gap-4">
                      <Tile> {{ index + 1 }} </Tile>
                      <CardTitle> {{ card.title }} </CardTitle>
                      <CardDescription
                        :class="activeIndex === index ? 'visible' : 'hidden truncate'"
                        class="overflow-hidden"
                      >
                        {{ card.description }}
                      </CardDescription>
                    </div>
                    <div class="flex items-end xl:hidden">
                      <div v-show="activeIndex != index">
                        <Tile>
                          <i class="pi self-end text-sm pi-arrow-down" />
                        </Tile>
                      </div>
                    </div>
                  </div>
                  <div
                    v-if="$slots.content"
                    v-show="activeIndex === index"
                  >
                    <div class="flex grow justify-center">
                      <slot
                        name="content"
                        :data="card"
                      />
                    </div>
                  </div>
                </div>
                <div class="flex justify-between w-full">
                  <div
                    class="min-w-fit"
                    v-show="activeIndex === index"
                  >
                    <slot
                      name="actions"
                      :data="card"
                    />
                  </div>
                  <div class="flex justify-end items-center w-full">
                    <div class="hidden xl:block">
                      <div v-show="activeIndex != index">
                        <Tile severity="default">
                          <i class="pi self-end text-sm pi-arrow-right" />
                        </Tile>
                      </div>
                      <div v-show="activeIndex == index">
                        <Tile severity="primary">
                          <i class="pi self-end text-sm pi-arrow-left" />
                        </Tile>
                      </div>
                    </div>
                    <div
                      class="xl:hidden"
                      v-show="activeIndex == index"
                    >
                      <Tile severity="primary">
                        <i class="pi self-end text-sm pi-arrow-up" />
                      </Tile>
                    </div>
                  </div>
                </div>
              </div>
              <template v-if="$slots['content-raw']">
                <div v-show="activeIndex === index">
                  <slot
                    name="content-raw"
                    :data="card"
                  />
                </div>
              </template>
            </div>
            <template v-if="$slots['disabledContent']">
              <div
                class="h-full"
                v-show="activeIndex != index"
              >
                <slot
                  name="disabledContent"
                  :data="card"
                />
              </div>
            </template>
          </div>
        </template>
      </CardBase>
    </template>
  </div>
</template>

<script setup>
  import { ref, computed, onMounted } from 'vue'
  import CardBase from '../cardbase'
  import Tile from '../tile'
  import CardTitle from '../cardtitle'
  import CardDescription from '../carddescription'

  const props = defineProps({
    activeIndex: {
      type: Number,
      required: false,
      default: 0
    },
    cards: {
      type: Array,
      required: true
    },
    maxHeight: {
      type: String,
      required: false
    }
  })

  const activeIndex = ref(props.activeIndex)
  const widthValue = ref(`calc(100% / ${props.cards.length + 1} )`)
  const dynamicWidth = computed(() => ({
    '--dynamic-width': widthValue.value
  }))
</script>

<style>
  @media (min-width: 1280px) {
    #cardExpandable .w-movable {
      width: var(--dynamic-width, 80px) !important;
    }
  }
</style>
