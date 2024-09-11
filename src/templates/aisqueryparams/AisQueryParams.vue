<template>
  <div class="m-w-[768px]">
    <ais-instant-search :search-client="searchClient" :search-function="searchFunction" index-name="azion-site-en">
      <ais-stats>
        <template v-slot="{ query }">
          <div ss="px-6">
            <div v-for="indexData in algoliaIndex" :key="index">
              <div class="mb-[28px]">
                <ais-index :index-name="indexData.name">
                  <div class="lg:flex items-center justify-between">
                    <h2 class="text-2xl font-medium capitalize">
                      {{ indexData.label }}
                    </h2>
                  </div>

                  <ais-stats>
                    <template v-slot="{ nbPages, query }">
                      <p v-show="nbPages === 0" class="py-4 text-color-secondary text-sm">
                        No results found for the term
                        <strong class="text-color font-normal">"{{ query }}"</strong>.
                      </p>

                      <ais-hits>
                        <template v-slot:item="{ item }">
                          <CardBaseClickable hover="outlined" :href="item.url" :title="item.title"
                            class="ais-Hits-item-card w-full" spacing="compact">
                            <template #content>
                              <div class="flex flex-col gap-3">
                                <h2 class="text-base font-normal">
                                  {{ item.title }}
                                </h2>

                                <ul class="flex items-center flex-wrap text-xs">
                                  <li class="text-color-secondary mr-0.5">
                                    <small class="flex gap-0.5 capitalize items-center">
                                      {{ indexData.label }} <i class="pi pi-angle-right text-[8px]"></i>
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
                                {{
                                  item.text && item.text.length > 160
                                  ? `${item.text.slice(0, 160)}...`
                                  : item.text
                                    ? item.text
                                    : item.description && item.description.length > 220
                                      ? `${item.description.slice(0, 220)}...`
                                      : item.description
                                        ? item.description
                                        : ''
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
            </div>
          </div>
        </template>
      </ais-stats>
    </ais-instant-search>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import algoliasearch from 'algoliasearch'
import CardBaseClickable from '../cardbaseclickable'

const props = defineProps({
  isDialogActive: Boolean,
  algoliaAppId: String,
  algoliaApiKey: String,
  algoliaIndex: Array,
  inputPlaceholder: {
    type: String,
    required: false,
    default: 'Search Azion'
  }
})

const { algoliaAppId, algoliaApiKey, algoliaIndex } = props

const searchFunction = (helper) => {
  let params = new URLSearchParams(window.location.search)

  helper.setQuery(params.get('q')).search()
}

const searchClient = algoliasearch(algoliaAppId, algoliaApiKey, searchFunction)
</script>

<style lang="scss" rel="stylesheet/scss">
.ais-SearchBox-form {
  width: 100%;

  input[type='search'] {
    width: 100%;
    padding: 0.725rem 1.5rem;
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
  gap: 1rem;
}
</style>

<style lang="scss" rel="stylesheet/scss">
.ais-Pagination-list {
  display: flex;
  gap: 1rem;
}

.ais-HitsPerPage-select {
  padding: 0.725rem;
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
