<template>
  <div class="px-container py-8">
    <ul class="relative flex flex-col gap-4">
      <li class="flex">
        <span class="flex justify-center items-center inline-block border surface-border rounded w-14 h-14">
          <i class="pi pi-cloud text-color-secondary"></i>
        </span>
        <Arrow direction="left" borderStyle="dotted" />
      </li>

      <li class="flex">
        <span class="flex justify-center items-center inline-block border surface-border rounded w-14 h-14">
          <i class="pi pi-database text-color-secondary"></i>
        </span>
        <Arrow direction="right" borderStyle="dotted" />
      </li>
    </ul>

    <Arrow  borderStyle="dotted" direction="right" />

    <Globe />
  </div>
</template>

<script setup>
  import Globe from './templates/globe/Globe.vue';
  import Arrow from './templates/arrow/Arrow.vue';
</script>
