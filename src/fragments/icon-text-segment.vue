<template>
  <a
    :href="href"
    :title="title"
    class="flex gap-3 p-3 group hover:surface-hover rounded-md transition-all">

    <div>
      <span class="w-[26px] h-[26px] flex items-center justify-center rounded surface-200 group-hover:bg-[var(--surface-100)]">
        <i
          :class="icon"
          class="text-sm text-color-secondary group-hover:text-[var(--text-color)]">
        </i>
      </span>
    </div>
    <div>
      <div class="flex gap-3 items-center">
        <p class="text-sm font-medium leading-tight">
          {{ title }}
        </p>
        <Tag
          v-if="tag"
          :value="tag"
          :severity="tagSeverity"
          :pt="{
            root: {
              class: 'h-6'
            }
          }"
        />
      </div>
      <p
        v-if="description"
        class="text-xs font-normal text-color-secondary mt-2">

        {{ description }}
      </p>
    </div>
  </a>
</template>

<script setup>
  import Tag from 'primevue/tag';

  const props = defineProps({
    href: {
      type: String,
      required: true,
      default: '#'
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: false,
    },
    icon: {
      type: String,
      required: false,
    },
    tag: {
      type: String,
      required: false,
    },
    tagSeverity: {
      type: String,
      required: false,
      default: 'info'
    }
  });

  const { href, title, description, icon, tag, tagSeverity} = props;
</script>
