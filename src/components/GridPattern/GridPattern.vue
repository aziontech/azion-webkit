<template>
  <component
    :is="htmlTag"
    :style="gridPattern"
  >
    <slot />
  </component>
</template>

<script setup>
  import { computed } from 'vue'

  const props = defineProps({
    htmlTag: {
      type: String,
      required: false,
      default: 'div',
      options: ['div', 'section']
    },
    size: {
      type: String,
      required: false,
      default: '12px',
      options: ['12px', '24px', '48px']
    },
    pattern: {
      type: String,
      required: false,
      default: 'dots',
      options: ['square', 'dots']
    },
    color: {
      type: String,
      required: false,
      default: 'medium-gray',
      options: ['light-gray', 'medium-gray', 'dark-gray']
    },
    opacity: {
      type: Number,
      required: false,
      default: 0.3,
      options: [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1]
    }
  })

  const gridColors = {
    'light-gray': `rgba(206, 201, 201, ${props.opacity})`,
    'medium-gray': `rgba(64, 64, 64, ${props.opacity})`,
    'dark-gray': `rgba(23, 23, 23, ${props.opacity})`
  }

  const gridPattern = computed(() => {
    const gridColor = gridColors[props.color]

    if (props.pattern === 'dots') {
      return `
        background-image: 
          linear-gradient(to top, transparent 0%, transparent 100%),
          radial-gradient(circle, ${gridColor} 1px, #0000 0);
        background-size: 100% 100%, ${props.size} ${props.size};
        background-repeat: no-repeat, repeat;
        background-position: 0 0, 0 0;
      `
    } else {
      const linePosition = `calc(${props.size} - 1px)`
      return `
        background-image: 
          linear-gradient(90deg, transparent ${linePosition}, ${gridColor} ${linePosition}, ${gridColor} ${props.size}, transparent ${props.size}),
          linear-gradient(180deg, transparent ${linePosition}, ${gridColor} ${linePosition}, ${gridColor} ${props.size}, transparent ${props.size});
        background-size: ${props.size} ${props.size}, ${props.size} ${props.size};
        background-repeat: repeat, repeat;
      `
    }
  })
</script>
