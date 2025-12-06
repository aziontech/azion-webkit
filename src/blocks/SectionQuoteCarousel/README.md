# SectionQuoteCarousel

A carousel section block component for displaying customer testimonials and quotes with Swiper integration. Perfect for showcasing customer feedback and social proof.

## Features

- **Quote Display**: Optimized for testimonials and customer quotes
- **Swiper Integration**: Smooth carousel navigation with touch support
- **Author Information**: Support for author names, titles, and avatars
- **Responsive Design**: Adapts to different screen sizes
- **Social Proof**: Designed for building trust and credibility

## Props

| Prop     | Type    | Required | Default | Description                        |
| -------- | ------- | -------- | ------- | ---------------------------------- |
| `quotes` | `Array` | Yes      | `[]`    | Array of quote/testimonial objects |

### Quote Interface

```typescript
interface Quote {
  text: string
  author: string
  title?: string
  company?: string
  avatar?: string
}
```

## Usage

```vue
<template>
  <SectionQuoteCarousel :quotes="testimonials" />
</template>

<script setup>
  const testimonials = [
    {
      text: "Azion's edge platform transformed our application performance.",
      author: 'John Doe',
      title: 'CTO',
      company: 'Tech Corp'
    }
  ]
</script>
```

## Dependencies

- **Swiper**: Vue 3 integration for carousel functionality
- **Tailwind CSS**: For styling and responsive design
