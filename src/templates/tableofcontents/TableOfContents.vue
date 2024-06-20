<template>
  <div class="flex flex-col gap-2">
    <p class="font-medium text-base"> {{ title }} </p>
    <TableOfContentsItem :data="toc" />
  </div>
</template>

<script setup>
  import TableOfContentsItem from './TableOfContentsItem.vue'
  const props = defineProps({
    headings: {
      required: true
    },
    title: {
      type: String,
      required: false,
      default: "Jump to Section"
    }
  })

  function diveChildren(item, depth) {
    if (depth === 1) {
      return item.children
    } else {
      return diveChildren(item.children[item.children.length - 1], depth - 1)
    }
  }

  function generateToc(headings, title = 'Overview') {
    const overview = { depth: 2, slug: 'overview', text: title }
    headings = [overview, ...headings.filter(({ depth }) => depth > 1 && depth < 4)]
    const toc = []

    for (const heading of headings) {
      if (toc.length === 0) {
        toc.push({ ...heading, children: [] })
        continue
      }

      const lastItemInToc = toc[toc.length - 1]
      if (heading.depth < lastItemInToc.depth)
        throw new Error(`Orphan heading found: ${heading.text}.`)

      if (heading.depth === lastItemInToc.depth) {
        toc.push({ ...heading, children: [] })
        continue
      }

      const gap = heading.depth - lastItemInToc.depth
      const target = diveChildren(lastItemInToc, gap)
      target.push({ ...heading, children: [] })
    }
    return toc
  }

  const toc = generateToc(props.headings)
</script>
