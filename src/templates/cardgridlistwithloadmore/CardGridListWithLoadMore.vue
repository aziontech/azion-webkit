<template>
  <CardGridList
    :data="cardDataList"
    :pt="pt.content"
    :cardType="cardType"
    :cardDirection="cardDirection"
  />
  <div>
    <p
      v-if="!cardDataList.length"
      class="text-color-secondary text-sm py-3"
    >
      {{ noDataText }}
    </p>
    <div
      class="text-center"
      v-else
    >
      <Button
        size="small"
        :label="buttonText"
        outlined
        @click="addCards(LOADMORE_MAGIC_NUMBER)"
        :disabled="disableButton"
      />
    </div>
  </div>
</template>

<script setup>
  import CardGridList from '../cardgridlist/CardGridList.vue'
  import Button from 'primevue/button'
  import { ref, watch } from 'vue'

  const props = defineProps({
    data: {
      type: Array,
      required: true,
      deafault: []
    },
    buttonText: {
      type: String,
      required: false,
      default: 'Load more'
    },
    loadMoreNumber: {
      type: Number,
      required: false,
      default: 12
    },
    pt: {
      type: Object,
      required: false,
      default: () => ({})
    },
    cardType: {
      type: String,
      required: true
    },
    cardDirection: {
      type: String,
      required: false,
      default: 'column',
      options: ['column', 'row']
    },
    noDataText: {
      type: String,
      required: false,
      default: 'No data'
    }
  })

  const { data, loadMoreNumber } = props
  const cardDataList = ref([])
  const disableButton = ref(false)
  const LOADMORE_MAGIC_NUMBER = loadMoreNumber

  watch(
    () => props.data,
    (newValue) => {
      eventHandler(newValue)
    }
  )

  const createCardsContext = (array) => {
    cardDataList.value = []
    const cardLimit = array.length
    let addedItemsCount = 0
    disableButton.value = false

    const addCards = (increaseCardNumberBy = loadMoreNumber) => {
      const endRange =
        addedItemsCount + increaseCardNumberBy > cardLimit
          ? cardLimit
          : addedItemsCount + increaseCardNumberBy
      const startRange = addedItemsCount

      for (let i = startRange; i <= endRange - 1; i++) {
        cardDataList.value.push(array[addedItemsCount])
        addedItemsCount++
      }

      if (addedItemsCount >= cardLimit) disableButton.value = true

      return
    }

    return addCards
  }

  let addCards = createCardsContext(data)
  addCards()

  const eventHandler = (array) => {
    addCards = createCardsContext(array)
    addCards()
  }
</script>
