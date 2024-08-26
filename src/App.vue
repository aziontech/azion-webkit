<template>
  <div class="px-container py-8">
    <div class="flex lg:items-center overflow-hidden px-10 py-12 lg:py-6">
      <ul class="relative flex flex-col gap-6 min-w-20 mr-14 hidden lg:flex">
        <li class="flex items-center gap-6">
          <span class="flex justify-center items-center inline-block border surface-border rounded w-14 h-14">
            <i class="pi pi-cloud text-color-secondary"></i>
          </span>

          <Arrow direction="left" borderStyle="dotted" width="140px"/>
        </li>
        <li class="flex items-center gap-6 justify-end -mr-[1rem3]">
          <span class="flex justify-center items-center inline-block border surface-border rounded w-14 h-14">
            <i class="pi pi-database text-color-secondary"></i>
          </span>

          <Arrow direction="left" borderStyle="dotted" width="70px"/>
        </li>
      </ul>

      <Globe />
    </div>
  </div>

  <div class="px-container py-8">
    <Arrow  borderStyle="dotted" direction="left" />
    <br>
    <Arrow  borderStyle="dotted" direction="right" />
  </div>

  <div class="px-container py-8">
    <CardShowCase />
  </div>
</template>

<script setup>
  import Globe from './templates/globe/Globe.vue';
  import Arrow from './templates/arrow/Arrow.vue';
  import CardShowCase from './templates/cardshowcase/CardShowCase.vue';
</script>
