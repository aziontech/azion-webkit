<template>
  <article class="prose max-w-[100ch]">
    <slot />
  </article>
</template>

<style lang="scss">
.prose *:not(a, a > u) {
  color: var(--text-color-secondary) !important;
}

.prose {
  a, a > u {
    color: #F3652B !important;
  }
}
</style>
