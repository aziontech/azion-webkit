<template>
  <h1 v-if="titleTag === 'h1'" class="text-3xl font-medium"><slot /></h1>
  <h2 v-if="titleTag === 'h2'" class="text-3xl font-medium"><slot /></h2>
  <h3 v-if="titleTag === 'h3'" class="text-3xl font-medium"><slot /></h3>
  <h4 v-if="titleTag === 'h4'" class="text-3xl font-medium"><slot /></h4>
  <h5 v-if="titleTag === 'h5'" class="text-3xl font-medium"><slot /></h5>
  <h6 v-if="titleTag === 'h6'" class="text-3xl font-medium"><slot /></h6>
  <p v-if="titleTag === ''" class="text-xl font-medium max-w-lg"> <slot /> </p>
</template>

<script setup>
defineProps({
  titleTag: {
    type: String,
    required: false,
    default: ''
  }
});
</script>
