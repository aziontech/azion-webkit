<template>
  <section class="w-full max-w-xl xxxl:max-w-xxl p-2 mx-auto">
    <div class="flex w-full gap-2 flex-col md:flex-row">
      <div class="w-full">
        <MigratedClientsCard v-bind="firstCard" />
      </div>
      <div class="w-full">
        <MigratedClientsCard v-bind="secondCard" />
      </div>
    </div>
  </section>
</template>

<script setup>
import MigratedClientsCard from '../../components/MigratedClientsCard'

const props = defineProps({
  firstCard: {
    type: Object,
    required: true,
    validator: (value) => {
      return value.hasOwnProperty('text') && value.hasOwnProperty('logos')
    }
  },
  secondCard: {
    type: Object,
    required: true,
    validator: (value) => {
      return value.hasOwnProperty('text') && value.hasOwnProperty('logos')
    }
  }
})
</script>

