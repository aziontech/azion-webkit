<template>
  <TabMenuSearch :tabList="categories" @categorieChanged="handleFilterByCategoryEvent" />
  <CardGridList :data="cardDataList" />
  <div class="flex justify-center">
    <Button label="load more" outlined @click="addCards(LOADMORE_MAGIC_NUMBER)" :disabled="disableButton" />
  </div>
</template>

<script setup>
import CardGridList from "./index.vue"
import TabMenuSearch from "../tab-menu/with-search.vue"
import Button from "primevue/button"
import { ref } from "vue";

const props = defineProps({
  data: {
    type: Array,
    required: true,
    deafault: []
  },
  categories: {
    type: Array,
    required: true,
    deafault: []
  },
  defaultTab: {
    type: String,
    required: true
  }
});

const { data, defaultTab } = props;
const cardDataList = ref([])
const disableButton = ref(false)
const LOADMORE_MAGIC_NUMBER = 3

const createCardsContext = (array) => {
  cardDataList.value = []
  const cardLimit = array.length
  let addedItemsCount = 0
  disableButton.value = false

  const addCards = (increaseCardNumberBy = 12) => {
    const endRange = addedItemsCount + increaseCardNumberBy > cardLimit ? cardLimit : addedItemsCount + increaseCardNumberBy;
    const startRange = addedItemsCount;

    for (let i = startRange; i <= endRange - 1; i++) {
      cardDataList.value.push(array[addedItemsCount]);
      addedItemsCount++
    }

    if (addedItemsCount >= cardLimit) disableButton.value = true

    return
  }

  return addCards
}

function getDataByCategory(data, categories) {
  return data.filter(item => item.tagList.includes(categories))
}

let addCards = createCardsContext(data)
addCards()

const handleFilterByCategoryEvent = (category) => {
  let categoryData

  if (category === defaultTab) {
    categoryData = data
  } else {
    categoryData = getDataByCategory(data, category)
  }

  addCards = createCardsContext(categoryData)

  addCards()
}
</script>
