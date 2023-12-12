<template>
  <section class="flex flex-col gap-4">
    <ul class="list-none p-0 gap-2 flex flex-col">
      <li v-for="({ title, link, linkTarget }, index) in props.data" :key="index">
        <a :href="link" :title="title" :target="linkTarget ? linkTarget : '_self'" class="block no-underline text-current group">
          <div class="hover:underline">
            <p class="text-sm text-color-secondary">{{ title }}</p>
          </div>
        </a>
      </li>
    </ul>
    <LinkButton v-if="link" class="p-button p-button-outlined" severity="primary" :label="buttonText" outlined :link="link" />
  </section>
</template>
<script setup>
import LinkButton from '../button/link.vue';

// interface listItem {
//   title: string,
//   link: String,
//   linkTarget: _self, _blank
// }

const props = defineProps({
  data: {
    type: Array,
    required: true
  },
  buttonText: {
    type: String,
    required: false,
    default: "See all posts"
  },
  link: {
    type: String,
    required: false
  }
})
</script>
