<template>
  <TabMenuSearch
    :tabList="categories" :inputPlaceholder="inputPlaceholder"
    @indexChanged="handleFilterByCategoryEvent"
    :algoliaAppId="algoliaAppId" :algoliaApiKey="algoliaApiKey"
    :algoliaIndex="algoliaIndex" :algoliaModel="algoliaModel" />
  <CardGridList :data="dataList" :buttonText="buttonText" :loadMoreNumber="loadMoreNumber" />
</template>

<script setup>
import CardGridList from "../card-grid-list/withLoadMore.vue"
import TabMenuSearch from "../tab-menu/with-search.vue"
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
  },
  inputPlaceholder: {
    type: String,
    required: false,
    default: "Search articles..."
  },
  buttonText: {
    type: String,
    required: false,
    default: "Show more"
  },
  loadMoreNumber: {
    type: Number,
    required: false,
    default: 12
  },
  algoliaAppId: String,
  algoliaApiKey: String,
  algoliaIndex: Array,
  algoliaModel: Array
});

const { data, defaultTab } = props;

const dataList = ref(data)

function getDataByCategory(data, category) {
  return data.filter(item => item.tagList.includes(category))
}

const handleFilterByCategoryEvent = (category) => {
  dataList.value = category === defaultTab ? data : getDataByCategory(data, category)
}
</script>
