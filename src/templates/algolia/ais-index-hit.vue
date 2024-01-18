<template>
  <div class="mb-6">
    <ais-index :index-name="props.indexName">
      <div class="flex items-center justify-between">
        <h2 class="text-xl">
          {{ props.label.toUpperCase() }}
        </h2>

        <div>
          <ais-stats>
            <template v-slot="{ hitsPerPage, nbPages, nbHits, page, processingTimeMS, query }">
              <div class="flex items-center justify-end text-right mt-4 mb-2">
                <a href="/" title="View {{ props.label }}">
                  <small>
                    view {{ props.label }}
                  </small>
                </a>
                <ais-pagination class="flex justify-end mx-3"/>
                <p>
                  <small>
                    {{ page + 1 }} - {{ nbPages  }}
                  </small>
                </p>
              </div>

              <div class="flex items-center justify-end gap-3 mb-2">
                <small>
                  <strong>{{ nbHits }} hits</strong> retrieved in <strong>{{ processingTimeMS }}ms</strong> <span v-show="query">for <strong>"{{ query }}"</strong></span>
                </small>
                <ais-hits-per-page :items="[
                  { label: '4 hits per page', value: 4, default: true },
                  { label: '8 hits per page', value: 8 },
                  { label: '16 hits per page', value: 16 },
                  { label: '32 hits per page', value: 32 }
                ]" />
              </div>
            </template>
          </ais-stats>
        </div>
      </div>

      <ais-stats>
        <template v-slot="{ hitsPerPage, nbPages, nbHits, page, processingTimeMS, query }">
          <p v-show="nbPages === 0">
            No results found for the term <strong>"{{ query }}"</strong>.
          </p>

          <ais-hits>
            <template v-slot:item="{ item }">
              <div  class="ais-Hits-item-card border surface-border rounded p-4 w-full">
                <a :href="`https://www.azion.com${item.url}`" :title="item.title">
                  <h2 class="text-base">{{ item.title }}</h2>
                  <ul class="flex flex-wrap mt-3 mb-3">
                    <li class="text-color-secondary mr-3">
                      <small class="flex gap-2">
                        Home <span>></span>
                      </small>
                    </li>
                    <li class="text-color-secondary mr-3">
                      <small class="flex gap-2">
                        {{ props.label }} <span>></span>
                      </small>
                    </li>
                    <li class="text-color-secondary mr-3">
                      <small class="flex gap-2">
                        {{ item.title }}
                      </small>
                    </li>
                  </ul>
                  <p class="text-sm text-color-secondary">
                    <!--
                      item.text used to site/blog/cases
                      item.description used to documentation
                    -->
                    {{
                      item.text ? item.text.split('.')[0] :
                        item.description ? item.description.split('.')[0] : ''
                    }} ...
                  </p>
                </a>
              </div>
            </template>
          </ais-hits>

        </template>
      </ais-stats>
    </ais-index>
  </div>
</template>

<script setup>
  const props = defineProps({
    indexName: {
      require: true,
      type: String
    },
    label: {
      require: false,
      type: String
    }
  });
</script>

<style lang="scss" rel="stylesheet/scss">
.ais-Pagination-list {
  display: flex;
  gap: 1rem;
}

.ais-HitsPerPage-select {
  padding: .438rem .5rem;
  border-radius: 4px;
  font-size: 12px;

  &:hover {
    cursor: pointer;
  }
}

.ais-Pagination-list {
  gap: 0 !important;

  .ais-Pagination-item--page {
    display: none !important;
  }

  .ais-Pagination-item {
    .ais-Pagination-link {
      border: solid 1px var(--surface-border);
      width: 2rem;
      height: 2rem;
      display: flex;
      align-items: center;
      justify-content: center;

      &:hover {
        cursor: pointer;
      }
    }
  }

  .ais-Pagination-item--firstPage {
    .ais-Pagination-link {
      border-top-left-radius: 4px;
      border-bottom-left-radius: 4px;
    }
  }

  .ais-Pagination-item--lastPage {
    .ais-Pagination-link {
      border-top-right-radius: 4px;
      border-bottom-right-radius: 4px;
    }
  }
}

.ais-Hits {
  margin-top: 1rem;

  .ais-Hits-list {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1rem;

    @media (min-width: 768px) {
      grid-template-columns: 1fr 1fr;
    }

    .ais-Hits-item {
      display: flex;
    }
  }
}
</style>
