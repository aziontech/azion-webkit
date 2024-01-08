<template>
  <div class="m-w-[768px]">
    <ais-instant-search :search-client="searchClient" index-name="azion-site-en">
      <div class="max-w-[768px]">
        <ais-search-box
          placeholder="Search Keywords"
          :autofocus="true"
          :show-loading-indicator="true"
          class="mb-4"/>

        <TabMenu
          class="block mb-4"
          :pt="{ label: 'whitespace-nowrap' }"
          v-model:activeIndex="activeIndex"
          :model="algoliIndex"
          @click="eventHandler(activeIndex)" />

        <IndexHit
          indexName="azion-site-en"
          label="site"
          v-if="activeIndex === 0 || activeIndex === 1" />
        <IndexHit
          indexName="azion-blog-en"
          label="blog"
          v-if="activeIndex === 0 || activeIndex === 3" />
        <IndexHit
          indexName="azion-cases-en"
          label="cases"
          v-if="activeIndex === 0 || activeIndex === 4" />
      </div>
    </ais-instant-search>
  </div>
</template>

<script setup>
  import { ref } from 'vue';
  import algoliasearch from 'algoliasearch';
  import TabMenu from 'primevue/tabmenu';
  import IndexHit from './ais-index-hit.vue';

  const searchClient = algoliasearch(
    'PYJUZH6VNQ',
    '7c1795c333053265edd2aeb199745797'
  );

  let activeIndex = ref(0);
  const eventHandler = (e) => {
    activeIndex.value = e;
  };

  const algoliIndex = [
    { label: 'All' },
    { label: 'Site' },
    { label: 'Docs' },
    { label: 'Blog' },
    { label: 'Cases' }
  ];
</script>

<style lang="scss" rel="stylesheet/scss">
  /* form search  */

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
      padding: .5rem .5rem;
      border-radius: 4px;
      border:  solid 1px var(--surface-border);
      outline: none;
    }

    .ais-SearchBox-reset {
      display: none;
    }

    .ais-SearchBox-submit {
      display: none; // to remove btn
      // padding: .925rem;
      // border-top-right-radius: 4px;
      // border-bottom-right-radius: 4px;
      // border:  solid 1px var(--surface-border);
    }
  }

  // pagination number
  .ais-Pagination-list {
    display: flex;
    gap: 1rem
  }
</style>
