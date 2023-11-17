<template>
  <div class="container mx-auto">
    <div class="post-list grid md:grid-cols-3 lg:grid-cols-4 px-2 gap-4 pt-6">
      <a :href="link" v-for="({ image, link, title, description, tagList }, index) in data" :key="index" class="no-underline flex">
        <Card class="border-radius hover:shadow hover:shadow-orange-500 overflow-hidden">
            <template #header>
              <img lazy alt="user header" :src="`https://assets.azion.com${image}`" />
            </template>
            <template #content>
              <div class="p-10 grid gap-4">
                <div class="flex gap-2">
                  <Tag v-for="(tag, index) in tagList" :key="index" :value="tag" severity="info" />
                </div>
                <h3 class="text-2xl font-bold text-color ">{{ title }}</h3>
                <p class="text-base text-color-secondary">{{ description }}</p>
              </div>
            </template>
        </Card>
      </a>
    </div>
  </div>
</template>

<script setup>
  import Card from 'primevue/card';
  import Tag from 'primevue/tag';

  const props = defineProps({
    data: {
      type: Array,
      required: true
    }
  })

  const { data } = props
</script>
