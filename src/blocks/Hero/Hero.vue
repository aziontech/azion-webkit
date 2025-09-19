<template>
  <section class="text-white py-20 px-6">
    <div class="mx-auto text-center">
      <h1 class="text-4xl md:text-5xl lg:text-7xl font-sora mb-6 leading-tight">
        {{ title }}
      </h1>
      <p class="text-md md:text-md text-neutral-300 font-sora max-w-2xl mx-auto">
        {{ subtitle }}
      </p>
    </div>
  </section>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    default: 'Designed to Scale your business.'
  },
  subtitle: {
    type: String,
    default: 'From vibing to enterprise, pay as your business grow.'
  }
})
</script>
