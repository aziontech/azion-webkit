<template>
  <article class="prose max-w-none">
    <slot />
  </article>
</template>

<style lang="scss">
.prose *:not(a, a > u) {
  color: var(--text-color) !important;
}

.prose {
  a, a > u {
    color: #F3652B !important;
  }
}
</style>
