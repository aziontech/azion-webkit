<template>
  <div class="mb-[28px]">
    <ais-index :index-name="props.indexName">
      <div class="lg:flex items-center justify-between">
        <h2 class="text-2xl font-medium capitalize">
          {{ props.label }}
        </h2>
        <ais-stats class="flex justify-end">
          <template v-slot="{ hitsPerPage, nbPages, nbHits, page, processingTimeMS, query }">
            <div v-if="nbPages" class="flex items-center gap-3">
              <ais-hits-per-page class="hidden" :items="[
                { label: '4 per page', value: 4, default: true },
                { label: '12 per page', value: 12 },
                { label: '24 per page', value: 24 }
              ]" />

              <div class="flex flex-row gap-3 items-center">
                <p class="text-xs text-color-secondary">{{ nbHits }} results</p>
                <ais-pagination/>
                <p class="text-xs text-color-secondary">{{ page + 1 }} - {{ nbPages  }}</p>
              </div>
            </div>
          </template>
        </ais-stats>
      </div>

      <ais-stats>
        <template v-slot="{ hitsPerPage, nbPages, nbHits, page, processingTimeMS, query }">
          <p v-show="nbPages === 0" class="py-4 text-color-secondary text-sm">
            No results found for the term <strong class="text-color font-normal">"{{ query }}"</strong>.
          </p>

          <ais-hits>
            <template v-slot:item="{ item }">
              <CardBaseClickable hover="outlined" :href="item.url" :title="item.title" class="ais-Hits-item-card w-full" spacing="compact">
                <template #content>
                  <div class="flex flex-col gap-3">
                    <h2 class="text-base font-normal">
                      {{ item.title }}
                    </h2>

                    <ul class="flex items-center flex-wrap text-xs">
                      <li class="text-color-secondary mr-0.5">
                        <small class="flex gap-0.5 capitalize items-center">
                          {{ props.label }} <i class="pi pi-angle-right text-[8px]"></i>
                        </small>
                      </li>
                      <li class="text-color-secondary">
                        <small class="flex gap-2">
                          {{ item.title }}
                        </small>
                      </li>
                    </ul>
                  </div>

                  <p class="text-sm text-color-secondary leading-relaxed">
                    <!--
                      item.text used to site/blog/cases
                      item.description used to documentation
                    -->
                    {{
                      item.text && item.text.length > 160 ? `${item.text.slice(0, 160)}...` : item.text ? item.text :
                        item.description && item.description.length > 220  ? `${item.description.slice(0, 220)}...` : item.description ? item.description : ''
                    }}
                  </p>

                </template>
              </CardBaseClickable>
            </template>
          </ais-hits>
        </template>
      </ais-stats>
    </ais-index>
  </div>
</template>

<script setup>
  import CardBaseClickable from '../cardbaseclickable';

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
  padding: .725rem;
  border-radius: 4px;
  font-size: 14px;

  &:hover {
    cursor: pointer;
  }
}

.ais-Pagination-list {
  gap: 0 !important;

  .ais-Pagination-item--page {
    display: none !important;
  }

  .ais-Pagination-item--previousPage {
    .ais-Pagination-link {
      border-top-left-radius: 4px;
      border-bottom-left-radius: 4px;
    }
  }
  .ais-Pagination-item--nextPage {
    .ais-Pagination-link {
      border-top-right-radius: 4px;
      border-bottom-right-radius: 4px;
    }
  }
  .ais-Pagination-item {
    .ais-Pagination-link {
      border: solid 1px var(--surface-border);
      margin-left: -1px;
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
    display: none;
    .ais-Pagination-link {
      border-top-left-radius: 4px;
      border-bottom-left-radius: 4px;
    }
  }

  .ais-Pagination-item--lastPage {
    display: none;
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

.ais-Stats-text {
  display: none;
}
</style>
