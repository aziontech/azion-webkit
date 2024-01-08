<template>
  <ais-index :index-name="props.indexName">
    <div class="flex justify-between">
      <h2 class="">
        {{ props.label }}
      </h2>
      <div>
        <div class="flex gap-3 mb-2 items-end">
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
      <template v-slot:item="{ item }">
        <div class="card mb-8">
          <a :href="`https://www.azion.com${item.url}`" :title="item.title">
            <h2 class="text-xl">{{ item.title }}</h2>
            <ul class="flex gap-3 mb-3">
              <li>
                <small class="flex gap-2">Home <span>></span></small>
              </li>
              <li>
                <small class="flex gap-2">{{ item.title }} <span>></span></small>
              </li>
              <li>
                <small class="flex gap-2">{{ item.title }}</small>
              </li>
            </ul>
            <p>
              {{ item.text.split('.')[0] }}...
            </p>
          </a>
        </div>
      </template>
    </ais-hits>
  </ais-index>
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
</style>
