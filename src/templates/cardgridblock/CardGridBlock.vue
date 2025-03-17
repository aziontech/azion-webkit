<template>
  <div class="flex flex-col gap-5 md:gap-10">
    <template v-if="isSearchEnabled">
      <TabMenuSearch
        :tabList="categories"
        :inputPlaceholder="inputPlaceholder"
        @indexChanged="handleFilterByCategoryEvent"
        :algoliaAppId="algoliaAppId"
        :algoliaApiKey="algoliaApiKey"
        :algoliaIndex="algoliaIndex"
        :algoliaModel="algoliaModel"
      />
    </template>
    <template v-else-if="isSearchAndLinkEnabled">
      <TabMenuSearchLink
        :tabList="categories"
        :inputPlaceholder="inputPlaceholder"
        :algoliaAppId="algoliaAppId"
        :algoliaApiKey="algoliaApiKey"
        :algoliaIndex="algoliaIndex"
        :algoliaModel="algoliaModel"
      />
    </template>
    <template v-else>
      <TabMenu
        :tabList="categories"
        @indexChanged="handleFilterByCategoryEvent"
      />
    </template>
    <template v-if="isLoadMoreEnabled">
      <CardGridListLoadMore
        :data="dataList"
        :buttonText="buttonText"
        :loadMoreNumber="loadMoreNumber"
        :pt="pt"
        :cardType="cardType"
      />
    </template>
    <template v-else>
      <CardGridList
        :data="dataList"
        :cardType="cardType"
        :pt="pt"
      />
    </template>
  </div>
</template>

<script setup>
  import CardGridList from '../cardgridlist/CardGridList.vue'
  import CardGridListLoadMore from '../cardgridlistwithloadmore/CardGridListWithLoadMore.vue'
  import TabMenu from '../tabmenu/TabMenu.vue'
  import TabMenuSearch from '../tabmenuwithsearch/TabMenuWithSearch.vue'
  import TabMenuSearchLink from '../tabmenuwithsearchlink/TabMenuWithSearchLink.vue'

  import { ref } from 'vue'

  const props = defineProps({
    data: {
      type: Array,
      required: true,
      default: () => {
        return []
      }
    },
    categories: {
      type: Array,
      required: true,
      default: () => {
        return []
      }
    },
    defaultTab: {
      type: String,
      required: true
    },
    inputPlaceholder: {
      type: String,
      required: false,
      default: 'Search articles...'
    },
    buttonText: {
      type: String,
      required: false,
      default: 'Show more'
    },
    loadMoreNumber: {
      type: Number,
      required: false,
      default: 12
    },
    pt: {
      type: Object,
      required: false,
      default: () => {
        return { class: 'md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4' }
      }
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
    isSearchAndLinkEnabled: {
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
      required: false,
      default: 'blog',
      options: ['blog', 'cases']
    }
  })

  const { data, defaultTab } = props

  const dataList = ref(data)

  function getDataByCategory(data, category) {
    return data.filter((item) => item.tagList.includes(category))
  }

  const handleFilterByCategoryEvent = (category) => {
    dataList.value = category === defaultTab ? data : getDataByCategory(data, category)
  }
</script>
