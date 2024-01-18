<template>
  <div class="m-w-[768px]">
    <ais-instant-search :search-client="searchClient" index-name="azion-site-en">
      <div>
        <ais-search-box
          autofocus
          show-loading-indicator
          placeholder="Search Keywords"
          class="mb-5" />

        <div class="px-6">
          <TabMenu
            class="block mb-2"
            :model="algoliaModel"
            :pt="{ label: 'whitespace-nowrap' }"
            v-model:activeIndex="activeIndex"
            @click="eventHandler(activeIndex)" />

          <div v-for="(indexData, index) in algoliaIndex" :key="index">
            <IndexHit
              :label="indexData.label"
              :indexName="indexData.name"
              v-if="activeIndex === 0 || activeIndex === indexData.activeIndex" />
          </div>
        </div>
      </div>
    </ais-instant-search>
  </div>
</template>

<script setup>
  import { ref } from 'vue';
  import algoliasearch from 'algoliasearch';
  import TabMenu from 'primevue/tabmenu';
  import IndexHit from './ais-index-hit.vue';

  const props = defineProps({
    isDialogActive: Boolean,
    algoliaAppId: String,
    algoliaApiKey: String,
    algoliaIndex: Array,
    algoliaModel: Array
  });

  const { algoliaAppId, algoliaApiKey, algoliaModel, algoliaIndex } = props;
  const searchClient = algoliasearch(algoliaAppId, algoliaApiKey);

  let activeIndex = ref(0);
  const eventHandler = (e) => {
    activeIndex.value = e;
  };
</script>

<style lang="scss" rel="stylesheet/scss">
  .azion-dark {
    input[type="search"] {
      background-color: #292929;
    }
  }

  .azion-light {
    input[type="search"] {
      background-color: #f4f4f4;
    }
  }

  .ais-SearchBox-form {
    width: 100%;

    input[type="search"] {
      width: 100%;
      padding: .725rem 1.5rem;
      border-top-right-radius: 4px;
      border-top-left-radius: 4px;
      border-bottom: solid 1px var(--surface-border);
      outline: none;
    }

    .ais-SearchBox-reset {
      position: absolute;
      right: 1.7rem;
      fill: white;
      top: 1.2rem;
    }

    .ais-SearchBox-submit {
      display: none;
    }
  }

  // pagination number
  .ais-Pagination-list {
    display: flex;
    gap: 1rem
  }
</style>
