<template>
  <a
    :href="link"
    :title="description"
    class="rounded-md focus:outline-[rgba(243,100,43,.624)] no-underline flex group w-full"
    :class="{ 'md:max-w-sm': size == 'default' }"
  >
    <Card
      :pt="{
        root: {
          class:
            'w-full p-6 shadow-none bg-transparent flex flex-col gap-6 rounded-md border surface-border overflow-hidden group-hover:border-current'
        }
      }"
    >
      <template #header>
        <template v-if="image">
          <div
            class="svg-customer-logo"
            v-html="image"
          />
        </template>
      </template>

      <template #content>
        <div class="flex flex-wrap gap-2 mb-3">
          <template
            v-for="(tag, index) in tagList"
            :key="index"
          >
            <Tag
              :value="tag"
              severity="info"
            />
          </template>
        </div>
        <p class="text-sm text-color-secondary">{{ description }}</p>
      </template>
    </Card>
  </a>
</template>

<script setup>
  import Card from 'primevue/card'
  import Tag from 'primevue/tag'

  defineProps({
    image: {
      type: String,
      required: false
    },
    imgAlt: {
      type: String,
      required: false
    },
    tagList: {
      type: Array,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    link: {
      type: String,
      required: true
    },
    size: {
      type: String,
      required: false,
      default: 'default',
      options: ['large', 'default']
    }
  })
</script>

<style>
  .svg-customer-logo > svg {
    width: 158px;
    height: 58px;
  }
</style>
