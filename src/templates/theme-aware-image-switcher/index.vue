<template>
  <picture v-if="$slots.lightImage" :class="{ 'hide-on-dark' : $slots.darkImage }">
    <slot name="lightImage" />
  </picture>
  <picture v-if="$slots.darkImage" :class="{ 'hide-on-light' : $slots.lightImage }">
    <slot name="darkImage" />
  </picture>
</template>

<style>
.azion-dark .hide-on-dark {
  display: none;
}
.azion-light .hide-on-dark {
  display: block;
}

.azion-dark .hide-on-light {
  display: block;
}
.azion-light .hide-on-light {
  display: none;
}

</style>
