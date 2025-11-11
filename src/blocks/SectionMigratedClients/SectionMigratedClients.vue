<template>
  <section class="w-full max-w-xl xxxl:max-w-xxl mx-auto">
    <div class="flex w-full gap-2 flex-col md:flex-row">
      <div 
        v-for="(card, index) in cards.slice(0, 2)" 
        :key="index"
        class="w-full"
      >
        <MigratedClientsCard v-bind="card" />
      </div>
    </div>
  </section>
</template>

<script setup>
  import MigratedClientsCard from '../../components/MigratedClientsCard'

  defineProps({
    cards: {
      type: Array,
      required: true,
      validator: (value) => {
        return Array.isArray(value) && 
               value.length > 0 && 
               value.every(card => 
                 Object.prototype.hasOwnProperty.call(card, 'text') && 
                 Object.prototype.hasOwnProperty.call(card, 'logos')
               )
      }
    }
  })
</script>
