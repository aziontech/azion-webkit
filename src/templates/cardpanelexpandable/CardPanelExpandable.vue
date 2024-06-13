<template>
  <div
    class="flex flex-col xl:flex-row justify-center gap-6 xl:gap-3 w-full max-w-3xl xl:max-w-full"
    :class="maxHeight"
  >
    <template
      v-for="(card, index) in cards"
      :key="index"
    >
      <CardBase
        :pt="{ prime: { body: 'h-full', content: 'h-full' }, content: 'h-full' }"
        :class="[
          `transition ease-in-out delay-150 overflow-hidden xl:min-w-44 cursor-pointer`,
          { 'w-movable': activeIndex !== index }
        ]"
        @mouseover="activeIndex = index" @click="activeIndex = index"
        :style="dynamicWidth"
        :backgroundColor="activeIndex === index ? 'outlined' : 'default'"
      >
        <template #content-raw>
          <div class="flex flex-col h-full">
            <div class="flex flex-col gap-8">
              <div
                class="flex flex-col gap-8 justify-between p-5 md:p-8"
                :class="activeIndex === index && 'grow'"
              >
                <div class="flex flex-col gap-8">
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
                  <template v-if="activeIndex === index && $slots.content">
                    <slot
                      name="content"
                      :data="card"
                    />
                  </template>
                </div>
                <div class="flex justify-between w-full">
                  <div
                    class="min-w-fit"
                    v-if="activeIndex === index"
                  >
                    <slot
                      name="actions"
                      :data="card"
                    />
                  </div>
                  <div class="flex justify-end w-full">
                    <Tile :severity="activeIndex === index ? 'primary' : 'default'">
                      <div class="hidden xl:block">
                        <i
                          class="pi self-end text-sm pi-arrow-right"
                          :class="activeIndex == index ? 'hidden' : 'block'"
                        />
                        <i
                          class="pi self-end text-sm pi-arrow-left"
                          :class="activeIndex == index ? 'block' : 'hidden'"
                        />
                      </div>
                      <div class="xl:hidden block">
                        <i
                          class="pi self-end text-sm pi-arrow-down"
                          :class="activeIndex == index ? 'hidden' : 'block'"
                        />
                        <i
                          class="pi self-end text-sm pi-arrow-up"
                          :class="activeIndex == index ? 'block' : 'hidden'"
                        />
                      </div>
                    </Tile>
                  </div>
                </div>
              </div>
              <template v-if="activeIndex === index">
                <slot
                  name="content-raw"
                  :data="card"
                />
              </template>
            </div>
            <div
              class="h-1/2 xl:h-full"
              v-if="activeIndex != index"
            >
              <slot
                name="disabledContent"
                :data="card"
              />
            </div>
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

  const isGrid = ref(false)
  const checkWindowWidth = () => {
    isGrid.value = window.innerWidth > 1280
  }

  onMounted(() => {
    checkWindowWidth()
    window.addEventListener('resize', checkWindowWidth)
  })
</script>

<style>
  @media (min-width: 1280px) {
    .w-movable {
      width: var(--dynamic-width, 80px) !important;
    }
  }
</style>
