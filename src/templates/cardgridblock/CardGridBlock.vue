<template>
  <template v-if="isSearchEnabled">
    <TabMenuSearch
      :tabList="categories" :inputPlaceholder="inputPlaceholder"
      @indexChanged="handleFilterByCategoryEvent"
      :algoliaAppId="algoliaAppId" :algoliaApiKey="algoliaApiKey"
      :algoliaIndex="algoliaIndex" :algoliaModel="algoliaModel"
    />
  </template>
  <template v-else>
    <TabMenu :tabList="categories" @indexChanged="handleFilterByCategoryEvent" />
  </template>
  <template v-if="isLoadMoreEnabled">
    <CardGridListLoadMore :data="dataList" :buttonText="buttonText" :loadMoreNumber="loadMoreNumber" :pt="pt" :cardType="cardType"/>
  </template>
  <template v-else>
    <CardGridList :data="dataList" :cardType="cardType" :pt="pt"/>
  </template>
</template>

<script setup>
import CardGridListLoadMore from "@aziontech/webkit/cardgridlistwithloadmore";
import TabMenu from "@aziontech/webkit/tabmenu";
import CardGridList from "@aziontech/webkit/cardgridlist";
import TabMenuSearch from "@aziontech/webkit/tabmenuwithsearch";
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
  pt: {
    type: Object,
    required: false,
    default: () => { return { class: "md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4" }}
  },
  algoliaAppId: String,
  algoliaApiKey: String,
  algoliaIndex: Array,
  algoliaModel: Array,
  isSearchEnabled: {
    type: Boolean,
    required: false,
    default: false
  },
  isLoadMoreEnabled: {
    type: Boolean,
    required: false,
    default: false
  },
  cardType: {
    type: String,
    required: true
  }
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
