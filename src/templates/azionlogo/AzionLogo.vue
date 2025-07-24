<template>
  <AzionLogoSvgMin
    v-if="version === 'min'"
    :href="href"
    :title="hrefTitle"
    :target="target"
    aria-label="Azion Logo"
  />

  <AzionLogoSvgDefault
    v-else-if="version === 'default'"
    :href="href"
    :title="hrefTitle"
    :target="target"
    aria-label="Azion Logo"
  />

  <AzionLogoSvgMoveToTheEdge
    v-else-if="version === 'move to the edge'"
    :href="href"
    :title="hrefTitle"
    :target="target"
    aria-label="Azion Logo"
  />

  <AzionLogoSvgTechnologies
    v-else-if="version === 'technologies'"
    :href="href"
    :title="hrefTitle"
    :target="target"
    aria-label="Azion Logo"
  />

  <AzionLogoSvgFull
    v-else-if="version === 'full'"
    :href="href"
    :title="hrefTitle"
    :target="target"
    aria-label="Azion Logo"
  />
</template>

<script setup>
  import AzionLogoSvgMin from '../azionlogosvgmin'
  import AzionLogoSvgDefault from '../azionlogosvgdefault'
  import AzionLogoSvgMoveToTheEdge from '../azionlogosvgmovetothedge'
  import AzionLogoSvgTechnologies from '../azionlogosvgtechnologies'
  import AzionLogoSvgFull from '../azionlogosvgfull'

  defineProps({
    href: {
      type: String
    },
    hrefTitle: {
      type: String
    },
    target: {
      type: String,
      default: '_self'
    },
    version: {
      type: String,
      default: () => 'default',
      validator: (value) =>
        ['min', 'default', 'move to the edge', 'technologies', 'full'].includes(value)
    }
  })
</script>
