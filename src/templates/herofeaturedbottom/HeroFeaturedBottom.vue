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
    <template
      #main
      v-if="cards && cards[0]?.image  && cards[0]?.link && cards[0]?.description"
    >
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
      required: false,
      validator: (value) => {
        return value.every((card) => {
          return ['image', 'tag', 'description', 'button', 'logo'].every((key) => key in card)
        })
      }
    }
  })
</script>
