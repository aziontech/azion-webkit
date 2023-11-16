<template>
  <div class="flex flex-wrap gap-3">
    <LinkButton class="p-button p-button-outlined p-button-rounded" v-for="({text, link}, index) in data" :key="index" :text="text" :link="link" />
  </div>
</template>
<script setup>
import LinkButton from '../../components/link-button/index.vue'

const props = defineProps({
  data: {
    type: Array,
    required: true
  },
});

const { data } = props;

// interface data {
//   text: String,
//   link: String
// }
</script>
