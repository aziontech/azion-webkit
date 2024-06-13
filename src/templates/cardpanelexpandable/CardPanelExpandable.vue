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
          `transition-all duration-300 ease-out overflow-hidden xl:min-w-44`,
          { 'w-movable': activeIndex !== index }
        ]"
        @click="activeIndex = index"
        :style="dynamicWidth"
        :backgroundColor="activeIndex === index ? 'outlined' : 'default'"
        hover="outlined"
      >
        <template #content>
          <Tile> {{ index + 1 }} </Tile>
          <CardTitle> {{ card.title }} </CardTitle>
          <div
            class="h-full flex flex-col justify-between"
            :class="activeIndex === index ? 'visible' : 'hidden truncate'"
          >
            <div class="flex flex-col gap-2">
              <CardDescription class="overflow-hidden">
                {{ card.description }}
              </CardDescription>
              <div v-if="activeIndex === index && $slots.content">
                <slot
                  name="content"
                  :data="card"
                />

                <slot
                  name="actions"
                  :data="card"
                />
              </div>
            </div>
          </div>
        </template>
        <template #actions>
          <div class="flex justify-between w-full">
            <div>
              <div v-if="activeIndex === index"></div>
            </div>
            <Tile>
              <i
                class="pi self-end text-sm pi-arrow-right hidden xl:block"
                :class="activeIndex === index && 'text-orange-500'"
              />
              <i
                class="pi self-end text-sm xl:hidden"
                :class="activeIndex === index ? 'text-orange-500 pi-arrow-up' : 'pi-arrow-down'"
              />
            </Tile>
          </div>
        </template>
        <template
          #content-raw
          v-if="$slots['content-raw'] || $slots['disabledContent']"
        >
          duasihdusahduia
          <div v-if="activeIndex != index">
            daisdhauidhiashdiuas
            <slot
              name="disabledContent"
              :data="card"
            />
          </div>
          <div v-if="activeIndex === index">
            disahdisauhdusahduihas
            <slot
              name="content-raw"
              :data="card"
            />
          </div>
        </template>
      </CardBase>
    </template>
  </div>
</template>

<script setup>
  import { ref, computed, onMounted } from 'vue'
  import CardBase from '../cardbase/CardBase.vue'
  import Tile from '../tile/Tile.vue'
  import CardTitle from '../cardtitle/CardTitle.vue'
  import CardDescription from '../carddescription/CardDescription.vue'

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
