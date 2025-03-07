<template>
  <div
    class="transition-all surface-ground grid m-0 p-0 justify-between gap-5 lg:gap-10"
    :class="pt.class"
  >
    <template v-if="cardType === 'blog'">
      <CardBlog
        v-for="(card, index) in data"
        v-bind="card"
        :imgSrc="card.image"
        :direction="cardDirection"
        :key="index"
        :imgAlt="card.title"
      />
    </template>
    <template v-if="cardType === 'cases'">
      <CardCases
        v-for="({ image, link, description, alt, tagList }, index) in data"
        :key="index"
        :image="image"
        :imgAlt="alt"
        :description="description"
        :link="link"
        :tagList="tagList"
      />
    </template>
  </div>
</template>

<script setup>
  import CardBlog from '../cardblog/CardBlog.vue'
  import CardCases from '../cardcases/CardCases.vue'

  defineProps({
    data: {
      type: Array,
      required: true,
      default: () => []
    },
    pt: {
      type: Object,
      required: false,
      default: () => {
        return { class: 'sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4' }
      }
    },
    cardType: {
      type: String,
      required: false,
      default: 'blog'
      // options: ['blog', 'cases']
    },
    cardDirection: {
      type: String,
      required: false,
      default: 'column'
      // options: ["column", "row"]
    }
  })
</script>
