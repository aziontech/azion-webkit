<template>
  <div class="mb-10">
    <ais-index :index-name="props.indexName">
      <div class="flex items-center justify-between">
        <h2 class="text-xl">
          {{ props.label.toUpperCase() }}
        </h2>
        <div>
          <div class="flex items-center justify-end gap-3 mb-2">
            <a href="/" title="view site">view {{ props.label }}</a>
            <ais-hits-per-page :items="[
              { label: '4 hits per page', value: 4, default: true },
              { label: '8 hits per page', value: 8 },
              { label: '16 hits per page', value: 16 }
            ]" />
          </div>
          <ais-pagination />
        </div>
      </div>

      <ais-hits>
        <template v-slot:item="{ item }" class="card mb-8">
          <div class="ais-Hits-item-card border surface-border rounded p-4 w-full">
            <a :href="`https://www.azion.com${item.url}`" :title="item.title">
              <h2 class="text-base">{{ item.title }}</h2>
              <ul class="flex flex-wrap mt-3 mb-3">
                <li class="text-color-secondary mr-3">
                  <small class="flex gap-2">Home <span>></span></small>
                </li>
                <li class="text-color-secondary mr-3">
                  <small class="flex gap-2">{{ props.label }} <span>></span></small>
                </li>
                <li class="text-color-secondary mr-3">
                  <small class="flex gap-2">{{ item.title }}</small>
                </li>
              </ul>
              <p class="text-sm text-color-secondary">
                {{ item.text.split('.')[0] }}...
              </p>
            </a>
          </div>
        </template>
      </ais-hits>
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
  gap: 1rem
}

.ais-HitsPerPage-select {
  padding: .5rem;
  border-radius: 4px;
  font-size: 14px;
  cursor: pointer;
}

.ais-Hits {
  margin-top: 1rem;

  .ais-Hits-list {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;

    .ais-Hits-item {
      display: flex;
    }
  }
}
</style>
