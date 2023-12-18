<template>
  <div class="m-w-[768px]">
    <ais-instant-search :search-client="searchClient" index-name="azion-site-en">
      <div class="max-w-[768px]">
        <ais-search-box class="mb-4"/>

        <TabMenu
          class="block mb-4"
          :pt="{ label: 'whitespace-nowrap' }"
          v-model:activeIndex="activeIndex"
          :model="algoliIndex"
          @click="eventHandler(activeIndex)" />

        <IndexHit indexName="azion-site-en" label="site" />
        <IndexHit indexName="azion-blog-en" label="blog" />
        <IndexHit indexName="azion-cases-en" label="cases" />
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
    console.log('eventHandler', e);

    // if (typeof e === 'number') {
    //   activeOption.value = mappedData[activeIndex.value]
    // } else {
    //   activeIndex.value = e.value.activeIndex
    // }


    // emit('indexChanged', tabList[activeIndex.value])
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
      width: calc(100% - 3rem);
      padding: .5rem .5rem;
      border-top-left-radius: 4px;
      border-bottom-left-radius: 4px;
      border:  solid 1px var(--surface-border);
      border-right: none;
    }

    .ais-SearchBox-reset {
      display: none;
    }

    .ais-SearchBox-submit {
      padding: .925rem;
      border-top-right-radius: 4px;
      border-bottom-right-radius: 4px;
      border:  solid 1px var(--surface-border);
    }
  }


  // pagination number
  .ais-Pagination-list {
    display: flex;
    gap: 1rem
  }
</style>
