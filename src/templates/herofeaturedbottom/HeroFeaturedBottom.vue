<template>
  <HeroBlockBase
    isCentralized
    :overline="overline"
    :titleTag="titleTag"
    :title="title"
    :description="description"
    :id="id"
    :margin="margin"
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
      v-if="cards && cards[0]?.image && cards[0]?.link && cards[0]?.description"
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
    id: {
      type: String,
      default: () => ''
    },
    overline: {
      type: String,
      required: false
    },
    titleTag: {
      type: String,
      default: () => 'h1',
      validator: (value) => ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].includes(value)
    },
    title: {
      type: String
    },
    description: {
      type: String
    },
    descriptionRawHtml: {
      type: String
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
    },
    margin: {
      type: String,
      options: ['none', 'small', 'default', 'large'],
      default: () => 'none'
    }
  })
</script>
