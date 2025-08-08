<template>
  <article class="prose prose-lg max-w-full prose-headings:font-medium">
    <slot />
  </article>
</template>

<script setup>
  import { onMounted } from 'vue'

  const copyToClipboard = () => {
    navigator.clipboard.writeText(window.location.href)
  }

  const controlScroll = (e) => {
    const getOffsetTop = e.target.offsetTop - 96

    window.scrollTo({
      top: getOffsetTop,
      behavior: 'smooth'
    })
  }

  const onClickEvent = (e, parentElement) => {
    e.preventDefault()
    window.history.pushState({}, '', parentElement.href)

    copyToClipboard()
    controlScroll(e)
  }

  onMounted(() => {
    const iconElements = document.querySelectorAll('i[data-icon]')
    iconElements.forEach((iconElement) => {
      const parentElement = iconElement.parentElement
      if (parentElement.tagName.toLowerCase() === 'a') {
        parentElement.addEventListener('click', (e) => onClickEvent(e, parentElement))
      }
    })
  })
</script>

<style lang="scss">
  .heading-wrapper {
    display: flex;
    align-items: center;
    gap: 1rem;

    .anchor-link {
      top: 0.75rem;
      position: relative;
    }
  }

  // Override prose-lg h1 size to 36px (2.25em)
  .prose-lg :where(h1):not(:where([class~='not-prose'], [class~='not-prose'] *)) {
    font-size: 2.25em !important;
    margin-bottom: 2rem !important;
  }
</style>
