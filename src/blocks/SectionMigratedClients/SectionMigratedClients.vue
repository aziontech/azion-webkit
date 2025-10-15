<template>
  <section class="w-full">
    <div class="flex w-full gap-4">
      <div class="w-full">
        <MigratedClientsCard
          v-bind="firstCard"
        >
          <slot name="first-card-content" />
        </MigratedClientsCard>
      </div>
      <div class="w-full">
        <MigratedClientsCard
          v-bind="secondCard"
        >
          <slot name="second-card-content" />
        </MigratedClientsCard>
      </div>
    </div>
  </section>
</template>

<script setup>
import MigratedClientsCard from '@/components/MigratedClientsCard'

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

