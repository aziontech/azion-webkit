<template>
  <HeroBlockBase
    isCentralized
    :overline="overline"
    :title="title"
    :description="description"
  >
    <template #actions>
      <LinkButton
        v-for="(button, index) in buttons"
        :key="index"
        v-bind="button"
      />
    </template>
    <template #main>
      <FeaturedCards :cards="cards" />
    </template>
  </HeroBlockBase>
</template>

<script setup>
  import HeroBlockBase from '../herobase'
  import LinkButton from '../linkbutton'
  import FeaturedCards from '../featuredcards'

  defineProps({
    overline: {
      type: String,
      required: false
    },
    title: {
      type: String,
      required: false
    },
    description: {
      type: String,
      required: false
    },
    buttons: {
      type: Array,
      required: true
    },
    cards: {
      type: Array,
      required: true,
      validator: (value) => {
        return value.every((card) => {
          return ['image', 'tag', 'description', 'button', 'logo'].every((key) => key in card)
        })
      }
    }
  })
</script>
