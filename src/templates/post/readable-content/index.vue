<template>
  <article class="prose prose-lg max-w-full prose-headings:font-medium">
    <slot />
  </article>
</template>

<style lang="scss">
  .heading-wrapper {
    display: flex;
    align-items: center;
    gap: 1rem;

    .anchor-link {
      top: .75rem;
      position: relative;
    }
  }
</style>
